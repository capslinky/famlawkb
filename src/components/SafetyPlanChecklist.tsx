'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, Circle, Printer, Shield, Phone, CreditCard, FileText, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface SafetyItem {
  id: string;
  category: 'emergency' | 'documents' | 'financial' | 'digital' | 'emotional';
  text: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
}

const SAFETY_CHECKLIST_ITEMS: Omit<SafetyItem, 'completed'>[] = [
  // Emergency & Physical Safety
  { id: 'emergency-contacts', category: 'emergency', text: 'Create a list of emergency contacts (family, friends, domestic violence hotline)', priority: 'high' },
  { id: 'safe-place', category: 'emergency', text: 'Identify a safe place to go in an emergency (friend, family, shelter)', priority: 'high' },
  { id: 'escape-bag', category: 'emergency', text: 'Pack a "go bag" with essentials (clothes, medications, important items)', priority: 'high' },
  { id: 'car-keys', category: 'emergency', text: 'Keep car keys and phone easily accessible', priority: 'high' },
  { id: 'safety-signal', category: 'emergency', text: 'Establish a code word/signal with trusted people for help', priority: 'medium' },
  
  // Important Documents
  { id: 'id-documents', category: 'documents', text: 'Secure copies of IDs (driver\'s license, passport, social security cards)', priority: 'high' },
  { id: 'financial-docs', category: 'documents', text: 'Copy financial documents (bank statements, tax returns, pay stubs)', priority: 'high' },
  { id: 'legal-docs', category: 'documents', text: 'Gather legal documents (marriage certificate, custody orders, protection orders)', priority: 'high' },
  { id: 'medical-records', category: 'documents', text: 'Collect medical records and insurance information', priority: 'medium' },
  { id: 'children-docs', category: 'documents', text: 'Secure children\'s documents (birth certificates, school records, medical info)', priority: 'high' },
  
  // Financial Safety
  { id: 'bank-account', category: 'financial', text: 'Open a separate bank account in your name only', priority: 'high' },
  { id: 'credit-check', category: 'financial', text: 'Check your credit report for unknown accounts', priority: 'medium' },
  { id: 'emergency-cash', category: 'financial', text: 'Set aside emergency cash in a safe location', priority: 'high' },
  { id: 'financial-assets', category: 'financial', text: 'Document all marital assets and debts', priority: 'medium' },
  { id: 'income-proof', category: 'financial', text: 'Gather proof of income and employment', priority: 'medium' },
  
  // Digital Safety
  { id: 'password-change', category: 'digital', text: 'Change passwords on all important accounts', priority: 'high' },
  { id: 'device-security', category: 'digital', text: 'Check devices for tracking software or shared accounts', priority: 'high' },
  { id: 'private-email', category: 'digital', text: 'Create a private email account from a safe location', priority: 'medium' },
  { id: 'social-media', category: 'digital', text: 'Review and secure social media privacy settings', priority: 'medium' },
  { id: 'browsing-history', category: 'digital', text: 'Learn to browse privately and clear history', priority: 'medium' },
  
  // Emotional & Legal Support
  { id: 'support-network', category: 'emotional', text: 'Build a support network of trusted friends, family, or counselors', priority: 'high' },
  { id: 'legal-consultation', category: 'emotional', text: 'Consult with a family law attorney about your rights', priority: 'high' },
  { id: 'counseling', category: 'emotional', text: 'Consider counseling or therapy for emotional support', priority: 'medium' },
  { id: 'children-support', category: 'emotional', text: 'Arrange appropriate support for children (counseling, trusted adults)', priority: 'high' },
  { id: 'documentation', category: 'emotional', text: 'Document incidents of abuse or concerning behavior', priority: 'medium' }
];

const CATEGORY_INFO = {
  emergency: { icon: Shield, color: 'red', title: 'Emergency Preparedness' },
  documents: { icon: FileText, color: 'blue', title: 'Important Documents' },
  financial: { icon: CreditCard, color: 'green', title: 'Financial Security' },
  digital: { icon: Phone, color: 'purple', title: 'Digital Safety' },
  emotional: { icon: Heart, color: 'pink', title: 'Emotional Support' }
};

