'use client';

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumb() {
  const pathname = usePathname();
  
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ];
    
    let currentPath = '';
    paths.forEach((path) => {
      currentPath += `/${path}`;
      
      // Format the label (capitalize and replace hyphens)
      let label = path
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      // Special cases for specific paths
      if (path === 'modules') {
        label = 'Learning Modules';
      }
      
      breadcrumbs.push({
        label,
        href: currentPath
      });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbs = generateBreadcrumbs();
  
  // Don't show breadcrumbs on homepage
  if (pathname === '/') return null;
  
  return (
    <nav 
      className="bg-gray-50 px-6 py-3 border-b border-gray-200"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2 text-sm max-w-7xl mx-auto">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
            )}
            
            {index === breadcrumbs.length - 1 ? (
              // Current page (not clickable)
              <span className="text-gray-700 font-medium">
                {index === 0 && <Home className="w-4 h-4 inline mr-1" />}
                {breadcrumb.label}
              </span>
            ) : (
              // Clickable breadcrumb
              <Link 
                href={breadcrumb.href}
                className="text-blue-600 hover:text-blue-800 hover:underline flex items-center"
              >
                {index === 0 && <Home className="w-4 h-4 mr-1" />}
                {breadcrumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}