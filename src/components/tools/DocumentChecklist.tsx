'use client';

import React, { useState } from 'react';
import { FileText, Check, Download, Printer, Plus, X, AlertCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { InfoCard } from '@/components/ui/info-card';

interface DocumentItem {
  id: string;
  name: string;
  required: boolean;
  obtained: boolean;
  category: string;
  description?: string;
  tips?: string;
}

interface DocumentTemplate {
  name: string;
  description: string;
  documents: Omit<DocumentItem, 'id' | 'obtained'>[];
}

const DOCUMENT_TEMPLATES: DocumentTemplate[] = [
  {
    name: 'Divorce Filing',
    description: 'Essential documents for filing divorce in Arizona',
    documents: [
      { name: 'Marriage Certificate', required: true, category: 'Legal Documents', description: 'Certified copy from the county', tips: 'Order online or visit county clerk' },
      { name: 'Petition for Dissolution', required: true, category: 'Court Forms', description: 'Arizona Form DR11', tips: 'Available on court website' },
      { name: 'Summons', required: true, category: 'Court Forms', description: 'Arizona Form DR10', tips: 'Must be served to spouse' },
      { name: 'Preliminary Injunction', required: true, category: 'Court Forms', description: 'Arizona Form DR12', tips: 'Automatic with filing' },
      { name: 'Sensitive Data Sheet', required: true, category: 'Court Forms', description: 'Confidential information form', tips: 'Keep SSNs and account numbers private' },
      { name: 'Bank Statements (3 months)', required: true, category: 'Financial', description: 'All accounts', tips: 'Download from bank website' },
      { name: 'Pay Stubs (2 months)', required: true, category: 'Financial', description: 'Recent income verification', tips: 'Get from employer or payroll system' },
      { name: 'Tax Returns (2 years)', required: true, category: 'Financial', description: 'Federal and state returns', tips: 'Download from IRS website' },
      { name: 'Property Deeds', required: false, category: 'Property', description: 'Real estate ownership documents', tips: 'Get from county recorder' },
      { name: 'Vehicle Titles', required: false, category: 'Property', description: 'Car, boat, RV titles', tips: 'Request from MVD if lost' },
      { name: 'Retirement Account Statements', required: false, category: 'Financial', description: '401k, IRA, pension info', tips: 'Contact plan administrator' },
      { name: 'Insurance Policies', required: false, category: 'Financial', description: 'Life, health, auto policies', tips: 'Request from insurance companies' }
    ]
  },
  {
    name: 'Child Custody Case',
    description: 'Documents needed for custody proceedings',
    documents: [
      { name: 'Birth Certificates', required: true, category: 'Legal Documents', description: 'For all children', tips: 'Order certified copies from vital records' },
      { name: 'Parenting Plan', required: true, category: 'Court Forms', description: 'Proposed custody schedule', tips: 'Be specific about holidays and vacations' },
      { name: 'Child Support Worksheet', required: true, category: 'Court Forms', description: 'Arizona calculator results', tips: 'Use official Arizona calculator' },
      { name: 'School Records', required: true, category: 'Children', description: 'Report cards, attendance', tips: 'Request from school registrar' },
      { name: 'Medical Records', required: true, category: 'Children', description: 'Immunizations, health issues', tips: 'Get from pediatrician' },
      { name: 'Childcare Expenses', required: false, category: 'Financial', description: 'Daycare, after-school receipts', tips: 'Keep all receipts organized' },
      { name: 'Extracurricular Activities', required: false, category: 'Children', description: 'Sports, music, clubs documentation', tips: 'Include schedules and costs' },
      { name: 'Communication Logs', required: false, category: 'Evidence', description: 'Texts, emails with other parent', tips: 'Screenshot and organize by date' },
      { name: 'Parenting Time Calendar', required: false, category: 'Evidence', description: 'Record of actual time spent', tips: 'Use app or written log' },
      { name: 'Character References', required: false, category: 'Evidence', description: 'Letters from teachers, coaches', tips: 'Ask for specific examples' }
    ]
  },
  {
    name: 'Financial Disclosure',
    description: 'Complete financial disclosure requirements',
    documents: [
      { name: 'Affidavit of Financial Information', required: true, category: 'Court Forms', description: 'Arizona Form DR14', tips: 'Must be accurate and complete' },
      { name: 'Bank Statements (12 months)', required: true, category: 'Financial', description: 'All checking and savings', tips: 'Include closed accounts' },
      { name: 'Credit Card Statements', required: true, category: 'Financial', description: 'All cards for 6 months', tips: 'Show balances and payments' },
      { name: 'Investment Accounts', required: true, category: 'Financial', description: 'Stocks, bonds, mutual funds', tips: 'Current statements from all brokers' },
      { name: 'W-2 Forms', required: true, category: 'Income', description: 'Last 2 years', tips: 'Get from employer if lost' },
      { name: '1099 Forms', required: false, category: 'Income', description: 'Contract or investment income', tips: 'Check with payers or IRS' },
      { name: 'Business Records', required: false, category: 'Income', description: 'If self-employed', tips: 'P&L statements, balance sheets' },
      { name: 'Loan Documents', required: true, category: 'Debts', description: 'Mortgages, car loans, personal loans', tips: 'Include payment history' },
      { name: 'Credit Reports', required: false, category: 'Debts', description: 'From all three bureaus', tips: 'Free at annualcreditreport.com' },
      { name: 'Monthly Budget', required: false, category: 'Financial', description: 'Income and expenses', tips: 'Be realistic and detailed' }
    ]
  },
  {
    name: 'Protection Order',
    description: 'Documentation for order of protection',
    documents: [
      { name: 'Petition for Order of Protection', required: true, category: 'Court Forms', description: 'Detailed incident description', tips: 'Be specific about dates and events' },
      { name: 'Police Reports', required: false, category: 'Evidence', description: 'Any incident reports', tips: 'Request from records department' },
      { name: 'Medical Records', required: false, category: 'Evidence', description: 'Injury documentation', tips: 'ER visits, doctor notes' },
      { name: 'Photographs', required: false, category: 'Evidence', description: 'Injuries, property damage', tips: 'Date stamp if possible' },
      { name: 'Text Messages/Emails', required: false, category: 'Evidence', description: 'Threats or harassment', tips: 'Screenshot with date/time visible' },
      { name: 'Witness Statements', required: false, category: 'Evidence', description: 'Written accounts from witnesses', tips: 'Include contact information' },
      { name: 'Call Logs', required: false, category: 'Evidence', description: 'Phone records showing harassment', tips: 'Get from phone carrier' },
      { name: 'Social Media Posts', required: false, category: 'Evidence', description: 'Threatening or harassing posts', tips: 'Screenshot before blocking' },
      { name: 'Audio/Video Recordings', required: false, category: 'Evidence', description: 'If legally obtained', tips: 'Check Arizona recording laws' },
      { name: 'Prior Orders', required: false, category: 'Legal Documents', description: 'Previous protection orders', tips: 'Include violation documentation' }
    ]
  }
];

export default function DocumentChecklist() {
  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [customCategory, setCustomCategory] = useState('');
  const [customDocument, setCustomDocument] = useState('');
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [showOnlyRequired, setShowOnlyRequired] = useState(false);

  const loadTemplate = (templateName: string) => {
    const template = DOCUMENT_TEMPLATES.find(t => t.name === templateName);
    if (!template) return;

    const newDocuments: DocumentItem[] = template.documents.map((doc, index) => ({
      ...doc,
      id: `${Date.now()}-${index}`,
      obtained: false
    }));

    setDocuments(newDocuments);
    setSelectedTemplate(templateName);
  };

  const toggleDocument = (docId: string) => {
    setDocuments(documents.map(doc => 
      doc.id === docId ? { ...doc, obtained: !doc.obtained } : doc
    ));
  };

  const addCustomDocument = () => {
    if (!customDocument) return;

    const newDoc: DocumentItem = {
      id: `custom-${Date.now()}`,
      name: customDocument,
      required: false,
      obtained: false,
      category: customCategory || 'Custom',
      description: '',
      tips: ''
    };

    setDocuments([...documents, newDoc]);
    setCustomDocument('');
    setCustomCategory('');
    setShowCustomForm(false);
  };

  const removeDocument = (docId: string) => {
    setDocuments(documents.filter(doc => doc.id !== docId));
  };

  const getCategories = (): string[] => {
    const categories = new Set(documents.map(doc => doc.category));
    return Array.from(categories).sort();
  };

  const getFilteredDocuments = (): DocumentItem[] => {
    let filtered = documents;
    
    if (filterCategory !== 'all') {
      filtered = filtered.filter(doc => doc.category === filterCategory);
    }
    
    if (showOnlyRequired) {
      filtered = filtered.filter(doc => doc.required);
    }
    
    return filtered;
  };

  const getProgress = () => {
    const required = documents.filter(doc => doc.required);
    const requiredObtained = required.filter(doc => doc.obtained);
    const optional = documents.filter(doc => !doc.required);
    const optionalObtained = optional.filter(doc => doc.obtained);
    
    return {
      requiredTotal: required.length,
      requiredObtained: requiredObtained.length,
      requiredPercent: required.length > 0 ? Math.round((requiredObtained.length / required.length) * 100) : 0,
      optionalTotal: optional.length,
      optionalObtained: optionalObtained.length,
      overallPercent: documents.length > 0 ? Math.round((documents.filter(d => d.obtained).length / documents.length) * 100) : 0
    };
  };

  const exportChecklist = () => {
    const progress = getProgress();
    let content = `Document Checklist - ${selectedTemplate || 'Custom'}\\n`;
    content += `Generated: ${new Date().toLocaleDateString()}\\n`;
    content += `Progress: ${progress.requiredObtained}/${progress.requiredTotal} required, ${progress.optionalObtained}/${progress.optionalTotal} optional\\n\\n`;
    
    const categories = getCategories();
    categories.forEach(category => {
      content += `\\n${category.toUpperCase()}\\n`;
      content += '-'.repeat(40) + '\\n';
      
      const categoryDocs = documents.filter(doc => doc.category === category);
      categoryDocs.forEach(doc => {
        const status = doc.obtained ? '✓' : '☐';
        const required = doc.required ? '*' : '';
        content += `${status} ${doc.name}${required}\\n`;
        if (doc.description) content += `   ${doc.description}\\n`;
        if (doc.tips) content += `   Tip: ${doc.tips}\\n`;
      });
    });
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `document-checklist-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
  };

  const printChecklist = () => {
    window.print();
  };

  const progress = getProgress();

  return (
    <div className="space-y-6">
      {/* Header & Templates */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold">Document Checklist Generator</h2>
            </div>
            {documents.length > 0 && (
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={printChecklist}>
                  <Printer className="w-4 h-4 mr-2" />
                  Print
                </Button>
                <Button variant="outline" size="sm" onClick={exportChecklist}>
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            )}
          </div>

          {/* Template Selection */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Choose a Template
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {DOCUMENT_TEMPLATES.map(template => (
                  <button
                    key={template.name}
                    onClick={() => loadTemplate(template.name)}
                    className={`text-left p-3 rounded-lg border-2 transition-all ${
                      selectedTemplate === template.name
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-medium">{template.name}</div>
                    <div className="text-sm text-gray-600">{template.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Add Custom Document */}
            <div className="flex items-center justify-between pt-4 border-t">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowCustomForm(!showCustomForm)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Custom Document
              </Button>
              
              {documents.length > 0 && (
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={showOnlyRequired}
                      onChange={(e) => setShowOnlyRequired(e.target.checked)}
                      className="rounded"
                    />
                    Required only
                  </label>
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="text-sm px-2 py-1 border rounded"
                  >
                    <option value="all">All Categories</option>
                    {getCategories().map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Custom Document Form */}
            {showCustomForm && (
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Document name"
                    value={customDocument}
                    onChange={(e) => setCustomDocument(e.target.value)}
                    className="flex-1 px-3 py-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Category (optional)"
                    value={customCategory}
                    onChange={(e) => setCustomCategory(e.target.value)}
                    className="px-3 py-2 border rounded"
                  />
                  <Button size="sm" onClick={addCustomDocument}>Add</Button>
                  <Button size="sm" variant="outline" onClick={() => setShowCustomForm(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Progress Overview */}
      {documents.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Progress Overview</h3>
            
            <div className="space-y-4">
              {/* Required Documents Progress */}
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Required Documents</span>
                  <span>{progress.requiredObtained} of {progress.requiredTotal}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full transition-all"
                    style={{ width: `${progress.requiredPercent}%` }}
                  />
                </div>
              </div>

              {/* Optional Documents Progress */}
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Optional Documents</span>
                  <span>{progress.optionalObtained} of {progress.optionalTotal}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all"
                    style={{ width: progress.optionalTotal > 0 ? `${(progress.optionalObtained / progress.optionalTotal) * 100}%` : '0%' }}
                  />
                </div>
              </div>

              {/* Overall Progress */}
              <div className="pt-2 border-t">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-semibold">Overall Completion</span>
                  <span className="font-semibold">{progress.overallPercent}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-green-500 h-3 rounded-full transition-all"
                    style={{ width: `${progress.overallPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {progress.requiredPercent === 100 && (
              <InfoCard type="success" className="mt-4">
                All required documents obtained! Review optional documents for a stronger case.
              </InfoCard>
            )}
          </CardContent>
        </Card>
      )}

      {/* Document List */}
      {documents.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Document Checklist</h3>
            
            <div className="space-y-2">
              {getFilteredDocuments().map(doc => (
                <div
                  key={doc.id}
                  className={`border rounded-lg p-4 transition-all ${
                    doc.obtained ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <button
                      onClick={() => toggleDocument(doc.id)}
                      className="mt-0.5 flex-shrink-0"
                    >
                      {doc.obtained ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <div className="w-5 h-5 border-2 border-gray-300 rounded" />
                      )}
                    </button>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className={`font-medium ${doc.obtained ? 'line-through text-gray-500' : ''}`}>
                            {doc.name}
                            {doc.required && <span className="text-red-500 ml-1">*</span>}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            <span className="font-medium">{doc.category}</span>
                            {doc.description && ` • ${doc.description}`}
                          </p>
                          {doc.tips && (
                            <div className="flex items-start gap-2 mt-2 p-2 bg-blue-50 rounded">
                              <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                              <p className="text-sm text-blue-800">{doc.tips}</p>
                            </div>
                          )}
                        </div>
                        
                        <button
                          onClick={() => removeDocument(doc.id)}
                          className="ml-2 p-1 hover:bg-gray-100 rounded"
                        >
                          <X className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-sm text-gray-600">
              <span className="text-red-500">*</span> Required document
            </div>
          </CardContent>
        </Card>
      )}

      {/* Empty State */}
      {documents.length === 0 && (
        <InfoCard type="info" title="Get Started">
          <p>Select a template above to generate your document checklist, or add custom documents to track.</p>
        </InfoCard>
      )}
    </div>
  );
}