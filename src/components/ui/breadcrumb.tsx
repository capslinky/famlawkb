'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  Home, 
  ChevronDown, 
  MoreHorizontal,
  ArrowLeft,
  // X
} from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';

// Types
interface BreadcrumbItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  isActive?: boolean;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  variant?: 'default' | 'compact' | 'minimal' | 'pills';
  separator?: React.ReactNode;
  maxItems?: number;
  showHome?: boolean;
  className?: string;
  collapseOnMobile?: boolean;
  backButton?: boolean;
}

// Path mapping for legal content
const PATH_MAPPINGS: Record<string, string> = {
  '': 'Home',
  'getting-divorced': 'Getting Divorced',
  'divorce': 'Divorce',
  'uncontested-simple': 'Simple Process',
  'uncontested-with-children': 'With Children',
  'contested-full': 'Contested Divorce',
  'protection': 'Protection',
  'emergency': 'Emergency Help',
  'how-to-file': 'How to File',
  'safety-plan': 'Safety Planning',
  'custody': 'Child Custody',
  'establish-order': 'Establish Order',
  'forms': 'Court Forms',
  'divorce-petition-children': 'Divorce Petition',
  'response-petition': 'Response Petition',
  'resources': 'Resources',
  'self-representation-guide': 'Self-Representation',
  'legal-representation': 'Legal Representation',
  'topics': 'Legal Topics',
  'child-support': 'Child Support',
  'property-division': 'Property Division',
  'spousal-maintenance': 'Spousal Maintenance',
  'procedures': 'Court Procedures',
  'court-procedures': 'Court Process',
  'emergency-orders': 'Emergency Orders',
  'modules': 'Process Modules',
  'responding': 'Responding',
  'first-appearance': 'First Appearance',
  'disclosures': 'Disclosures',
  'temporary-orders': 'Temporary Orders',
  'mediation': 'Mediation',
  'trial-prep': 'Trial Preparation',
  'modifications': 'Modifications',
  'enforcement-appeals': 'Enforcement & Appeals',
  'reference': 'Reference',
  'faq': 'FAQ',
  'legal-disclaimer': 'Legal Disclaimer',
  'custody-special-cases': 'Special Cases',
  'paternity': 'Paternity',
  'relocation': 'Relocation',
  'support-modification': 'Support Modification',
  'spousal-support': 'Spousal Support',
  'late-response': 'Late Response',
  'standard-timeline': 'Standard Timeline',
  'urgent-timeline': 'Urgent Timeline'
};

// Generate breadcrumb items from pathname
function generateBreadcrumbItems(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);
  const items: BreadcrumbItem[] = [];

  // Always include home
  items.push({
    label: 'Home',
    href: '/',
    icon: <Home className="w-4 h-4" />
  });

  // Build breadcrumb from path segments
  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const label = PATH_MAPPINGS[segment] || segment.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');

    items.push({
      label,
      href: currentPath,
      isActive: index === segments.length - 1
    });
  });

  return items;
}

