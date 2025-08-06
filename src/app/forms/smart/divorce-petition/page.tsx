'use client';

import Link from 'next/link';
import { ArrowLeft, FileText, Info } from 'lucide-react';
import SmartForm from '@/components/forms/SmartForm';
import { Card, CardContent } from '@/components/ui/card';

const divorceFields = [
  // Personal Information Section
  {
    name: 'petitioner_firstName',
    label: 'Your First Name',
    type: 'text' as const,
    required: true,
    section: 'Personal Information',
    placeholder: 'John'
  },
  {
    name: 'petitioner_middleName',
    label: 'Your Middle Name',
    type: 'text' as const,
    section: 'Personal Information',
    placeholder: 'Michael'
  },
  {
    name: 'petitioner_lastName',
    label: 'Your Last Name',
    type: 'text' as const,
    required: true,
    section: 'Personal Information',
    placeholder: 'Smith'
  },
  {
    name: 'petitioner_dateOfBirth',
    label: 'Your Date of Birth',
    type: 'date' as const,
    required: true,
    section: 'Personal Information'
  },
  {
    name: 'petitioner_address',
    label: 'Your Street Address',
    type: 'text' as const,
    required: true,
    section: 'Personal Information',
    placeholder: '123 Main Street'
  },
  {
    name: 'petitioner_city',
    label: 'City',
    type: 'text' as const,
    required: true,
    section: 'Personal Information',
    placeholder: 'Phoenix'
  },
  {
    name: 'petitioner_state',
    label: 'State',
    type: 'select' as const,
    required: true,
    section: 'Personal Information',
    options: [
      { label: 'Arizona', value: 'AZ' },
      { label: 'Other', value: 'OTHER' }
    ]
  },
  {
    name: 'petitioner_zipCode',
    label: 'ZIP Code',
    type: 'text' as const,
    required: true,
    section: 'Personal Information',
    placeholder: '85001',
    validation: (value: string) => {
      if (value && !/^\d{5}(-\d{4})?$/.test(value)) {
        return 'Please enter a valid ZIP code';
      }
      return null;
    }
  },
  {
    name: 'petitioner_phone',
    label: 'Phone Number',
    type: 'tel' as const,
    required: true,
    section: 'Personal Information',
    placeholder: '(555) 123-4567'
  },
  {
    name: 'petitioner_email',
    label: 'Email Address',
    type: 'email' as const,
    required: true,
    section: 'Personal Information',
    placeholder: 'john.smith@email.com'
  },

  // Spouse Information Section
  {
    name: 'respondent_firstName',
    label: 'Spouse\'s First Name',
    type: 'text' as const,
    required: true,
    section: 'Spouse Information',
    placeholder: 'Jane'
  },
  {
    name: 'respondent_middleName',
    label: 'Spouse\'s Middle Name',
    type: 'text' as const,
    section: 'Spouse Information',
    placeholder: 'Ann'
  },
  {
    name: 'respondent_lastName',
    label: 'Spouse\'s Last Name',
    type: 'text' as const,
    required: true,
    section: 'Spouse Information',
    placeholder: 'Smith'
  },
  {
    name: 'respondent_dateOfBirth',
    label: 'Spouse\'s Date of Birth',
    type: 'date' as const,
    section: 'Spouse Information'
  },
  {
    name: 'respondent_address',
    label: 'Spouse\'s Current Address (if different)',
    type: 'text' as const,
    section: 'Spouse Information',
    placeholder: '456 Oak Avenue'
  },
  {
    name: 'respondent_city',
    label: 'Spouse\'s City',
    type: 'text' as const,
    section: 'Spouse Information',
    placeholder: 'Scottsdale'
  },
  {
    name: 'respondent_state',
    label: 'Spouse\'s State',
    type: 'select' as const,
    section: 'Spouse Information',
    options: [
      { label: 'Arizona', value: 'AZ' },
      { label: 'Other', value: 'OTHER' }
    ]
  },
  {
    name: 'respondent_zipCode',
    label: 'Spouse\'s ZIP Code',
    type: 'text' as const,
    section: 'Spouse Information',
    placeholder: '85250'
  },

  // Marriage Information Section
  {
    name: 'marriageDate',
    label: 'Date of Marriage',
    type: 'date' as const,
    required: true,
    section: 'Marriage Information',
    helpText: 'Enter the date you were legally married'
  },
  {
    name: 'marriageCity',
    label: 'City Where Married',
    type: 'text' as const,
    required: true,
    section: 'Marriage Information',
    placeholder: 'Las Vegas'
  },
  {
    name: 'marriageState',
    label: 'State/Country Where Married',
    type: 'text' as const,
    required: true,
    section: 'Marriage Information',
    placeholder: 'Nevada'
  },
  {
    name: 'separationDate',
    label: 'Date of Separation',
    type: 'date' as const,
    section: 'Marriage Information',
    helpText: 'Date you and your spouse stopped living together as a married couple'
  },

  // Children Information Section
  {
    name: 'hasChildren',
    label: 'Are there minor children from this marriage?',
    type: 'select' as const,
    required: true,
    section: 'Children Information',
    options: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' }
    ]
  },
  {
    name: 'numberOfChildren',
    label: 'Number of Minor Children',
    type: 'number' as const,
    section: 'Children Information',
    helpText: 'Only include children under 18 from this marriage'
  },

  // Financial Information Section
  {
    name: 'petitioner_employed',
    label: 'Are you currently employed?',
    type: 'select' as const,
    required: true,
    section: 'Financial Information',
    options: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
      { label: 'Self-employed', value: 'self-employed' }
    ]
  },
  {
    name: 'petitioner_employer',
    label: 'Employer Name',
    type: 'text' as const,
    section: 'Financial Information',
    placeholder: 'ABC Company'
  },
  {
    name: 'petitioner_monthlyIncome',
    label: 'Your Gross Monthly Income',
    type: 'number' as const,
    section: 'Financial Information',
    placeholder: '5000',
    helpText: 'Income before taxes and deductions'
  },
  {
    name: 'respondent_employed',
    label: 'Is your spouse currently employed?',
    type: 'select' as const,
    section: 'Financial Information',
    options: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
      { label: 'Self-employed', value: 'self-employed' },
      { label: 'Unknown', value: 'unknown' }
    ]
  },
  {
    name: 'respondent_monthlyIncome',
    label: 'Spouse\'s Estimated Monthly Income',
    type: 'number' as const,
    section: 'Financial Information',
    placeholder: '4500',
    helpText: 'Your best estimate if unknown'
  },

  // Case Information Section
  {
    name: 'county',
    label: 'County for Filing',
    type: 'select' as const,
    required: true,
    section: 'Case Information',
    options: [
      { label: 'Maricopa', value: 'maricopa' },
      { label: 'Pima', value: 'pima' },
      { label: 'Pinal', value: 'pinal' },
      { label: 'Yavapai', value: 'yavapai' },
      { label: 'Yuma', value: 'yuma' },
      { label: 'Coconino', value: 'coconino' },
      { label: 'Other', value: 'other' }
    ],
    helpText: 'File in the county where you or your spouse lives'
  },
  {
    name: 'grounds',
    label: 'Grounds for Divorce',
    type: 'select' as const,
    required: true,
    section: 'Case Information',
    options: [
      { label: 'The marriage is irretrievably broken', value: 'irretrievably_broken' },
      { label: 'Covenant marriage with grounds', value: 'covenant' }
    ],
    helpText: 'Arizona is a no-fault divorce state'
  },
  {
    name: 'requestingSpousalSupport',
    label: 'Are you requesting spousal maintenance (alimony)?',
    type: 'select' as const,
    section: 'Case Information',
    options: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
      { label: 'Undecided', value: 'undecided' }
    ]
  },
  {
    name: 'additionalRequests',
    label: 'Additional Requests or Special Circumstances',
    type: 'textarea' as const,
    section: 'Case Information',
    placeholder: 'Describe any special circumstances or additional requests...',
    helpText: 'Include any restraining orders, emergency custody, or other urgent matters'
  }
];

