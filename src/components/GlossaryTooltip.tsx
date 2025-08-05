'use client';

import { useState, useRef, useEffect } from 'react';
import { Info, X } from 'lucide-react';

interface GlossaryTerm {
  term: string;
  definition: string;
  relatedTerms?: string[];
  examples?: string[];
}

// Arizona Family Law Glossary Database
const GLOSSARY: Record<string, GlossaryTerm> = {
  'petitioner': {
    term: 'Petitioner',
    definition: 'The person who starts (files) a court case by submitting a petition to the court.',
    examples: ['In a divorce case, the petitioner is the spouse who files for divorce first.']
  },
  'respondent': {
    term: 'Respondent',
    definition: 'The person who must respond to a court petition filed by the petitioner.',
    examples: ['In a divorce case, the respondent is the spouse who receives the divorce papers.']
  },
  'decree': {
    term: 'Decree',
    definition: 'A final court order that officially ends a marriage and outlines the terms of the divorce.',
    relatedTerms: ['dissolution', 'judgment']
  },
  'dissolution': {
    term: 'Dissolution',
    definition: 'The legal term for divorce in Arizona. It means the legal ending of a marriage.',
    relatedTerms: ['decree', 'divorce']
  },
  'community property': {
    term: 'Community Property',
    definition: 'Property and debts acquired during marriage that belong equally to both spouses, regardless of who earned or acquired them.',
    examples: ['Income earned during marriage, homes purchased during marriage, debts incurred during marriage']
  },
  'separate property': {
    term: 'Separate Property',
    definition: 'Property owned by one spouse before marriage, or acquired during marriage by gift or inheritance to that spouse alone.',
    examples: ['Property owned before marriage, inheritance received by one spouse, gifts given specifically to one spouse']
  },
  'legal custody': {
    term: 'Legal Custody',
    definition: 'The right and responsibility to make major decisions about a child\'s welfare, including education, healthcare, and religious upbringing.',
    relatedTerms: ['physical custody', 'joint custody', 'sole custody']
  },
  'physical custody': {
    term: 'Physical Custody',
    definition: 'Where the child lives and spends their time. Also called "parenting time" in Arizona.',
    relatedTerms: ['legal custody', 'parenting time', 'visitation']
  },
  'parenting time': {
    term: 'Parenting Time',
    definition: 'The time each parent spends with their child. Arizona uses this term instead of "visitation."',
    relatedTerms: ['physical custody', 'visitation']
  },
  'child support': {
    term: 'Child Support',
    definition: 'Money paid by one parent to the other to help cover the costs of raising their child.',
    examples: ['Monthly payments for housing, food, clothing, healthcare, and other child-related expenses']
  },
  'spousal maintenance': {
    term: 'Spousal Maintenance',
    definition: 'Money paid by one spouse to the other after divorce to provide financial support. Also called "alimony."',
    relatedTerms: ['alimony']
  },
  'alimony': {
    term: 'Alimony',
    definition: 'Another term for spousal maintenance - money paid by one spouse to the other after divorce.',
    relatedTerms: ['spousal maintenance']
  },
  'service of process': {
    term: 'Service of Process',
    definition: 'The legal requirement to formally notify the other party about court proceedings by delivering court documents to them.',
    examples: ['Having divorce papers delivered to your spouse by a process server or sheriff']
  },
  'default judgment': {
    term: 'Default Judgment',
    definition: 'A court decision made when one party fails to respond to court papers within the required time period.',
    examples: ['If a spouse doesn\'t respond to divorce papers within 20 days, the other spouse may get a default judgment']
  },
  'mediation': {
    term: 'Mediation',
    definition: 'A process where a neutral third party (mediator) helps divorcing couples reach agreements outside of court.',
    examples: ['Meeting with a mediator to agree on child custody arrangements or property division']
  },
  'parenting plan': {
    term: 'Parenting Plan',
    definition: 'A detailed written agreement that outlines how divorced or separated parents will care for and make decisions about their children.',
    examples: ['Schedule of when children stay with each parent, how decisions are made, holiday arrangements']
  },
  'temporary orders': {
    term: 'Temporary Orders',
    definition: 'Court orders that establish rules and arrangements while a divorce case is pending, before the final decree.',
    examples: ['Temporary child support, temporary custody arrangements, temporary spousal maintenance']
  },
  'final orders': {
    term: 'Final Orders',
    definition: 'Court orders issued in the final decree that establish permanent arrangements after a divorce is completed.',
    relatedTerms: ['decree', 'temporary orders']
  },
  'motion': {
    term: 'Motion',
    definition: 'A formal written request asking the court to make a specific decision or take a particular action.',
    examples: ['Motion to modify child support, Motion for temporary orders, Motion to change custody']
  },
  'order of protection': {
    term: 'Order of Protection',
    definition: 'A court order that prohibits someone from contacting, harassing, or coming near another person.',
    examples: ['Court order preventing an abusive spouse from contacting you or coming to your home']
  },
  'injunction against harassment': {
    term: 'Injunction Against Harassment',
    definition: 'A court order that prevents someone from bothering, annoying, or harassing you when you don\'t have a domestic relationship.',
    relatedTerms: ['order of protection', 'restraining order']
  },
  'contempt of court': {
    term: 'Contempt of Court',
    definition: 'Willfully disobeying or failing to follow a court order, which can result in fines or jail time.',
    examples: ['Not paying court-ordered child support, violating custody orders, ignoring protection orders']
  }
};

