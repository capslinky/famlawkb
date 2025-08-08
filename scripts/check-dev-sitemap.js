#!/usr/bin/env node
/*
  Checks that routes under src/app with page.tsx are declared in src/data/sitemapData.ts
  and that declared pages exist in the filesystem. Fails with a clear report otherwise.
*/
const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(process.cwd(), 'src', 'app');
const DATA_FILE = path.join(process.cwd(), 'src', 'data', 'sitemapData.ts');

function getFsRoutes() {
  const out = new Set();

  function walk(dir, rel) {
    let entries = [];
    try { entries = fs.readdirSync(dir); } catch { return; }
    if (entries.includes('page.tsx')) {
      const p = rel === '' ? '/' : `/${rel.replace(/\\+/g, '/')}`;
      out.add(p);
    }
    for (const e of entries) {
      const full = path.join(dir, e);
      const st = fs.statSync(full);
      if (st.isDirectory()) {
        if (e.startsWith('(') || e === 'api' || e.startsWith('_')) continue;
        walk(full, rel ? path.join(rel, e) : e);
      }
    }
  }

  if (fs.existsSync(path.join(APP_DIR, 'page.tsx'))) out.add('/');
  walk(APP_DIR, '');
  return out;
}

function getDeclaredRoutes() {
  let src = '';
  try { src = fs.readFileSync(DATA_FILE, 'utf8'); } catch (e) {
    console.error('Unable to read', DATA_FILE, e.message);
    process.exit(1);
  }
  const paths = new Set();
  const re = /path:\s*['"]([^'\"]+)['"]/g; // crude but effective
  let m;
  while ((m = re.exec(src))) {
    paths.add(m[1]);
  }
  return paths;
}

function main() {
  const fsRoutes = getFsRoutes();
  const declared = getDeclaredRoutes();

  const undocumented = [...fsRoutes].filter(p => !declared.has(p)).sort();
  const missing = [...declared].filter(p => !fsRoutes.has(p)).sort();

  if (undocumented.length === 0 && missing.length === 0) {
    console.log('Developer sitemap coverage: OK ✅');
    return;
  }

  console.error('\nDeveloper sitemap coverage: issues found');
  if (undocumented.length) {
    console.error('\nUndocumented routes (present in src/app but missing from sitemapData):');
    for (const r of undocumented) console.error('  -', r);
  }
  if (missing.length) {
    console.error('\nDeclared but missing (present in sitemapData but no page.tsx found):');
    for (const r of missing) console.error('  -', r);
  }
  console.error('\nFix: Update src/data/sitemapData.ts to reflect current routes.');
  console.error('You can view details at /sitemap-dev locally.');
  process.exit(2);
}

main();

