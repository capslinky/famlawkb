'use client';

import React, { useState, useEffect } from 'react';
import { Package, FileText, Plus, Minus, Download, Save, CheckCircle, AlertCircle, Users, Clock, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface FormItem {
  id: string;
  name: string;
  formNumber?: string;
  description: string;
  category: string;
  required: boolean;
  copies: number;
  status: 'not_started' | 'in_progress' | 'completed' | 'review';
  dependencies?: string[];
  estimatedTime?: number; // in minutes
  filingOrder?: number;
}

interface FormPacket {
  id: string;
  name: string;
  description: string;
  type: 'divorce' | 'custody' | 'support' | 'modification' | 'protection' | 'custom';
  forms: FormItem[];
  totalTime: number;
  totalCopies: number;
  filingFee?: number;
  instructions?: string[];
  deadlines?: { task: string; days: number }[];
}

interface FormPacketBuilderProps {
  packetType?: string;
  preselectedForms?: string[];
  onSave?: (packet: FormPacket) => void;
}

// Predefined form packets for common scenarios
const PRESET_PACKETS: Record<string, Partial<FormPacket>> = {
  divorce_with_children: {
    name: 'Divorce with Minor Children',
    description: 'Complete packet for divorce when you have children under 18',
    type: 'divorce',
    forms: [
      {
        id: 'petition_divorce_children',
        name: 'Petition for Dissolution of Marriage (With Children)',
        formNumber: 'DR11p',
        description: 'Initial petition to start divorce with children',
        category: 'Initial Filing',
        required: true,
        copies: 3,
        status: 'not_started',
        estimatedTime: 45,
        filingOrder: 1
      },
      {
        id: 'summons',
        name: 'Summons',
        formNumber: 'DR10f',
        description: 'Official notice to respondent',
        category: 'Initial Filing',
        required: true,
        copies: 2,
        status: 'not_started',
        estimatedTime: 10,
        filingOrder: 2
      },
      {
        id: 'preliminary_injunction',
        name: 'Preliminary Injunction',
        formNumber: 'DR16p',
        description: 'Automatic orders preventing asset disposal',
        category: 'Initial Filing',
        required: true,
        copies: 2,
        status: 'not_started',
        estimatedTime: 5,
        filingOrder: 3
      },
      {
        id: 'parenting_plan',
        name: 'Parenting Plan',
        formNumber: 'DRPP10f',
        description: 'Custody and parenting time arrangements',
        category: 'Children',
        required: true,
        copies: 2,
        status: 'not_started',
        estimatedTime: 60,
        filingOrder: 4
      },
      {
        id: 'child_support_worksheet',
        name: 'Child Support Worksheet',
        formNumber: 'CSW',
        description: 'Calculate guideline support',
        category: 'Financial',
        required: true,
        copies: 2,
        status: 'not_started',
        estimatedTime: 30,
        filingOrder: 5
      },
      {
        id: 'financial_affidavit',
        name: 'Affidavit of Financial Information',
        formNumber: 'DROSC13f',
        description: 'Detailed financial disclosure',
        category: 'Financial',
        required: true,
        copies: 2,
        status: 'not_started',
        estimatedTime: 90,
        filingOrder: 6,
        dependencies: ['petition_divorce_children']
      }
    ],
    filingFee: 349,
    instructions: [
      'Complete all forms in black ink or type them',
      'Make required number of copies before filing',
      'File originals with the Clerk of Court',
      'Serve copies on your spouse within 120 days',
      'Complete parenting class within 45 days'
    ],
    deadlines: [
      { task: 'Serve spouse', days: 120 },
      { task: 'Financial disclosures', days: 40 },
      { task: 'Parenting class', days: 45 },
      { task: 'Response deadline', days: 20 }
    ]
  },
  
  uncontested_divorce: {
    name: 'Uncontested Divorce (No Children)',
    description: 'Simplified packet when both parties agree and have no children',
    type: 'divorce',
    forms: [
      {
        id: 'petition_divorce_consent',
        name: 'Petition for Dissolution - Consent',
        formNumber: 'DR11c',
        description: 'Joint petition when both agree',
        category: 'Initial Filing',
        required: true,
        copies: 3,
        status: 'not_started',
        estimatedTime: 30,
        filingOrder: 1
      },
      {
        id: 'marital_settlement',
        name: 'Marital Settlement Agreement',
        description: 'Agreement on all terms',
        category: 'Agreements',
        required: true,
        copies: 3,
        status: 'not_started',
        estimatedTime: 60,
        filingOrder: 2
      },
      {
        id: 'decree',
        name: 'Decree of Dissolution',
        formNumber: 'DR14f',
        description: 'Final divorce decree',
        category: 'Final Documents',
        required: true,
        copies: 3,
        status: 'not_started',
        estimatedTime: 20,
        filingOrder: 3
      }
    ],
    filingFee: 349,
    instructions: [
      'Both parties must sign all documents',
      'File all documents together',
      'Request default hearing after 60 days'
    ],
    deadlines: [
      { task: 'Minimum waiting period', days: 60 }
    ]
  },

  child_support_modification: {
    name: 'Child Support Modification',
    description: 'Packet to modify existing child support order',
    type: 'modification',
    forms: [
      {
        id: 'petition_modify_support',
        name: 'Petition to Modify Child Support',
        formNumber: 'DRS84p',
        description: 'Request to change support amount',
        category: 'Petition',
        required: true,
        copies: 3,
        status: 'not_started',
        estimatedTime: 30,
        filingOrder: 1
      },
      {
        id: 'financial_affidavit_mod',
        name: 'Updated Financial Affidavit',
        formNumber: 'DROSC13f',
        description: 'Current financial information',
        category: 'Financial',
        required: true,
        copies: 2,
        status: 'not_started',
        estimatedTime: 60,
        filingOrder: 2
      },
      {
        id: 'child_support_worksheet_new',
        name: 'New Child Support Worksheet',
        formNumber: 'CSW',
        description: 'Recalculated support amount',
        category: 'Financial',
        required: true,
        copies: 2,
        status: 'not_started',
        estimatedTime: 30,
        filingOrder: 3
      }
    ],
    filingFee: 139,
    instructions: [
      'Show substantial and continuing change in circumstances',
      'Attach proof of income changes',
      'Serve other parent with copies'
    ],
    deadlines: [
      { task: 'Serve other parent', days: 30 },
      { task: 'Response deadline', days: 20 }
    ]
  },

  protection_order: {
    name: 'Order of Protection',
    description: 'Emergency protection from domestic violence',
    type: 'protection',
    forms: [
      {
        id: 'petition_protection',
        name: 'Petition for Order of Protection',
        formNumber: 'AOC-OP1',
        description: 'Request for protection order',
        category: 'Emergency',
        required: true,
        copies: 3,
        status: 'not_started',
        estimatedTime: 30,
        filingOrder: 1
      },
      {
        id: 'confidential_info_sheet',
        name: 'Confidential Information Sheet',
        description: 'Protected contact information',
        category: 'Emergency',
        required: true,
        copies: 1,
        status: 'not_started',
        estimatedTime: 10,
        filingOrder: 2
      }
    ],
    filingFee: 0,
    instructions: [
      'Available 24/7 at any court',
      'No filing fee required',
      'Hearing within 10 days',
      'Bring evidence of abuse if available'
    ],
    deadlines: [
      { task: 'Hearing date', days: 10 }
    ]
  }
};

// Available forms database
const AVAILABLE_FORMS: FormItem[] = [
  // Divorce Forms
  {
    id: 'petition_divorce',
    name: 'Petition for Dissolution of Marriage',
    formNumber: 'DR11p',
    description: 'Start divorce proceedings',
    category: 'Divorce',
    required: false,
    copies: 3,
    status: 'not_started',
    estimatedTime: 45
  },
  {
    id: 'response_divorce',
    name: 'Response to Petition',
    formNumber: 'DR12p',
    description: 'Respond to divorce petition',
    category: 'Divorce',
    required: false,
    copies: 2,
    status: 'not_started',
    estimatedTime: 30
  },
  // Financial Forms
  {
    id: 'disclosure_statement',
    name: 'Disclosure Statement',
    formNumber: 'DRDS10f',
    description: 'Initial financial disclosure',
    category: 'Financial',
    required: false,
    copies: 2,
    status: 'not_started',
    estimatedTime: 45
  },
  // Children Forms
  {
    id: 'parenting_class_cert',
    name: 'Parenting Class Certificate',
    description: 'Proof of class completion',
    category: 'Children',
    required: false,
    copies: 2,
    status: 'not_started',
    estimatedTime: 240
  },
  // Motion Forms
  {
    id: 'motion_temporary_orders',
    name: 'Motion for Temporary Orders',
    formNumber: 'DR91f',
    description: 'Request temporary support/custody',
    category: 'Motions',
    required: false,
    copies: 3,
    status: 'not_started',
    estimatedTime: 60
  },
  // Service Forms
  {
    id: 'acceptance_service',
    name: 'Acceptance of Service',
    formNumber: 'DR22f',
    description: 'Voluntary acceptance of papers',
    category: 'Service',
    required: false,
    copies: 2,
    status: 'not_started',
    estimatedTime: 10
  },
  {
    id: 'affidavit_service',
    name: 'Affidavit of Service',
    formNumber: 'DR23f',
    description: 'Proof of service',
    category: 'Service',
    required: false,
    copies: 2,
    status: 'not_started',
    estimatedTime: 15
  }
];

export default function FormPacketBuilder({ packetType, preselectedForms, onSave }: FormPacketBuilderProps) {
  const [packet, setPacket] = useState<FormPacket>({
    id: '',
    name: '',
    description: '',
    type: 'custom',
    forms: [],
    totalTime: 0,
    totalCopies: 0,
    filingFee: 0,
    instructions: [],
    deadlines: []
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showInstructions, setShowInstructions] = useState(true);

  // Initialize with preset packet if specified
  useEffect(() => {
    if (packetType && PRESET_PACKETS[packetType]) {
      const preset = PRESET_PACKETS[packetType];
      setPacket({
        id: generatePacketId(),
        name: preset.name || '',
        description: preset.description || '',
        type: preset.type || 'custom',
        forms: preset.forms || [],
        totalTime: calculateTotalTime(preset.forms || []),
        totalCopies: calculateTotalCopies(preset.forms || []),
        filingFee: preset.filingFee || 0,
        instructions: preset.instructions || [],
        deadlines: preset.deadlines || []
      });
    } else if (preselectedForms && preselectedForms.length > 0) {
      // Load forms based on preselected IDs
      const selectedForms = AVAILABLE_FORMS.filter(f => 
        preselectedForms.includes(f.id)
      );
      setPacket(prev => ({
        ...prev,
        id: generatePacketId(),
        forms: selectedForms,
        totalTime: calculateTotalTime(selectedForms),
        totalCopies: calculateTotalCopies(selectedForms)
      }));
    }
  }, [packetType, preselectedForms]);

  const generatePacketId = () => {
    return `packet_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  const calculateTotalTime = (forms: FormItem[]): number => {
    return forms.reduce((total, form) => total + (form.estimatedTime || 0), 0);
  };

  const calculateTotalCopies = (forms: FormItem[]): number => {
    return forms.reduce((total, form) => total + form.copies, 0);
  };

  const addFormToPacket = (form: FormItem) => {
    const newForms = [...packet.forms, { ...form, status: 'not_started' as const }];
    setPacket(prev => ({
      ...prev,
      forms: newForms,
      totalTime: calculateTotalTime(newForms),
      totalCopies: calculateTotalCopies(newForms)
    }));
  };

  const removeFormFromPacket = (formId: string) => {
    const newForms = packet.forms.filter(f => f.id !== formId);
    setPacket(prev => ({
      ...prev,
      forms: newForms,
      totalTime: calculateTotalTime(newForms),
      totalCopies: calculateTotalCopies(newForms)
    }));
  };

  const updateFormStatus = (formId: string, status: FormItem['status']) => {
    const newForms = packet.forms.map(f => 
      f.id === formId ? { ...f, status } : f
    );
    setPacket(prev => ({
      ...prev,
      forms: newForms
    }));
  };

  const updateFormCopies = (formId: string, copies: number) => {
    const newForms = packet.forms.map(f => 
      f.id === formId ? { ...f, copies: Math.max(1, copies) } : f
    );
    setPacket(prev => ({
      ...prev,
      forms: newForms,
      totalCopies: calculateTotalCopies(newForms)
    }));
  };

  const getCompletionPercentage = (): number => {
    if (packet.forms.length === 0) return 0;
    const completed = packet.forms.filter(f => f.status === 'completed').length;
    return Math.round((completed / packet.forms.length) * 100);
  };

  const getTimeEstimate = (): string => {
    const hours = Math.floor(packet.totalTime / 60);
    const minutes = packet.totalTime % 60;
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  const exportPacketList = () => {
    const packetData = {
      ...packet,
      exportDate: new Date().toISOString(),
      completionPercentage: getCompletionPercentage()
    };

    const blob = new Blob([JSON.stringify(packetData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `form_packet_${packet.name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const printPacketChecklist = () => {
    window.print();
  };

  const handleSavePacket = () => {
    if (onSave) {
      onSave(packet);
    }
  };

  // Filter available forms
  const filteredForms = AVAILABLE_FORMS.filter(form => {
    const matchesSearch = searchTerm === '' || 
      form.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      form.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (form.formNumber && form.formNumber.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || form.category === selectedCategory;
    
    // Don't show forms already in packet
    const notInPacket = !packet.forms.some(f => f.id === form.id);
    
    return matchesSearch && matchesCategory && notInPacket;
  });

  // Get unique categories
  const categories = ['all', ...new Set(AVAILABLE_FORMS.map(f => f.category))];

  return (
    <div className="space-y-6">
      {/* Packet Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Package className="w-8 h-8 text-blue-600" />
              <div>
                <input
                  type="text"
                  value={packet.name}
                  onChange={(e) => setPacket(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter packet name..."
                  className="text-2xl font-bold bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  value={packet.description}
                  onChange={(e) => setPacket(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Add description..."
                  className="text-sm text-gray-600 bg-transparent border-b border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none w-full"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={printPacketChecklist}>
                <Printer className="w-4 h-4 mr-2" />
                Print
              </Button>
              <Button variant="outline" size="sm" onClick={exportPacketList}>
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button size="sm" onClick={handleSavePacket}>
                <Save className="w-4 h-4 mr-2" />
                Save Packet
              </Button>
            </div>
          </div>

          {/* Packet Stats */}
          <div className="grid md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{packet.forms.length}</div>
              <div className="text-sm text-gray-600">Forms</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{getCompletionPercentage()}%</div>
              <div className="text-sm text-gray-600">Complete</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{getTimeEstimate()}</div>
              <div className="text-sm text-gray-600">Est. Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{packet.totalCopies}</div>
              <div className="text-sm text-gray-600">Total Copies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">${packet.filingFee}</div>
              <div className="text-sm text-gray-600">Filing Fee</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${getCompletionPercentage()}%` }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Current Packet Forms */}
        <div>
          <h3 className="font-semibold mb-4">Forms in Packet</h3>
          {packet.forms.length === 0 ? (
            <Card className="border-dashed">
              <CardContent className="p-8 text-center text-gray-500">
                <Package className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                <p>No forms added yet</p>
                <p className="text-sm mt-1">Add forms from the list on the right</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-3">
              {packet.forms.map((form, index) => (
                <Card key={form.id} className={form.required ? 'border-red-200' : ''}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-gray-500">#{index + 1}</span>
                          <h4 className="font-semibold">
                            {form.name}
                            {form.formNumber && (
                              <span className="ml-2 text-sm text-gray-500">({form.formNumber})</span>
                            )}
                          </h4>
                          {form.required && (
                            <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">Required</span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{form.description}</p>
                        
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <label>Status:</label>
                            <select
                              value={form.status}
                              onChange={(e) => updateFormStatus(form.id, e.target.value as FormItem['status'])}
                              className="px-2 py-1 border rounded text-xs"
                            >
                              <option value="not_started">Not Started</option>
                              <option value="in_progress">In Progress</option>
                              <option value="review">Review</option>
                              <option value="completed">Completed</option>
                            </select>
                          </div>
                          
                          <div className="flex items-center gap-1">
                            <label className="text-xs">Copies:</label>
                            <button
                              onClick={() => updateFormCopies(form.id, form.copies - 1)}
                              className="w-6 h-6 border rounded hover:bg-gray-100"
                            >
                              <Minus className="w-3 h-3 mx-auto" />
                            </button>
                            <span className="w-8 text-center font-medium">{form.copies}</span>
                            <button
                              onClick={() => updateFormCopies(form.id, form.copies + 1)}
                              className="w-6 h-6 border rounded hover:bg-gray-100"
                            >
                              <Plus className="w-3 h-3 mx-auto" />
                            </button>
                          </div>
                          
                          {form.estimatedTime && (
                            <div className="flex items-center gap-1 text-gray-500">
                              <Clock className="w-3 h-3" />
                              <span className="text-xs">{form.estimatedTime}m</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {!form.required && (
                        <button
                          onClick={() => removeFormFromPacket(form.id)}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Available Forms */}
        <div>
          <h3 className="font-semibold mb-4">Available Forms</h3>
          
          {/* Search and Filter */}
          <div className="mb-4 space-y-3">
            <input
              type="text"
              placeholder="Search forms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>
          
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {filteredForms.map(form => (
              <Card key={form.id} className="hover:shadow-md transition-shadow cursor-pointer"
                   onClick={() => addFormToPacket(form)}>
                <CardContent className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">
                        {form.name}
                        {form.formNumber && (
                          <span className="ml-2 text-xs text-gray-500">({form.formNumber})</span>
                        )}
                      </h4>
                      <p className="text-xs text-gray-600">{form.description}</p>
                    </div>
                    <Plus className="w-4 h-4 text-green-600" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Instructions and Deadlines */}
      {showInstructions && ((packet.instructions && packet.instructions.length > 0) || (packet.deadlines && packet.deadlines.length > 0)) && (
        <div className="grid md:grid-cols-2 gap-6">
          {packet.instructions && packet.instructions.length > 0 && (
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Filing Instructions
                </h3>
                <ol className="space-y-2 text-sm">
                  {packet.instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="font-semibold text-blue-600">{index + 1}.</span>
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          )}

          {packet.deadlines && packet.deadlines.length > 0 && (
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-red-600" />
                  Important Deadlines
                </h3>
                <div className="space-y-2">
                  {packet.deadlines.map((deadline, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span>{deadline.task}</span>
                      <span className="font-semibold text-red-600">{deadline.days} days</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}