'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  FileText, 
  BookOpen, 
  Shield, 
  AlertTriangle, 
  Plus, 
  RefreshCw,
  Wifi,
  WifiOff,
  Clock,
  CheckCircle,
  Users,
  MessageCircle
} from 'lucide-react';
import { Button } from './button';
// Removed Card import to avoid circular dependencies
import { cn } from '@/lib/utils';

// Types
interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
    variant?: 'default' | 'outline';
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

// Base Empty State Component
export function EmptyState({
  icon,
  title,
  description,
  action,
  secondaryAction,
  className = '',
  size = 'md'
}: EmptyStateProps) {
  const sizeClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16'
  };

  const iconSizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn('text-center', sizeClasses[size], className)}
    >
      {icon && (
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className={cn(
            'mx-auto mb-4 text-gray-400 flex items-center justify-center',
            iconSizeClasses[size]
          )}
        >
          {icon}
        </motion.div>
      )}
      
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className={cn(
          'font-semibold text-gray-900 mb-2',
          size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-2xl'
        )}
      >
        {title}
      </motion.h3>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className={cn(
          'text-gray-600 mb-6 max-w-sm mx-auto',
          size === 'sm' ? 'text-sm' : 'text-base'
        )}
      >
        {description}
      </motion.p>
      
      {(action || secondaryAction) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          {action && (
            <Button
              onClick={action.onClick}
              variant={action.variant}
              size={size === 'sm' ? 'sm' : 'lg'}
            >
              {action.label}
            </Button>
          )}
          
          {secondaryAction && (
            <Button
              onClick={secondaryAction.onClick}
              variant="outline"
              size={size === 'sm' ? 'sm' : 'lg'}
            >
              {secondaryAction.label}
            </Button>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

// Search Empty State
export function SearchEmptyState({ 
  searchTerm, 
  onClearSearch,
  onTryDifferentTerm 
}: { 
  searchTerm: string;
  onClearSearch: () => void;
  onTryDifferentTerm: () => void;
}) {
  return (
    <EmptyState
      icon={<Search className="w-full h-full" />}
      title="No results found"
      description={`We couldn't find any results for "${searchTerm}". Try different keywords or check your spelling.`}
      action={{
        label: 'Clear Search',
        onClick: onClearSearch,
        variant: 'outline'
      }}
      secondaryAction={{
        label: 'Browse All Topics',
        onClick: onTryDifferentTerm
      }}
    />
  );
}

// No Content Empty State
export function NoContentEmptyState({ 
  contentType = 'content',
  onCreateNew 
}: { 
  contentType?: string;
  onCreateNew?: () => void;
}) {
  return (
    <EmptyState
      icon={<FileText className="w-full h-full" />}
      title={`No ${contentType} yet`}
      description={`You haven't created any ${contentType} yet. Get started by creating your first item.`}
      action={onCreateNew ? {
        label: `Create ${contentType}`,
        onClick: onCreateNew
      } : undefined}
    />
  );
}

// Legal Resources Empty State
export function LegalResourcesEmptyState({ onBrowseResources }: { onBrowseResources: () => void }) {
  return (
    <EmptyState
      icon={<BookOpen className="w-full h-full" />}
      title="No saved resources"
      description="You haven't bookmarked any legal resources yet. Start exploring our comprehensive library of legal information."
      action={{
        label: 'Browse Resources',
        onClick: onBrowseResources
      }}
    />
  );
}

// Protection Orders Empty State
export function ProtectionEmptyState({ onLearnMore }: { onLearnMore: () => void }) {
  return (
    <EmptyState
      icon={<Shield className="w-full h-full" />}
      title="No protection orders"
      description="You don't have any active protection orders. If you need immediate protection, don't hesitate to seek help."
      action={{
        label: 'Learn About Protection Orders',
        onClick: onLearnMore
      }}
    />
  );
}

// Error Empty State
export function ErrorEmptyState({ 
  onRetry, 
  errorMessage 
}: { 
  onRetry: () => void;
  errorMessage?: string;
}) {
  return (
    <EmptyState
      icon={<AlertTriangle className="w-full h-full text-red-400" />}
      title="Something went wrong"
      description={errorMessage || "We encountered an error while loading this content. Please try again."}
      action={{
        label: 'Try Again',
        onClick: onRetry
      }}
      className="text-red-600"
    />
  );
}

// Loading Empty State
export function LoadingEmptyState({ message = "Loading..." }: { message?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-12"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="w-8 h-8 border-2 border-primary-200 border-t-primary-600 rounded-full mx-auto mb-4"
      />
      <p className="text-gray-600">{message}</p>
    </motion.div>
  );
}

// Offline Empty State
export function OfflineEmptyState({ onRefresh }: { onRefresh: () => void }) {
  return (
    <EmptyState
      icon={<WifiOff className="w-full h-full" />}
      title="You're offline"
      description="Please check your internet connection and try again."
      action={{
        label: 'Refresh',
        onClick: onRefresh,
        variant: 'outline'
      }}
    />
  );
}

// Success Animations Component
interface SuccessAnimationProps {
  title: string;
  description?: string;
  onComplete?: () => void;
  autoClose?: boolean;
  delay?: number;
  className?: string;
}

export function SuccessAnimation({
  title,
  description,
  onComplete,
  autoClose = true,
  delay = 3000,
  className = ''
}: SuccessAnimationProps) {
  React.useEffect(() => {
    if (autoClose && onComplete) {
      const timer = setTimeout(onComplete, delay);
      return () => clearTimeout(timer);
    }
  }, [autoClose, onComplete, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className={cn('text-center py-12', className)}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          delay: 0.2
        }}
        className="w-20 h-20 mx-auto mb-4"
      >
        <div className="relative w-full h-full">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 }}
            className="absolute inset-0 bg-green-100 rounded-full"
          />
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <CheckCircle className="w-12 h-12 text-green-600" />
          </motion.div>
        </div>
      </motion.div>
      
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-xl font-semibold text-gray-900 mb-2"
      >
        {title}
      </motion.h3>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-gray-600 max-w-sm mx-auto"
        >
          {description}
        </motion.p>
      )}
      
      {!autoClose && onComplete && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-6"
        >
          <Button onClick={onComplete}>
            Continue
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
}

