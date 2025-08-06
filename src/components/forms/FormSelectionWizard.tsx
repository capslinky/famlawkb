'use client';

import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, FileText, AlertCircle, CheckCircle, HelpCircle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface WizardStep {
  id: string;
  question: string;
  helpText?: string;
  options: {
    label: string;
    value: string;
    description?: string;
    nextStep?: string;
    forms?: string[];
  }[];
}

interface RecommendedForm {
  name: string;
  formNumber?: string;
  description: string;
  priority: 'required' | 'recommended' | 'optional';
  downloadUrl?: string;
  instructions?: string;
}

const wizardSteps: WizardStep[] = [
  {
    id: 'initial',
    question: 'What type of family law matter do you need help with?',
    helpText: 'Select the option that best describes your current situation',
    options: [
      {
        label: 'Starting a Divorce',
        value: 'divorce_start',
        description: 'I want to file for divorce or legal separation',
        nextStep: 'divorce_children'
      },
      {
        label: 'Responding to Divorce',
        value: 'divorce_respond',
        description: 'I was served with divorce papers',
        nextStep: 'response_timeline'
      },
      {
        label: 'Child Support',
        value: 'child_support',
        description: 'Establish, modify, or enforce child support',
        nextStep: 'support_type'
      },
      {
        label: 'Child Custody',
        value: 'custody',
        description: 'Establish or modify parenting time/decision-making',
        nextStep: 'custody_status'
      },
      {
        label: 'Protection Order',
        value: 'protection',
        description: 'Seeking protection from domestic violence',
        forms: ['order_protection_petition', 'protected_address_request']
      },
      {
        label: 'Paternity',
        value: 'paternity',
        description: 'Establish legal parent-child relationship',
        nextStep: 'paternity_status'
      },
      {
        label: 'Spousal Maintenance',
        value: 'spousal_maintenance',
        description: 'Alimony/spousal support issues',
        nextStep: 'maintenance_type'
      },
      {
        label: 'Modifications',
        value: 'modifications',
        description: 'Change existing court orders',
        nextStep: 'modification_type'
      }
    ]
  },
  {
    id: 'divorce_children',
    question: 'Do you have minor children (under 18) with your spouse?',
    options: [
      {
        label: 'Yes, we have minor children',
        value: 'with_children',
        nextStep: 'divorce_agreement'
      },
      {
        label: 'No minor children',
        value: 'no_children',
        nextStep: 'divorce_agreement'
      },
      {
        label: 'Wife is pregnant',
        value: 'pregnant',
        nextStep: 'divorce_agreement'
      }
    ]
  },
  {
    id: 'divorce_agreement',
    question: 'Do you and your spouse agree on all terms?',
    helpText: 'This includes property division, debts, custody (if applicable), and support',
    options: [
      {
        label: 'Yes, we agree on everything',
        value: 'uncontested',
        forms: ['divorce_petition_consent', 'marital_settlement_agreement']
      },
      {
        label: 'We agree on most things',
        value: 'partial_agreement',
        forms: ['divorce_petition', 'disclosure_statement', 'resolution_statement']
      },
      {
        label: 'No, we disagree on important issues',
        value: 'contested',
        forms: ['divorce_petition', 'disclosure_statement', 'financial_affidavit', 'preliminary_injunction']
      }
    ]
  },
  {
    id: 'response_timeline',
    question: 'When were you served with the papers?',
    helpText: 'You typically have 20 days (in-state) or 30 days (out-of-state) to respond',
    options: [
      {
        label: 'Within the last 10 days',
        value: 'recent',
        forms: ['response_divorce', 'disclosure_statement', 'financial_affidavit']
      },
      {
        label: '10-20 days ago',
        value: 'urgent',
        forms: ['response_divorce', 'disclosure_statement', 'financial_affidavit', 'notice_appearance']
      },
      {
        label: 'More than 20 days ago',
        value: 'late',
        forms: ['response_divorce', 'motion_set_aside_default', 'disclosure_statement']
      },
      {
        label: 'Not served yet, but I know about it',
        value: 'acceptance',
        forms: ['acceptance_of_service', 'response_divorce']
      }
    ]
  },
  {
    id: 'support_type',
    question: 'What do you need to do with child support?',
    options: [
      {
        label: 'Establish new child support order',
        value: 'establish',
        forms: ['child_support_worksheet', 'financial_affidavit', 'employer_information']
      },
      {
        label: 'Modify existing support order',
        value: 'modify',
        forms: ['petition_modify_child_support', 'child_support_worksheet', 'financial_affidavit']
      },
      {
        label: 'Enforce unpaid support',
        value: 'enforce',
        forms: ['motion_contempt', 'judgment_arrears']
      },
      {
        label: 'Stop or reduce support',
        value: 'terminate',
        forms: ['petition_modify_child_support', 'motion_emancipation']
      }
    ]
  },
  {
    id: 'custody_status',
    question: 'What is the current custody situation?',
    options: [
      {
        label: 'No current court orders',
        value: 'no_orders',
        nextStep: 'custody_parents_married'
      },
      {
        label: 'Temporary orders in place',
        value: 'temporary',
        forms: ['motion_modify_temporary', 'parenting_plan']
      },
      {
        label: 'Final orders I want to change',
        value: 'final',
        forms: ['petition_modify_custody', 'parenting_plan', 'good_faith_consultation']
      },
      {
        label: 'Emergency situation',
        value: 'emergency',
        forms: ['emergency_motion', 'order_protection_petition', 'ex_parte_motion']
      }
    ]
  },
  {
    id: 'custody_parents_married',
    question: 'Are the parents married to each other?',
    options: [
      {
        label: 'Yes, currently married',
        value: 'married',
        forms: ['divorce_petition_children', 'temporary_orders_request', 'parenting_plan']
      },
      {
        label: 'No, never married',
        value: 'unmarried',
        forms: ['petition_establish_custody', 'petition_establish_paternity', 'parenting_plan']
      },
      {
        label: 'Were married, now divorced',
        value: 'divorced',
        forms: ['petition_modify_custody', 'parenting_plan']
      }
    ]
  },
  {
    id: 'paternity_status',
    question: 'What is the current status of paternity?',
    options: [
      {
        label: 'Father not on birth certificate',
        value: 'not_established',
        forms: ['petition_establish_paternity', 'acknowledgment_paternity']
      },
      {
        label: 'Need to challenge paternity',
        value: 'challenge',
        forms: ['petition_disestablish_paternity', 'genetic_testing_motion']
      },
      {
        label: 'Establish rights as father',
        value: 'establish_rights',
        forms: ['petition_establish_paternity', 'petition_custody_unmarried', 'parenting_plan']
      }
    ]
  },
  {
    id: 'maintenance_type',
    question: 'What do you need regarding spousal maintenance/alimony?',
    options: [
      {
        label: 'Request spousal maintenance',
        value: 'request',
        forms: ['motion_temporary_spousal_maintenance', 'financial_affidavit']
      },
      {
        label: 'Modify existing maintenance',
        value: 'modify',
        forms: ['petition_modify_spousal_maintenance', 'financial_affidavit']
      },
      {
        label: 'Terminate maintenance',
        value: 'terminate',
        forms: ['motion_terminate_spousal_maintenance']
      },
      {
        label: 'Enforce unpaid maintenance',
        value: 'enforce',
        forms: ['motion_contempt', 'judgment_arrears']
      }
    ]
  },
  {
    id: 'modification_type',
    question: 'What type of order do you want to modify?',
    options: [
      {
        label: 'Child Support',
        value: 'modify_support',
        forms: ['petition_modify_child_support', 'child_support_worksheet', 'financial_affidavit']
      },
      {
        label: 'Custody/Parenting Time',
        value: 'modify_custody',
        forms: ['petition_modify_custody', 'parenting_plan', 'good_faith_consultation']
      },
      {
        label: 'Spousal Maintenance',
        value: 'modify_maintenance',
        forms: ['petition_modify_spousal_maintenance', 'financial_affidavit']
      },
      {
        label: 'Multiple Orders',
        value: 'modify_multiple',
        forms: ['petition_post_decree_relief', 'financial_affidavit', 'parenting_plan']
      }
    ]
  }
];

