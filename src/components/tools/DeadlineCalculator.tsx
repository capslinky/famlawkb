'use client';

import React, { useState } from 'react';
import { Clock, Calendar, AlertTriangle, Info, Plus, Trash2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { InfoCard } from '@/components/ui/info-card';
import { format, addDays, addBusinessDays, isWeekend, differenceInDays, isBefore, isAfter } from 'date-fns';

interface Deadline {
  id: string;
  name: string;
  baseDate: string;
  daysToAdd: number;
  isBusinessDays: boolean;
  calculatedDate: Date;
  daysRemaining: number;
  category: string;
  notes?: string;
}

interface DeadlineTemplate {
  name: string;
  category: string;
  rules: {
    name: string;
    daysToAdd: number;
    isBusinessDays: boolean;
    description: string;
  }[];
}

const ARIZONA_COURT_HOLIDAYS = [
  '2025-01-01', // New Year's Day
  '2025-01-20', // MLK Day
  '2025-02-17', // Presidents Day
  '2025-05-26', // Memorial Day
  '2025-07-04', // Independence Day
  '2025-09-01', // Labor Day
  '2025-10-13', // Columbus Day
  '2025-11-11', // Veterans Day
  '2025-11-27', // Thanksgiving
  '2025-11-28', // Day after Thanksgiving
  '2025-12-25', // Christmas
];

const DEADLINE_TEMPLATES: DeadlineTemplate[] = [
  {
    name: 'Divorce Response',
    category: 'Family Law',
    rules: [
      { name: 'Response to Petition', daysToAdd: 20, isBusinessDays: false, description: 'Arizona resident served in-state' },
      { name: 'Response if Out of State', daysToAdd: 30, isBusinessDays: false, description: 'Served outside Arizona' },
      { name: 'Reply to Counterclaim', daysToAdd: 20, isBusinessDays: false, description: 'Response to counterclaim' },
      { name: 'Financial Disclosure', daysToAdd: 40, isBusinessDays: false, description: 'Rule 49 disclosure deadline' },
      { name: 'Pretrial Statement', daysToAdd: 40, isBusinessDays: false, description: 'Before trial date' }
    ]
  },
  {
    name: 'Discovery Deadlines',
    category: 'Discovery',
    rules: [
      { name: 'Interrogatory Response', daysToAdd: 40, isBusinessDays: false, description: 'Written questions response' },
      { name: 'Document Production', daysToAdd: 30, isBusinessDays: false, description: 'Request for production' },
      { name: 'Admission Response', daysToAdd: 30, isBusinessDays: false, description: 'Request for admissions' },
      { name: 'Expert Disclosure', daysToAdd: 150, isBusinessDays: false, description: 'Before trial' },
      { name: 'Discovery Cutoff', daysToAdd: 30, isBusinessDays: false, description: 'Before trial' }
    ]
  },
  {
    name: 'Motion Practice',
    category: 'Motions',
    rules: [
      { name: 'Response to Motion', daysToAdd: 10, isBusinessDays: true, description: 'Opposition deadline' },
      { name: 'Reply to Response', daysToAdd: 5, isBusinessDays: true, description: 'Reply brief deadline' },
      { name: 'Emergency Motion Response', daysToAdd: 1, isBusinessDays: true, description: 'Next business day' },
      { name: 'Motion to Set Hearing', daysToAdd: 5, isBusinessDays: true, description: 'Notice of hearing' }
    ]
  },
  {
    name: 'Appeal Deadlines',
    category: 'Appeals',
    rules: [
      { name: 'Notice of Appeal', daysToAdd: 30, isBusinessDays: false, description: 'From final judgment' },
      { name: 'Cross-Appeal', daysToAdd: 14, isBusinessDays: false, description: 'After notice of appeal' },
      { name: 'Opening Brief', daysToAdd: 40, isBusinessDays: false, description: 'After record filed' },
      { name: 'Answering Brief', daysToAdd: 40, isBusinessDays: false, description: 'After opening brief' },
      { name: 'Reply Brief', daysToAdd: 20, isBusinessDays: false, description: 'After answering brief' }
    ]
  },
  {
    name: 'Protection Order',
    category: 'Emergency',
    rules: [
      { name: 'Hearing on Ex Parte Order', daysToAdd: 10, isBusinessDays: false, description: 'Maximum time to hearing' },
      { name: 'Request for Hearing', daysToAdd: 10, isBusinessDays: false, description: 'Defendant request deadline' },
      { name: 'Service of Order', daysToAdd: 1, isBusinessDays: false, description: 'Immediate service required' },
      { name: 'Order Duration', daysToAdd: 365, isBusinessDays: false, description: 'Standard duration' }
    ]
  }
];

export default function DeadlineCalculator() {
  const [deadlines, setDeadlines] = useState<Deadline[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [customDeadline, setCustomDeadline] = useState({
    name: '',
    baseDate: format(new Date(), 'yyyy-MM-dd'),
    daysToAdd: 0,
    isBusinessDays: false,
    category: 'Custom',
    notes: ''
  });

  const calculateDeadline = (baseDate: string, daysToAdd: number, isBusinessDays: boolean): Date => {
    const base = new Date(baseDate);
    
    if (isBusinessDays) {
      // Calculate business days, accounting for weekends
      let result = base;
      let daysAdded = 0;
      
      while (daysAdded < daysToAdd) {
        result = addDays(result, 1);
        if (!isWeekend(result) && !isCourtHoliday(result)) {
          daysAdded++;
        }
      }
      return result;
    } else {
      // Calendar days
      return addDays(base, daysToAdd);
    }
  };

  const isCourtHoliday = (date: Date): boolean => {
    const dateStr = format(date, 'yyyy-MM-dd');
    return ARIZONA_COURT_HOLIDAYS.includes(dateStr);
  };

  const addCustomDeadline = () => {
    if (!customDeadline.name || !customDeadline.baseDate) return;

    const calculatedDate = calculateDeadline(
      customDeadline.baseDate,
      customDeadline.daysToAdd,
      customDeadline.isBusinessDays
    );

    const deadline: Deadline = {
      id: `custom-${Date.now()}`,
      name: customDeadline.name,
      baseDate: customDeadline.baseDate,
      daysToAdd: customDeadline.daysToAdd,
      isBusinessDays: customDeadline.isBusinessDays,
      calculatedDate,
      daysRemaining: differenceInDays(calculatedDate, new Date()),
      category: customDeadline.category,
      notes: customDeadline.notes
    };

    setDeadlines([...deadlines, deadline].sort((a, b) => 
      a.calculatedDate.getTime() - b.calculatedDate.getTime()
    ));

    setCustomDeadline({
      name: '',
      baseDate: format(new Date(), 'yyyy-MM-dd'),
      daysToAdd: 0,
      isBusinessDays: false,
      category: 'Custom',
      notes: ''
    });
    setShowCustomForm(false);
  };

  const loadTemplate = (templateName: string) => {
    const template = DEADLINE_TEMPLATES.find(t => t.name === templateName);
    if (!template) return;

    const baseDate = format(new Date(), 'yyyy-MM-dd');
    const newDeadlines: Deadline[] = template.rules.map((rule, index) => {
      const calculatedDate = calculateDeadline(baseDate, rule.daysToAdd, rule.isBusinessDays);
      return {
        id: `template-${Date.now()}-${index}`,
        name: rule.name,
        baseDate,
        daysToAdd: rule.daysToAdd,
        isBusinessDays: rule.isBusinessDays,
        calculatedDate,
        daysRemaining: differenceInDays(calculatedDate, new Date()),
        category: template.category,
        notes: rule.description
      };
    });

    setDeadlines([...deadlines, ...newDeadlines].sort((a, b) => 
      a.calculatedDate.getTime() - b.calculatedDate.getTime()
    ));
    setSelectedTemplate(templateName);
  };

  const removeDeadline = (id: string) => {
    setDeadlines(deadlines.filter(d => d.id !== id));
  };

  const exportDeadlines = () => {
    const csv = [
      'Deadline,Base Date,Days,Type,Calculated Date,Days Remaining,Category,Notes',
      ...deadlines.map(d => [
        d.name,
        format(new Date(d.baseDate), 'MM/dd/yyyy'),
        d.daysToAdd,
        d.isBusinessDays ? 'Business Days' : 'Calendar Days',
        format(d.calculatedDate, 'MM/dd/yyyy'),
        d.daysRemaining,
        d.category,
        d.notes || ''
      ].join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `deadlines-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    a.click();
  };

  const getDeadlineColor = (daysRemaining: number) => {
    if (daysRemaining < 0) return 'bg-gray-100 border-gray-300';
    if (daysRemaining === 0) return 'bg-red-100 border-red-500';
    if (daysRemaining <= 3) return 'bg-orange-100 border-orange-500';
    if (daysRemaining <= 7) return 'bg-yellow-100 border-yellow-500';
    return 'bg-green-50 border-green-300';
  };

  const getDeadlineStatus = (daysRemaining: number) => {
    if (daysRemaining < 0) return { text: 'PAST DUE', color: 'text-gray-600' };
    if (daysRemaining === 0) return { text: 'DUE TODAY', color: 'text-red-600' };
    if (daysRemaining === 1) return { text: 'DUE TOMORROW', color: 'text-orange-600' };
    if (daysRemaining <= 7) return { text: `${daysRemaining} days`, color: 'text-yellow-600' };
    return { text: `${daysRemaining} days`, color: 'text-green-600' };
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold">Legal Deadline Calculator</h2>
            </div>
            {deadlines.length > 0 && (
              <Button variant="outline" size="sm" onClick={exportDeadlines}>
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            )}
          </div>

          {/* Template Selection */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quick Templates
              </label>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {DEADLINE_TEMPLATES.map(template => (
                  <Button
                    key={template.name}
                    variant="outline"
                    size="sm"
                    onClick={() => loadTemplate(template.name)}
                    className="justify-start"
                  >
                    {template.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Add Custom Deadline */}
            <div className="flex justify-between items-center pt-4 border-t">
              <Button
                onClick={() => setShowCustomForm(!showCustomForm)}
                className="flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Custom Deadline
              </Button>

              <InfoCard type="info" className="text-sm max-w-md">
                Arizona courts exclude weekends and holidays when counting business days.
              </InfoCard>
            </div>

            {/* Custom Deadline Form */}
            {showCustomForm && (
              <div className="p-4 bg-gray-50 rounded-lg border">
                <h3 className="font-medium mb-3">Add Custom Deadline</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Deadline Name *
                    </label>
                    <input
                      type="text"
                      value={customDeadline.name}
                      onChange={(e) => setCustomDeadline({ ...customDeadline, name: e.target.value })}
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="e.g., Motion Response"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Base Date *
                    </label>
                    <input
                      type="date"
                      value={customDeadline.baseDate}
                      onChange={(e) => setCustomDeadline({ ...customDeadline, baseDate: e.target.value })}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Days to Add
                    </label>
                    <input
                      type="number"
                      value={customDeadline.daysToAdd}
                      onChange={(e) => setCustomDeadline({ ...customDeadline, daysToAdd: parseInt(e.target.value) || 0 })}
                      className="w-full px-3 py-2 border rounded-md"
                      min="0"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Day Type
                    </label>
                    <select
                      value={customDeadline.isBusinessDays ? 'business' : 'calendar'}
                      onChange={(e) => setCustomDeadline({ ...customDeadline, isBusinessDays: e.target.value === 'business' })}
                      className="w-full px-3 py-2 border rounded-md"
                    >
                      <option value="calendar">Calendar Days</option>
                      <option value="business">Business Days</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <input
                      type="text"
                      value={customDeadline.category}
                      onChange={(e) => setCustomDeadline({ ...customDeadline, category: e.target.value })}
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="e.g., Discovery"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Notes (Optional)
                    </label>
                    <input
                      type="text"
                      value={customDeadline.notes}
                      onChange={(e) => setCustomDeadline({ ...customDeadline, notes: e.target.value })}
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Additional information"
                    />
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button size="sm" onClick={addCustomDeadline}>Add Deadline</Button>
                  <Button size="sm" variant="outline" onClick={() => setShowCustomForm(false)}>Cancel</Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Deadline List */}
      {deadlines.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              Calculated Deadlines
            </h3>

            <div className="space-y-3">
              {deadlines.map(deadline => {
                const status = getDeadlineStatus(deadline.daysRemaining);
                return (
                  <div
                    key={deadline.id}
                    className={`border-2 rounded-lg p-4 ${getDeadlineColor(deadline.daysRemaining)}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold">{deadline.name}</h4>
                          <span className={`text-sm font-medium ${status.color}`}>
                            {status.text}
                          </span>
                          {deadline.daysRemaining <= 3 && deadline.daysRemaining >= 0 && (
                            <AlertTriangle className="w-4 h-4 text-orange-600" />
                          )}
                        </div>

                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                          <div>
                            <span className="text-gray-600">Base Date:</span>
                            <span className="ml-1 font-medium">
                              {format(new Date(deadline.baseDate), 'MMM d, yyyy')}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-600">Days Added:</span>
                            <span className="ml-1 font-medium">
                              {deadline.daysToAdd} {deadline.isBusinessDays ? 'business' : 'calendar'}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-600">Deadline:</span>
                            <span className="ml-1 font-medium">
                              {format(deadline.calculatedDate, 'MMM d, yyyy')}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-600">Category:</span>
                            <span className="ml-1 font-medium">{deadline.category}</span>
                          </div>
                        </div>

                        {deadline.notes && (
                          <div className="mt-2 flex items-start gap-2">
                            <Info className="w-4 h-4 text-gray-500 mt-0.5" />
                            <p className="text-sm text-gray-600">{deadline.notes}</p>
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => removeDeadline(deadline.id)}
                        className="ml-4 p-1 hover:bg-white rounded transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Summary Stats */}
            <div className="mt-6 pt-6 border-t grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{deadlines.length}</p>
                <p className="text-sm text-gray-600">Total Deadlines</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-red-600">
                  {deadlines.filter(d => d.daysRemaining === 0).length}
                </p>
                <p className="text-sm text-gray-600">Due Today</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-600">
                  {deadlines.filter(d => d.daysRemaining > 0 && d.daysRemaining <= 7).length}
                </p>
                <p className="text-sm text-gray-600">Due This Week</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-600">
                  {deadlines.filter(d => d.daysRemaining < 0).length}
                </p>
                <p className="text-sm text-gray-600">Past Due</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Empty State */}
      {deadlines.length === 0 && (
        <InfoCard type="info" title="Get Started">
          <p>Select a template or add custom deadlines to calculate important dates for your case. 
          The calculator accounts for Arizona court rules including business days and court holidays.</p>
        </InfoCard>
      )}

      {/* Holiday Reference */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-3">2025 Arizona Court Holidays</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            {ARIZONA_COURT_HOLIDAYS.map(holiday => (
              <div key={holiday}>
                • {format(new Date(holiday), 'MMM d, yyyy - EEEE')}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}