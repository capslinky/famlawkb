// Form validation engine for Arizona Family Law forms

export type ValidationRule = {
  type: 'required' | 'email' | 'phone' | 'minLength' | 'maxLength' | 'pattern' | 'custom' | 'date' | 'number' | 'minValue' | 'maxValue';
  value?: any;
  message: string;
  validator?: (value: any, formData?: any) => boolean;
};

export type FieldValidation = {
  rules: ValidationRule[];
  helpText?: string;
  warningText?: string;
  dependsOn?: {
    field: string;
    value: any;
  };
};

export type FormValidationSchema = {
  [fieldName: string]: FieldValidation;
};

export type ValidationError = {
  field: string;
  message: string;
  type: ValidationRule['type'];
};

export type ValidationResult = {
  isValid: boolean;
  errors: ValidationError[];
  warnings: string[];
};

// Common validation patterns
const PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
  zipCode: /^\d{5}(-\d{4})?$/,
  ssn: /^\d{3}-?\d{2}-?\d{4}$/,
  caseNumber: /^[A-Z]{2}\d{4}-\d{6}$/,
  azBarNumber: /^\d{6}$/,
};

// Validation functions
const validators = {
  required: (value: any): boolean => {
    if (value === null || value === undefined) return false;
    if (typeof value === 'string') return value.trim().length > 0;
    if (Array.isArray(value)) return value.length > 0;
    return true;
  },

  email: (value: string): boolean => {
    if (!value) return true; // Let required handle empty values
    return PATTERNS.email.test(value);
  },

  phone: (value: string): boolean => {
    if (!value) return true;
    return PATTERNS.phone.test(value.replace(/\D/g, '').slice(-10));
  },

  minLength: (value: string, min: number): boolean => {
    if (!value) return true;
    return value.length >= min;
  },

  maxLength: (value: string, max: number): boolean => {
    if (!value) return true;
    return value.length <= max;
  },

  pattern: (value: string, pattern: RegExp): boolean => {
    if (!value) return true;
    return pattern.test(value);
  },

  date: (value: string): boolean => {
    if (!value) return true;
    const date = new Date(value);
    return !isNaN(date.getTime());
  },

  number: (value: any): boolean => {
    if (!value && value !== 0) return true;
    return !isNaN(Number(value));
  },

  minValue: (value: number, min: number): boolean => {
    if (value === null || value === undefined) return true;
    return Number(value) >= min;
  },

  maxValue: (value: number, max: number): boolean => {
    if (value === null || value === undefined) return true;
    return Number(value) <= max;
  },
};

// Main validation class
export class FormValidator {
  private schema: FormValidationSchema;
  private formData: Record<string, any> = {};
  private errors: ValidationError[] = [];
  private warnings: string[] = [];
  private touchedFields: Set<string> = new Set();

  constructor(schema: FormValidationSchema) {
    this.schema = schema;
  }

  // Set entire form data
  setFormData(data: Record<string, any>): void {
    this.formData = { ...data };
  }

  // Update single field
  updateField(field: string, value: any): void {
    this.formData[field] = value;
    this.touchedFields.add(field);
  }

  // Mark field as touched
  touchField(field: string): void {
    this.touchedFields.add(field);
  }

  // Check if field should be validated based on dependencies
  private shouldValidateField(fieldName: string): boolean {
    const fieldConfig = this.schema[fieldName];
    if (!fieldConfig?.dependsOn) return true;

    const { field, value } = fieldConfig.dependsOn;
    return this.formData[field] === value;
  }

  // Validate single field
  validateField(fieldName: string, showWarnings = false): ValidationError[] {
    const fieldConfig = this.schema[fieldName];
    if (!fieldConfig) return [];

    // Skip if field has dependencies that aren't met
    if (!this.shouldValidateField(fieldName)) return [];

    const value = this.formData[fieldName];
    const fieldErrors: ValidationError[] = [];

    for (const rule of fieldConfig.rules) {
      let isValid = true;

      switch (rule.type) {
        case 'required':
          isValid = validators.required(value);
          break;
        case 'email':
          isValid = validators.email(value);
          break;
        case 'phone':
          isValid = validators.phone(value);
          break;
        case 'minLength':
          isValid = validators.minLength(value, rule.value);
          break;
        case 'maxLength':
          isValid = validators.maxLength(value, rule.value);
          break;
        case 'pattern':
          isValid = validators.pattern(value, rule.value);
          break;
        case 'date':
          isValid = validators.date(value);
          break;
        case 'number':
          isValid = validators.number(value);
          break;
        case 'minValue':
          isValid = validators.minValue(value, rule.value);
          break;
        case 'maxValue':
          isValid = validators.maxValue(value, rule.value);
          break;
        case 'custom':
          if (rule.validator) {
            isValid = rule.validator(value, this.formData);
          }
          break;
      }

      if (!isValid) {
        fieldErrors.push({
          field: fieldName,
          message: rule.message,
          type: rule.type,
        });
      }
    }

    // Add warnings if requested
    if (showWarnings && fieldConfig.warningText && value) {
      this.warnings.push(fieldConfig.warningText);
    }

    return fieldErrors;
  }

  // Validate entire form
  validate(options: { showOnlyTouched?: boolean; showWarnings?: boolean } = {}): ValidationResult {
    const { showOnlyTouched = false, showWarnings = false } = options;
    this.errors = [];
    this.warnings = [];

    for (const fieldName in this.schema) {
      // Skip untouched fields if requested
      if (showOnlyTouched && !this.touchedFields.has(fieldName)) {
        continue;
      }

      const fieldErrors = this.validateField(fieldName, showWarnings);
      this.errors.push(...fieldErrors);
    }

    return {
      isValid: this.errors.length === 0,
      errors: this.errors,
      warnings: this.warnings,
    };
  }

