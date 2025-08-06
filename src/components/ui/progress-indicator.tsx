'use client';

import { cn } from '@/lib/utils';
import { CheckCircle, Circle, Clock } from 'lucide-react';

interface ProgressStep {
  id: string;
  label: string;
  status: 'completed' | 'current' | 'upcoming';
  description?: string;
}

interface ProgressIndicatorProps {
  steps: ProgressStep[];
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  showDescription?: boolean;
  className?: string;
}

export function ProgressIndicator({
  steps,
  orientation = 'horizontal',
  size = 'md',
  showDescription = false,
  className
}: ProgressIndicatorProps) {
  const sizeClasses = {
    sm: { icon: 'w-6 h-6', text: 'text-xs', line: 'h-0.5' },
    md: { icon: 'w-8 h-8', text: 'text-sm', line: 'h-1' },
    lg: { icon: 'w-10 h-10', text: 'text-base', line: 'h-1.5' }
  };

  const currentSize = sizeClasses[size];

  const getIcon = (status: ProgressStep['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className={cn(currentSize.icon, 'text-green-600')} />;
      case 'current':
        return <Clock className={cn(currentSize.icon, 'text-blue-600 animate-pulse')} />;
      case 'upcoming':
        return <Circle className={cn(currentSize.icon, 'text-gray-400')} />;
    }
  };

  const getLineColor = (index: number) => {
    const currentStep = steps[index];
    const nextStep = steps[index + 1];
    
    if (currentStep.status === 'completed' && nextStep?.status !== 'upcoming') {
      return 'bg-green-600';
    }
    return 'bg-gray-300';
  };

  if (orientation === 'vertical') {
    return (
      <div className={cn('space-y-4', className)}>
        {steps.map((step, index) => (
          <div key={step.id} className="flex gap-4">
            <div className="flex flex-col items-center">
              {getIcon(step.status)}
              {index < steps.length - 1 && (
                <div className={cn('w-0.5 flex-1 mt-2', getLineColor(index))} />
              )}
            </div>
            <div className="flex-1 pb-8">
              <p className={cn(
                'font-medium',
                currentSize.text,
                step.status === 'completed' ? 'text-gray-700' :
                step.status === 'current' ? 'text-blue-700' :
                'text-gray-500'
              )}>
                {step.label}
              </p>
              {showDescription && step.description && (
                <p className={cn('text-gray-600 mt-1', currentSize.text)}>
                  {step.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn('w-full', className)}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              {getIcon(step.status)}
              <p className={cn(
                'mt-2 font-medium text-center',
                currentSize.text,
                step.status === 'completed' ? 'text-gray-700' :
                step.status === 'current' ? 'text-blue-700' :
                'text-gray-500'
              )}>
                {step.label}
              </p>
              {showDescription && step.description && (
                <p className={cn('text-gray-600 mt-1 text-center', currentSize.text)}>
                  {step.description}
                </p>
              )}
            </div>
            {index < steps.length - 1 && (
              <div className={cn('flex-1 mx-4', currentSize.line, getLineColor(index))} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}