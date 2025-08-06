'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Save, Download, Upload, RefreshCw, CheckCircle, AlertCircle, User, DollarSign, Users, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useFormStorage } from '@/lib/formStorage';
import { debounce } from 'lodash';

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'date' | 'number' | 'select' | 'textarea';
  required?: boolean;
  validation?: (value: any) => string | null;
  options?: { label: string; value: string }[];
  placeholder?: string;
  helpText?: string;
  section?: string;
}

interface SmartFormProps {
  formType: string;
  formTitle: string;
  fields: FormField[];
  onSubmit?: (data: Record<string, any>) => void;
}

export default function SmartForm({ formType, formTitle, fields, onSubmit }: SmartFormProps) {
  const formStorage = useFormStorage();
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [showAutoFillPrompt, setShowAutoFillPrompt] = useState(false);
  const [formId, setFormId] = useState<string | null>(null);

  // Group fields by section
  const fieldsBySection = fields.reduce((acc, field) => {
    const section = field.section || 'General Information';
    if (!acc[section]) {
      acc[section] = [];
    }
    acc[section].push(field);
    return acc;
  }, {} as Record<string, FormField[]>);

  // Check for existing profile data on mount
  useEffect(() => {
    const profile = formStorage.getProfile();
    if (profile && Object.keys(profile).length > 0) {
      setShowAutoFillPrompt(true);
    }

    // Check for auto-saved data
    const autoSavedData = formStorage.recoverAutoSave(formType);
    if (autoSavedData) {
      const shouldRecover = window.confirm(
        'We found unsaved changes from your previous session. Would you like to recover them?'
      );
      if (shouldRecover) {
        setFormData(autoSavedData);
      } else {
        formStorage.clearAutoSave(formType);
      }
    }
  }, [formType]);

  // Auto-save form data
  const autoSave = useCallback(
    debounce((data: Record<string, any>) => {
      formStorage.autoSave(formType, data);
    }, 2000),
    [formType]
  );

  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      autoSave(formData);
    }
  }, [formData, autoSave]);

  const handleFieldChange = (fieldName: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));

    // Clear error when user starts typing
    if (errors[fieldName]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  };

  const handleFieldBlur = (fieldName: string) => {
    setTouched(prev => ({
      ...prev,
      [fieldName]: true
    }));

    // Validate field
    const field = fields.find(f => f.name === fieldName);
    if (field) {
      validateField(field);
    }
  };

  const validateField = (field: FormField): boolean => {
    const value = formData[field.name];
    
    // Required field validation
    if (field.required && !value) {
      setErrors(prev => ({
        ...prev,
        [field.name]: `${field.label} is required`
      }));
      return false;
    }

    // Custom validation
    if (field.validation) {
      const error = field.validation(value);
      if (error) {
        setErrors(prev => ({
          ...prev,
          [field.name]: error
        }));
        return false;
      }
    }

    // Type-specific validation
    switch (field.type) {
      case 'email':
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          setErrors(prev => ({
            ...prev,
            [field.name]: 'Please enter a valid email address'
          }));
          return false;
        }
        break;
      case 'tel':
        if (value && !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value)) {
          setErrors(prev => ({
            ...prev,
            [field.name]: 'Please enter a valid phone number'
          }));
          return false;
        }
        break;
      case 'number':
        if (value && isNaN(value)) {
          setErrors(prev => ({
            ...prev,
            [field.name]: 'Please enter a valid number'
          }));
          return false;
        }
        break;
    }

    return true;
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors: Record<string, string> = {};

    fields.forEach(field => {
      if (!validateField(field)) {
        isValid = false;
      }
    });

    return isValid;
  };

  const handleAutoFill = () => {
    const autoFilledData = formStorage.autoFill(formType);
    setFormData(prev => ({
      ...prev,
      ...autoFilledData
    }));
    setShowAutoFillPrompt(false);
  };

  const handleSaveForm = async () => {
    if (!validateForm()) {
      alert('Please fix the errors before saving');
      return;
    }

    setIsSaving(true);
    
    try {
      if (formId) {
        formStorage.updateForm(formId, formData);
      } else {
        const newFormId = formStorage.saveForm({
          formType,
          data: formData,
          version: 1
        });
        setFormId(newFormId);
      }
      
      setLastSaved(new Date());
      formStorage.clearAutoSave(formType);
      
      // Save profile data for future auto-fill
      const profileData = extractProfileData(formData);
      if (Object.keys(profileData).length > 0) {
        formStorage.saveProfile(profileData);
      }
    } catch (error) {
      console.error('Error saving form:', error);
      alert('Error saving form. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const extractProfileData = (data: Record<string, any>) => {
    // Extract common profile fields from form data
    const profile: any = {};
    
    if (data.petitioner_firstName) profile.firstName = data.petitioner_firstName;
    if (data.petitioner_lastName) profile.lastName = data.petitioner_lastName;
    if (data.petitioner_email) profile.email = data.petitioner_email;
    if (data.petitioner_phone) profile.phone = data.petitioner_phone;
    if (data.petitioner_address) profile.streetAddress = data.petitioner_address;
    if (data.petitioner_city) profile.city = data.petitioner_city;
    if (data.petitioner_state) profile.state = data.petitioner_state;
    if (data.petitioner_zipCode) profile.zipCode = data.petitioner_zipCode;
    
    return profile;
  };

  const handleExport = () => {
    const exportData = {
      formType,
      formTitle,
      data: formData,
      exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${formType}_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target?.result as string);
        if (importedData.data) {
          setFormData(importedData.data);
        }
      } catch (error) {
        alert('Error importing file. Please check the file format.');
      }
    };
    reader.readAsText(file);
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      // Mark all fields as touched to show errors
      const allTouched = fields.reduce((acc, field) => ({
        ...acc,
        [field.name]: true
      }), {});
      setTouched(allTouched);
      return;
    }

    if (onSubmit) {
      onSubmit(formData);
    }
    
    // Clear auto-save after successful submission
    formStorage.clearAutoSave(formType);
  };

  const renderField = (field: FormField) => {
    const value = formData[field.name] || '';
    const error = touched[field.name] ? errors[field.name] : null;

    switch (field.type) {
      case 'select':
        return (
          <div key={field.name} className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <select
              value={value}
              onChange={(e) => handleFieldChange(field.name, e.target.value)}
              onBlur={() => handleFieldBlur(field.name)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                error ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select...</option>
              {field.options?.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {field.helpText && (
              <p className="text-xs text-gray-500">{field.helpText}</p>
            )}
            {error && (
              <p className="text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {error}
              </p>
            )}
          </div>
        );

      case 'textarea':
        return (
          <div key={field.name} className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <textarea
              value={value}
              onChange={(e) => handleFieldChange(field.name, e.target.value)}
              onBlur={() => handleFieldBlur(field.name)}
              placeholder={field.placeholder}
              rows={4}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                error ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {field.helpText && (
              <p className="text-xs text-gray-500">{field.helpText}</p>
            )}
            {error && (
              <p className="text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {error}
              </p>
            )}
          </div>
        );

      default:
        return (
          <div key={field.name} className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <Input
              type={field.type}
              value={value}
              onChange={(e) => handleFieldChange(field.name, e.target.value)}
              onBlur={() => handleFieldBlur(field.name)}
              placeholder={field.placeholder}
              className={error ? 'border-red-500' : ''}
            />
            {field.helpText && (
              <p className="text-xs text-gray-500">{field.helpText}</p>
            )}
            {error && (
              <p className="text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {error}
              </p>
            )}
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Auto-fill Prompt */}
      {showAutoFillPrompt && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <RefreshCw className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-semibold text-blue-900">Auto-fill Available</p>
                  <p className="text-sm text-blue-700">We can pre-fill this form with your saved information</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => setShowAutoFillPrompt(false)}>
                  Skip
                </Button>
                <Button size="sm" onClick={handleAutoFill}>
                  Auto-fill Form
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Form Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">{formTitle}</h2>
              {lastSaved && (
                <p className="text-sm text-gray-500 mt-1">
                  Last saved: {lastSaved.toLocaleTimeString()}
                </p>
              )}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => document.getElementById('import-file')?.click()}
              >
                <Upload className="w-4 h-4 mr-2" />
                Import
              </Button>
              <input
                id="import-file"
                type="file"
                accept=".json"
                onChange={handleImport}
                className="hidden"
              />
              <Button variant="outline" size="sm" onClick={handleExport}>
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button 
                size="sm" 
                onClick={handleSaveForm}
                disabled={isSaving}
              >
                <Save className="w-4 h-4 mr-2" />
                {isSaving ? 'Saving...' : 'Save Draft'}
              </Button>
            </div>
          </div>

          {/* Form Sections */}
          {Object.entries(fieldsBySection).map(([section, sectionFields]) => (
            <div key={section} className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                {section === 'Personal Information' && <User className="w-5 h-5 text-gray-600" />}
                {section === 'Financial Information' && <DollarSign className="w-5 h-5 text-gray-600" />}
                {section === 'Children Information' && <Users className="w-5 h-5 text-gray-600" />}
                {section === 'Case Information' && <FileText className="w-5 h-5 text-gray-600" />}
                <h3 className="text-lg font-semibold">{section}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {sectionFields.map(field => renderField(field))}
              </div>
            </div>
          ))}

          {/* Form Actions */}
          <div className="mt-8 pt-6 border-t flex justify-between">
            <Button variant="outline" onClick={() => setFormData({})}>
              Clear Form
            </Button>
            <div className="flex gap-3">
              <Button variant="outline" onClick={handleSaveForm}>
                Save as Draft
              </Button>
              <Button onClick={handleSubmit}>
                <CheckCircle className="w-4 h-4 mr-2" />
                Submit Form
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Validation Summary */}
      {Object.keys(errors).length > 0 && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
              <div>
                <p className="font-semibold text-red-900 mb-2">Please correct the following errors:</p>
                <ul className="text-sm text-red-700 space-y-1">
                  {Object.entries(errors).map(([fieldName, error]) => (
                    <li key={fieldName}>• {error}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}