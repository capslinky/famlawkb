'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface ReadingProgressProps {
  target?: React.RefObject<HTMLElement>;
  className?: string;
  showPercentage?: boolean;
  color?: string;
}

export function ReadingProgress({ 
  target, 
  className = '',
  showPercentage = false,
  color = 'bg-primary-500'
}: ReadingProgressProps) {
  const [readingProgress, setReadingProgress] = useState(0);
  const { scrollYProgress } = useScroll({
    target: target?.current ? target : undefined,
  });
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (progress) => {
      setReadingProgress(Math.round(progress * 100));
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className={`fixed top-0 left-0 right-0 z-40 ${className}`}>
      <motion.div
        className={`h-1 origin-left ${color}`}
        style={{ scaleX }}
      />
      {showPercentage && (
        <div className="absolute top-2 right-4 text-xs text-gray-600 bg-white px-2 py-1 rounded shadow-sm">
          {readingProgress}%
        </div>
      )}
    </div>
  );
}

interface EstimatedReadTimeProps {
  content: string;
  className?: string;
  wordsPerMinute?: number;
}

export function EstimatedReadTime({ 
  content, 
  className = '',
  wordsPerMinute = 200 
}: EstimatedReadTimeProps) {
  const wordCount = content.trim().split(/\s+/).length;
  const readTimeMinutes = Math.ceil(wordCount / wordsPerMinute);

  return (
    <div className={`flex items-center gap-2 text-sm text-gray-600 ${className}`}>
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>{readTimeMinutes} min read</span>
    </div>
  );
}

interface TableOfContentsProps {
  headings: Array<{
    id: string;
    text: string;
    level: number;
  }>;
  className?: string;
  activeId?: string;
}

export function TableOfContents({ headings, className = '', activeId }: TableOfContentsProps) {
  const [currentSection, setCurrentSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0% -80% 0%',
        threshold: 0
      }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className={`sticky top-24 ${className}`}>
      <div className="bg-white rounded-lg shadow-card border p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Table of Contents</h3>
        <ul className="space-y-1">
          {headings.map(({ id, text, level }) => (
            <li key={id} style={{ paddingLeft: `${(level - 1) * 12}px` }}>
              <button
                onClick={() => scrollToSection(id)}
                className={`text-left text-sm hover:text-primary-600 transition-colors block w-full py-1 rounded ${
                  (activeId || currentSection) === id
                    ? 'text-primary-600 font-medium bg-primary-50'
                    : 'text-gray-600'
                }`}
              >
                {text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

interface CopyToClipboardProps {
  text: string;
  children: React.ReactNode;
  className?: string;
  successMessage?: string;
}

export function CopyToClipboard({ 
  text, 
  children, 
  className = '',
  successMessage = 'Copied to clipboard!'
}: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className={`relative inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors ${className}`}
      title="Copy to clipboard"
    >
      {children}
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
      
      {copied && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
        >
          {successMessage}
        </motion.div>
      )}
    </button>
  );
}

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function CollapsibleSection({ 
  title, 
  children, 
  defaultOpen = false,
  className = ''
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`border border-gray-200 rounded-lg ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-left font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors rounded-t-lg flex items-center justify-between"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <motion.svg
          className="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="p-4">
          {children}
        </div>
      </motion.div>
    </div>
  );
}