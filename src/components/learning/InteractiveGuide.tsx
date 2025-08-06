'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, Circle, AlertCircle, Info, HelpCircle, BookOpen, Target, Award, RotateCcw } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface GuideStep {
  id: string;
  title: string;
  content: string;
  instruction?: string;
  tip?: string;
  warning?: string;
  actionRequired?: {
    type: 'input' | 'select' | 'checkbox' | 'radio' | 'file' | 'confirm';
    label: string;
    options?: { value: string; label: string }[];
    validation?: (value: any) => boolean;
    errorMessage?: string;
  };
  image?: string;
  videoUrl?: string;
  requiredTime?: number; // in minutes
  documents?: string[];
  checkpoints?: {
    id: string;
    label: string;
    completed: boolean;
  }[];
}

interface InteractiveGuide {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: number; // in minutes
  steps: GuideStep[];
  prerequisites?: string[];
  outcomes?: string[];
  resources?: {
    title: string;
    url: string;
    type: 'form' | 'article' | 'video' | 'calculator';
  }[];
}

interface GuideProgress {
  guideId: string;
  currentStep: number;
  completedSteps: Set<string>;
  responses: Map<string, any>;
  startedAt: Date;
  lastAccessed: Date;
  completed: boolean;
  completedAt?: Date;
}

interface InteractiveGuideProps {
  guide: InteractiveGuide;
  onComplete?: (guideId: string, responses: Map<string, any>) => void;
  showProgress?: boolean;
  allowNavigation?: boolean;
}

