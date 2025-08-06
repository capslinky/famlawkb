// Form Storage Service - Manages form data persistence and auto-fill functionality

export interface FormData {
  id: string;
  formType: string;
  data: Record<string, any>;
  createdAt: string;
  updatedAt: string;
  version: number;
}

export interface UserProfile {
  // Personal Information
  firstName?: string;
  middleName?: string;
  lastName?: string;
  dateOfBirth?: string;
  ssn?: string; // Last 4 digits only for security
  
  // Contact Information
  streetAddress?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  phone?: string;
  email?: string;
  
  // Employment Information
  employer?: string;
  jobTitle?: string;
  monthlyIncome?: number;
  employmentStartDate?: string;
  
  // Spouse Information
  spouseFirstName?: string;
  spouseMiddleName?: string;
  spouseLastName?: string;
  spouseDateOfBirth?: string;
  marriageDate?: string;
  separationDate?: string;
  
  // Children Information
  children?: Array<{
    firstName: string;
    middleName?: string;
    lastName: string;
    dateOfBirth: string;
    ssn?: string; // Last 4 digits only
  }>;
  
  // Financial Information
  monthlyExpenses?: number;
  assets?: Array<{
    type: string;
    description: string;
    value: number;
  }>;
  debts?: Array<{
    creditor: string;
    amount: number;
    monthlyPayment: number;
  }>;
  
  // Case Information
  caseNumber?: string;
  countyOfFiling?: string;
  judgeAssigned?: string;
}

class FormStorageService {
  private readonly STORAGE_PREFIX = 'azfl_';
  private readonly PROFILE_KEY = `${this.STORAGE_PREFIX}user_profile`;
  private readonly FORMS_KEY = `${this.STORAGE_PREFIX}saved_forms`;
  private readonly AUTOSAVE_KEY = `${this.STORAGE_PREFIX}autosave`;

