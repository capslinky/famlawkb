'use client';

import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle, Info, XCircle, LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface InfoCardProps {
  type?: 'info' | 'success' | 'warning' | 'error' | 'custom';
  title?: string;
  children: ReactNode;
  icon?: LucideIcon;
  className?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export function InfoCard({
  type = 'info',
  title,
  children,
  icon: CustomIcon,
  className,
  dismissible = false,
  onDismiss
}: InfoCardProps) {
  const typeStyles = {
    info: {
      container: 'bg-blue-50 border-blue-200',
      icon: 'text-blue-600',
      title: 'text-blue-900',
      content: 'text-blue-800'
    },
    success: {
      container: 'bg-green-50 border-green-200',
      icon: 'text-green-600',
      title: 'text-green-900',
      content: 'text-green-800'
    },
    warning: {
      container: 'bg-yellow-50 border-yellow-200',
      icon: 'text-yellow-600',
      title: 'text-yellow-900',
      content: 'text-yellow-800'
    },
    error: {
      container: 'bg-red-50 border-red-200',
      icon: 'text-red-600',
      title: 'text-red-900',
      content: 'text-red-800'
    },
    custom: {
      container: '',
      icon: '',
      title: '',
      content: ''
    }
  };

  const style = typeStyles[type];

  const getDefaultIcon = () => {
    if (CustomIcon) return CustomIcon;
    switch (type) {
      case 'info':
        return Info;
      case 'success':
        return CheckCircle;
      case 'warning':
        return AlertCircle;
      case 'error':
        return XCircle;
      default:
        return Info;
    }
  };

  const Icon = getDefaultIcon();

  return (
    <div className={cn(
      'rounded-lg border p-4',
      style.container,
      className
    )}>
      <div className="flex gap-3">
        <Icon className={cn('w-5 h-5 flex-shrink-0 mt-0.5', style.icon)} />
        <div className="flex-1">
          {title && (
            <h4 className={cn('font-semibold mb-1', style.title)}>
              {title}
            </h4>
          )}
          <div className={cn('text-sm', style.content)}>
            {children}
          </div>
        </div>
        {dismissible && (
          <button
            onClick={onDismiss}
            className={cn(
              'text-gray-500 hover:text-gray-700 transition-colors',
              style.icon
            )}
            aria-label="Dismiss"
          >
            <XCircle className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}