  // Get errors for specific field
  getFieldErrors(fieldName: string): ValidationError[] {
    return this.errors.filter(error => error.field === fieldName);
  }

  // Get help text for field
  getFieldHelp(fieldName: string): string | undefined {
    return this.schema[fieldName]?.helpText;
  }

  // Clear all errors
  clearErrors(): void {
    this.errors = [];
    this.warnings = [];
  }

  // Reset form
  reset(): void {
    this.formData = {};
    this.errors = [];
    this.warnings = [];
    this.touchedFields.clear();
  }

  // Get form completion percentage
  getCompletionPercentage(): number {
    const requiredFields = Object.entries(this.schema)
      .filter(([_, config]) => config.rules.some(r => r.type === 'required'))
      .filter(([fieldName, _]) => this.shouldValidateField(fieldName));

    if (requiredFields.length === 0) return 100;

    const completedFields = requiredFields.filter(([fieldName, _]) => {
      const value = this.formData[fieldName];
      return validators.required(value);
    });

    return Math.round((completedFields.length / requiredFields.length) * 100);
  }

  // Export form data
  exportData(): Record<string, any> {
    return { ...this.formData };
  }

  // Import form data
  importData(data: Record<string, any>): void {
    this.formData = { ...data };
    // Mark all imported fields as touched
    Object.keys(data).forEach(field => this.touchedFields.add(field));
  }
}

// Pre-defined validation schemas for common forms
export const commonSchemas = {
  // Divorce petition basic info
  divorcePetition: {
    petitionerName: {
      rules: [
        { type: 'required', message: 'Petitioner name is required' },
        { type: 'minLength', value: 2, message: 'Name must be at least 2 characters' },
      ],
      helpText: 'Enter your full legal name as it appears on official documents',
    },
    respondentName: {
      rules: [
        { type: 'required', message: 'Respondent name is required' },
        { type: 'minLength', value: 2, message: 'Name must be at least 2 characters' },
      ],
      helpText: 'Enter your spouse\'s full legal name',
    },
    email: {
      rules: [
        { type: 'required', message: 'Email address is required' },
        { type: 'email', message: 'Please enter a valid email address' },
      ],
      helpText: 'We\'ll use this to send you updates about your case',
    },
    phone: {
      rules: [
        { type: 'required', message: 'Phone number is required' },
        { type: 'phone', message: 'Please enter a valid phone number' },
      ],
      helpText: 'Enter a phone number where the court can reach you',
    },
    marriageDate: {
      rules: [
        { type: 'required', message: 'Marriage date is required' },
        { type: 'date', message: 'Please enter a valid date' },
        {
          type: 'custom',
          message: 'Marriage date cannot be in the future',
          validator: (value: string) => {
            if (!value) return true;
            return new Date(value) <= new Date();
          },
        },
      ],
      helpText: 'Enter the date you were legally married',
    },
    separationDate: {
      rules: [
        { type: 'date', message: 'Please enter a valid date' },
        {
          type: 'custom',
          message: 'Separation date must be after marriage date',
          validator: (value: string, formData: any) => {
            if (!value || !formData.marriageDate) return true;
            return new Date(value) > new Date(formData.marriageDate);
          },
        },
      ],
      helpText: 'Enter the date you and your spouse separated (optional)',
    },
    hasChildren: {
      rules: [
        { type: 'required', message: 'Please indicate if you have children together' },
      ],
      helpText: 'Select yes if you have minor children (under 18) together',
    },
    numberOfChildren: {
      rules: [
        { type: 'required', message: 'Number of children is required' },
        { type: 'number', message: 'Please enter a valid number' },
        { type: 'minValue', value: 1, message: 'Must have at least 1 child' },
        { type: 'maxValue', value: 20, message: 'Please verify the number of children' },
      ],
      helpText: 'Enter the number of minor children you have together',
      dependsOn: { field: 'hasChildren', value: 'yes' },
    },
  } as FormValidationSchema,

  // Financial affidavit
  financialAffidavit: {
    monthlyIncome: {
      rules: [
        { type: 'required', message: 'Monthly income is required' },
        { type: 'number', message: 'Please enter a valid number' },
        { type: 'minValue', value: 0, message: 'Income cannot be negative' },
      ],
      helpText: 'Enter your gross monthly income from all sources',
    },
    monthlyExpenses: {
      rules: [
        { type: 'required', message: 'Monthly expenses are required' },
        { type: 'number', message: 'Please enter a valid number' },
        { type: 'minValue', value: 0, message: 'Expenses cannot be negative' },
      ],
      helpText: 'Enter your total monthly living expenses',
    },
    assets: {
      rules: [
        { type: 'required', message: 'Asset information is required' },
      ],
      helpText: 'List all significant assets (property, vehicles, accounts, etc.)',
    },
    debts: {
      rules: [
        { type: 'required', message: 'Debt information is required' },
      ],
      helpText: 'List all debts and liabilities',
    },
  } as FormValidationSchema,
};

// Helper function to format phone numbers
export function formatPhoneNumber(value: string): string {
  const cleaned = value.replace(/\D/g, '');
  if (cleaned.length <= 3) return cleaned;
  if (cleaned.length <= 6) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
  return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
}

// Helper function to format dates
export function formatDate(value: string): string {
  if (!value) return '';
  const date = new Date(value);
  if (isNaN(date.getTime())) return value;
  return date.toLocaleDateString('en-US');
}

// Helper function to format currency
export function formatCurrency(value: number | string): string {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(num)) return '$0.00';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(num);
}