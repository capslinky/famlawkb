'use client';

import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Home, AlertTriangle, Heart, FileText, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

interface DecisionNode {
  id: string;
  question?: string;
  description?: string;
  type: 'question' | 'result';
  options?: {
    text: string;
    icon?: React.ComponentType<{ className?: string }>;
    nextId: string;
    priority?: 'emergency' | 'urgent' | 'normal';
  }[];
  result?: {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    priority: 'emergency' | 'urgent' | 'normal';
    resources: {
      title: string;
      href: string;
      description: string;
    }[];
    nextSteps: string[];
  };
}

const DECISION_TREE: DecisionNode[] = [
  {
    id: 'start',
    type: 'question',
    question: 'What describes your situation best?',
    description: 'This will help us guide you to the most relevant resources for your specific needs.',
    options: [
      {
        text: 'I\'m in immediate danger or crisis',
        icon: AlertTriangle,
        nextId: 'emergency',
        priority: 'emergency'
      },
      {
        text: 'I need to get divorced or separated',
        icon: Heart,
        nextId: 'divorce',
        priority: 'urgent'
      },
      {
        text: 'I have issues with child custody or support',
        icon: Users,
        nextId: 'children',
        priority: 'urgent'
      },
      {
        text: 'I need protection from abuse or harassment',
        icon: Shield,
        nextId: 'protection',
        priority: 'emergency'
      },
      {
        text: 'I need to modify existing court orders',
        icon: FileText,
        nextId: 'modification',
        priority: 'normal'
      },
      {
        text: 'I\'m not sure - I need general guidance',
        icon: Home,
        nextId: 'general',
        priority: 'normal'
      }
    ]
  },
  {
    id: 'emergency',
    type: 'result',
    result: {
      title: 'Emergency Resources',
      description: 'If you\'re in immediate danger, your safety is the top priority. Here are immediate resources and steps to take.',
      icon: AlertTriangle,
      priority: 'emergency',
      resources: [
        {
          title: 'Call 911',
          href: 'tel:911',
          description: 'For immediate physical danger'
        },
        {
          title: 'National Domestic Violence Hotline',
          href: 'tel:18007997233',
          description: '1-800-799-7233 (24/7 crisis support)'
        },
        {
          title: 'Emergency Protection Orders',
          href: '/protection/emergency',
          description: 'Get immediate legal protection'
        },
        {
          title: 'Safety Planning',
          href: '/protection/safety-plan',
          description: 'Create a personalized safety plan'
        }
      ],
      nextSteps: [
        'Ensure your immediate safety first',
        'Contact law enforcement if in physical danger',
        'Reach out to domestic violence advocates',
        'Create or update your safety plan',
        'Consider emergency protection orders'
      ]
    }
  },
  {
    id: 'divorce',
    type: 'question',
    question: 'What stage are you in with your divorce?',
    description: 'This helps us provide the most relevant guidance for your situation.',
    options: [
      {
        text: 'Just thinking about divorce',
        nextId: 'divorce-considering',
        priority: 'normal'
      },
      {
        text: 'Ready to file for divorce',
        nextId: 'divorce-filing',
        priority: 'urgent'
      },
      {
        text: 'Already filed - working through the process',
        nextId: 'divorce-process',
        priority: 'urgent'
      },
      {
        text: 'My spouse filed and I need to respond',
        nextId: 'divorce-respond',
        priority: 'urgent'
      }
    ]
  },
  {
    id: 'divorce-considering',
    type: 'result',
    result: {
      title: 'Considering Divorce',
      description: 'Take time to understand your options and prepare for the decisions ahead.',
      icon: Heart,
      priority: 'normal',
      resources: [
        {
          title: 'Getting Divorced Overview',
          href: '/getting-divorced',
          description: 'Comprehensive guide to the divorce process'
        },
        {
          title: 'Property Division Guide',
          href: '/topics/property-division',
          description: 'Understand how assets are divided'
        },
        {
          title: 'Child Support Information',
          href: '/topics/child-support',
          description: 'Learn about child support obligations'
        },
        {
          title: 'Legal Representation Guide',
          href: '/resources/legal-representation',
          description: 'Decide if you need an attorney'
        }
      ],
      nextSteps: [
        'Gather important financial documents',
        'Consider counseling or mediation first',
        'Understand Arizona\'s divorce laws',
        'Decide on legal representation',
        'Consider the impact on children'
      ]
    }
  },
  {
    id: 'divorce-filing',
    type: 'question',
    question: 'Do you and your spouse agree on major issues?',
    options: [
      {
        text: 'Yes, we agree on most things',
        nextId: 'divorce-uncontested',
        priority: 'normal'
      },
      {
        text: 'We have some disagreements',
        nextId: 'divorce-contested',
        priority: 'urgent'
      },
      {
        text: 'We disagree on many major issues',
        nextId: 'divorce-complex',
        priority: 'urgent'
      }
    ]
  },
  {
    id: 'divorce-uncontested',
    type: 'result',
    result: {
      title: 'Uncontested Divorce',
      description: 'Since you agree on major issues, you may qualify for a simpler, faster divorce process.',
      icon: Heart,
      priority: 'normal',
      resources: [
        {
          title: 'Uncontested Divorce Guide',
          href: '/divorce/uncontested-simple',
          description: 'Step-by-step process for simple divorces'
        },
        {
          title: 'Divorce Petition Forms',
          href: '/forms/divorce-petition-children',
          description: 'Get the forms you need to file'
        },
        {
          title: 'Court Forms Hub',
          href: '/forms',
          description: 'All necessary court forms'
        }
      ],
      nextSteps: [
        'Complete divorce petition forms',
        'File with the court',
        'Serve your spouse',
        'Wait for response period',
        'Finalize with consent decree'
      ]
    }
  },
  {
    id: 'children',
    type: 'question',
    question: 'What child-related issue do you need help with?',
    options: [
      {
        text: 'Establishing custody for the first time',
        nextId: 'custody-establish',
        priority: 'urgent'
      },
      {
        text: 'Modifying existing custody orders',
        nextId: 'custody-modify',
        priority: 'urgent'
      },
      {
        text: 'Child support calculation or modification',
        nextId: 'support-child',
        priority: 'urgent'
      },
      {
        text: 'Emergency custody situation',
        nextId: 'custody-emergency',
        priority: 'emergency'
      }
    ]
  },
  {
    id: 'custody-establish',
    type: 'result',
    result: {
      title: 'Establishing Child Custody',
      description: 'Learn how to establish legal custody and parenting time arrangements.',
      icon: Users,
      priority: 'urgent',
      resources: [
        {
          title: 'Child Custody Establishment',
          href: '/custody/establish-order',
          description: 'Complete guide to establishing custody'
        },
        {
          title: 'Parenting Plans',
          href: '/topics/child-support',
          description: 'Creating effective parenting arrangements'
        },
        {
          title: 'Court Procedures',
          href: '/procedures/court-procedures',
          description: 'Navigate the court system'
        }
      ],
      nextSteps: [
        'Determine if parents were married',
        'File appropriate custody petitions',
        'Develop a parenting plan',
        'Attend court hearings',
        'Follow court orders'
      ]
    }
  },
  {
    id: 'protection',
    type: 'question',
    question: 'What type of protection do you need?',
    options: [
      {
        text: 'Protection from domestic violence',
        nextId: 'protection-domestic',
        priority: 'emergency'
      },
      {
        text: 'Protection from harassment or stalking',
        nextId: 'protection-harassment',
        priority: 'urgent'
      },
      {
        text: 'I already have a protection order',
        nextId: 'protection-existing',
        priority: 'normal'
      }
    ]
  },
  {
    id: 'protection-domestic',
    type: 'result',
    result: {
      title: 'Domestic Violence Protection',
      description: 'Get immediate protection from domestic violence and abuse.',
      icon: Shield,
      priority: 'emergency',
      resources: [
        {
          title: 'Emergency Protection Orders',
          href: '/protection/emergency',
          description: 'Get immediate court protection'
        },
        {
          title: 'How to File Protection Orders',
          href: '/protection/how-to-file',
          description: 'Step-by-step filing guide'
        },
        {
          title: 'Safety Planning',
          href: '/protection/safety-plan',
          description: 'Create a comprehensive safety plan'
        },
        {
          title: 'Crisis Resources',
          href: '/protection/emergency',
          description: '24/7 support and resources'
        }
      ],
      nextSteps: [
        'Ensure your immediate safety',
        'Document incidents of abuse',
        'File for protection order',
        'Create safety plan',
        'Connect with victim advocates'
      ]
    }
  }
];

