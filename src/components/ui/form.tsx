'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle, Eye, EyeOff, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

// Validation types
export type ValidationRule = {
  test: (value: string) => boolean;
  message: string;
};

export interface FieldValidation {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: ValidationRule[];
}

export interface FieldError {
  field: string;
  message: string;
}

// Base Input Component with floating labels and validation
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: boolean;
  helperText?: string;
  tooltip?: string;
  validation?: FieldValidation;
  showPassword?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  floatingLabel?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    label,
    error,
    success,
    helperText,
    tooltip,
    validation,
    leftIcon,
    rightIcon,
    floatingLabel = true,
    type = 'text',
    value,
    onChange,
    onBlur,
    placeholder,
    ...props
  }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showPasswordToggle, setShowPasswordToggle] = useState(false);
    const [localError, setLocalError] = useState<string>('');
    const [touched, setTouched] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const hasValue = value !== undefined && value !== '';
    const isPasswordField = type === 'password';
    const shouldShowPassword = isPasswordField && showPasswordToggle;
    const inputType = shouldShowPassword ? 'text' : type;

    // Validation
    const validateField = (fieldValue: string): string => {
      if (!validation) return '';
      
      if (validation.required && !fieldValue.trim()) {
        return 'This field is required';
      }
      
      if (validation.minLength && fieldValue.length < validation.minLength) {
        return `Minimum length is ${validation.minLength} characters`;
      }
      
      if (validation.maxLength && fieldValue.length > validation.maxLength) {
        return `Maximum length is ${validation.maxLength} characters`;
      }
      
      if (validation.pattern && !validation.pattern.test(fieldValue)) {
        return 'Please enter a valid format';
      }
      
      if (validation.custom) {
        for (const rule of validation.custom) {
          if (!rule.test(fieldValue)) {
            return rule.message;
          }
        }
      }
      
      return '';
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      onChange?.(e);
      
      if (touched) {
        const validationError = validateField(newValue);
        setLocalError(validationError);
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setTouched(true);
      onBlur?.(e);
      
      const validationError = validateField(e.target.value);
      setLocalError(validationError);
    };

    const displayError = error || localError;
    const hasError = Boolean(displayError);

    return (
      <div className="space-y-1">
        <div className="relative">
          {/* Static label for non-floating variant */}
          {label && !floatingLabel && (
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {label}
              {validation?.required && <span className="text-red-500 ml-1">*</span>}
              {tooltip && (
                <TooltipWrapper content={tooltip}>
                  <HelpCircle className="inline-block w-4 h-4 ml-1 text-gray-400 cursor-help" />
                </TooltipWrapper>
              )}
            </label>
          )}

          <div className="relative">
            {/* Left icon */}
            {leftIcon && (
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                {leftIcon}
              </div>
            )}

            {/* Input field */}
            <input
              ref={ref || inputRef}
              type={inputType}
              value={value}
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={handleBlur}
              placeholder={floatingLabel ? undefined : placeholder}
              className={cn(
                'block w-full px-3 py-2 border rounded-lg shadow-sm transition-all duration-200',
                'focus:outline-none focus:ring-2 focus:ring-offset-0',
                leftIcon ? 'pl-10' : '',
                (rightIcon || isPasswordField) ? 'pr-10' : '',
                floatingLabel ? 'pt-6 pb-2' : '',
                hasError
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                  : success
                  ? 'border-green-300 focus:border-green-500 focus:ring-green-500'
                  : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500',
                className
              )}
              {...props}
            />

            {/* Floating label */}
            {label && floatingLabel && (
              <label
                className={cn(
                  'absolute left-3 transition-all duration-200 pointer-events-none',
                  isFocused || hasValue
                    ? 'top-1 text-xs text-gray-500'
                    : 'top-1/2 transform -translate-y-1/2 text-gray-400',
                  leftIcon ? 'left-10' : ''
                )}
              >
                {label}
                {validation?.required && <span className="text-red-500 ml-1">*</span>}
              </label>
            )}

            {/* Right icons */}
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
              {tooltip && !floatingLabel && (
                <TooltipWrapper content={tooltip}>
                  <HelpCircle className="w-4 h-4 text-gray-400 cursor-help" />
                </TooltipWrapper>
              )}
              
              {isPasswordField && (
                <button
                  type="button"
                  onClick={() => setShowPasswordToggle(!showPasswordToggle)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  tabIndex={-1}
                >
                  {showPasswordToggle ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              )}
              
              {rightIcon}
              
              {hasError && <AlertCircle className="w-4 h-4 text-red-500" />}
              {success && <CheckCircle className="w-4 h-4 text-green-500" />}
            </div>
          </div>
        </div>

        {/* Helper text and errors */}
        <AnimatePresence>
          {(displayError || helperText) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <p className={cn(
                'text-xs',
                hasError ? 'text-red-600' : 'text-gray-500'
              )}>
                {displayError || helperText}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Input.displayName = 'Input';

// Select Component
interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string;
  error?: string;
  success?: boolean;
  helperText?: string;
  options: SelectOption[];
  placeholder?: string;
  floatingLabel?: boolean;
  onChange?: (value: string) => void;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({
    className,
    label,
    error,
    success,
    helperText,
    options,
    placeholder = 'Select an option',
    floatingLabel = true,
    value,
    onChange,
    ...props
  }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = value !== undefined && value !== '';

    return (
      <div className="space-y-1">
        <div className="relative">
          {label && !floatingLabel && (
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {label}
            </label>
          )}

          <div className="relative">
            <select
              ref={ref}
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={cn(
                'block w-full px-3 py-2 border rounded-lg shadow-sm bg-white transition-all duration-200',
                'focus:outline-none focus:ring-2 focus:ring-offset-0 appearance-none cursor-pointer',
                floatingLabel ? 'pt-6 pb-2' : '',
                error
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                  : success
                  ? 'border-green-300 focus:border-green-500 focus:ring-green-500'
                  : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500',
                className
              )}
              {...props}
            >
              <option value="" disabled hidden>
                {placeholder}
              </option>
              {options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </option>
              ))}
            </select>

            {label && floatingLabel && (
              <label
                className={cn(
                  'absolute left-3 transition-all duration-200 pointer-events-none',
                  (isFocused || hasValue)
                    ? 'top-1 text-xs text-gray-500'
                    : 'top-1/2 transform -translate-y-1/2 text-gray-400'
                )}
              >
                {label}
              </label>
            )}

            {/* Dropdown arrow */}
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {(error || helperText) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <p className={cn(
                'text-xs',
                error ? 'text-red-600' : 'text-gray-500'
              )}>
                {error || helperText}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Select.displayName = 'Select';

// Tooltip wrapper component
interface TooltipWrapperProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

function TooltipWrapper({ content, children, position = 'top' }: TooltipWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className={cn(
              'absolute z-50 px-2 py-1 text-xs text-white bg-gray-900 rounded shadow-lg whitespace-nowrap',
              positionClasses[position]
            )}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Form validation hook
export function useFormValidation<T extends Record<string, string | number | boolean>>(
  initialValues: T,
  validationRules: Record<keyof T, FieldValidation>
) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<keyof T, string>>({} as Record<keyof T, string>);
  const [touched, setTouched] = useState<Record<keyof T, boolean>>({} as Record<keyof T, boolean>);

  const validateField = (name: keyof T, value: string | number | boolean): string => {
    const rules = validationRules[name];
    if (!rules) return '';

    const strValue = String(value || '');

    if (rules.required && !strValue.trim()) {
      return 'This field is required';
    }

    if (rules.minLength && strValue.length < rules.minLength) {
      return `Minimum length is ${rules.minLength} characters`;
    }

    if (rules.maxLength && strValue.length > rules.maxLength) {
      return `Maximum length is ${rules.maxLength} characters`;
    }

    if (rules.pattern && !rules.pattern.test(strValue)) {
      return 'Please enter a valid format';
    }

    if (rules.custom) {
      for (const rule of rules.custom) {
        if (!rule.test(strValue)) {
          return rule.message;
        }
      }
    }

    return '';
  };

  const validateAll = (): boolean => {
    const newErrors: Record<keyof T, string> = {} as Record<keyof T, string>;
    let isValid = true;

    for (const field in validationRules) {
      const error = validateField(field, values[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const setValue = (name: keyof T, value: string | number | boolean) => {
    setValues(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const setFieldTouched = (name: keyof T, isTouched = true) => {
    setTouched(prev => ({ ...prev, [name]: isTouched }));
    
    if (isTouched) {
      const error = validateField(name, values[name]);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({} as Record<keyof T, string>);
    setTouched({} as Record<keyof T, boolean>);
  };

  return {
    values,
    errors,
    touched,
    setValue,
    setFieldTouched,
    validateAll,
    reset,
    isValid: Object.keys(errors).length === 0,
  };
}