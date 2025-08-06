'use client';

import React, { useState, useEffect } from 'react';
import { HelpCircle, X, Search, Book, Video, MessageCircle, Phone, Mail, ExternalLink, ChevronRight, Lightbulb, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface HelpTopic {
  id: string;
  title: string;
  description: string;
  category: 'getting-started' | 'forms' | 'procedures' | 'calculations' | 'technical' | 'legal';
  content: string;
  relatedTopics?: string[];
  videoUrl?: string;
  externalLinks?: { title: string; url: string }[];
  tips?: string[];
  warnings?: string[];
}

interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  action: () => void;
}

interface HelpSystemProps {
  contextualHelp?: {
    page?: string;
    section?: string;
    formField?: string;
  };
  onClose?: () => void;
  embedded?: boolean;
}

// Help topics database
const HELP_TOPICS: HelpTopic[] = [
  {
    id: 'getting-started-divorce',
    title: 'Getting Started with Divorce',
    category: 'getting-started',
    description: 'Learn the basics of filing for divorce in Arizona',
    content: `
      Starting a divorce in Arizona requires meeting certain requirements:
      
      1. **Residency Requirements**: You or your spouse must have lived in Arizona for at least 90 days.
      2. **Grounds for Divorce**: Arizona is a no-fault state - you only need to state the marriage is irretrievably broken.
      3. **Initial Documents**: You'll need to file a Petition for Dissolution of Marriage.
      4. **Service of Process**: Your spouse must be formally notified of the divorce filing.
      5. **Waiting Period**: There's a 60-day cooling-off period before the divorce can be finalized.
    `,
    tips: [
      'Gather financial documents early in the process',
      'Consider mediation to reduce costs and conflict',
      'Keep copies of all filed documents'
    ],
    warnings: [
      'Missing deadlines can delay your case significantly',
      'Hiding assets is illegal and can result in penalties'
    ],
    relatedTopics: ['filing-petition', 'service-process', 'temporary-orders']
  },
  {
    id: 'filing-petition',
    title: 'How to File a Petition',
    category: 'forms',
    description: 'Step-by-step guide to filing your divorce petition',
    content: `
      Filing a petition is the first formal step in your divorce:
      
      1. **Complete the Form**: Fill out the Petition for Dissolution of Marriage (Form DR11p if you have children).
      2. **Make Copies**: You'll need the original plus 2 copies.
      3. **File with Court**: Take your documents to the Clerk of Superior Court.
      4. **Pay Filing Fee**: The current fee is $349 (fee waiver available if you qualify).
      5. **Get Case Number**: The clerk will assign a case number to your divorce.
    `,
    tips: [
      'File electronically if available in your county',
      'Bring extra copies just in case',
      'Ask for a fee waiver form if you cannot afford the filing fee'
    ],
    videoUrl: '/videos/filing-petition-tutorial',
    externalLinks: [
      { title: 'Court Filing Locations', url: 'https://www.azcourts.gov/locations' }
    ]
  },
  {
    id: 'child-support-calculation',
    title: 'Understanding Child Support Calculations',
    category: 'calculations',
    description: 'How child support is calculated in Arizona',
    content: `
      Arizona uses the Income Shares Model for child support:
      
      The calculation considers:
      - Both parents' gross monthly income
      - Number of children
      - Parenting time percentages
      - Health insurance costs
      - Childcare expenses
      - Other children from different relationships
      
      The calculator provides a guideline amount, but courts can deviate based on specific circumstances.
    `,
    tips: [
      'Have your last 3 years of tax returns ready',
      'Include all sources of income',
      'Document all child-related expenses'
    ],
    relatedTopics: ['spousal-maintenance', 'financial-disclosure']
  },
  {
    id: 'court-procedures',
    title: 'Court Procedures and Etiquette',
    category: 'procedures',
    description: 'What to expect in court and how to prepare',
    content: `
      Appearing in court requires preparation and proper conduct:
      
      **Before Court:**
      - Arrive at least 30 minutes early
      - Dress professionally (business attire)
      - Bring all required documents
      - Turn off your phone
      
      **In the Courtroom:**
      - Address the judge as "Your Honor"
      - Stand when speaking to the judge
      - Speak clearly and only when asked
      - Be respectful to all parties
      - Don't interrupt others
    `,
    warnings: [
      'Being late can result in default judgments',
      'Inappropriate behavior can hurt your case'
    ],
    tips: [
      'Practice what you want to say beforehand',
      'Bring a notepad to take notes',
      'Stay calm even if you disagree'
    ]
  },
  {
    id: 'using-smart-forms',
    title: 'Using Smart Forms',
    category: 'technical',
    description: 'How to use the auto-save and validation features',
    content: `
      Our Smart Forms make completing legal documents easier:
      
      **Features:**
      - **Auto-Save**: Your work is saved every 30 seconds
      - **Validation**: Real-time checking for errors
      - **Progress Tracking**: See how much you've completed
      - **Help Tooltips**: Hover over fields for guidance
      
      **Tips for Success:**
      1. Create an account to save your progress
      2. Use the same device/browser when possible
      3. Complete required fields first
      4. Review before submitting
    `,
    tips: [
      'Use Chrome or Firefox for best compatibility',
      'Save a PDF copy for your records',
      'You can return to incomplete forms anytime'
    ]
  }
];