// Main Breadcrumb Component
export function Breadcrumb({
  items,
  variant = 'default',
  separator = <ChevronRight className="w-4 h-4" />,
  maxItems = 4,
  showHome = true,
  className = '',
  collapseOnMobile = true,
  backButton = false
}: BreadcrumbProps) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Use generated items if none provided
  const breadcrumbItems = items || generateBreadcrumbItems(pathname);
  const filteredItems = showHome ? breadcrumbItems : breadcrumbItems.slice(1);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Collapse items if too many
  const shouldCollapse = filteredItems.length > maxItems;
  const visibleItems = shouldCollapse 
    ? [
        filteredItems[0], // First item (usually Home)
        ...filteredItems.slice(-2) // Last 2 items
      ]
    : filteredItems;

  const hiddenItems = shouldCollapse 
    ? filteredItems.slice(1, -2)
    : [];

  // Mobile back button functionality
  const handleBack = () => {
    if (filteredItems.length > 1) {
      const previousItem = filteredItems[filteredItems.length - 2];
      window.location.href = previousItem.href;
    }
  };

  // Render separator
  const renderSeparator = (index: number) => {
    if (variant === 'pills') return null;
    
    return (
      <span 
        key={`separator-${index}`}
        className="flex items-center text-gray-400 mx-1 md:mx-2"
        aria-hidden="true"
      >
        {separator}
      </span>
    );
  };

  // Render breadcrumb item
  const renderItem = (item: BreadcrumbItem, index: number, isLast: boolean) => {
    const baseClasses = cn(
      'inline-flex items-center gap-2 transition-colors',
      'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 focus:rounded',
      variant === 'pills' && 'px-3 py-1 rounded-full text-sm',
      variant === 'minimal' && 'text-sm',
      isLast 
        ? 'text-gray-900 font-medium cursor-default'
        : 'text-gray-600 hover:text-gray-900'
    );

    const pillClasses = cn(
      variant === 'pills' && [
        isLast 
          ? 'bg-primary-100 text-primary-800 border border-primary-200'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
      ]
    );

    const content = (
      <span className={cn(baseClasses, pillClasses)}>
        {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
        <span className={cn(
          'truncate',
          isMobile && collapseOnMobile && 'max-w-24'
        )}>
          {item.label}
        </span>
      </span>
    );

    if (isLast || variant === 'minimal') {
      return (
        <span key={item.href} aria-current="page">
          {content}
        </span>
      );
    }

    return (
      <Link key={item.href} href={item.href}>
        {content}
      </Link>
    );
  };

  // Mobile collapsed view
  if (isMobile && collapseOnMobile && filteredItems.length > 2) {
    const currentItem = filteredItems[filteredItems.length - 1];
    const parentItem = filteredItems[filteredItems.length - 2];

    return (
      <nav aria-label="Breadcrumb" className={cn('flex items-center', className)}>
        {backButton && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBack}
            className="mr-2 px-2"
            leftIcon={<ArrowLeft className="w-4 h-4" />}
          >
            Back
          </Button>
        )}
        
        <div className="flex items-center min-w-0 flex-1">
          <Link
            href={parentItem.href}
            className="text-gray-600 hover:text-gray-900 text-sm flex items-center gap-1 min-w-0"
          >
            <span className="truncate max-w-20">{parentItem.label}</span>
          </Link>
          
          {renderSeparator(0)}
          
          <span className="text-gray-900 font-medium text-sm truncate">
            {currentItem.label}
          </span>
        </div>
      </nav>
    );
  }

  // Full breadcrumb view
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={cn('flex items-center flex-wrap gap-1', className)}
    >
      {visibleItems.map((item, index) => {
        const isLast = index === visibleItems.length - 1;
        const actualIndex = shouldCollapse && index > 0 ? 
          filteredItems.length - (visibleItems.length - index) : index;

        return (
          <React.Fragment key={`${item.href}-${index}`}>
            {/* Show dropdown for hidden items */}
            {shouldCollapse && index === 1 && hiddenItems.length > 0 && (
              <>
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className={cn(
                      'inline-flex items-center gap-1 px-2 py-1 text-gray-600 hover:text-gray-900',
                      'rounded focus:outline-none focus:ring-2 focus:ring-primary-500',
                      'transition-colors'
                    )}
                    aria-expanded={showDropdown}
                    aria-haspopup="true"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                    <ChevronDown className="w-3 h-3" />
                  </button>

                  <AnimatePresence>
                    {showDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className={cn(
                          'absolute top-full left-0 mt-1 min-w-48 max-w-64',
                          'bg-white rounded-lg shadow-lg border border-gray-200 z-50',
                          'py-2'
                        )}
                      >
                        {hiddenItems.map((hiddenItem) => (
                          <Link
                            key={hiddenItem.href}
                            href={hiddenItem.href}
                            className={cn(
                              'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50',
                              'flex items-center gap-2 transition-colors'
                            )}
                            onClick={() => setShowDropdown(false)}
                          >
                            {hiddenItem.icon && (
                              <span className="flex-shrink-0">
                                {hiddenItem.icon}
                              </span>
                            )}
                            <span className="truncate">{hiddenItem.label}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {renderSeparator(index)}
              </>
            )}

            {renderItem(item, actualIndex, isLast)}
            
            {!isLast && renderSeparator(actualIndex)}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

// Breadcrumb variants
export function BreadcrumbCompact(props: Omit<BreadcrumbProps, 'variant'>) {
  return <Breadcrumb {...props} variant="compact" maxItems={3} />;
}

export function BreadcrumbMinimal(props: Omit<BreadcrumbProps, 'variant'>) {
  return <Breadcrumb {...props} variant="minimal" separator="/" />;
}

export function BreadcrumbPills(props: Omit<BreadcrumbProps, 'variant'>) {
  return <Breadcrumb {...props} variant="pills" />;
}

// Mobile-first breadcrumb with back button
export function MobileBreadcrumb(props: BreadcrumbProps) {
  return (
    <Breadcrumb 
      {...props} 
      collapseOnMobile={true} 
      backButton={true}
      variant="compact"
    />
  );
}

// Breadcrumb with context (shows page hierarchy)
interface ContextualBreadcrumbProps extends Omit<BreadcrumbProps, 'items'> {
  context?: {
    section: string;
    category?: string;
    subcategory?: string;
  };
}

export function ContextualBreadcrumb({ 
  context, 
  ...props 
}: ContextualBreadcrumbProps) {
  const pathname = usePathname();
  let items = generateBreadcrumbItems(pathname);

  // Add contextual information if provided
  if (context) {
    const contextItems: BreadcrumbItem[] = [];
    
    if (context.section) {
      contextItems.push({
        label: context.section,
        href: `/${context.section.toLowerCase().replace(/\s+/g, '-')}`
      });
    }
    
    if (context.category) {
      contextItems.push({
        label: context.category,
        href: `/${context.section.toLowerCase().replace(/\s+/g, '-')}/${context.category.toLowerCase().replace(/\s+/g, '-')}`
      });
    }
    
    if (context.subcategory) {
      contextItems.push({
        label: context.subcategory,
        href: `/${context.section.toLowerCase().replace(/\s+/g, '-')}/${context.category?.toLowerCase().replace(/\s+/g, '-')}/${context.subcategory.toLowerCase().replace(/\s+/g, '-')}`
      });
    }

    // Insert context items after home
    items = [
      items[0], // Home
      ...contextItems,
      ...items.slice(1)
    ];
  }

  return <Breadcrumb {...props} items={items} />;
}

// Breadcrumb with structured data for SEO
export function SEOBreadcrumb(props: BreadcrumbProps) {
  const pathname = usePathname();
  const items = props.items || generateBreadcrumbItems(pathname);

  // Generate JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://azfamilylaw.com'}${item.href}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Breadcrumb {...props} items={items} />
    </>
  );
}

// Hook for breadcrumb state
export function useBreadcrumb() {
  const pathname = usePathname();
  const [items, setItems] = useState<BreadcrumbItem[]>([]);

  useEffect(() => {
    setItems(generateBreadcrumbItems(pathname));
  }, [pathname]);

  const addItem = (item: BreadcrumbItem) => {
    setItems(prev => [...prev, item]);
  };

  const removeItem = (href: string) => {
    setItems(prev => prev.filter(item => item.href !== href));
  };

  const updateItem = (href: string, updates: Partial<BreadcrumbItem>) => {
    setItems(prev => prev.map(item => 
      item.href === href ? { ...item, ...updates } : item
    ));
  };

  return {
    items,
    addItem,
    removeItem,
    updateItem,
    currentItem: items[items.length - 1],
    parentItem: items[items.length - 2]
  };
}

// Breadcrumb container for consistent styling
interface BreadcrumbContainerProps {
  children: React.ReactNode;
  className?: string;
  sticky?: boolean;
}

export function BreadcrumbContainer({ 
  children, 
  className = '',
  sticky = false 
}: BreadcrumbContainerProps) {
  return (
    <div className={cn(
      'bg-white border-b border-gray-200 px-4 py-3',
      sticky && 'sticky top-0 z-40',
      className
    )}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
}