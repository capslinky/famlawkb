'use client';

import React, { useState } from 'react';
import { Users, Calendar, School, Heart, DollarSign, Car, Download, Save, Plus, Info, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { InfoCard } from '@/components/ui/info-card';

interface ParentingSchedule {
  regularSchedule: {
    weekdays: string;
    weekends: string;
    schoolBreaks: string;
  };
  holidays: {
    holiday: string;
    evenYears: string;
    oddYears: string;
  }[];
  summerBreak: {
    arrangement: string;
    vacationTime: string;
  };
}

interface DecisionMaking {
  education: 'joint' | 'mother' | 'father';
  healthcare: 'joint' | 'mother' | 'father';
  extracurricular: 'joint' | 'mother' | 'father';
  religious: 'joint' | 'mother' | 'father';
}

interface ParentingPlan {
  children: string[];
  primaryResidence: 'mother' | 'father' | 'shared';
  schedule: ParentingSchedule;
  decisionMaking: DecisionMaking;
  communication: {
    method: string;
    frequency: string;
  };
  exchanges: {
    location: string;
    time: string;
    transportation: string;
  };
  childSupport: {
    amount: string;
    payer: string;
    frequency: string;
  };
  expenses: {
    medical: string;
    extracurricular: string;
    school: string;
  };
  disputeResolution: string;
  modifications: string;
}

const SCHEDULE_TEMPLATES = [
  {
    name: 'Week On/Week Off',
    description: 'Equal time with each parent alternating weekly',
    schedule: {
      weekdays: 'Alternating weeks',
      weekends: 'With current week parent',
      schoolBreaks: 'Continue weekly rotation'
    }
  },
  {
    name: '2-2-3 Schedule',
    description: 'Mon-Tue with one parent, Wed-Thu with other, alternating weekends',
    schedule: {
      weekdays: 'Split Mon-Tue / Wed-Thu',
      weekends: 'Alternating Fri-Sun',
      schoolBreaks: 'Maintain regular schedule'
    }
  },
  {
    name: 'Every Other Weekend',
    description: 'Primary parent weekdays, other parent alternating weekends',
    schedule: {
      weekdays: 'With primary parent',
      weekends: 'Alternating Fri 6pm - Sun 6pm',
      schoolBreaks: 'Extended time with non-primary'
    }
  },
  {
    name: '70/30 Split',
    description: 'Primary parent majority, other parent has Thursday overnight + every other weekend',
    schedule: {
      weekdays: 'Primary except Thursday overnight',
      weekends: 'Alternating with non-primary',
      schoolBreaks: 'Split equally'
    }
  }
];

const ARIZONA_HOLIDAYS = [
  'New Year\'s Day',
  'Martin Luther King Jr. Day',
  'President\'s Day',
  'Spring Break',
  'Easter',
  'Mother\'s Day',
  'Memorial Day',
  'Father\'s Day',
  'July 4th',
  'Labor Day',
  'Halloween',
  'Thanksgiving',
  'Winter Break',
  'Child\'s Birthday'
];

export default function ParentingPlanBuilder() {
  const [plan, setPlan] = useState<Partial<ParentingPlan>>({
    children: [],
    primaryResidence: 'shared',
    schedule: {
      regularSchedule: {
        weekdays: '',
        weekends: '',
        schoolBreaks: ''
      },
      holidays: [],
      summerBreak: {
        arrangement: '',
        vacationTime: ''
      }
    },
    decisionMaking: {
      education: 'joint',
      healthcare: 'joint',
      extracurricular: 'joint',
      religious: 'joint'
    },
    communication: {
      method: 'Phone and text',
      frequency: 'Daily'
    },
    exchanges: {
      location: '',
      time: '',
      transportation: 'Parents share driving'
    },
    childSupport: {
      amount: '',
      payer: '',
      frequency: 'Monthly'
    },
    expenses: {
      medical: 'Split 50/50',
      extracurricular: 'Split 50/50',
      school: 'Split 50/50'
    },
    disputeResolution: 'Mediation before court',
    modifications: 'Requires written agreement or court order'
  });

  const [currentChild, setCurrentChild] = useState('');
  const [showTemplates, setShowTemplates] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string>('children');

  const addChild = () => {
    if (!currentChild) return;
    setPlan({
      ...plan,
      children: [...(plan.children || []), currentChild]
    });
    setCurrentChild('');
  };

  const removeChild = (index: number) => {
    const newChildren = [...(plan.children || [])];
    newChildren.splice(index, 1);
    setPlan({ ...plan, children: newChildren });
  };

  const loadScheduleTemplate = (template: typeof SCHEDULE_TEMPLATES[0]) => {
    setPlan({
      ...plan,
      schedule: {
        ...plan.schedule!,
        regularSchedule: template.schedule
      }
    });
    setShowTemplates(false);
  };

  const addHoliday = (holiday: string) => {
    const holidays = plan.schedule?.holidays || [];
    if (!holidays.find(h => h.holiday === holiday)) {
      setPlan({
        ...plan,
        schedule: {
          ...plan.schedule!,
          holidays: [...holidays, {
            holiday,
            evenYears: 'Mother',
            oddYears: 'Father'
          }]
        }
      });
    }
  };

  const updateHolidaySchedule = (holiday: string, field: 'evenYears' | 'oddYears', value: string) => {
    const holidays = plan.schedule?.holidays || [];
    setPlan({
      ...plan,
      schedule: {
        ...plan.schedule!,
        holidays: holidays.map(h => 
          h.holiday === holiday ? { ...h, [field]: value } : h
        )
      }
    });
  };

  const exportPlan = () => {
    const planText = generatePlanText();
    const blob = new Blob([planText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `parenting-plan-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
  };

  const generatePlanText = () => {
    let text = 'ARIZONA PARENTING PLAN\n';
    text += '======================\n\n';
    
    text += 'CHILDREN:\n';
    plan.children?.forEach(child => {
      text += `• ${child}\n`;
    });
    
    text += '\n\nPRIMARY RESIDENCE:\n';
    text += `${plan.primaryResidence === 'shared' ? 'Shared/Equal' : plan.primaryResidence}\n`;
    
    text += '\n\nREGULAR SCHEDULE:\n';
    text += `Weekdays: ${plan.schedule?.regularSchedule.weekdays}\n`;
    text += `Weekends: ${plan.schedule?.regularSchedule.weekends}\n`;
    text += `School Breaks: ${plan.schedule?.regularSchedule.schoolBreaks}\n`;
    
    text += '\n\nHOLIDAY SCHEDULE:\n';
    plan.schedule?.holidays.forEach(h => {
      text += `${h.holiday}: Even years - ${h.evenYears}, Odd years - ${h.oddYears}\n`;
    });
    
    text += '\n\nDECISION MAKING:\n';
    text += `Education: ${plan.decisionMaking?.education}\n`;
    text += `Healthcare: ${plan.decisionMaking?.healthcare}\n`;
    text += `Extracurricular: ${plan.decisionMaking?.extracurricular}\n`;
    text += `Religious: ${plan.decisionMaking?.religious}\n`;
    
    text += '\n\nCOMMUNICATION:\n';
    text += `Method: ${plan.communication?.method}\n`;
    text += `Frequency: ${plan.communication?.frequency}\n`;
    
    text += '\n\nEXCHANGES:\n';
    text += `Location: ${plan.exchanges?.location}\n`;
    text += `Time: ${plan.exchanges?.time}\n`;
    text += `Transportation: ${plan.exchanges?.transportation}\n`;
    
    text += '\n\nFINANCIAL:\n';
    text += `Child Support: $${plan.childSupport?.amount} ${plan.childSupport?.frequency} from ${plan.childSupport?.payer}\n`;
    text += `Medical Expenses: ${plan.expenses?.medical}\n`;
    text += `Extracurricular: ${plan.expenses?.extracurricular}\n`;
    text += `School Expenses: ${plan.expenses?.school}\n`;
    
    text += '\n\nDISPUTE RESOLUTION:\n';
    text += `${plan.disputeResolution}\n`;
    
    text += '\n\nMODIFICATIONS:\n';
    text += `${plan.modifications}\n`;
    
    return text;
  };

  const sections = [
    { id: 'children', label: 'Children', icon: Users },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'decisions', label: 'Decision Making', icon: School },
    { id: 'exchanges', label: 'Exchanges', icon: Car },
    { id: 'financial', label: 'Financial', icon: DollarSign },
    { id: 'other', label: 'Other Terms', icon: Heart }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold">Parenting Plan Builder</h2>
            </div>
            {plan.children && plan.children.length > 0 && (
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={exportPlan}>
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
                <Button variant="outline" size="sm">
                  <Save className="w-4 h-4 mr-2" />
                  Save Draft
                </Button>
              </div>
            )}
          </div>

          {/* Section Navigation */}
          <div className="flex flex-wrap gap-2 mb-6">
            {sections.map(section => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setSelectedSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    selectedSection === section.id
                      ? 'bg-blue-100 text-blue-700 border-2 border-blue-300'
                      : 'bg-gray-100 text-gray-700 border-2 border-gray-200 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{section.label}</span>
                </button>
              );
            })}
          </div>

          {/* Info Card */}
          <InfoCard type="info" className="mb-6">
            This tool helps you create a comprehensive parenting plan. Complete each section to build your agreement. 
            Always consult with an attorney before finalizing.
          </InfoCard>
        </CardContent>
      </Card>

      {/* Children Section */}
      {selectedSection === 'children' && (
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              Children Information
            </h3>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Child's full name and birthdate"
                  value={currentChild}
                  onChange={(e) => setCurrentChild(e.target.value)}
                  className="flex-1 px-3 py-2 border rounded-md"
                />
                <Button onClick={addChild}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Child
                </Button>
              </div>

              {plan.children && plan.children.length > 0 && (
                <div className="space-y-2">
                  {plan.children.map((child, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span>{child}</span>
                      <button
                        onClick={() => removeChild(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Residence
                </label>
                <select
                  value={plan.primaryResidence}
                  onChange={(e) => setPlan({ ...plan, primaryResidence: e.target.value as any })}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="shared">Shared/Equal Time</option>
                  <option value="mother">Mother</option>
                  <option value="father">Father</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Schedule Section */}
      {selectedSection === 'schedule' && (
        <>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                Regular Parenting Schedule
              </h3>

              <Button
                variant="outline"
                className="mb-4"
                onClick={() => setShowTemplates(!showTemplates)}
              >
                Use Schedule Template
              </Button>

              {showTemplates && (
                <div className="grid sm:grid-cols-2 gap-3 mb-4">
                  {SCHEDULE_TEMPLATES.map(template => (
                    <button
                      key={template.name}
                      onClick={() => loadScheduleTemplate(template)}
                      className="text-left p-3 border-2 rounded-lg hover:border-blue-500 hover:bg-blue-50"
                    >
                      <div className="font-medium">{template.name}</div>
                      <div className="text-sm text-gray-600">{template.description}</div>
                    </button>
                  ))}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Weekday Schedule
                  </label>
                  <textarea
                    value={plan.schedule?.regularSchedule.weekdays}
                    onChange={(e) => setPlan({
                      ...plan,
                      schedule: {
                        ...plan.schedule!,
                        regularSchedule: {
                          ...plan.schedule!.regularSchedule,
                          weekdays: e.target.value
                        }
                      }
                    })}
                    className="w-full px-3 py-2 border rounded-md"
                    rows={2}
                    placeholder="Describe weekday schedule..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Weekend Schedule
                  </label>
                  <textarea
                    value={plan.schedule?.regularSchedule.weekends}
                    onChange={(e) => setPlan({
                      ...plan,
                      schedule: {
                        ...plan.schedule!,
                        regularSchedule: {
                          ...plan.schedule!.regularSchedule,
                          weekends: e.target.value
                        }
                      }
                    })}
                    className="w-full px-3 py-2 border rounded-md"
                    rows={2}
                    placeholder="Describe weekend schedule..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    School Breaks
                  </label>
                  <textarea
                    value={plan.schedule?.regularSchedule.schoolBreaks}
                    onChange={(e) => setPlan({
                      ...plan,
                      schedule: {
                        ...plan.schedule!,
                        regularSchedule: {
                          ...plan.schedule!.regularSchedule,
                          schoolBreaks: e.target.value
                        }
                      }
                    })}
                    className="w-full px-3 py-2 border rounded-md"
                    rows={2}
                    placeholder="Describe school break schedule..."
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Holiday Schedule</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Add Holidays to Schedule
                </label>
                <div className="flex flex-wrap gap-2">
                  {ARIZONA_HOLIDAYS.map(holiday => (
                    <button
                      key={holiday}
                      onClick={() => addHoliday(holiday)}
                      disabled={!!plan.schedule?.holidays.find(h => h.holiday === holiday)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        plan.schedule?.holidays.find(h => h.holiday === holiday)
                          ? 'bg-gray-200 text-gray-500'
                          : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                      }`}
                    >
                      {holiday}
                    </button>
                  ))}
                </div>
              </div>

              {plan.schedule?.holidays && plan.schedule.holidays.length > 0 && (
                <div className="space-y-3">
                  {plan.schedule.holidays.map(holiday => (
                    <div key={holiday.holiday} className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-medium mb-2">{holiday.holiday}</div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-sm text-gray-600">Even Years</label>
                          <select
                            value={holiday.evenYears}
                            onChange={(e) => updateHolidaySchedule(holiday.holiday, 'evenYears', e.target.value)}
                            className="w-full px-2 py-1 border rounded text-sm"
                          >
                            <option value="Mother">Mother</option>
                            <option value="Father">Father</option>
                            <option value="Alternate">Alternate</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">Odd Years</label>
                          <select
                            value={holiday.oddYears}
                            onChange={(e) => updateHolidaySchedule(holiday.holiday, 'oddYears', e.target.value)}
                            className="w-full px-2 py-1 border rounded text-sm"
                          >
                            <option value="Mother">Mother</option>
                            <option value="Father">Father</option>
                            <option value="Alternate">Alternate</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </>
      )}

      {/* Decision Making Section */}
      {selectedSection === 'decisions' && (
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <School className="w-5 h-5 text-blue-600" />
              Legal Decision Making
            </h3>

            <InfoCard type="info" className="mb-4">
              Arizona distinguishes between legal decision-making (major decisions) and day-to-day decisions. 
              Joint decision-making requires agreement on major issues.
            </InfoCard>

            <div className="space-y-4">
              {Object.entries({
                education: 'Education Decisions',
                healthcare: 'Healthcare Decisions',
                extracurricular: 'Extracurricular Activities',
                religious: 'Religious Upbringing'
              }).map(([key, label]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                  </label>
                  <select
                    value={plan.decisionMaking?.[key as keyof DecisionMaking]}
                    onChange={(e) => setPlan({
                      ...plan,
                      decisionMaking: {
                        ...plan.decisionMaking!,
                        [key]: e.target.value
                      }
                    })}
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="joint">Joint Decision Making</option>
                    <option value="mother">Mother Has Final Say</option>
                    <option value="father">Father Has Final Say</option>
                  </select>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Exchanges Section */}
      {selectedSection === 'exchanges' && (
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Car className="w-5 h-5 text-blue-600" />
              Exchange Details
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Exchange Location
                </label>
                <input
                  type="text"
                  value={plan.exchanges?.location}
                  onChange={(e) => setPlan({
                    ...plan,
                    exchanges: {
                      ...plan.exchanges!,
                      location: e.target.value
                    }
                  })}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="e.g., School, parent's home, public location"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Exchange Time
                </label>
                <input
                  type="text"
                  value={plan.exchanges?.time}
                  onChange={(e) => setPlan({
                    ...plan,
                    exchanges: {
                      ...plan.exchanges!,
                      time: e.target.value
                    }
                  })}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="e.g., 6:00 PM on Fridays"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Transportation Responsibility
                </label>
                <select
                  value={plan.exchanges?.transportation}
                  onChange={(e) => setPlan({
                    ...plan,
                    exchanges: {
                      ...plan.exchanges!,
                      transportation: e.target.value
                    }
                  })}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="Parents share driving">Parents share driving equally</option>
                  <option value="Receiving parent picks up">Receiving parent picks up</option>
                  <option value="Delivering parent drops off">Delivering parent drops off</option>
                  <option value="Meet halfway">Meet at halfway point</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Communication Method
                </label>
                <input
                  type="text"
                  value={plan.communication?.method}
                  onChange={(e) => setPlan({
                    ...plan,
                    communication: {
                      ...plan.communication!,
                      method: e.target.value
                    }
                  })}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="e.g., Phone, text, email, parenting app"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Communication Frequency
                </label>
                <select
                  value={plan.communication?.frequency}
                  onChange={(e) => setPlan({
                    ...plan,
                    communication: {
                      ...plan.communication!,
                      frequency: e.target.value
                    }
                  })}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="Daily">Daily</option>
                  <option value="Every other day">Every other day</option>
                  <option value="Twice weekly">Twice weekly</option>
                  <option value="Weekly">Weekly</option>
                  <option value="As needed">As needed</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Financial Section */}
      {selectedSection === 'financial' && (
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-blue-600" />
              Financial Arrangements
            </h3>

            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Child Support Amount
                  </label>
                  <input
                    type="text"
                    value={plan.childSupport?.amount}
                    onChange={(e) => setPlan({
                      ...plan,
                      childSupport: {
                        ...plan.childSupport!,
                        amount: e.target.value
                      }
                    })}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Monthly amount"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Payer
                  </label>
                  <select
                    value={plan.childSupport?.payer}
                    onChange={(e) => setPlan({
                      ...plan,
                      childSupport: {
                        ...plan.childSupport!,
                        payer: e.target.value
                      }
                    })}
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="">Select...</option>
                    <option value="Mother">Mother</option>
                    <option value="Father">Father</option>
                    <option value="None">No child support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Frequency
                  </label>
                  <select
                    value={plan.childSupport?.frequency}
                    onChange={(e) => setPlan({
                      ...plan,
                      childSupport: {
                        ...plan.childSupport!,
                        frequency: e.target.value
                      }
                    })}
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="Monthly">Monthly</option>
                    <option value="Bi-weekly">Bi-weekly</option>
                    <option value="Weekly">Weekly</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Medical/Dental Expenses
                </label>
                <select
                  value={plan.expenses?.medical}
                  onChange={(e) => setPlan({
                    ...plan,
                    expenses: {
                      ...plan.expenses!,
                      medical: e.target.value
                    }
                  })}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="Split 50/50">Split 50/50</option>
                  <option value="Proportional to income">Proportional to income</option>
                  <option value="Mother pays">Mother pays</option>
                  <option value="Father pays">Father pays</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Extracurricular Activities
                </label>
                <select
                  value={plan.expenses?.extracurricular}
                  onChange={(e) => setPlan({
                    ...plan,
                    expenses: {
                      ...plan.expenses!,
                      extracurricular: e.target.value
                    }
                  })}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="Split 50/50">Split 50/50</option>
                  <option value="Proportional to income">Proportional to income</option>
                  <option value="Each pays for activities during their time">Each pays during their time</option>
                  <option value="Mutual agreement required">Mutual agreement required</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  School Expenses
                </label>
                <select
                  value={plan.expenses?.school}
                  onChange={(e) => setPlan({
                    ...plan,
                    expenses: {
                      ...plan.expenses!,
                      school: e.target.value
                    }
                  })}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="Split 50/50">Split 50/50</option>
                  <option value="Proportional to income">Proportional to income</option>
                  <option value="Mother pays">Mother pays</option>
                  <option value="Father pays">Father pays</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Other Terms Section */}
      {selectedSection === 'other' && (
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-blue-600" />
              Other Important Terms
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Dispute Resolution Process
                </label>
                <textarea
                  value={plan.disputeResolution}
                  onChange={(e) => setPlan({ ...plan, disputeResolution: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md"
                  rows={3}
                  placeholder="How will disagreements be resolved?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Plan Modification Terms
                </label>
                <textarea
                  value={plan.modifications}
                  onChange={(e) => setPlan({ ...plan, modifications: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md"
                  rows={3}
                  placeholder="When and how can this plan be modified?"
                />
              </div>

              <InfoCard type="warning" title="Important Note">
                This parenting plan should be reviewed by an attorney before being submitted to the court. 
                Both parents must agree to all terms or the court will make determinations.
              </InfoCard>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Preview Section */}
      {plan.children && plan.children.length > 0 && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-3">Plan Summary</h3>
            <div className="text-sm space-y-2">
              <p><strong>Children:</strong> {plan.children.join(', ')}</p>
              <p><strong>Primary Residence:</strong> {plan.primaryResidence}</p>
              <p><strong>Decision Making:</strong> {plan.decisionMaking?.education === 'joint' ? 'Joint' : 'Sole'}</p>
              <p><strong>Exchange Location:</strong> {plan.exchanges?.location || 'Not specified'}</p>
              <p><strong>Child Support:</strong> {plan.childSupport?.amount ? `$${plan.childSupport.amount} ${plan.childSupport.frequency}` : 'Not specified'}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}