// Contextual help mapping
const CONTEXTUAL_HELP_MAP: Record<string, string[]> = {
  '/getting-divorced': ['getting-started-divorce', 'filing-petition'],
  '/forms/divorce-petition-children': ['filing-petition', 'using-smart-forms'],
  '/support/calculator': ['child-support-calculation'],
  '/procedures/court-procedures': ['court-procedures'],
  '/calculators': ['child-support-calculation', 'using-smart-forms']
};

export default function HelpSystem({ 
  contextualHelp, 
  onClose,
  embedded = false 
}: HelpSystemProps) {
  const [isOpen, setIsOpen] = useState(!embedded);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<HelpTopic | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<HelpTopic['category'] | 'all'>('all');
  const [showQuickActions, setShowQuickActions] = useState(true);

  // Get contextual help topics
  const getContextualTopics = (): HelpTopic[] => {
    if (!contextualHelp?.page) return [];
    
    const topicIds = CONTEXTUAL_HELP_MAP[contextualHelp.page] || [];
    return HELP_TOPICS.filter(topic => topicIds.includes(topic.id));
  };

  // Filter help topics
  const getFilteredTopics = (): HelpTopic[] => {
    let filtered = [...HELP_TOPICS];

    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(topic =>
        topic.title.toLowerCase().includes(search) ||
        topic.description.toLowerCase().includes(search) ||
        topic.content.toLowerCase().includes(search)
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(topic => topic.category === selectedCategory);
    }

    return filtered;
  };

  // Quick actions
  const quickActions: QuickAction[] = [
    {
      id: 'start-chat',
      title: 'Live Chat',
      description: 'Chat with a support agent',
      icon: <MessageCircle className="w-5 h-5" />,
      action: () => console.log('Start chat')
    },
    {
      id: 'watch-videos',
      title: 'Video Tutorials',
      description: 'Watch how-to videos',
      icon: <Video className="w-5 h-5" />,
      action: () => window.location.href = '/learning'
    },
    {
      id: 'call-support',
      title: 'Call Support',
      description: '1-800-HELP-LAW',
      icon: <Phone className="w-5 h-5" />,
      action: () => window.location.href = 'tel:1-800-435-7529'
    },
    {
      id: 'email-support',
      title: 'Email Support',
      description: 'Get help via email',
      icon: <Mail className="w-5 h-5" />,
      action: () => window.location.href = 'mailto:support@azfamilylaw.com'
    }
  ];

  const contextualTopics = getContextualTopics();
  const filteredTopics = getFilteredTopics();

  const categories = [
    { value: 'all', label: 'All Topics' },
    { value: 'getting-started', label: 'Getting Started' },
    { value: 'forms', label: 'Forms & Documents' },
    { value: 'procedures', label: 'Court Procedures' },
    { value: 'calculations', label: 'Calculations' },
    { value: 'technical', label: 'Technical Help' },
    { value: 'legal', label: 'Legal Information' }
  ];

  if (embedded && !isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        aria-label="Open help"
      >
        <HelpCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className={embedded ? 'fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4' : ''}>
      <div className={embedded ? 'bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden' : 'space-y-6'}>
        {/* Header */}
        <div className="bg-blue-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-8 h-8" />
              <div>
                <h2 className="text-2xl font-bold">Help Center</h2>
                <p className="text-blue-100">Get help with any part of the process</p>
              </div>
            </div>
            {embedded && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onClose?.();
                }}
                className="text-white/80 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>

        <div className={embedded ? 'p-6 overflow-y-auto max-h-[calc(90vh-120px)]' : ''}>
          {/* Contextual Help */}
          {contextualTopics.length > 0 && !selectedTopic && (
            <Card className="mb-6 border-blue-200 bg-blue-50">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                  Suggested for this page
                </h3>
                <div className="space-y-2">
                  {contextualTopics.map(topic => (
                    <button
                      key={topic.id}
                      onClick={() => setSelectedTopic(topic)}
                      className="w-full text-left p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{topic.title}</h4>
                          <p className="text-sm text-gray-600">{topic.description}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Search and Filters */}
          {!selectedTopic && (
            <div className="space-y-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search help topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat.value}
                    onClick={() => setSelectedCategory(cat.value as any)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === cat.value
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Selected Topic */}
          {selectedTopic ? (
            <div className="space-y-6">
              <div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedTopic(null)}
                  className="mb-4"
                >
                  ← Back to topics
                </Button>

                <h3 className="text-xl font-bold mb-2">{selectedTopic.title}</h3>
                <p className="text-gray-600 mb-4">{selectedTopic.description}</p>

                <div className="prose max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: selectedTopic.content.replace(/\n/g, '<br>') }} />
                </div>

                {/* Tips */}
                {selectedTopic.tips && selectedTopic.tips.length > 0 && (
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Helpful Tips
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {selectedTopic.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-green-600 mt-0.5">✓</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Warnings */}
                {selectedTopic.warnings && selectedTopic.warnings.length > 0 && (
                  <Card className="bg-red-50 border-red-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        Important Warnings
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {selectedTopic.warnings.map((warning, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-red-600 mt-0.5">!</span>
                            <span>{warning}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* External Links */}
                {selectedTopic.externalLinks && selectedTopic.externalLinks.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">Additional Resources</h4>
                    <div className="space-y-2">
                      {selectedTopic.externalLinks.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {link.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Related Topics */}
                {selectedTopic.relatedTopics && selectedTopic.relatedTopics.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">Related Topics</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTopic.relatedTopics.map(topicId => {
                        const topic = HELP_TOPICS.find(t => t.id === topicId);
                        if (!topic) return null;
                        return (
                          <button
                            key={topic.id}
                            onClick={() => setSelectedTopic(topic)}
                            className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200"
                          >
                            {topic.title}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <>
              {/* Quick Actions */}
              {showQuickActions && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Quick Actions</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {quickActions.map(action => (
                      <button
                        key={action.id}
                        onClick={action.action}
                        className="p-4 border rounded-lg hover:shadow-md transition-shadow text-left"
                      >
                        <div className="flex items-start gap-3">
                          <div className="text-blue-600">{action.icon}</div>
                          <div>
                            <h4 className="font-medium">{action.title}</h4>
                            <p className="text-sm text-gray-600">{action.description}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Help Topics List */}
              <div>
                <h3 className="font-semibold mb-3">
                  {searchTerm ? 'Search Results' : 'Browse Help Topics'}
                </h3>
                {filteredTopics.length === 0 ? (
                  <Card>
                    <CardContent className="p-8 text-center">
                      <HelpCircle className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                      <p className="text-gray-600">No help topics found</p>
                      <p className="text-sm text-gray-500 mt-2">Try adjusting your search or filters</p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="grid gap-3">
                    {filteredTopics.map(topic => (
                      <Card
                        key={topic.id}
                        className="cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => setSelectedTopic(topic)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">{topic.title}</h4>
                              <p className="text-sm text-gray-600">{topic.description}</p>
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded mt-2 inline-block">
                                {categories.find(c => c.value === topic.category)?.label}
                              </span>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-400" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}

          {/* Contact Support */}
          {!selectedTopic && (
            <Card className="mt-6 bg-gray-50">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Still need help?</h3>
                <p className="text-gray-600 mb-4">
                  Our support team is here to assist you
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" size="sm">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Start Live Chat
                  </Button>
                  <Button variant="outline" size="sm">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}