// Sample interactive guides database
export const INTERACTIVE_GUIDES: InteractiveGuide[] = [
  {
    id: 'divorce-readiness',
    title: 'Divorce Readiness Assessment',
    description: 'Evaluate if you\'re prepared to start the divorce process',
    category: 'Divorce',
    difficulty: 'beginner',
    estimatedTime: 30,
    prerequisites: ['Basic understanding of divorce process'],
    outcomes: [
      'Understand divorce requirements in Arizona',
      'Identify necessary documents',
      'Create action plan for next steps'
    ],
    steps: [
      {
        id: 'intro',
        title: 'Welcome to the Divorce Readiness Assessment',
        content: 'This guide will help you determine if you\'re ready to begin the divorce process in Arizona. We\'ll cover legal requirements, necessary documents, and important considerations.',
        instruction: 'Click "Next" to begin your assessment.',
        tip: 'Have a notebook ready to take notes as you go through this guide.'
      },
      {
        id: 'residency',
        title: 'Residency Requirements',
        content: 'To file for divorce in Arizona, you or your spouse must have been a resident of Arizona for at least 90 days before filing.',
        actionRequired: {
          type: 'radio',
          label: 'Do you meet the residency requirement?',
          options: [
            { value: 'yes', label: 'Yes, I have lived in Arizona for at least 90 days' },
            { value: 'spouse', label: 'My spouse has lived in Arizona for at least 90 days' },
            { value: 'no', label: 'Neither of us meets the requirement yet' }
          ]
        },
        warning: 'If you don\'t meet residency requirements, you\'ll need to wait until you do before filing.'
      },
      {
        id: 'grounds',
        title: 'Grounds for Divorce',
        content: 'Arizona is a no-fault divorce state. The only ground for divorce is that the marriage is "irretrievably broken" with no reasonable prospect of reconciliation.',
        actionRequired: {
          type: 'confirm',
          label: 'I understand that Arizona is a no-fault state',
          options: [
            { value: 'understood', label: 'I understand' }
          ]
        }
      },
      {
        id: 'children',
        title: 'Minor Children',
        content: 'If you have children under 18, additional forms and considerations apply.',
        actionRequired: {
          type: 'radio',
          label: 'Do you have minor children with your spouse?',
          options: [
            { value: 'yes', label: 'Yes, we have children under 18' },
            { value: 'no', label: 'No minor children' }
          ]
        },
        tip: 'If you have children, you\'ll need to complete a parenting plan and child support worksheets.'
      },
      {
        id: 'property',
        title: 'Property and Debts',
        content: 'Arizona is a community property state. Generally, assets and debts acquired during marriage are divided equally.',
        actionRequired: {
          type: 'checkbox',
          label: 'Select all that apply to your situation:',
          options: [
            { value: 'home', label: 'We own a home together' },
            { value: 'vehicles', label: 'We have vehicles' },
            { value: 'retirement', label: 'We have retirement accounts' },
            { value: 'business', label: 'We own a business' },
            { value: 'debts', label: 'We have joint debts' }
          ]
        }
      },
      {
        id: 'documents',
        title: 'Document Checklist',
        content: 'You\'ll need various documents for your divorce. Let\'s create your checklist.',
        checkpoints: [
          { id: 'marriage-cert', label: 'Marriage certificate', completed: false },
          { id: 'tax-returns', label: 'Last 3 years tax returns', completed: false },
          { id: 'pay-stubs', label: 'Recent pay stubs', completed: false },
          { id: 'bank-statements', label: 'Bank statements', completed: false },
          { id: 'property-deeds', label: 'Property deeds/titles', completed: false }
        ],
        tip: 'Start gathering these documents now to speed up the process later.'
      },
      {
        id: 'attorney',
        title: 'Legal Representation',
        content: 'Decide whether you\'ll hire an attorney or represent yourself.',
        actionRequired: {
          type: 'radio',
          label: 'How do you plan to proceed?',
          options: [
            { value: 'attorney', label: 'I will hire an attorney' },
            { value: 'self', label: 'I will represent myself' },
            { value: 'undecided', label: 'I\'m still deciding' }
          ]
        },
        tip: 'Even if self-representing, consider a consultation with an attorney for complex cases.'
      },
      {
        id: 'summary',
        title: 'Your Readiness Summary',
        content: 'Based on your responses, here\'s your divorce readiness assessment.',
        instruction: 'Review your summary and download your personalized action plan.'
      }
    ]
  },
  {
    id: 'court-appearance-prep',
    title: 'Preparing for Court Appearance',
    description: 'Step-by-step guide to prepare for your court hearing',
    category: 'Court Procedures',
    difficulty: 'intermediate',
    estimatedTime: 45,
    steps: [
      {
        id: 'hearing-type',
        title: 'Identify Your Hearing Type',
        content: 'Different hearings require different preparation.',
        actionRequired: {
          type: 'select',
          label: 'What type of hearing do you have?',
          options: [
            { value: 'temporary-orders', label: 'Temporary Orders' },
            { value: 'status-conference', label: 'Status Conference' },
            { value: 'trial', label: 'Trial' },
            { value: 'motion-hearing', label: 'Motion Hearing' }
          ]
        }
      },
      {
        id: 'documents-prep',
        title: 'Prepare Your Documents',
        content: 'Organize all necessary documents for court.',
        checkpoints: [
          { id: 'copies', label: 'Make 3 copies of all documents', completed: false },
          { id: 'organize', label: 'Organize in labeled folders', completed: false },
          { id: 'exhibits', label: 'Mark exhibits if required', completed: false },
          { id: 'witness-list', label: 'Prepare witness list', completed: false }
        ],
        tip: 'Bring originals and copies. The court keeps one, opposing party gets one, you keep one.'
      },
      {
        id: 'dress-code',
        title: 'Court Dress Code',
        content: 'Professional appearance shows respect for the court.',
        instruction: 'Dress as if attending a job interview. Business casual at minimum.',
        checkpoints: [
          { id: 'clothing', label: 'Professional clothing selected', completed: false },
          { id: 'grooming', label: 'Well-groomed appearance', completed: false },
          { id: 'no-hats', label: 'Remove hats/sunglasses', completed: false }
        ]
      },
      {
        id: 'arrival',
        title: 'Day of Hearing - Arrival',
        content: 'Plan to arrive at least 30 minutes early.',
        checkpoints: [
          { id: 'parking', label: 'Know parking location', completed: false },
          { id: 'security', label: 'Allow time for security screening', completed: false },
          { id: 'courtroom', label: 'Find correct courtroom', completed: false },
          { id: 'check-in', label: 'Check in with clerk/bailiff', completed: false }
        ],
        warning: 'Being late can result in default judgments against you.'
      },
      {
        id: 'courtroom-etiquette',
        title: 'Courtroom Behavior',
        content: 'Proper courtroom etiquette is essential.',
        instruction: 'Always address the judge as "Your Honor" and stand when speaking.',
        checkpoints: [
          { id: 'phone-off', label: 'Turn off phone completely', completed: false },
          { id: 'no-gum', label: 'No food, drinks, or gum', completed: false },
          { id: 'respectful', label: 'Remain respectful at all times', completed: false },
          { id: 'wait-turn', label: 'Wait for your turn to speak', completed: false }
        ]
      }
    ]
  },
  {
    id: 'financial-disclosure-guide',
    title: 'Complete Financial Disclosure',
    description: 'Guide to completing financial disclosure requirements',
    category: 'Financial',
    difficulty: 'advanced',
    estimatedTime: 60,
    steps: [
      {
        id: 'overview',
        title: 'Financial Disclosure Overview',
        content: 'Both parties must provide complete financial disclosure within 40 days of service.',
        warning: 'Failure to disclose can result in sanctions and affect your case outcome.'
      },
      {
        id: 'income',
        title: 'Document Your Income',
        content: 'Gather all sources of income documentation.',
        checkpoints: [
          { id: 'w2', label: 'W-2 forms (3 years)', completed: false },
          { id: 'paystubs', label: 'Recent pay stubs (3 months)', completed: false },
          { id: '1099', label: '1099 forms if applicable', completed: false },
          { id: 'business', label: 'Business income records', completed: false }
        ]
      },
      {
        id: 'assets',
        title: 'List All Assets',
        content: 'Document all assets, whether community or separate.',
        actionRequired: {
          type: 'checkbox',
          label: 'Check all assets you need to disclose:',
          options: [
            { value: 'real-estate', label: 'Real estate properties' },
            { value: 'vehicles', label: 'Vehicles' },
            { value: 'bank-accounts', label: 'Bank accounts' },
            { value: 'investments', label: 'Investment accounts' },
            { value: 'retirement', label: 'Retirement accounts' },
            { value: 'business-interests', label: 'Business interests' }
          ]
        }
      },
      {
        id: 'debts',
        title: 'List All Debts',
        content: 'Include all debts, regardless of whose name they\'re in.',
        checkpoints: [
          { id: 'mortgage', label: 'Mortgage statements', completed: false },
          { id: 'credit-cards', label: 'Credit card statements', completed: false },
          { id: 'loans', label: 'Loan documents', completed: false },
          { id: 'tax-debt', label: 'Tax obligations', completed: false }
        ]
      }
    ]
  }
];

