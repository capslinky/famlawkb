'use client';

import Link from 'next/link';
import { ArrowLeft, FileText, Info } from 'lucide-react';
import EnhancedForm from '@/components/forms/EnhancedForm';
import { FormValidationSchema } from '@/lib/formValidation';
import { Card, CardContent } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const divorcePetitionSchema: FormValidationSchema = {
  // Petitioner Information
  petitionerFullName: {
    rules: [
      { type: 'required', message: 'Your full legal name is required' },
      { type: 'minLength', value: 3, message: 'Name must be at least 3 characters' },
    ],
    helpText: 'Enter your full legal name as it appears on your marriage certificate or government ID',
  },
  petitionerAddress: {
    rules: [
      { type: 'required', message: 'Current address is required' },
    ],
    helpText: 'This must be your current residential address in Arizona',
  },
  petitionerCity: {
    rules: [
      { type: 'required', message: 'City is required' },
    ],
  },
  petitionerZip: {
    rules: [
      { type: 'required', message: 'ZIP code is required' },
      { type: 'pattern', value: /^\d{5}(-\d{4})?$/, message: 'Enter a valid ZIP code' },
    ],
  },
  petitionerPhone: {
    rules: [
      { type: 'required', message: 'Phone number is required' },
      { type: 'phone', message: 'Enter a valid phone number' },
    ],
    helpText: 'Enter a phone number where the court can reach you during business hours',
  },
  petitionerEmail: {
    rules: [
      { type: 'required', message: 'Email address is required' },
      { type: 'email', message: 'Enter a valid email address' },
    ],
    helpText: 'Court documents may be sent to this email address',
  },

  // Respondent Information
  respondentFullName: {
    rules: [
      { type: 'required', message: 'Spouse\'s full legal name is required' },
      { type: 'minLength', value: 3, message: 'Name must be at least 3 characters' },
    ],
    helpText: 'Enter your spouse\'s full legal name as it appears on official documents',
  },
  respondentAddress: {
    rules: [
      { type: 'required', message: 'Spouse\'s address is required' },
    ],
    helpText: 'Enter the address where your spouse can be served with divorce papers',
  },

  // Marriage Information
  marriageDate: {
    rules: [
      { type: 'required', message: 'Marriage date is required' },
      { type: 'date', message: 'Enter a valid date' },
      {
        type: 'custom',
        message: 'Marriage date cannot be in the future',
        validator: (value: string) => {
          if (!value) return true;
          return new Date(value) <= new Date();
        },
      },
    ],
    helpText: 'Enter the exact date you were legally married',
  },
  marriageCity: {
    rules: [
      { type: 'required', message: 'City of marriage is required' },
    ],
  },
  marriageState: {
    rules: [
      { type: 'required', message: 'State/Country of marriage is required' },
    ],
  },
  separationDate: {
    rules: [
      { type: 'date', message: 'Enter a valid date' },
      {
        type: 'custom',
        message: 'Separation date must be after marriage date',
        validator: (value: string, formData: any) => {
          if (!value || !formData.marriageDate) return true;
          return new Date(value) > new Date(formData.marriageDate);
        },
      },
    ],
    helpText: 'Enter the date you and your spouse separated (optional but helpful)',
  },

  // Children Information
  hasChildren: {
    rules: [
      { type: 'required', message: 'Please indicate if you have children together' },
    ],
    helpText: 'Include all children under 18 born or adopted during the marriage',
  },
  numberOfChildren: {
    rules: [
      { type: 'required', message: 'Number of children is required' },
      { type: 'number', message: 'Enter a valid number' },
      { type: 'minValue', value: 1, message: 'Must have at least 1 child' },
    ],
    helpText: 'Enter the total number of minor children (under 18)',
    dependsOn: { field: 'hasChildren', value: 'yes' },
  },
  childrenNames: {
    rules: [
      { type: 'required', message: 'Children\'s names are required' },
    ],
    helpText: 'List all children\'s full names and birthdates',
    dependsOn: { field: 'hasChildren', value: 'yes' },
  },

  // Property & Debts
  hasProperty: {
    rules: [
      { type: 'required', message: 'Please indicate if you own property together' },
    ],
    helpText: 'Include real estate, vehicles, bank accounts, retirement accounts, etc.',
  },
  propertyDescription: {
    rules: [
      { type: 'required', message: 'Property description is required' },
    ],
    helpText: 'Briefly describe major assets and estimated values',
    dependsOn: { field: 'hasProperty', value: 'yes' },
  },
  hasDebts: {
    rules: [
      { type: 'required', message: 'Please indicate if you have joint debts' },
    ],
    helpText: 'Include mortgages, car loans, credit cards, etc.',
  },
  debtsDescription: {
    rules: [
      { type: 'required', message: 'Debt description is required' },
    ],
    helpText: 'Briefly describe major debts and estimated amounts',
    dependsOn: { field: 'hasDebts', value: 'yes' },
  },

  // Support Requests
  requestChildSupport: {
    rules: [],
    helpText: 'Check if you are requesting child support from your spouse',
    dependsOn: { field: 'hasChildren', value: 'yes' },
  },
  requestSpousalSupport: {
    rules: [],
    helpText: 'Check if you are requesting spousal maintenance (alimony)',
  },

  // Grounds for Divorce
  groundsForDivorce: {
    rules: [
      { type: 'required', message: 'Please select grounds for divorce' },
    ],
    helpText: 'Arizona is a no-fault state. Most people select "Irretrievable breakdown"',
  },

  // Residency Requirements
  meetResidency: {
    rules: [
      { type: 'required', message: 'Residency confirmation is required' },
      {
        type: 'custom',
        message: 'You must meet Arizona residency requirements to file for divorce',
        validator: (value: string) => value === 'yes',
      },
    ],
    helpText: 'You or your spouse must have lived in Arizona for at least 90 days before filing',
  },
};