export default function SafetyPlanChecklist() {
  const [items, setItems] = useState<SafetyItem[]>([]);
  const [showCompleted, setShowCompleted] = useState(true);

  // Load checklist from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('safetyPlanChecklist');
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch {
        // If parsing fails, initialize with default items
        initializeItems();
      }
    } else {
      initializeItems();
    }
  }, []);

  const initializeItems = () => {
    const initialItems = SAFETY_CHECKLIST_ITEMS.map(item => ({
      ...item,
      completed: false
    }));
    setItems(initialItems);
  };

  // Save to localStorage whenever items change
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem('safetyPlanChecklist', JSON.stringify(items));
    }
  }, [items]);

  const toggleItem = (id: string) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const resetChecklist = () => {
    if (confirm('Are you sure you want to reset your safety plan checklist? This will clear all your progress.')) {
      initializeItems();
    }
  };

  const getCompletionStats = () => {
    const total = items.length;
    const completed = items.filter(item => item.completed).length;
    const highPriority = items.filter(item => item.priority === 'high');
    const highPriorityCompleted = highPriority.filter(item => item.completed).length;
    
    return { total, completed, highPriority: highPriority.length, highPriorityCompleted };
  };

  const printChecklist = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const completedItems = items.filter(item => item.completed);
    const pendingItems = items.filter(item => !item.completed);

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Personal Safety Plan Checklist</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            h1 { color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; }
            h2 { color: #374151; margin-top: 30px; }
            .item { margin: 10px 0; padding: 8px; }
            .completed { background-color: #f0fdf4; border-left: 4px solid #22c55e; }
            .pending { background-color: #fef3c7; border-left: 4px solid #f59e0b; }
            .high-priority { font-weight: bold; }
            .emergency-info { background-color: #fef2f2; border: 1px solid #fca5a5; border-radius: 4px; padding: 15px; margin: 20px 0; }
            @media print { body { margin: 0; } }
          </style>
        </head>
        <body>
          <h1>Personal Safety Plan Checklist</h1>
          <div class="emergency-info">
            <strong>Emergency Contacts:</strong><br>
            • National Domestic Violence Hotline: 1-800-799-7233<br>
            • Local Emergency: 911<br>
            • Crisis Text Line: Text HOME to 741741
          </div>
          
          <h2>Completed Items (${completedItems.length})</h2>
          ${completedItems.map(item => `
            <div class="item completed ${item.priority === 'high' ? 'high-priority' : ''}">
              ✓ ${item.text}
            </div>
          `).join('')}
          
          <h2>Still To Do (${pendingItems.length})</h2>
          ${pendingItems.map(item => `
            <div class="item pending ${item.priority === 'high' ? 'high-priority' : ''}">
              ☐ ${item.text} ${item.priority === 'high' ? '(HIGH PRIORITY)' : ''}
            </div>
          `).join('')}
          
          <p style="margin-top: 40px; font-size: 12px; color: #6b7280;">
            Generated on ${new Date().toLocaleDateString()} - Keep this document in a safe, accessible place.
          </p>
        </body>
      </html>
    `);
    
    printWindow.document.close();
    printWindow.print();
  };

  const stats = getCompletionStats();
  const filteredItems = showCompleted ? items : items.filter(item => !item.completed);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Personal Safety Plan Checklist</h1>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <p className="text-amber-800 text-sm mb-2">
            <strong>Important:</strong> If you are in immediate danger, call 911. This checklist is designed to help you prepare and plan for your safety over time.
          </p>
          <p className="text-amber-700 text-xs">
            Your progress is saved locally on this device. Use privacy mode if you&apos;re concerned about someone else accessing this information.
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-1">
                <div className="text-lg font-semibold">
                  {stats.completed} of {stats.total} items completed
                </div>
                <div className="text-sm text-gray-600">
                  High priority: {stats.highPriorityCompleted} of {stats.highPriority} completed
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(stats.completed / stats.total) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button 
                  onClick={printChecklist}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  Print
                </Button>
                <Button 
                  onClick={resetChecklist}
                  variant="outline"
                  className="text-red-600 hover:text-red-700"
                >
                  Reset
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filter Toggle */}
        <div className="flex items-center gap-4 mb-6">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={showCompleted}
              onChange={(e) => setShowCompleted(e.target.checked)}
              className="rounded"
            />
            Show completed items
          </label>
        </div>
      </div>

      {/* Checklist Items by Category */}
      {Object.entries(CATEGORY_INFO).map(([category, info]) => {
        const categoryItems = filteredItems.filter(item => item.category === category);
        if (categoryItems.length === 0) return null;

        const Icon = info.icon;
        
        return (
          <Card key={category} className="mb-6">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-${info.color}-100 flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 text-${info.color}-600`} />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{info.title}</h2>
              </div>
              
              <div className="space-y-3">
                {categoryItems.map(item => (
                  <div
                    key={item.id}
                    className={`flex items-start gap-3 p-3 rounded-lg border transition-colors cursor-pointer hover:bg-gray-50 ${
                      item.completed 
                        ? 'bg-green-50 border-green-200' 
                        : item.priority === 'high' 
                          ? 'bg-red-50 border-red-200' 
                          : 'bg-white border-gray-200'
                    }`}
                    onClick={() => toggleItem(item.id)}
                  >
                    <button className="mt-0.5">
                      {item.completed ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <Circle className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    <div className="flex-1">
                      <p className={`text-sm ${item.completed ? 'text-green-800 line-through' : 'text-gray-900'}`}>
                        {item.text}
                      </p>
                      {item.priority === 'high' && !item.completed && (
                        <span className="inline-block mt-1 px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                          High Priority
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })}

      {filteredItems.length === 0 && !showCompleted && (
        <Card>
          <CardContent className="pt-6 text-center">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">All items completed!</h3>
            <p className="text-gray-600 mb-4">Great job working on your safety plan. Remember to review and update it regularly.</p>
            <Button onClick={() => setShowCompleted(true)} variant="outline">
              Show completed items
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Emergency Resources */}
      <Card className="mt-8 border-red-200 bg-red-50">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-red-600" />
            <h3 className="text-lg font-semibold text-red-900">Emergency Resources</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium text-red-900 mb-2">24/7 Crisis Support:</p>
              <ul className="space-y-1 text-red-800">
                <li>• National Domestic Violence Hotline: <strong>1-800-799-7233</strong></li>
                <li>• Crisis Text Line: Text <strong>HOME</strong> to <strong>741741</strong></li>
                <li>• National Suicide Prevention Lifeline: <strong>988</strong></li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-red-900 mb-2">Local Arizona Resources:</p>
              <ul className="space-y-1 text-red-800">
                <li>• Arizona Coalition to End Sexual & Domestic Violence</li>
                <li>• Local law enforcement: <strong>911</strong></li>
                <li>• Arizona Family Court Self-Service Centers</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}