export default function InteractiveGuide({ 
  guide, 
  onComplete,
  showProgress = true,
  allowNavigation = true
}: InteractiveGuideProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progress, setProgress] = useState<GuideProgress>({
    guideId: guide.id,
    currentStep: 0,
    completedSteps: new Set(),
    responses: new Map(),
    startedAt: new Date(),
    lastAccessed: new Date(),
    completed: false
  });
  const [stepResponses, setStepResponses] = useState<any>({});
  const [stepErrors, setStepErrors] = useState<string>('');
  const [checkpoints, setCheckpoints] = useState<Map<string, boolean>>(new Map());

  const currentStep = guide.steps[currentStepIndex];

  // Load saved progress
  useEffect(() => {
    const savedProgress = localStorage.getItem(`guide_progress_${guide.id}`);
    if (savedProgress) {
      const parsed = JSON.parse(savedProgress);
      setProgress({
        ...parsed,
        completedSteps: new Set(parsed.completedSteps),
        responses: new Map(parsed.responses),
        startedAt: new Date(parsed.startedAt),
        lastAccessed: new Date()
      });
      setCurrentStepIndex(parsed.currentStep);
    }
  }, [guide.id]);

  // Save progress
  useEffect(() => {
    const progressToSave = {
      ...progress,
      completedSteps: Array.from(progress.completedSteps),
      responses: Array.from(progress.responses),
      lastAccessed: new Date()
    };
    localStorage.setItem(`guide_progress_${guide.id}`, JSON.stringify(progressToSave));
  }, [progress, guide.id]);

  const handleStepComplete = () => {
    const newCompletedSteps = new Set(progress.completedSteps);
    newCompletedSteps.add(currentStep.id);

    // Save response if action was required
    if (currentStep.actionRequired && stepResponses[currentStep.id]) {
      progress.responses.set(currentStep.id, stepResponses[currentStep.id]);
    }

    // Save checkpoints
    if (currentStep.checkpoints) {
      currentStep.checkpoints.forEach(checkpoint => {
        progress.responses.set(`checkpoint_${checkpoint.id}`, checkpoints.get(checkpoint.id) || false);
      });
    }

    setProgress({
      ...progress,
      completedSteps: newCompletedSteps,
      currentStep: currentStepIndex
    });
  };

  const canProceed = (): boolean => {
    if (!currentStep.actionRequired && !currentStep.checkpoints) return true;

    if (currentStep.actionRequired) {
      const response = stepResponses[currentStep.id];
      if (!response) return false;

      if (currentStep.actionRequired.validation) {
        return currentStep.actionRequired.validation(response);
      }
    }

    if (currentStep.checkpoints) {
      const allChecked = currentStep.checkpoints.every(cp => 
        checkpoints.get(cp.id) === true
      );
      return allChecked;
    }

    return true;
  };

  const handleNext = () => {
    if (!canProceed()) {
      setStepErrors(currentStep.actionRequired?.errorMessage || 'Please complete all required fields');
      return;
    }

    handleStepComplete();
    setStepErrors('');

    if (currentStepIndex < guide.steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      // Guide completed
      const completed = {
        ...progress,
        completed: true,
        completedAt: new Date()
      };
      setProgress(completed);
      
      if (onComplete) {
        onComplete(guide.id, progress.responses);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
      setStepErrors('');
    }
  };

  const handleStepNavigation = (stepIndex: number) => {
    if (allowNavigation && (stepIndex === 0 || progress.completedSteps.has(guide.steps[stepIndex - 1].id))) {
      setCurrentStepIndex(stepIndex);
      setStepErrors('');
    }
  };

  const handleInputChange = (value: any) => {
    setStepResponses({
      ...stepResponses,
      [currentStep.id]: value
    });
    setStepErrors('');
  };

  const handleCheckpointToggle = (checkpointId: string) => {
    const newCheckpoints = new Map(checkpoints);
    newCheckpoints.set(checkpointId, !checkpoints.get(checkpointId));
    setCheckpoints(newCheckpoints);
  };

  const resetGuide = () => {
    setCurrentStepIndex(0);
    setProgress({
      guideId: guide.id,
      currentStep: 0,
      completedSteps: new Set(),
      responses: new Map(),
      startedAt: new Date(),
      lastAccessed: new Date(),
      completed: false
    });
    setStepResponses({});
    setCheckpoints(new Map());
    setStepErrors('');
    localStorage.removeItem(`guide_progress_${guide.id}`);
  };

  const getProgressPercentage = (): number => {
    return Math.round((progress.completedSteps.size / guide.steps.length) * 100);
  };

  return (
    <div className="space-y-6">
      {/* Progress Header */}
      {showProgress && (
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold">{guide.title}</h2>
                <p className="text-sm text-gray-600">{guide.description}</p>
              </div>
              <Button variant="outline" size="sm" onClick={resetGuide}>
                <RotateCcw className="w-4 h-4 mr-2" />
                Start Over
              </Button>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress: {getProgressPercentage()}%</span>
                <span>{progress.completedSteps.size} of {guide.steps.length} steps</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${getProgressPercentage()}%` }}
                />
              </div>
            </div>

            {/* Step Navigation */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {guide.steps.map((step, index) => {
                const isCompleted = progress.completedSteps.has(step.id);
                const isCurrent = index === currentStepIndex;
                const isAccessible = index === 0 || progress.completedSteps.has(guide.steps[index - 1].id);

                return (
                  <button
                    key={step.id}
                    onClick={() => handleStepNavigation(index)}
                    disabled={!allowNavigation || !isAccessible}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${
                      isCurrent ? 'bg-blue-100 text-blue-700 font-medium' :
                      isCompleted ? 'bg-green-100 text-green-700' :
                      isAccessible ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' :
                      'bg-gray-50 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <Circle className="w-4 h-4" />
                    )}
                    <span className="whitespace-nowrap">{index + 1}. {step.title}</span>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Current Step Content */}
      <Card>
        <CardContent className="p-6">
          {/* Step Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <BookOpen className="w-4 h-4" />
              Step {currentStepIndex + 1} of {guide.steps.length}
            </div>
            <h3 className="text-xl font-semibold mb-2">{currentStep.title}</h3>
            {currentStep.requiredTime && (
              <p className="text-sm text-gray-600">
                Estimated time: {currentStep.requiredTime} minutes
              </p>
            )}
          </div>

          {/* Step Content */}
          <div className="prose max-w-none mb-6">
            <p>{currentStep.content}</p>
          </div>

          {/* Instructions */}
          {currentStep.instruction && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                <p className="text-sm text-blue-900">{currentStep.instruction}</p>
              </div>
            </div>
          )}

          {/* Tips */}
          {currentStep.tip && (
            <div className="mb-6 p-4 bg-green-50 rounded-lg">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <p className="text-sm text-green-900">
                  <strong>Tip:</strong> {currentStep.tip}
                </p>
              </div>
            </div>
          )}

          {/* Warnings */}
          {currentStep.warning && (
            <div className="mb-6 p-4 bg-red-50 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                <p className="text-sm text-red-900">
                  <strong>Warning:</strong> {currentStep.warning}
                </p>
              </div>
            </div>
          )}

          {/* Action Required */}
          {currentStep.actionRequired && (
            <div className="mb-6 p-6 bg-gray-50 rounded-lg">
              <label className="block text-sm font-medium mb-3">
                {currentStep.actionRequired.label}
              </label>

              {currentStep.actionRequired.type === 'radio' && (
                <div className="space-y-2">
                  {currentStep.actionRequired.options?.map(option => (
                    <label key={option.value} className="flex items-center gap-3 p-3 bg-white rounded border hover:border-blue-300 cursor-pointer">
                      <input
                        type="radio"
                        name={currentStep.id}
                        value={option.value}
                        checked={stepResponses[currentStep.id] === option.value}
                        onChange={(e) => handleInputChange(e.target.value)}
                        className="text-blue-600"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              )}

              {currentStep.actionRequired.type === 'checkbox' && (
                <div className="space-y-2">
                  {currentStep.actionRequired.options?.map(option => (
                    <label key={option.value} className="flex items-center gap-3 p-3 bg-white rounded border hover:border-blue-300 cursor-pointer">
                      <input
                        type="checkbox"
                        value={option.value}
                        checked={stepResponses[currentStep.id]?.includes(option.value)}
                        onChange={(e) => {
                          const current = stepResponses[currentStep.id] || [];
                          if (e.target.checked) {
                            handleInputChange([...current, option.value]);
                          } else {
                            handleInputChange(current.filter((v: string) => v !== option.value));
                          }
                        }}
                        className="text-blue-600"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              )}

              {currentStep.actionRequired.type === 'select' && (
                <select
                  value={stepResponses[currentStep.id] || ''}
                  onChange={(e) => handleInputChange(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="">Select an option...</option>
                  {currentStep.actionRequired.options?.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}

              {currentStep.actionRequired.type === 'confirm' && (
                <div className="space-y-2">
                  {currentStep.actionRequired.options?.map(option => (
                    <label key={option.value} className="flex items-center gap-3 p-3 bg-white rounded border hover:border-blue-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={stepResponses[currentStep.id] === option.value}
                        onChange={(e) => handleInputChange(e.target.checked ? option.value : null)}
                        className="text-blue-600"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Checkpoints */}
          {currentStep.checkpoints && (
            <div className="mb-6">
              <h4 className="font-medium mb-3">Complete these items:</h4>
              <div className="space-y-2">
                {currentStep.checkpoints.map(checkpoint => (
                  <label
                    key={checkpoint.id}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={checkpoints.get(checkpoint.id) || false}
                      onChange={() => handleCheckpointToggle(checkpoint.id)}
                      className="text-blue-600"
                    />
                    <span className={checkpoints.get(checkpoint.id) ? 'line-through text-gray-500' : ''}>
                      {checkpoint.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Error Message */}
          {stepErrors && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
              {stepErrors}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStepIndex === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <Button
              onClick={handleNext}
              disabled={!canProceed() && currentStep.actionRequired !== undefined}
            >
              {currentStepIndex === guide.steps.length - 1 ? (
                <>
                  Complete Guide
                  <Award className="w-4 h-4 ml-2" />
                </>
              ) : (
                <>
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Guide Completion */}
      {progress.completed && (
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-6 text-center">
            <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Guide Completed!</h3>
            <p className="text-gray-600 mb-4">
              You've successfully completed the {guide.title} guide.
            </p>
            {progress.completedAt && (
              <p className="text-sm text-gray-500">
                Completed on {progress.completedAt.toLocaleDateString()}
              </p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}