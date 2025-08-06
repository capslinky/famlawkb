'use client';

import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown, Minus, LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon?: LucideIcon;
  iconColor?: string;
  trend?: 'up' | 'down' | 'neutral';
  description?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function StatCard({
  label,
  value,
  change,
  changeLabel,
  icon: Icon,
  iconColor = 'text-blue-600',
  trend,
  description,
  className,
  size = 'md'
}: StatCardProps) {
  const sizeStyles = {
    sm: {
      padding: 'p-3',
      icon: 'w-8 h-8',
      value: 'text-xl',
      label: 'text-xs',
      change: 'text-xs'
    },
    md: {
      padding: 'p-4',
      icon: 'w-10 h-10',
      value: 'text-2xl',
      label: 'text-sm',
      change: 'text-sm'
    },
    lg: {
      padding: 'p-6',
      icon: 'w-12 h-12',
      value: 'text-3xl',
      label: 'text-base',
      change: 'text-base'
    }
  };

  const currentSize = sizeStyles[size];

  const getTrend = () => {
    if (trend) return trend;
    if (change === undefined) return undefined;
    if (change > 0) return 'up';
    if (change < 0) return 'down';
    return 'neutral';
  };

  const currentTrend = getTrend();

  const getTrendIcon = () => {
    switch (currentTrend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-600" />;
      case 'neutral':
        return <Minus className="w-4 h-4 text-gray-600" />;
      default:
        return null;
    }
  };

  const getTrendColor = () => {
    switch (currentTrend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      case 'neutral':
        return 'text-gray-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className={cn(
      'bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow',
      currentSize.padding,
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className={cn('text-gray-600 font-medium', currentSize.label)}>
            {label}
          </p>
          <p className={cn('font-bold text-gray-900 mt-1', currentSize.value)}>
            {value}
          </p>
          
          {(change !== undefined || changeLabel) && (
            <div className={cn('flex items-center gap-1 mt-2', currentSize.change)}>
              {getTrendIcon()}
              {change !== undefined && (
                <span className={getTrendColor()}>
                  {change > 0 ? '+' : ''}{change}%
                </span>
              )}
              {changeLabel && (
                <span className="text-gray-600 ml-1">{changeLabel}</span>
              )}
            </div>
          )}
          
          {description && (
            <p className={cn('text-gray-500 mt-2', currentSize.label)}>
              {description}
            </p>
          )}
        </div>
        
        {Icon && (
          <div className={cn(
            'rounded-lg bg-gray-50 p-3 ml-4',
            currentSize.icon
          )}>
            <Icon className={cn(currentSize.icon, iconColor)} />
          </div>
        )}
      </div>
    </div>
  );
}