const formSections = [
  {
    title: 'Petitioner Information (You)',
    description: 'Your personal information as the person filing for divorce',
    fields: [
      { name: 'petitionerFullName', label: 'Full Legal Name', type: 'text' as const, required: true },
      { name: 'petitionerAddress', label: 'Street Address', type: 'text' as const, required: true },
      { name: 'petitionerCity', label: 'City', type: 'text' as const, required: true },
      { 
        name: 'petitionerState', 
        label: 'State', 
        type: 'select' as const, 
        options: [{ value: 'AZ', label: 'Arizona' }],
        required: true 
      },
      { name: 'petitionerZip', label: 'ZIP Code', type: 'text' as const, required: true },
      { name: 'petitionerPhone', label: 'Phone Number', type: 'tel' as const, required: true },
      { name: 'petitionerEmail', label: 'Email Address', type: 'email' as const, required: true },
    ],
  },
  {
    title: 'Respondent Information (Your Spouse)',
    description: 'Information about the person you are divorcing',
    fields: [
      { name: 'respondentFullName', label: 'Full Legal Name', type: 'text' as const, required: true },
      { name: 'respondentAddress', label: 'Street Address', type: 'text' as const, required: true },
      { name: 'respondentCity', label: 'City', type: 'text' as const, required: true },
      { name: 'respondentState', label: 'State', type: 'text' as const, required: true },
      { name: 'respondentZip', label: 'ZIP Code', type: 'text' as const },
      { name: 'respondentPhone', label: 'Phone Number (if known)', type: 'tel' as const },
    ],
  },
  {
    title: 'Marriage Information',
    description: 'Details about your marriage',
    fields: [
      { name: 'marriageDate', label: 'Date of Marriage', type: 'date' as const, required: true },
      { name: 'marriageCity', label: 'City/Place of Marriage', type: 'text' as const, required: true },
      { name: 'marriageState', label: 'State/Country of Marriage', type: 'text' as const, required: true },
      { name: 'separationDate', label: 'Date of Separation', type: 'date' as const },
      {
        name: 'groundsForDivorce',
        label: 'Grounds for Divorce',
        type: 'select' as const,
        options: [
          { value: 'irretrievable', label: 'The marriage is irretrievably broken' },
          { value: 'covenant', label: 'Covenant marriage grounds' },
        ],
        required: true,
      },
    ],
  },
  {
    title: 'Children',
    description: 'Information about minor children',
    fields: [
      {
        name: 'hasChildren',
        label: 'Do you have minor children together?',
        type: 'radio' as const,
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
        required: true,
      },
      {
        name: 'numberOfChildren',
        label: 'Number of Minor Children',
        type: 'number' as const,
        required: true,
        dependsOn: { field: 'hasChildren', value: 'yes' },
      },
      {
        name: 'childrenNames',
        label: 'Children\'s Names and Birthdates',
        type: 'textarea' as const,
        placeholder: 'Example: John Doe (01/15/2010), Jane Doe (03/22/2012)',
        required: true,
        dependsOn: { field: 'hasChildren', value: 'yes' },
      },
      {
        name: 'requestChildSupport',
        label: 'Request child support',
        type: 'checkbox' as const,
        dependsOn: { field: 'hasChildren', value: 'yes' },
      },
    ],
  },
  {
    title: 'Property and Debts',
    description: 'Information about assets and debts',
    fields: [
      {
        name: 'hasProperty',
        label: 'Do you own property together?',
        type: 'radio' as const,
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
        required: true,
      },
      {
        name: 'propertyDescription',
        label: 'Describe Major Property',
        type: 'textarea' as const,
        placeholder: 'List major assets like homes, vehicles, bank accounts, retirement accounts',
        required: true,
        dependsOn: { field: 'hasProperty', value: 'yes' },
      },
      {
        name: 'hasDebts',
        label: 'Do you have joint debts?',
        type: 'radio' as const,
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
        required: true,
      },
      {
        name: 'debtsDescription',
        label: 'Describe Major Debts',
        type: 'textarea' as const,
        placeholder: 'List major debts like mortgages, car loans, credit cards',
        required: true,
        dependsOn: { field: 'hasDebts', value: 'yes' },
      },
    ],
  },
  {
    title: 'Support Requests',
    description: 'Indicate what support you are requesting',
    fields: [
      {
        name: 'requestSpousalSupport',
        label: 'Request spousal maintenance (alimony)',
        type: 'checkbox' as const,
      },
    ],
  },
  {
    title: 'Residency Requirements',
    description: 'Confirm you meet Arizona filing requirements',
    fields: [
      {
        name: 'meetResidency',
        label: 'I confirm that either I or my spouse has lived in Arizona for at least 90 days',
        type: 'radio' as const,
        options: [
          { value: 'yes', label: 'Yes, residency requirement is met' },
          { value: 'no', label: 'No, neither of us meets the requirement' },
        ],
        required: true,
      },
    ],
  },
];

