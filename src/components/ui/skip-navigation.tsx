'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

// Main skip navigation component
interface SkipNavigationProps {
  links?: SkipLink[];
  className?: string;
}

interface SkipLink {
  href: string;
  label: string;
  description?: string;
}

export function SkipNavigation({ 
  links = DEFAULT_SKIP_LINKS, 
  className = '' 
}: SkipNavigationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLinkIndex, setCurrentLinkIndex] = useState(-1);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab' && !e.shiftKey) {
      setIsVisible(true);
    } else if (e.key === 'Escape') {
      setIsVisible(false);
      setCurrentLinkIndex(-1);
    } else if (e.key === 'ArrowDown' && isVisible) {
      e.preventDefault();
      setCurrentLinkIndex(prev => 
        prev < links.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === 'ArrowUp' && isVisible) {
      e.preventDefault();
      setCurrentLinkIndex(prev => 
        prev > 0 ? prev - 1 : links.length - 1
      );
    }
  };

  const handleLinkClick = (href: string) => {
    setIsVisible(false);
    setCurrentLinkIndex(-1);
    
    // Find and focus the target element
    const targetElement = document.querySelector(href);
    if (targetElement) {
      // Scroll to target with smooth behavior
      targetElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
      
      // Focus the target element if it's focusable
      if (targetElement instanceof HTMLElement) {
        targetElement.focus();
        
        // If element is not naturally focusable, make it temporarily focusable
        if (!targetElement.hasAttribute('tabindex')) {
          targetElement.setAttribute('tabindex', '-1');
          targetElement.addEventListener('blur', () => {
            targetElement.removeAttribute('tabindex');
          }, { once: true });
        }
      }
    }
  };

  const handleBlur = (e: React.FocusEvent) => {
    // Hide skip nav when focus leaves the container
    const relatedTarget = e.relatedTarget as HTMLElement;
    const container = e.currentTarget as HTMLElement;
    
    if (!container.contains(relatedTarget)) {
      setIsVisible(false);
      setCurrentLinkIndex(-1);
    }
  };

  return (
    <nav
      className={cn(
        'skip-navigation fixed top-0 left-0 right-0 z-[9999] bg-white border-b border-gray-200 shadow-lg transform transition-transform duration-200',
        isVisible ? 'translate-y-0' : '-translate-y-full',
        className
      )}
      aria-label="Skip navigation"
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    >
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-sm font-semibold text-gray-900">
            Skip to:
          </h2>
          <span className="text-xs text-gray-500">
            (Use ↑↓ arrows to navigate, Enter to select, Esc to close)
          </span>
        </div>
        
        <ul className="flex flex-wrap gap-2" role="list">
          {links.map((link, index) => (
            <li key={link.href}>
              <button
                onClick={() => handleLinkClick(link.href)}
                className={cn(
                  'px-3 py-2 text-sm font-medium rounded-lg border transition-all',
                  'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                  currentLinkIndex === index
                    ? 'bg-primary-600 text-white border-primary-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                )}
                title={link.description}
                aria-describedby={link.description ? `skip-desc-${index}` : undefined}
              >
                {link.label}
              </button>
              {link.description && (
                <span 
                  id={`skip-desc-${index}`} 
                  className="sr-only"
                >
                  {link.description}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// Default skip navigation links
const DEFAULT_SKIP_LINKS: SkipLink[] = [
  {
    href: '#main-content',
    label: 'Main Content',
    description: 'Skip to the main content area'
  },
  {
    href: '#primary-navigation',
    label: 'Navigation',
    description: 'Skip to the primary navigation menu'
  },
  {
    href: '#search',
    label: 'Search',
    description: 'Skip to the search functionality'
  },
  {
    href: '#emergency-help',
    label: 'Emergency Help',
    description: 'Skip to emergency assistance options'
  },
  {
    href: '#footer',
    label: 'Footer',
    description: 'Skip to the page footer'
  }
];

// Page-specific skip links component
interface PageSkipLinksProps {
  pageType: 'home' | 'content' | 'form' | 'search' | 'emergency';
  customLinks?: SkipLink[];
}

export function PageSkipLinks({ pageType, customLinks }: PageSkipLinksProps) {
  const getPageSpecificLinks = (): SkipLink[] => {
    const baseLinks: SkipLink[] = [
      {
        href: '#main-content',
        label: 'Main Content',
        description: 'Skip to the main content area'
      }
    ];

    switch (pageType) {
      case 'home':
        return [
          ...baseLinks,
          {
            href: '#quick-actions',
            label: 'Quick Actions',
            description: 'Skip to quick action buttons'
          },
          {
            href: '#featured-content',
            label: 'Featured Content',
            description: 'Skip to featured legal topics'
          },
          {
            href: '#emergency-help',
            label: 'Emergency Help',
            description: 'Skip to emergency assistance'
          }
        ];

      case 'content':
        return [
          ...baseLinks,
          {
            href: '#table-of-contents',
            label: 'Table of Contents',
            description: 'Skip to page table of contents'
          },
          {
            href: '#related-content',
            label: 'Related Content',
            description: 'Skip to related articles and resources'
          }
        ];

      case 'form':
        return [
          ...baseLinks,
          {
            href: '#form-start',
            label: 'Form',
            description: 'Skip to the beginning of the form'
          },
          {
            href: '#form-help',
            label: 'Form Help',
            description: 'Skip to form instructions and help'
          },
          {
            href: '#form-errors',
            label: 'Form Errors',
            description: 'Skip to form validation errors'
          }
        ];

      case 'search':
        return [
          ...baseLinks,
          {
            href: '#search-input',
            label: 'Search Box',
            description: 'Skip to the search input field'
          },
          {
            href: '#search-filters',
            label: 'Search Filters',
            description: 'Skip to search filter options'
          },
          {
            href: '#search-results',
            label: 'Search Results',
            description: 'Skip to search results list'
          }
        ];

      case 'emergency':
        return [
          {
            href: '#emergency-contacts',
            label: 'Emergency Contacts',
            description: 'Skip to emergency phone numbers'
          },
          {
            href: '#safety-planning',
            label: 'Safety Planning',
            description: 'Skip to safety planning resources'
          },
          {
            href: '#immediate-help',
            label: 'Immediate Help',
            description: 'Skip to immediate assistance options'
          },
          ...baseLinks
        ];

      default:
        return baseLinks;
    }
  };

  const links = customLinks || getPageSpecificLinks();

  return <SkipNavigation links={links} />;
}

// Landmark navigation component
export function LandmarkNavigation() {
  const [landmarks, setLandmarks] = useState<SkipLink[]>([]);

  useEffect(() => {
    // Automatically detect page landmarks
    const detectLandmarks = () => {
      const landmarkSelectors = [
        { selector: 'main', label: 'Main Content' },
        { selector: 'nav[aria-label="Primary"]', label: 'Primary Navigation' },
        { selector: 'nav[aria-label="Breadcrumb"]', label: 'Breadcrumb' },
        { selector: 'aside[aria-label="Sidebar"]', label: 'Sidebar' },
        { selector: 'section[aria-label="Search"]', label: 'Search' },
        { selector: 'footer', label: 'Footer' },
        { selector: '[role="search"]', label: 'Search' },
        { selector: '[role="banner"]', label: 'Header' },
        { selector: '[role="contentinfo"]', label: 'Footer' },
        { selector: '[role="complementary"]', label: 'Sidebar' }
      ];

      const foundLandmarks: SkipLink[] = [];

      landmarkSelectors.forEach(({ selector, label }) => {
        const element = document.querySelector(selector);
        if (element) {
          // Generate or use existing ID
          let id = element.id;
          if (!id) {
            id = `landmark-${label.toLowerCase().replace(/\s+/g, '-')}`;
            element.id = id;
          }

          foundLandmarks.push({
            href: `#${id}`,
            label,
            description: `Navigate to ${label.toLowerCase()}`
          });
        }
      });

      setLandmarks(foundLandmarks);
    };

    // Detect landmarks after a short delay to ensure DOM is ready
    const timer = setTimeout(detectLandmarks, 100);
    return () => clearTimeout(timer);
  }, []);

  if (landmarks.length === 0) {
    return null;
  }

  return <SkipNavigation links={landmarks} />;
}

// Heading navigation component
export function HeadingNavigation() {
  const [headings, setHeadings] = useState<SkipLink[]>([]);

  useEffect(() => {
    const detectHeadings = () => {
      const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const headingLinks: SkipLink[] = [];

      headingElements.forEach((heading, index) => {
        const text = heading.textContent?.trim();
        if (text) {
          // Generate ID if doesn't exist
          let id = heading.id;
          if (!id) {
            id = `heading-${index}`;
            heading.id = id;
          }

          const level = heading.tagName.toLowerCase();
          headingLinks.push({
            href: `#${id}`,
            label: text,
            description: `Navigate to ${level}: ${text}`
          });
        }
      });

      setHeadings(headingLinks);
    };

    const timer = setTimeout(detectHeadings, 100);
    return () => clearTimeout(timer);
  }, []);

  if (headings.length === 0) {
    return null;
  }

  return (
    <SkipNavigation 
      links={headings} 
      className="bg-blue-50 border-blue-200"
    />
  );
}

// Hook for managing skip navigation visibility
export function useSkipNavigation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Show skip nav on first Tab press
      if (e.key === 'Tab' && !e.shiftKey && !isVisible) {
        setIsVisible(true);
      }
      
      // Hide skip nav on Escape
      if (e.key === 'Escape') {
        setIsVisible(false);
      }
    };

    const handleClick = () => {
      // Hide skip nav when clicking anywhere
      setIsVisible(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClick);
    };
  }, [isVisible]);

  return {
    isVisible,
    show: () => setIsVisible(true),
    hide: () => setIsVisible(false),
    toggle: () => setIsVisible(prev => !prev)
  };
}

// Screen reader announcements for skip navigation
export function SkipNavigationAnnouncer() {
  useEffect(() => {
    // Announce skip navigation availability to screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = 'Skip navigation is available. Press Tab to access skip links.';
    
    document.body.appendChild(announcement);

    // Remove announcement after screen readers have processed it
    const timer = setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);

    return () => {
      clearTimeout(timer);
      if (document.body.contains(announcement)) {
        document.body.removeChild(announcement);
      }
    };
  }, []);

  return null;
}