  // Check if localStorage is available
  private isStorageAvailable(): boolean {
    try {
      const test = '__storage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }

  // Save user profile for auto-fill
  saveUserProfile(profile: UserProfile): boolean {
    if (!this.isStorageAvailable()) return false;
    
    try {
      // Sanitize sensitive data
      const sanitizedProfile = {
        ...profile,
        ssn: profile.ssn ? profile.ssn.slice(-4) : undefined,
        children: profile.children?.map(child => ({
          ...child,
          ssn: child.ssn ? child.ssn.slice(-4) : undefined
        }))
      };
      
      localStorage.setItem(this.PROFILE_KEY, JSON.stringify(sanitizedProfile));
      return true;
    } catch (error) {
      console.error('Error saving user profile:', error);
      return false;
    }
  }

  // Get user profile for auto-fill
  getUserProfile(): UserProfile | null {
    if (!this.isStorageAvailable()) return null;
    
    try {
      const profileData = localStorage.getItem(this.PROFILE_KEY);
      return profileData ? JSON.parse(profileData) : null;
    } catch (error) {
      console.error('Error loading user profile:', error);
      return null;
    }
  }

  // Save form data
  saveForm(formData: Omit<FormData, 'id' | 'createdAt' | 'updatedAt'>): string | null {
    if (!this.isStorageAvailable()) return null;
    
    try {
      const forms = this.getAllForms();
      const id = this.generateFormId();
      const newForm: FormData = {
        ...formData,
        id,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      forms.push(newForm);
      localStorage.setItem(this.FORMS_KEY, JSON.stringify(forms));
      return id;
    } catch (error) {
      console.error('Error saving form:', error);
      return null;
    }
  }

  // Update existing form
  updateForm(id: string, data: Record<string, any>): boolean {
    if (!this.isStorageAvailable()) return false;
    
    try {
      const forms = this.getAllForms();
      const formIndex = forms.findIndex(f => f.id === id);
      
      if (formIndex === -1) return false;
      
      forms[formIndex] = {
        ...forms[formIndex],
        data,
        updatedAt: new Date().toISOString(),
        version: forms[formIndex].version + 1
      };
      
      localStorage.setItem(this.FORMS_KEY, JSON.stringify(forms));
      return true;
    } catch (error) {
      console.error('Error updating form:', error);
      return false;
    }
  }

  // Get all saved forms
  getAllForms(): FormData[] {
    if (!this.isStorageAvailable()) return [];
    
    try {
      const formsData = localStorage.getItem(this.FORMS_KEY);
      return formsData ? JSON.parse(formsData) : [];
    } catch (error) {
      console.error('Error loading forms:', error);
      return [];
    }
  }

  // Get specific form by ID
  getForm(id: string): FormData | null {
    const forms = this.getAllForms();
    return forms.find(f => f.id === id) || null;
  }

  // Delete form
  deleteForm(id: string): boolean {
    if (!this.isStorageAvailable()) return false;
    
    try {
      const forms = this.getAllForms();
      const filteredForms = forms.filter(f => f.id !== id);
      localStorage.setItem(this.FORMS_KEY, JSON.stringify(filteredForms));
      return true;
    } catch (error) {
      console.error('Error deleting form:', error);
      return false;
    }
  }

  // Auto-save form data (for crash recovery)
  autoSaveForm(formType: string, data: Record<string, any>): boolean {
    if (!this.isStorageAvailable()) return false;
    
    try {
      const autoSaveData = {
        formType,
        data,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem(`${this.AUTOSAVE_KEY}_${formType}`, JSON.stringify(autoSaveData));
      return true;
    } catch (error) {
      console.error('Error auto-saving form:', error);
      return false;
    }
  }

  // Recover auto-saved form
  recoverAutoSave(formType: string): Record<string, any> | null {
    if (!this.isStorageAvailable()) return null;
    
    try {
      const autoSaveData = localStorage.getItem(`${this.AUTOSAVE_KEY}_${formType}`);
      if (!autoSaveData) return null;
      
      const parsed = JSON.parse(autoSaveData);
      
      // Check if auto-save is less than 24 hours old
      const saveTime = new Date(parsed.timestamp);
      const now = new Date();
      const hoursSince = (now.getTime() - saveTime.getTime()) / (1000 * 60 * 60);
      
      if (hoursSince > 24) {
        // Clear old auto-save
        this.clearAutoSave(formType);
        return null;
      }
      
      return parsed.data;
    } catch (error) {
      console.error('Error recovering auto-save:', error);
      return null;
    }
  }

  // Clear auto-save for a form
  clearAutoSave(formType: string): boolean {
    if (!this.isStorageAvailable()) return false;
    
    try {
      localStorage.removeItem(`${this.AUTOSAVE_KEY}_${formType}`);
      return true;
    } catch (error) {
      console.error('Error clearing auto-save:', error);
      return false;
    }
  }

  // Export all data (for backup)
  exportAllData(): string | null {
    if (!this.isStorageAvailable()) return null;
    
    try {
      const exportData = {
        profile: this.getUserProfile(),
        forms: this.getAllForms(),
        exportDate: new Date().toISOString(),
        version: '1.0'
      };
      
      return JSON.stringify(exportData, null, 2);
    } catch (error) {
      console.error('Error exporting data:', error);
      return null;
    }
  }

  // Import data from backup
  importData(jsonData: string): boolean {
    if (!this.isStorageAvailable()) return false;
    
    try {
      const importData = JSON.parse(jsonData);
      
      if (importData.profile) {
        this.saveUserProfile(importData.profile);
      }
      
      if (importData.forms && Array.isArray(importData.forms)) {
        localStorage.setItem(this.FORMS_KEY, JSON.stringify(importData.forms));
      }
      
      return true;
    } catch (error) {
      console.error('Error importing data:', error);
      return false;
    }
  }

  // Clear all stored data
  clearAllData(): boolean {
    if (!this.isStorageAvailable()) return false;
    
    try {
      // Get all keys with our prefix
      const keys = Object.keys(localStorage).filter(key => key.startsWith(this.STORAGE_PREFIX));
      keys.forEach(key => localStorage.removeItem(key));
      return true;
    } catch (error) {
      console.error('Error clearing data:', error);
      return false;
    }
  }

  // Generate unique form ID
  private generateFormId(): string {
    return `form_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Auto-fill form fields from profile
  autoFillFromProfile(formType: string): Record<string, any> {
    const profile = this.getUserProfile();
    if (!profile) return {};

    // Map profile fields to common form fields based on form type
    const baseFields: Record<string, any> = {
      petitioner_firstName: profile.firstName,
      petitioner_middleName: profile.middleName,
      petitioner_lastName: profile.lastName,
      petitioner_dateOfBirth: profile.dateOfBirth,
      petitioner_address: profile.streetAddress,
      petitioner_city: profile.city,
      petitioner_state: profile.state,
      petitioner_zipCode: profile.zipCode,
      petitioner_phone: profile.phone,
      petitioner_email: profile.email,
      
      respondent_firstName: profile.spouseFirstName,
      respondent_middleName: profile.spouseMiddleName,
      respondent_lastName: profile.spouseLastName,
      respondent_dateOfBirth: profile.spouseDateOfBirth,
      
      marriageDate: profile.marriageDate,
      separationDate: profile.separationDate,
      caseNumber: profile.caseNumber,
      county: profile.countyOfFiling
    };

    // Add form-specific fields
    switch (formType) {
      case 'divorce_petition':
        return {
          ...baseFields,
          employer: profile.employer,
          jobTitle: profile.jobTitle,
          monthlyIncome: profile.monthlyIncome,
          children: profile.children
        };
      
      case 'financial_affidavit':
        return {
          ...baseFields,
          monthlyIncome: profile.monthlyIncome,
          monthlyExpenses: profile.monthlyExpenses,
          assets: profile.assets,
          debts: profile.debts,
          employer: profile.employer
        };
      
      case 'child_support':
        return {
          ...baseFields,
          children: profile.children,
          monthlyIncome: profile.monthlyIncome,
          employer: profile.employer
        };
      
      default:
        return baseFields;
    }
  }
}

// Export singleton instance
export const formStorage = new FormStorageService();

// Export convenience hooks for React components
export const useFormStorage = () => {
  return {
    saveProfile: formStorage.saveUserProfile.bind(formStorage),
    getProfile: formStorage.getUserProfile.bind(formStorage),
    saveForm: formStorage.saveForm.bind(formStorage),
    updateForm: formStorage.updateForm.bind(formStorage),
    getForm: formStorage.getForm.bind(formStorage),
    getAllForms: formStorage.getAllForms.bind(formStorage),
    deleteForm: formStorage.deleteForm.bind(formStorage),
    autoSave: formStorage.autoSaveForm.bind(formStorage),
    recoverAutoSave: formStorage.recoverAutoSave.bind(formStorage),
    clearAutoSave: formStorage.clearAutoSave.bind(formStorage),
    autoFill: formStorage.autoFillFromProfile.bind(formStorage),
    exportData: formStorage.exportAllData.bind(formStorage),
    importData: formStorage.importData.bind(formStorage),
    clearAll: formStorage.clearAllData.bind(formStorage)
  };
};