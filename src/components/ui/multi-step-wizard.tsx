'use client';

import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check, AlertCircle } from 'lucide-react';
import { Button } from './button';
import { Card } from './card';
import { cn } from '@/lib/utils';

// Types
export interface WizardStep {
  id: string;
  title: string;
  description?: string;
  isOptional?: boolean;
  isValid?: boolean;
  component: React.ComponentType<WizardStepProps>;
}

export interface WizardStepProps {
  data: any;
  updateData: (data: any) => void;
  nextStep: () => void;
  prevStep: () => void;
  errors: Record<string, string>;
  setError: (field: string, message: string) => void;
  clearError: (field: string) => void;
}

interface WizardContextType {
  currentStepIndex: number;
  steps: WizardStep[];
  data: any;
  errors: Record<string, string>;
  isFirstStep: boolean;
  isLastStep: boolean;
  isStepValid: boolean;
  goToStep: (index: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  updateData: (newData: any) => void;
  setError: (field: string, message: string) => void;
  clearError: (field: string) => void;
  submit: () => void;
}

const WizardContext = createContext<WizardContextType | undefined>(undefined);

export function useWizard() {
  const context = useContext(WizardContext);
  if (!context) {
    throw new Error('useWizard must be used within a WizardProvider');
  }
  return context;
}

// Main Multi-Step Wizard Component
interface MultiStepWizardProps {
  steps: WizardStep[];
  initialData?: any;
  onComplete: (data: any) => void;
  onStepChange?: (stepIndex: number) => void;
  className?: string;
  allowStepJumping?: boolean;
  autoSave?: boolean;
  autoSaveKey?: string;
}

export function MultiStepWizard({
  steps,
  initialData = {},
  onComplete,
  onStepChange,
  className = '',
  allowStepJumping = false,
  autoSave = false,
  autoSaveKey = 'wizard-data'
}: MultiStepWizardProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Load saved data if autoSave is enabled
  useEffect(() => {
    if (autoSave && typeof window !== 'undefined') {
      const savedData = localStorage.getItem(autoSaveKey);
      if (savedData) {
        try {
          const parsed = JSON.parse(savedData);
          setData({ ...initialData, ...parsed });
        } catch (error) {
          console.warn('Failed to parse saved wizard data:', error);
        }
      }
    }
  }, [autoSave, autoSaveKey, initialData]);

  // Auto-save data when it changes
  useEffect(() => {
    if (autoSave && typeof window !== 'undefined') {
      localStorage.setItem(autoSaveKey, JSON.stringify(data));
    }
  }, [data, autoSave, autoSaveKey]);

  const currentStep = steps[currentStepIndex];
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === steps.length - 1;
  const isStepValid = !currentStep.isValid || currentStep.isValid;

  const goToStep = (index: number) => {
    if (index >= 0 && index < steps.length) {
      if (allowStepJumping || index === currentStepIndex + 1 || index === currentStepIndex - 1) {
        setCurrentStepIndex(index);
        onStepChange?.(index);
      }
    }
  };

  const nextStep = () => {
    if (!isLastStep && isStepValid) {
      const nextIndex = currentStepIndex + 1;
      setCurrentStepIndex(nextIndex);
      onStepChange?.(nextIndex);
    }
  };

  const prevStep = () => {
    if (!isFirstStep) {
      const prevIndex = currentStepIndex - 1;
      setCurrentStepIndex(prevIndex);
      onStepChange?.(prevIndex);
    }
  };

  const updateData = (newData: any) => {
    setData((prevData: any) => ({ ...prevData, ...newData }));
  };

  const setError = (field: string, message: string) => {
    setErrors(prev => ({ ...prev, [field]: message }));
  };

  const clearError = (field: string) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  };

  const submit = () => {
    if (isLastStep && isStepValid) {
      onComplete(data);
      if (autoSave && typeof window !== 'undefined') {
        localStorage.removeItem(autoSaveKey);
      }
    }
  };

  const contextValue: WizardContextType = {
    currentStepIndex,
    steps,
    data,
    errors,
    isFirstStep,
    isLastStep,
    isStepValid,
    goToStep,
    nextStep,
    prevStep,
    updateData,
    setError,
    clearError,
    submit
  };

  return (
    <WizardContext.Provider value={contextValue}>
      <div className={cn('max-w-4xl mx-auto', className)}>
        {/* Progress Indicator */}
        <WizardProgressIndicator />
        
        {/* Step Content */}
        <Card className="mt-6">
          <div className="p-6">
            <WizardStepHeader />
            <WizardStepContent />
          </div>
          
          {/* Navigation */}
          <WizardNavigation />
        </Card>
      </div>
    </WizardContext.Provider>
  );
}