const formDatabase: Record<string, RecommendedForm> = {
  divorce_petition_children: {
    name: 'Petition for Dissolution of Marriage (With Children)',
    formNumber: 'DR11p',
    description: 'Initial petition to start divorce when you have minor children',
    priority: 'required',
    instructions: 'Must be filed with the Clerk of Court along with required fees'
  },
  divorce_petition: {
    name: 'Petition for Dissolution of Marriage',
    formNumber: 'DR11p',
    description: 'Initial petition to start divorce proceedings',
    priority: 'required',
    instructions: 'File with Clerk of Court to open your case'
  },
  response_divorce: {
    name: 'Response to Petition for Dissolution',
    formNumber: 'DR12p',
    description: 'Official response when served with divorce papers',
    priority: 'required',
    instructions: 'Must be filed within 20 days (in-state) or 30 days (out-of-state)'
  },
  disclosure_statement: {
    name: 'Disclosure Statement',
    formNumber: 'DRDS10f',
    description: 'Initial financial disclosure required in all family cases',
    priority: 'required',
    instructions: 'Due 40 days after filing/response'
  },
  financial_affidavit: {
    name: 'Affidavit of Financial Information',
    formNumber: 'DROSC13f',
    description: 'Detailed financial information for support calculations',
    priority: 'required',
    instructions: 'Required for all cases involving support or property division'
  },
  child_support_worksheet: {
    name: 'Child Support Worksheet',
    formNumber: 'CSW',
    description: 'Calculate guideline child support amount',
    priority: 'required',
    instructions: 'Use official Arizona calculator or court-provided worksheet'
  },
  parenting_plan: {
    name: 'Parenting Plan',
    formNumber: 'DRPP10f',
    description: 'Detailed plan for custody and parenting time',
    priority: 'required',
    instructions: 'Required in all cases involving minor children'
  },
  order_protection_petition: {
    name: 'Petition for Order of Protection',
    formNumber: 'AOC-OP1',
    description: 'Request protection from domestic violence',
    priority: 'required',
    instructions: 'Can be filed at any court, available 24/7 through AZPOINT'
  },
  emergency_motion: {
    name: 'Emergency Motion',
    formNumber: 'DR15g',
    description: 'Request immediate court action for urgent matters',
    priority: 'required',
    instructions: 'Must show immediate and irreparable harm'
  },
  preliminary_injunction: {
    name: 'Preliminary Injunction',
    formNumber: 'DR16p',
    description: 'Automatic orders preventing asset disposal during divorce',
    priority: 'recommended',
    instructions: 'Automatically effective upon filing and service'
  },
  marital_settlement_agreement: {
    name: 'Marital Settlement Agreement',
    formNumber: 'Custom',
    description: 'Written agreement on all divorce terms',
    priority: 'required',
    instructions: 'Must cover all assets, debts, custody, and support issues'
  },
  acceptance_of_service: {
    name: 'Acceptance of Service',
    formNumber: 'DR22f',
    description: 'Voluntarily accept service without formal process',
    priority: 'optional',
    instructions: 'Saves time and service fees if both parties cooperate'
  },
  motion_set_aside_default: {
    name: 'Motion to Set Aside Default',
    formNumber: 'DR24g',
    description: 'Request to undo default judgment',
    priority: 'required',
    instructions: 'Must show good cause for missing deadline'
  },
  petition_modify_child_support: {
    name: 'Petition to Modify Child Support',
    formNumber: 'DRS84p',
    description: 'Request changes to existing support order',
    priority: 'required',
    instructions: 'Must show substantial and continuing change in circumstances'
  },
  petition_establish_paternity: {
    name: 'Petition to Establish Paternity',
    formNumber: 'DR40p',
    description: 'Establish legal father-child relationship',
    priority: 'required',
    instructions: 'Can include requests for custody and support'
  },
  good_faith_consultation: {
    name: 'Good Faith Consultation Certificate',
    formNumber: 'DR72f',
    description: 'Certify attempt to resolve issues outside court',
    priority: 'recommended',
    instructions: 'Required before filing certain motions'
  },
  protected_address_request: {
    name: 'Request for Protected Address',
    formNumber: 'DRRPA10f',
    description: 'Keep your address confidential in court records',
    priority: 'optional',
    instructions: 'For domestic violence victims or those with safety concerns'
  }
};