export default function SmartDivorcePetitionPage() {
  const handleFormSubmit = (data: Record<string, any>) => {
    console.log('Form submitted:', data);
    // Here you would typically:
    // 1. Generate the PDF form
    // 2. Save to database
    // 3. Redirect to success page
    alert('Form submitted successfully! You can now download your completed petition.');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-10 h-10" />
            <div>
              <h1 className="text-3xl font-bold">Smart Divorce Petition Form</h1>
              <p className="text-blue-100 text-lg">Interactive form with auto-save and validation</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/forms" className="text-blue-600 hover:text-blue-800">
              Forms
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Divorce Petition</span>
          </nav>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          {/* Information Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold">Auto-Save Enabled</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Your progress is automatically saved every few seconds
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold">Smart Validation</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Real-time validation helps prevent errors
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="w-5 h-5 text-purple-600" />
                  <h3 className="font-semibold">Secure Storage</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Your data is stored locally on your device
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Smart Form */}
          <SmartForm
            formType="divorce_petition"
            formTitle="Petition for Dissolution of Marriage"
            fields={divorceFields}
            onSubmit={handleFormSubmit}
          />

          {/* Help Section */}
          <Card className="mt-8">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Need Help?</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-medium mb-2">Filing Requirements:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• You or your spouse must have lived in Arizona for at least 90 days</li>
                    <li>• File in the county where you or your spouse resides</li>
                    <li>• Filing fee is approximately $350 (fee waiver available)</li>
                    <li>• Your spouse must be served with the papers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">After Filing:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Your spouse has 20 days (in-state) or 30 days (out-of-state) to respond</li>
                    <li>• You must complete financial disclosures within 40 days</li>
                    <li>• Minimum 60-day waiting period before divorce can be finalized</li>
                    <li>• Attend required parenting class if you have children</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Link 
              href="/forms" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Forms
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}