function Shield({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

export default function DecisionTreeWizard() {
  const [currentNodeId, setCurrentNodeId] = useState('start');
  const [history, setHistory] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const currentNode = DECISION_TREE.find(node => node.id === currentNodeId);

  const selectOption = (nextId: string) => {
    setHistory([...history, currentNodeId]);
    setCurrentNodeId(nextId);
  };

  const goBack = () => {
    if (history.length > 0) {
      const previous = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setCurrentNodeId(previous);
    }
  };

  const restart = () => {
    setCurrentNodeId('start');
    setHistory([]);
  };

  const getPriorityColor = (priority: 'emergency' | 'urgent' | 'normal') => {
    switch (priority) {
      case 'emergency': return 'border-red-500 bg-red-50 text-red-900';
      case 'urgent': return 'border-orange-500 bg-orange-50 text-orange-900';
      default: return 'border-blue-500 bg-blue-50 text-blue-900';
    }
  };

  if (!isOpen) {
    return (
      <Card className="mb-6 bg-gradient-to-r from-green-50 to-blue-50 border-green-200 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setIsOpen(true)}>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Home className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Need help finding what you&apos;re looking for?
              </h3>
              <p className="text-gray-600 text-sm">
                Use our guided assistant to find resources specific to your situation in just a few questions.
              </p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400 ml-auto" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!currentNode) return null;

  return (
    <Card className="mb-6 border-2 border-blue-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Find What You Need</h3>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>

        {currentNode.type === 'question' ? (
          <div>
            <h4 className="text-lg font-medium mb-2">{currentNode.question || ''}</h4>
            {currentNode.description && (
              <p className="text-gray-600 text-sm mb-4">{currentNode.description}</p>
            )}
            
            <div className="space-y-3">
              {currentNode.options?.map((option, index) => {
                const Icon = option.icon;
                return (
                  <button
                    key={index}
                    onClick={() => selectOption(option.nextId)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-colors hover:shadow-md ${
                      option.priority === 'emergency' 
                        ? 'border-red-200 hover:border-red-300 hover:bg-red-50' 
                        : option.priority === 'urgent'
                          ? 'border-orange-200 hover:border-orange-300 hover:bg-orange-50'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {Icon && <Icon className="w-5 h-5 text-gray-500" />}
                      <span className="font-medium">{option.text}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div>
            <div className={`p-4 rounded-lg border-2 mb-4 ${getPriorityColor(currentNode.result!.priority)}`}>
              <div className="flex items-center gap-3 mb-2">
                {React.createElement(currentNode.result!.icon, { className: "w-6 h-6" })}
                <h4 className="text-lg font-semibold">{currentNode.result!.title}</h4>
              </div>
              <p className="text-sm">{currentNode.result!.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold mb-2">Key Resources:</h5>
                <div className="space-y-2">
                  {currentNode.result!.resources.map((resource, index) => (
                    <Link key={index} href={resource.href}>
                      <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="font-medium text-blue-600 text-sm">{resource.title}</div>
                        <div className="text-xs text-gray-600">{resource.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">Next Steps:</h5>
                <ul className="space-y-1">
                  {currentNode.result!.nextSteps.map((step, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="w-4 h-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200">
          {history.length > 0 && (
            <Button onClick={goBack} variant="outline" size="sm">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </Button>
          )}
          <Button onClick={restart} variant="outline" size="sm">
            <Home className="w-4 h-4 mr-1" />
            Start Over
          </Button>
          <div className="ml-auto text-xs text-gray-500">
            Step {history.length + 1}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}