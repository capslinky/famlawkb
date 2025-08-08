import fs from 'fs';
import path from 'path';

import { getAllSitemapPages, sitemapData, type SitemapPage } from '@/data/sitemapData';

export interface FsRouteInfo {
  path: string;
  file: string;
}

export interface TodoItem {
  file: string;
  line: number;
  kind: 'TODO' | 'FIXME' | 'NOTE';
  text: string;
}

export interface CategoryProgress {
  category: string;
  total: number;
  complete: number;
  partial: number;
  placeholder: number;
  planned: number;
  completionRate: number;
}

const APP_DIR = path.join(process.cwd(), 'src', 'app');
const SRC_DIR = path.join(process.cwd(), 'src');

export function getFilesystemRoutes(): FsRouteInfo[] {
  const results: FsRouteInfo[] = [];

  function walk(dir: string, rel: string) {
    let entries: string[] = [];
    try {
      entries = fs.readdirSync(dir);
    } catch {
      return;
    }

    // If this folder has a page.tsx, record route
    if (entries.includes('page.tsx')) {
      const routePath = rel === '' ? '/' : `/${rel.replace(/\\+/g, '/')}`;
      results.push({ path: routePath, file: path.join(dir, 'page.tsx') });
    }

    for (const entry of entries) {
      const full = path.join(dir, entry);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        // Skip Next.js special directories that are not route segments
        if (entry.startsWith('(') || entry === 'api' || entry.startsWith('_')) continue;
        walk(full, rel ? path.join(rel, entry) : entry);
      }
    }
  }

  // Root-level page
  if (fs.existsSync(path.join(APP_DIR, 'page.tsx'))) {
    results.push({ path: '/', file: path.join(APP_DIR, 'page.tsx') });
  }

  walk(APP_DIR, '');

  // Deduplicate potential double-added root
  const seen = new Set<string>();
  return results.filter(r => {
    if (seen.has(r.path)) return false;
    seen.add(r.path);
    return true;
  }).sort((a, b) => a.path.localeCompare(b.path));
}

export function getUndocumentedRoutes(): FsRouteInfo[] {
  const fsRoutes = getFilesystemRoutes();
  const declared = new Set(getAllSitemapPages().map(p => p.path));
  return fsRoutes.filter(r => !declared.has(r.path));
}

export function getMissingDeclaredPages(): SitemapPage[] {
  const fsRoutes = new Set(getFilesystemRoutes().map(r => r.path));
  return sitemapData.filter(p => !fsRoutes.has(p.path));
}

export function getCategoryProgress(): CategoryProgress[] {
  const pages = getAllSitemapPages();
  const byCat = new Map<string, SitemapPage[]>();
  for (const p of pages) {
    const arr = byCat.get(p.category) || [];
    arr.push(p);
    byCat.set(p.category, arr);
  }

  const out: CategoryProgress[] = [];
  for (const [category, items] of byCat.entries()) {
    const total = items.length;
    const complete = items.filter(i => i.status === 'complete').length;
    const partial = items.filter(i => i.status === 'partial').length;
    const placeholder = items.filter(i => i.status === 'placeholder').length;
    const planned = items.filter(i => i.status === 'planned').length;
    const completionRate = total ? Math.round((complete / total) * 100) : 0;
    out.push({ category, total, complete, partial, placeholder, planned, completionRate });
  }
  return out.sort((a, b) => a.category.localeCompare(b.category));
}

export function scanTodos(maxItems = 50): TodoItem[] {
  const items: TodoItem[] = [];

  function scanFile(file: string) {
    let content = '';
    try {
      content = fs.readFileSync(file, 'utf8');
    } catch {
      return;
    }
    const lines = content.split(/\r?\n/);
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (/TODO|FIXME|NOTE/.test(line)) {
        const kind = (line.match(/TODO|FIXME|NOTE/)?.[0] || 'TODO') as TodoItem['kind'];
        items.push({ file: file.replace(process.cwd() + path.sep, ''), line: i + 1, kind, text: line.trim() });
        if (items.length >= maxItems) return;
      }
    }
  }

  function walk(dir: string) {
    let entries: string[] = [];
    try {
      entries = fs.readdirSync(dir);
    } catch {
      return;
    }
    for (const e of entries) {
      const full = path.join(dir, e);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        if (e === 'node_modules' || e === '.next' || e === '.git') continue;
        walk(full);
      } else if (stat.isFile()) {
        if (/\.(ts|tsx|md|mdx|js|jsx)$/.test(e)) scanFile(full);
        if (items.length >= maxItems) return;
      }
    }
  }

  walk(SRC_DIR);
  return items;
}