interface GlossaryTooltipProps {
  term: string;
  children: React.ReactNode;
  className?: string;
}

export default function GlossaryTooltip({ term, children, className = '' }: GlossaryTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<'top' | 'bottom'>('bottom');
  const triggerRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const glossaryTerm = GLOSSARY[term.toLowerCase()];

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Position tooltip above if there's not enough space below
      if (rect.bottom + 300 > viewportHeight && rect.top > 300) {
        setPosition('top');
      } else {
        setPosition('bottom');
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node) &&
          triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  if (!glossaryTerm) {
    // If term not found in glossary, render children without tooltip
    return <>{children}</>;
  }

  return (
    <span className={`relative inline-block ${className}`}>
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 underline decoration-dotted underline-offset-2 cursor-help focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded"
        aria-describedby={isOpen ? `tooltip-${term}` : undefined}
        aria-expanded={isOpen}
      >
        {children}
        <Info className="w-3 h-3 opacity-70" />
      </button>

      {isOpen && (
        <div
          ref={tooltipRef}
          id={`tooltip-${term}`}
          className={`absolute z-50 w-80 bg-white border-2 border-blue-200 rounded-lg shadow-xl p-4 ${
            position === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
          } left-1/2 transform -translate-x-1/2`}
          role="tooltip"
        >
          {/* Arrow */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-0 h-0 ${
            position === 'top' 
              ? 'top-full border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-blue-200'
              : 'bottom-full border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-blue-200'
          }`}></div>

          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-blue-900 text-sm">
              {glossaryTerm.term}
            </h4>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label="Close definition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Definition */}
          <p className="text-sm text-gray-700 mb-3 leading-relaxed">
            {glossaryTerm.definition}
          </p>

          {/* Examples */}
          {glossaryTerm.examples && (
            <div className="mb-3">
              <h5 className="font-medium text-xs text-gray-600 mb-1 uppercase tracking-wide">
                Examples:
              </h5>
              <ul className="text-xs text-gray-600 space-y-1">
                {glossaryTerm.examples.map((example, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Related Terms */}
          {glossaryTerm.relatedTerms && (
            <div>
              <h5 className="font-medium text-xs text-gray-600 mb-1 uppercase tracking-wide">
                Related Terms:
              </h5>
              <div className="flex flex-wrap gap-1">
                {glossaryTerm.relatedTerms.map((relatedTerm, index) => (
                  <GlossaryTooltip key={index} term={relatedTerm}>
                    <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full hover:bg-blue-100 transition-colors">
                      {relatedTerm}
                    </span>
                  </GlossaryTooltip>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </span>
  );
}

// Helper component for easy use in content
export function LegalTerm({ term, children }: { term: string; children?: React.ReactNode }) {
  return (
    <GlossaryTooltip term={term}>
      {children || term}
    </GlossaryTooltip>
  );
}

// Hook to get all glossary terms for search/indexing
export function useGlossary() {
  return GLOSSARY;
}