export default function FormSelectionWizard() {
  const [currentStep, setCurrentStep] = useState('initial');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [recommendedForms, setRecommendedForms] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [history, setHistory] = useState<string[]>(['initial']);

  const getCurrentStepData = () => {
    return wizardSteps.find(step => step.id === currentStep);
  };

  const handleOptionSelect = (value: string, nextStep?: string, forms?: string[]) => {
    const newAnswers = { ...answers, [currentStep]: value };
    setAnswers(newAnswers);

    if (forms && forms.length > 0) {
      // We have forms to recommend
      setRecommendedForms(forms);
      setShowResults(true);
    } else if (nextStep) {
      // Move to next step
      setCurrentStep(nextStep);
      setHistory([...history, nextStep]);
    }
  };

  const handleBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      const previousStep = newHistory[newHistory.length - 1];
      setCurrentStep(previousStep);
      setHistory(newHistory);
      setShowResults(false);
    }
  };

  const handleRestart = () => {
    setCurrentStep('initial');
    setAnswers({});
    setRecommendedForms([]);
    setShowResults(false);
    setHistory(['initial']);
  };

  const getFormsByPriority = (priority: 'required' | 'recommended' | 'optional') => {
    return recommendedForms
      .map(formId => formDatabase[formId])
      .filter(form => form && form.priority === priority);
  };

  const stepData = getCurrentStepData();

  if (showResults) {
    const requiredForms = getFormsByPriority('required');
    const recommendedFormsData = getFormsByPriority('recommended');
    const optionalForms = getFormsByPriority('optional');

    return (
      <Card className="w-full">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <div>
              <h2 className="text-2xl font-bold">Your Recommended Forms</h2>
              <p className="text-gray-600">Based on your situation, here are the forms you'll need</p>
            </div>
          </div>

          {requiredForms.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">Required</span>
                Essential Forms You Must File
              </h3>
              <div className="space-y-3">
                {requiredForms.map((form, index) => (
                  <Card key={index} className="border-red-200 bg-red-50">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold">
                            {form.name}
                            {form.formNumber && (
                              <span className="ml-2 text-sm text-gray-600">({form.formNumber})</span>
                            )}
                          </h4>
                          <p className="text-sm text-gray-700 mt-1">{form.description}</p>
                          {form.instructions && (
                            <p className="text-sm text-blue-600 mt-2 flex items-center gap-1">
                              <HelpCircle className="w-4 h-4" />
                              {form.instructions}
                            </p>
                          )}
                        </div>
                        <Button size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Get Form
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {recommendedFormsData.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">Recommended</span>
                Additional Forms That May Help
              </h3>
              <div className="space-y-3">
                {recommendedFormsData.map((form, index) => (
                  <Card key={index} className="border-yellow-200 bg-yellow-50">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold">
                            {form.name}
                            {form.formNumber && (
                              <span className="ml-2 text-sm text-gray-600">({form.formNumber})</span>
                            )}
                          </h4>
                          <p className="text-sm text-gray-700 mt-1">{form.description}</p>
                          {form.instructions && (
                            <p className="text-sm text-blue-600 mt-2 flex items-center gap-1">
                              <HelpCircle className="w-4 h-4" />
                              {form.instructions}
                            </p>
                          )}
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Get Form
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {optionalForms.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Optional</span>
                Forms for Special Circumstances
              </h3>
              <div className="space-y-3">
                {optionalForms.map((form, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold">
                            {form.name}
                            {form.formNumber && (
                              <span className="ml-2 text-sm text-gray-600">({form.formNumber})</span>
                            )}
                          </h4>
                          <p className="text-sm text-gray-700 mt-1">{form.description}</p>
                          {form.instructions && (
                            <p className="text-sm text-blue-600 mt-2 flex items-center gap-1">
                              <HelpCircle className="w-4 h-4" />
                              {form.instructions}
                            </p>
                          )}
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Get Form
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold mb-1">Important Next Steps:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Download and carefully read all required forms</li>
                    <li>• Gather necessary information and documents</li>
                    <li>• Complete forms in black ink or type them</li>
                    <li>• Make copies for your records</li>
                    <li>• File originals with the court clerk</li>
                    <li>• Pay required filing fees or request fee waiver</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 flex gap-3">
            <Button variant="outline" onClick={handleRestart}>
              Start Over
            </Button>
            <Button variant="outline" onClick={handleBack}>
              Go Back
            </Button>
            <Button>
              Save Form List
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!stepData) {
    return <div>Error: Step not found</div>;
  }

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Form Selection Assistant</h2>
            <span className="text-sm text-gray-500">
              Step {history.length} of {history.length + 2}
            </span>
          </div>
          
          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(history.length / (history.length + 2)) * 100}%` }}
            />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">{stepData.question}</h3>
          {stepData.helpText && (
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              {stepData.helpText}
            </p>
          )}
        </div>

        <div className="space-y-3 mb-6">
          {stepData.options.map((option, index) => (
            <Card 
              key={index}
              className="cursor-pointer hover:shadow-md transition-shadow border-2 hover:border-blue-300"
              onClick={() => handleOptionSelect(option.value, option.nextStep, option.forms)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">{option.label}</h4>
                    {option.description && (
                      <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                    )}
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {history.length > 1 && (
          <div className="flex gap-3">
            <Button variant="outline" onClick={handleBack}>
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button variant="outline" onClick={handleRestart}>
              Start Over
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}