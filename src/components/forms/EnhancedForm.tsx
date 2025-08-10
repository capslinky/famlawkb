'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Info, AlertCircle, CheckCircle, Save, Download, Upload, HelpCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FormValidator, FormValidationSchema, ValidationError, formatPhoneNumber, formatCurrency } from '@/lib/formValidation';
import { motion, AnimatePresence } from 'framer-motion';

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'date' | 'select' | 'radio' | 'checkbox' | 'textarea' | 'currency';
  placeholder?: string;
  options?: { value: string; label: string }[];
  required?: boolean;
  dependsOn?: {
    field: string;
    value: any;
  };
  columns?: 1 | 2 | 3; // How many columns this field should span
}

interface FormSection {
  title: string;
  description?: string;
  fields: FormField[];
  collapsible?: boolean;
}

interface EnhancedFormProps {
  title: string;
  description?: string;
  sections: FormSection[];
  schema: FormValidationSchema;
  onSubmit: (data: Record<string, any>) => void;
  onSave?: (data: Record<string, any>) => void;
  initialData?: Record<string, any>;
  submitButtonText?: string;
  showProgress?: boolean;
  allowDraftSave?: boolean;
}

export default function EnhancedForm({
  title,
  description,
  sections,
  schema,
  onSubmit,
  onSave,
  initialData = {},
  submitButtonText = 'Submit Form',
  showProgress = true,
  allowDraftSave = true,
}: EnhancedFormProps) {
  const [formData, setFormData] = useState<Record<string, any>>(initialData);
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());
  const [showFieldHelp, setShowFieldHelp] = useState<string | null>(null);
  const [collapsedSections, setCollapsedSections] = useState<Set<number>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [completionPercentage, setCompletionPercentage] = useState(0);

  // Initialize validator
  const validator = React.useMemo(() => new FormValidator(schema), [schema]);

  // Update validator when form data changes
  useEffect(() => {
    validator.setFormData(formData);
    const result = validator.validate({ showOnlyTouched: true });
    setErrors(result.errors);
    setCompletionPercentage(validator.getCompletionPercentage());
  }, [formData, validator]);

  // Handle field change
  const handleFieldChange = (fieldName: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  // Handle field blur
  const handleFieldBlur = (fieldName: string) => {
    setTouchedFields(prev => new Set(prev).add(fieldName));
    validator.touchField(fieldName);
  };

  // Format field value based on type
  const formatFieldValue = (field: FormField, value: any): any => {
    if (!value) return value;
    
    switch (field.type) {
      case 'tel':
        return formatPhoneNumber(value);
      case 'currency':
        return formatCurrency(value);
      default:
        return value;
    }
  };

  // Check if field should be shown based on dependencies
  const shouldShowField = (field: FormField): boolean => {
    if (!field.dependsOn) return true;
    return formData[field.dependsOn.field] === field.dependsOn.value;
  };

  // Get field errors
  const getFieldErrors = (fieldName: string): string[] => {
    if (!touchedFields.has(fieldName)) return [];
    return errors.filter(e => e.field === fieldName).map(e => e.message);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allFieldNames = sections.flatMap(s => s.fields.map(f => f.name));
    allFieldNames.forEach(name => {
      setTouchedFields(prev => new Set(prev).add(name));
      validator.touchField(name);
    });

    // Validate entire form
    const result = validator.validate({ showWarnings: true });
    setErrors(result.errors);

    if (result.isValid) {
      setIsSubmitting(true);
      try {
        await onSubmit(formData);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Scroll to first error
      const firstError = document.querySelector('[data-has-error="true"]');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Handle draft save
  const handleSave = async () => {
    if (!onSave) return;
    
    setIsSaving(true);
    try {
      await onSave(formData);
      setLastSaved(new Date());
      
      // Save to localStorage as backup
      localStorage.setItem(`form_draft_${title}`, JSON.stringify({
        data: formData,
        savedAt: new Date().toISOString(),
      }));
    } finally {
      setIsSaving(false);
    }
  };

  // Load draft from localStorage
  const loadDraft = () => {
    const draft = localStorage.getItem(`form_draft_${title}`);
    if (draft) {
      const { data, savedAt } = JSON.parse(draft);
      setFormData(data);
      setLastSaved(new Date(savedAt));
    }
  };

  // Export form data
  const exportData = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `${title.toLowerCase().replace(/\s+/g, '-')}-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  // Import form data
  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string);
        setFormData(data);
        validator.importData(data);
      } catch (error) {
        console.error('Error importing data:', error);
      }
    };
    reader.readAsText(file);
  };

  // Toggle section collapse
  const toggleSection = (index: number) => {
    setCollapsedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  // Render field input
  const renderFieldInput = (field: FormField) => {
    const fieldErrors = getFieldErrors(field.name);
    const hasError = fieldErrors.length > 0;
    const helpText = validator.getFieldHelp(field.name);
    const value = formData[field.name] || '';

    const baseInputClasses = `w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
      hasError 
        ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
    }`;

    switch (field.type) {
      case 'select':
        return (
          <select
            id={field.name}
            name={field.name}
            value={value}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            onBlur={() => handleFieldBlur(field.name)}
            className={baseInputClasses}
            aria-invalid={hasError}
            aria-describedby={`${field.name}-error`}
          >
            <option value="">Select {field.label}</option>
            {field.options?.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'radio':
        return (
          <div className="space-y-2">
            {field.options?.map(option => (
              <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name={field.name}
                  value={option.value}
                  checked={value === option.value}
                  onChange={(e) => handleFieldChange(field.name, e.target.value)}
                  onBlur={() => handleFieldBlur(field.name)}
                  className="text-blue-600 focus:ring-blue-500"
                  aria-invalid={hasError}
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        );

      case 'checkbox':
        return (
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name={field.name}
              checked={value === true}
              onChange={(e) => handleFieldChange(field.name, e.target.checked)}
              onBlur={() => handleFieldBlur(field.name)}
              className="rounded text-blue-600 focus:ring-blue-500"
              aria-invalid={hasError}
            />
            <span className="text-gray-700">{field.label}</span>
          </label>
        );

      case 'textarea':
        return (
          <textarea
            id={field.name}
            name={field.name}
            value={value}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            onBlur={() => handleFieldBlur(field.name)}
            placeholder={field.placeholder}
            rows={4}
            className={baseInputClasses}
            aria-invalid={hasError}
            aria-describedby={`${field.name}-error`}
          />
        );

      default:
        return (
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={formatFieldValue(field, value)}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            onBlur={() => handleFieldBlur(field.name)}
            placeholder={field.placeholder}
            className={baseInputClasses}
            aria-invalid={hasError}
            aria-describedby={`${field.name}-error`}
          />
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Form Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        {description && (
          <p className="text-gray-600">{description}</p>
        )}

        {/* Progress Bar */}
        {showProgress && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Form Progress</span>
              <span className="text-sm font-medium text-gray-900">{completionPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-blue-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${completionPercentage}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          {allowDraftSave && (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSave}
                disabled={isSaving}
              >
                <Save className="w-4 h-4 mr-1" />
                {isSaving ? 'Saving...' : 'Save Draft'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={loadDraft}
              >
                <Upload className="w-4 h-4 mr-1" />
                Load Draft
              </Button>
            </>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={exportData}
          >
            <Download className="w-4 h-4 mr-1" />
            Export
          </Button>
          <label className="inline-flex items-center">
            <input
              type="file"
              accept=".json"
              onChange={importData}
              className="hidden"
            />
            <span className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
              <Upload className="w-4 h-4 mr-1" />
              Import
            </span>
          </label>
        </div>

        {/* Last Saved Indicator */}
        {lastSaved && (
          <div className="mt-3 text-sm text-gray-500 flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Last saved: {lastSaved.toLocaleTimeString()}
          </div>
        )}
      </div>

      {/* Form Sections */}
      <form onSubmit={handleSubmit} noValidate>
        <div className="space-y-6">
          {sections.map((section, sectionIndex) => (
            <Card key={sectionIndex} className="overflow-hidden">
              <div
                className={`p-6 ${section.collapsible ? 'cursor-pointer hover:bg-gray-50' : ''}`}
                onClick={() => section.collapsible && toggleSection(sectionIndex)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">{section.title}</h2>
                    {section.description && (
                      <p className="text-sm text-gray-600 mt-1">{section.description}</p>
                    )}
                  </div>
                  {section.collapsible && (
                    <motion.div
                      animate={{ rotate: collapsedSections.has(sectionIndex) ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  )}
                </div>
              </div>

              <AnimatePresence>
                {!collapsedSections.has(sectionIndex) && (
                  <motion.div
                    initial={section.collapsible ? { height: 0, opacity: 0 } : undefined}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={section.collapsible ? { height: 0, opacity: 0 } : undefined}
                    transition={{ duration: 0.2 }}
                  >
                    <CardContent className="p-6 pt-0">
                      <div className="grid md:grid-cols-2 gap-6">
                        {section.fields.map((field) => {
                          if (!shouldShowField(field)) return null;

                          const fieldErrors = getFieldErrors(field.name);
                          const hasError = fieldErrors.length > 0;
                          const helpText = validator.getFieldHelp(field.name);
                          const colSpan = field.columns === 1 ? 'md:col-span-1' : 'md:col-span-2';

                          return (
                            <div
                              key={field.name}
                              className={colSpan}
                              data-has-error={hasError}
                            >
                              {field.type !== 'checkbox' && (
                                <label
                                  htmlFor={field.name}
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  {field.label}
                                  {field.required && <span className="text-red-500 ml-1">*</span>}
                                  {helpText && (
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        setShowFieldHelp(showFieldHelp === field.name ? null : field.name);
                                      }}
                                      className="ml-1 text-gray-400 hover:text-gray-600"
                                    >
                                      <HelpCircle className="w-4 h-4 inline" />
                                    </button>
                                  )}
                                </label>
                              )}

                              {/* Help Text */}
                              <AnimatePresence>
                                {showFieldHelp === field.name && helpText && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="mb-2"
                                  >
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-700 flex items-start gap-2">
                                      <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                      <span>{helpText}</span>
                                      <button
                                        type="button"
                                        onClick={() => setShowFieldHelp(null)}
                                        className="ml-auto text-blue-600 hover:text-blue-800"
                                      >
                                        <X className="w-4 h-4" />
                                      </button>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>

                              {/* Field Input */}
                              {renderFieldInput(field)}

                              {/* Error Messages */}
                              <AnimatePresence>
                                {hasError && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    id={`${field.name}-error`}
                                    className="mt-1"
                                  >
                                    {fieldErrors.map((error, index) => (
                                      <div key={index} className="text-sm text-red-600 flex items-center gap-1">
                                        <AlertCircle className="w-3 h-3" />
                                        {error}
                                      </div>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Fields marked with <span className="text-red-500">*</span> are required
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="min-w-[150px]"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                Submitting...
              </>
            ) : (
              submitButtonText
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}