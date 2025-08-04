'use client';

import { useMemo, ReactElement } from 'react';
import GlossaryTooltip from './GlossaryTooltip';
import { legalGlossary } from '@/data/legalGlossary';

interface GlossaryContentProps {
  children: string;
  className?: string;
}

export default function GlossaryContent({ children, className = '' }: GlossaryContentProps) {
  const processedContent = useMemo(() => {
    const processedText = children;
    const replacements: Array<{ original: string; replacement: ReactElement; key: string }> = [];

    // Find all glossary terms in the text
    Object.entries(legalGlossary).forEach(([key, termData]) => {
      const term = termData.term;
      // Create regex to find whole word matches (case insensitive)
      const regex = new RegExp(`\\b${term}\\b`, 'gi');
      const matches = processedText.match(regex);
      
      if (matches) {
        matches.forEach((match, index) => {
          const uniqueKey = `${key}-${index}`;
          replacements.push({
            original: match,
            replacement: (
              <GlossaryTooltip key={uniqueKey} termKey={key}>
                {match}
              </GlossaryTooltip>
            ),
            key: uniqueKey
          });
        });
      }
    });

    // Sort replacements by length (longest first) to avoid nested replacements
    replacements.sort((a, b) => b.original.length - a.original.length);

    // Split text and create array of elements
    const elements: (string | ReactElement)[] = [];
    let lastIndex = 0;
    
    // Create a map of positions to replacements
    const positionMap = new Map<number, typeof replacements[0]>();
    
    replacements.forEach(replacement => {
      const index = processedText.toLowerCase().indexOf(replacement.original.toLowerCase());
      if (index !== -1 && !Array.from(positionMap.values()).some(r => 
        index >= processedText.toLowerCase().indexOf(r.original.toLowerCase()) && 
        index < processedText.toLowerCase().indexOf(r.original.toLowerCase()) + r.original.length
      )) {
        positionMap.set(index, replacement);
      }
    });

    // Sort positions
    const sortedPositions = Array.from(positionMap.keys()).sort((a, b) => a - b);

    // Build the result
    sortedPositions.forEach(position => {
      const replacement = positionMap.get(position)!;
      
      // Add text before the term
      if (position > lastIndex) {
        elements.push(processedText.substring(lastIndex, position));
      }
      
      // Add the replacement
      elements.push(replacement.replacement);
      
      lastIndex = position + replacement.original.length;
    });

    // Add remaining text
    if (lastIndex < processedText.length) {
      elements.push(processedText.substring(lastIndex));
    }

    return elements.length > 0 ? elements : [processedText];
  }, [children]);

  return (
    <div className={className}>
      {processedContent}
    </div>
  );
}