export default function EnhancedDivorcePetitionPage() {
  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (data: Record<string, any>) => {
    // In a real app, this would submit to a server
    console.log('Form submitted:', data);
    
    // Show success message
    setShowSuccess(true);
    
    // Simulate processing
    setTimeout(() => {
      // Redirect to next steps or download page
      router.push('/forms');
    }, 3000);
  };

  const handleSave = async (data: Record<string, any>) => {
    // Save to localStorage or server
    console.log('Draft saved:', data);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Interactive Divorce Petition</h1>
              <p className="text-blue-100">Complete your divorce petition online with guidance</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/forms" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Forms
          </Link>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-5xl mx-auto px-6">
          {/* Information Banner */}
          <Card className="mb-8 border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-blue-600 mt-0.5" />
                <div>
                  <h2 className="font-semibold text-blue-900 mb-2">Before You Begin</h2>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• This form will help you create a Petition for Dissolution of Marriage</li>
                    <li>• You\'ll need information about your marriage, children, property, and debts</li>
                    <li>• The form automatically saves your progress as you type</li>
                    <li>• Required fields are marked with a red asterisk (*)</li>
                    <li>• Click the help icon next to any field for more information</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Success Message */}
          {showSuccess && (
            <Card className="mb-8 border-green-200 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-600"></div>
                  <div>
                    <h3 className="font-semibold text-green-900">Processing Your Petition...</h3>
                    <p className="text-sm text-green-800">Generating your divorce petition documents...</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Enhanced Form */}
          <EnhancedForm
            title="Petition for Dissolution of Marriage"
            description="Complete all required information to generate your divorce petition"
            sections={formSections}
            schema={divorcePetitionSchema}
            onSubmit={handleSubmit}
            onSave={handleSave}
            submitButtonText="Generate Petition"
            showProgress={true}
            allowDraftSave={true}
          />
        </div>
      </div>
    </main>
  );
}