// Progress Indicator Component
function WizardProgressIndicator() {
  const { steps, currentStepIndex } = useWizard();
  
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => {
        const isActive = index === currentStepIndex;
        const isCompleted = index < currentStepIndex;
        const isAccessible = index <= currentStepIndex;
        
        return (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <motion.div
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors',
                  isCompleted
                    ? 'bg-green-600 text-white'
                    : isActive
                    ? 'bg-primary-600 text-white'
                    : isAccessible
                    ? 'bg-gray-200 text-gray-600'
                    : 'bg-gray-100 text-gray-400'
                )}
                whileHover={isAccessible ? { scale: 1.05 } : undefined}
                whileTap={isAccessible ? { scale: 0.95 } : undefined}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </motion.div>
              
              <div className="mt-2 text-center">
                <div className={cn(
                  'text-sm font-medium',
                  isActive ? 'text-gray-900' : 'text-gray-500'
                )}>
                  {step.title}
                </div>
                {step.isOptional && (
                  <div className="text-xs text-gray-400 mt-1">Optional</div>
                )}
              </div>
            </div>
            
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="flex-1 mx-4">
                <div className={cn(
                  'h-0.5 rounded-full transition-colors',
                  index < currentStepIndex ? 'bg-green-600' : 'bg-gray-200'
                )} />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// Step Header Component
function WizardStepHeader() {
  const { steps, currentStepIndex } = useWizard();
  const currentStep = steps[currentStepIndex];
  
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        {currentStep.title}
      </h2>
      {currentStep.description && (
        <p className="text-gray-600">{currentStep.description}</p>
      )}
    </div>
  );
}

// Step Content Component
function WizardStepContent() {
  const { 
    steps, 
    currentStepIndex, 
    data, 
    errors, 
    updateData, 
    nextStep, 
    prevStep, 
    setError, 
    clearError 
  } = useWizard();
  
  const currentStep = steps[currentStepIndex];
  const StepComponent = currentStep.component;
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentStepIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        <StepComponent
          data={data}
          updateData={updateData}
          nextStep={nextStep}
          prevStep={prevStep}
          errors={errors}
          setError={setError}
          clearError={clearError}
        />
      </motion.div>
    </AnimatePresence>
  );
}

// Navigation Component
function WizardNavigation() {
  const { 
    isFirstStep, 
    isLastStep, 
    isStepValid, 
    prevStep, 
    nextStep, 
    submit,
    errors
  } = useWizard();
  
  const hasErrors = Object.keys(errors).length > 0;
  
  return (
    <div className="border-t border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          {!isFirstStep && (
            <Button
              variant="outline"
              onClick={prevStep}
              leftIcon={<ChevronLeft className="w-4 h-4" />}
            >
              Previous
            </Button>
          )}
        </div>
        
        <div className="flex items-center gap-3">
          {hasErrors && (
            <div className="flex items-center gap-2 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>Please fix the errors above</span>
            </div>
          )}
          
          {isLastStep ? (
            <Button
              onClick={submit}
              disabled={!isStepValid || hasErrors}
              rightIcon={<Check className="w-4 h-4" />}
            >
              Complete
            </Button>
          ) : (
            <Button
              onClick={nextStep}
              disabled={!isStepValid || hasErrors}
              rightIcon={<ChevronRight className="w-4 h-4" />}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

// Example Step Components
export function PersonalInfoStep({ data, updateData, errors, setError, clearError }: WizardStepProps) {
  const handleInputChange = (field: string, value: string) => {
    updateData({ [field]: value });
    
    // Simple validation
    if (field === 'email' && value && !value.includes('@')) {
      setError(field, 'Please enter a valid email address');
    } else if (field === 'firstName' && !value.trim()) {
      setError(field, 'First name is required');
    } else {
      clearError(field);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name *
          </label>
          <input
            type="text"
            value={data.firstName || ''}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className={cn(
              'block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500',
              errors.firstName ? 'border-red-300' : 'border-gray-300'
            )}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name *
          </label>
          <input
            type="text"
            value={data.lastName || ''}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          value={data.email || ''}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className={cn(
            'block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500',
            errors.email ? 'border-red-300' : 'border-gray-300'
          )}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>
    </div>
  );
}

export function ReviewStep({ data }: WizardStepProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Review Your Information</h3>
      
      <div className="bg-gray-50 rounded-lg p-4 space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-500">First Name</label>
            <p className="text-gray-900">{data.firstName || 'Not provided'}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500">Last Name</label>
            <p className="text-gray-900">{data.lastName || 'Not provided'}</p>
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium text-gray-500">Email</label>
          <p className="text-gray-900">{data.email || 'Not provided'}</p>
        </div>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800 text-sm">
          Please review all information carefully before submitting. You can go back to make changes if needed.
        </p>
      </div>
    </div>
  );
}

// Example Usage
export function WizardExample() {
  const steps: WizardStep[] = [
    {
      id: 'personal',
      title: 'Personal Information',
      description: 'Enter your basic personal details',
      component: PersonalInfoStep,
      isValid: true
    },
    {
      id: 'review',
      title: 'Review',
      description: 'Review and confirm your information',
      component: ReviewStep,
      isValid: true
    }
  ];

  const handleComplete = (data: any) => {
    console.log('Wizard completed with data:', data);
    // Handle form submission
  };

  return (
    <MultiStepWizard
      steps={steps}
      onComplete={handleComplete}
      autoSave={true}
      autoSaveKey="legal-form-wizard"
      className="py-8"
    />
  );
}