// Progress Success Animation
export function ProgressSuccessAnimation({
  steps,
  currentStep,
  title,
  onComplete
}: {
  steps: string[];
  currentStep: number;
  title: string;
  onComplete: () => void;
}) {
  return (
    <div className="text-center py-12">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center"
        >
          <CheckCircle className="w-8 h-8 text-green-600" />
        </motion.div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        
        <div className="space-y-2 mb-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                'flex items-center gap-3 p-2 rounded-lg',
                index <= currentStep ? 'bg-green-50' : 'bg-gray-50'
              )}
            >
              <div className={cn(
                'w-6 h-6 rounded-full flex items-center justify-center text-sm',
                index <= currentStep 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-300 text-gray-600'
              )}>
                {index <= currentStep ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <span className={cn(
                'text-sm',
                index <= currentStep ? 'text-green-700' : 'text-gray-600'
              )}>
                {step}
              </span>
            </motion.div>
          ))}
        </div>
        
        <Button onClick={onComplete}>
          View Results
        </Button>
      </div>
    </div>
  );
}

// Confetti Animation
export function ConfettiSuccess({ 
  title, 
  description, 
  onComplete 
}: {
  title: string;
  description?: string;
  onComplete: () => void;
}) {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'];
  
  return (
    <div className="relative text-center py-12 overflow-hidden">
      {/* Confetti particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            y: -100, 
            x: Math.random() * 400 - 200,
            rotate: 0,
            opacity: 1
          }}
          animate={{ 
            y: 600, 
            rotate: 360,
            opacity: 0
          }}
          transition={{ 
            duration: 3,
            delay: Math.random() * 2,
            ease: 'easeOut'
          }}
          className="absolute w-3 h-3 rounded-full pointer-events-none"
          style={{ backgroundColor: colors[i % colors.length] }}
        />
      ))}
      
      <SuccessAnimation
        title={title}
        description={description}
        onComplete={onComplete}
        autoClose={false}
      />
    </div>
  );
}

// Collection of common empty states for legal app
export const LegalEmptyStates = {
  NoBookmarks: () => (
    <EmptyState
      icon={<BookOpen className="w-full h-full" />}
      title="No bookmarks yet"
      description="Save important legal resources for quick access later."
      size="sm"
    />
  ),
  
  NoTasks: ({ onCreateTask }: { onCreateTask: () => void }) => (
    <EmptyState
      icon={<CheckCircle className="w-full h-full" />}
      title="No tasks yet"
      description="Stay organized by creating tasks for your legal matters."
      action={{
        label: 'Create Task',
        onClick: onCreateTask
      }}
      size="sm"
    />
  ),
  
  NoMessages: () => (
    <EmptyState
      icon={<MessageCircle className="w-full h-full" />}
      title="No messages"
      description="Your inbox is empty. New messages will appear here."
      size="sm"
    />
  ),
  
  NoHistory: () => (
    <EmptyState
      icon={<Clock className="w-full h-full" />}
      title="No history"
      description="Your browsing history will appear here as you navigate the site."
      size="sm"
    />
  )
};

// Compound component for easy usage
EmptyState.Search = SearchEmptyState;
EmptyState.NoContent = NoContentEmptyState;
EmptyState.LegalResources = LegalResourcesEmptyState;
EmptyState.Protection = ProtectionEmptyState;
EmptyState.Error = ErrorEmptyState;
EmptyState.Loading = LoadingEmptyState;
EmptyState.Offline = OfflineEmptyState;