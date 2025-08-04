'use client';

import { useState, useRef, useEffect } from 'react';
import { Info, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getGlossaryTerm } from '@/data/legalGlossary';

interface GlossaryTooltipProps {
  termKey: string;
  children: React.ReactNode;
  className?: string;
}

export default function GlossaryTooltip({ termKey, children, className = '' }: GlossaryTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<'top' | 'bottom'>('top');
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  
  const term = getGlossaryTerm(termKey);

  useEffect(() => {
    if (isOpen && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      
      // Check if tooltip would go off screen at top
      if (triggerRect.top - tooltipRect.height < 10) {
        setPosition('bottom');
      } else {
        setPosition('top');
      }
    }
  }, [isOpen]);
  
  if (!term) return <>{children}</>;

  const handlePronounce = () => {
    if (term.pronunciation && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(term.term);
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <span className="relative inline">
      <span
        ref={triggerRef}
        className={`cursor-help border-b-2 border-dotted border-blue-400 hover:border-blue-600 ${className}`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        aria-label={`Definition of ${term.term}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        {children}
        <Info className="inline-block w-3 h-3 ml-1 text-blue-500" />
      </span>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className={`absolute z-50 w-80 p-4 bg-white rounded-lg shadow-xl border border-gray-200 ${
              position === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
            } left-1/2 -translate-x-1/2`}
            role="tooltip"
          >
            {/* Arrow */}
            <div
              className={`absolute w-3 h-3 bg-white border-gray-200 transform rotate-45 left-1/2 -translate-x-1/2 ${
                position === 'top' 
                  ? 'bottom-[-6px] border-b border-r' 
                  : 'top-[-6px] border-t border-l'
              }`}
            />

            {/* Content */}
            <div className="relative">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-900">{term.term}</h3>
                {term.pronunciation && (
                  <button
                    onClick={handlePronounce}
                    className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded"
                    aria-label="Pronounce term"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              {term.pronunciation && (
                <p className="text-xs text-gray-500 mb-2 italic">
                  {term.pronunciation}
                </p>
              )}

              <p className="text-sm text-gray-700 mb-3">
                {term.definition}
              </p>

              {term.relatedTerms && term.relatedTerms.length > 0 && (
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-xs font-medium text-gray-500 mb-1">Related terms:</p>
                  <div className="flex flex-wrap gap-1">
                    {term.relatedTerms.map(relatedKey => {
                      const relatedTerm = getGlossaryTerm(relatedKey);
                      if (!relatedTerm) return null;
                      return (
                        <span
                          key={relatedKey}
                          className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded"
                        >
                          {relatedTerm.term}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="mt-3 text-xs text-gray-500">
                Click anywhere to close
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}