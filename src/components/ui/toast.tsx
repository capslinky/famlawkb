'use client';

import React, { createContext, useContext, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface ToastContextType {
  showToast: (toast: Omit<Toast, 'id'>) => void;
  dismissToast: (id: string) => void;
  dismissAll: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismissToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const dismissAll = useCallback(() => {
    setToasts([]);
  }, []);

  const showToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substring(2);
    const newToast: Toast = {
      id,
      duration: 5000,
      ...toast,
    };

    setToasts(prev => [...prev, newToast]);

    // Auto dismiss after duration
    if (newToast.duration && newToast.duration > 0) {
      setTimeout(() => {
        dismissToast(id);
      }, newToast.duration);
    }
  }, [dismissToast]);

  return (
    <ToastContext.Provider value={{ showToast, dismissToast, dismissAll }}>
      {children}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </ToastContext.Provider>
  );
}

interface ToastContainerProps {
  toasts: Toast[];
  onDismiss: (id: string) => void;
}

function ToastContainer({ toasts, onDismiss }: ToastContainerProps) {
  return (
    <div className="fixed top-0 right-0 z-50 p-4 space-y-2 w-full max-w-sm pointer-events-none">
      <AnimatePresence>
        {toasts.map(toast => (
          <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
        ))}
      </AnimatePresence>
    </div>
  );
}

interface ToastItemProps {
  toast: Toast;
  onDismiss: (id: string) => void;
}

function ToastItem({ toast, onDismiss }: ToastItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getToastStyles = (type: ToastType) => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-success-bg border-success-border text-success-700',
          icon: CheckCircle,
          iconColor: 'text-success-600'
        };
      case 'error':
        return {
          bg: 'bg-emergency-bg border-emergency-border text-emergency-700',
          icon: AlertCircle,
          iconColor: 'text-emergency-600'
        };
      case 'warning':
        return {
          bg: 'bg-warning-bg border-warning-border text-warning-700',
          icon: AlertTriangle,
          iconColor: 'text-warning-600'
        };
      case 'info':
        return {
          bg: 'bg-info-bg border-info-border text-info-700',
          icon: Info,
          iconColor: 'text-info-600'
        };
      default:
        return {
          bg: 'bg-white border-gray-200 text-gray-900',
          icon: Info,
          iconColor: 'text-gray-600'
        };
    }
  };

  const styles = getToastStyles(toast.type);
  const Icon = styles.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 300, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 300, scale: 0.9, transition: { duration: 0.2 } }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`pointer-events-auto relative w-full rounded-lg border p-4 shadow-lg ${styles.bg}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-3">
        <Icon className={`h-5 w-5 flex-shrink-0 mt-0.5 ${styles.iconColor}`} />
        
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium leading-tight">{toast.title}</h4>
          {toast.description && (
            <p className="mt-1 text-sm opacity-90 leading-relaxed">
              {toast.description}
            </p>
          )}
          
          {toast.action && (
            <div className="mt-2">
              <button
                onClick={toast.action.onClick}
                className="text-sm font-medium underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current rounded"
              >
                {toast.action.label}
              </button>
            </div>
          )}
        </div>

        <button
          onClick={() => onDismiss(toast.id)}
          className="flex-shrink-0 rounded-md p-1.5 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current transition-colors"
          aria-label="Dismiss notification"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Progress bar for auto-dismiss */}
      {toast.duration && toast.duration > 0 && !isHovered && (
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-current opacity-30 rounded-b-lg"
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
          transition={{ duration: toast.duration / 1000, ease: 'linear' }}
        />
      )}
    </motion.div>
  );
}

// Convenience hooks for different toast types
export function useSuccessToast() {
  const { showToast } = useToast();
  return useCallback((title: string, description?: string) => {
    showToast({ type: 'success', title, description });
  }, [showToast]);
}

export function useErrorToast() {
  const { showToast } = useToast();
  return useCallback((title: string, description?: string) => {
    showToast({ type: 'error', title, description });
  }, [showToast]);
}

export function useWarningToast() {
  const { showToast } = useToast();
  return useCallback((title: string, description?: string) => {
    showToast({ type: 'warning', title, description });
  }, [showToast]);
}

export function useInfoToast() {
  const { showToast } = useToast();
  return useCallback((title: string, description?: string) => {
    showToast({ type: 'info', title, description });
  }, [showToast]);
}