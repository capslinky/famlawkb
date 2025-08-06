'use client';

import React, { useState } from 'react';
import { Calendar, Plus, Trash2, Clock, AlertTriangle, CheckCircle, Download, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { InfoCard } from '@/components/ui/info-card';
import { format, addDays, differenceInDays } from 'date-fns';

interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  type: 'filing' | 'deadline' | 'hearing' | 'milestone' | 'custom';
  description?: string;
  isCompleted: boolean;
  daysFromToday?: number;
  alertDays?: number;
}

interface TimelineTemplate {
  name: string;
  events: Omit<TimelineEvent, 'id' | 'daysFromToday'>[];
}

const TIMELINE_TEMPLATES: TimelineTemplate[] = [
  {
    name: 'Uncontested Divorce',
    events: [
      { title: 'File Petition', date: '0', type: 'filing', description: 'File initial divorce petition', isCompleted: false },
      { title: 'Serve Papers', date: '10', type: 'deadline', description: 'Serve divorce papers to spouse', isCompleted: false, alertDays: 5 },
      { title: 'Response Due', date: '30', type: 'deadline', description: 'Spouse response deadline', isCompleted: false, alertDays: 7 },
      { title: 'Financial Disclosures', date: '40', type: 'milestone', description: 'Exchange financial information', isCompleted: false },
      { title: 'Settlement Conference', date: '60', type: 'hearing', description: 'Attempt to reach agreement', isCompleted: false },
      { title: 'Final Decree', date: '90', type: 'milestone', description: 'Finalize divorce', isCompleted: false }
    ]
  },
  {
    name: 'Contested Divorce',
    events: [
      { title: 'File Petition', date: '0', type: 'filing', description: 'File initial divorce petition', isCompleted: false },
      { title: 'Serve Papers', date: '10', type: 'deadline', description: 'Serve divorce papers', isCompleted: false, alertDays: 5 },
      { title: 'Response Due', date: '30', type: 'deadline', description: 'Response deadline', isCompleted: false, alertDays: 7 },
      { title: 'Temporary Orders Hearing', date: '45', type: 'hearing', description: 'Request temporary orders', isCompleted: false },
      { title: 'Initial Disclosures', date: '50', type: 'deadline', description: 'Exchange initial disclosures', isCompleted: false },
      { title: 'Discovery Deadline', date: '120', type: 'deadline', description: 'Complete discovery', isCompleted: false },
      { title: 'Mediation', date: '150', type: 'milestone', description: 'Attempt mediation', isCompleted: false },
      { title: 'Pretrial Conference', date: '180', type: 'hearing', description: 'Pretrial conference', isCompleted: false },
      { title: 'Trial', date: '210', type: 'hearing', description: 'Trial date', isCompleted: false }
    ]
  },
  {
    name: 'Custody Modification',
    events: [
      { title: 'File Motion', date: '0', type: 'filing', description: 'File modification motion', isCompleted: false },
      { title: 'Serve Other Parent', date: '5', type: 'deadline', description: 'Serve motion', isCompleted: false },
      { title: 'Response Due', date: '25', type: 'deadline', description: 'Response deadline', isCompleted: false },
      { title: 'Parenting Conference', date: '45', type: 'hearing', description: 'Court parenting conference', isCompleted: false },
      { title: 'Mediation', date: '60', type: 'milestone', description: 'Mandatory mediation', isCompleted: false },
      { title: 'Hearing', date: '90', type: 'hearing', description: 'Modification hearing', isCompleted: false }
    ]
  }
];

export default function TimelineBuilder() {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [startDate, setStartDate] = useState<string>(format(new Date(), 'yyyy-MM-dd'));
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [newEvent, setNewEvent] = useState<Partial<TimelineEvent>>({
    title: '',
    date: format(new Date(), 'yyyy-MM-dd'),
    type: 'custom',
    description: '',
    isCompleted: false
  });

  const loadTemplate = (templateName: string) => {
    const template = TIMELINE_TEMPLATES.find(t => t.name === templateName);
    if (!template) return;

    const baseDate = new Date(startDate);
    const generatedEvents: TimelineEvent[] = template.events.map((event, index) => {
      const eventDate = addDays(baseDate, parseInt(event.date));
      return {
        ...event,
        id: `${Date.now()}-${index}`,
        date: format(eventDate, 'yyyy-MM-dd'),
        daysFromToday: differenceInDays(eventDate, new Date())
      };
    });

    setEvents(generatedEvents);
    setSelectedTemplate(templateName);
  };

  const addCustomEvent = () => {
    if (!newEvent.title || !newEvent.date) return;

    const eventDate = new Date(newEvent.date);
    const event: TimelineEvent = {
      id: `custom-${Date.now()}`,
      title: newEvent.title,
      date: newEvent.date,
      type: newEvent.type as TimelineEvent['type'] || 'custom',
      description: newEvent.description,
      isCompleted: false,
      daysFromToday: differenceInDays(eventDate, new Date())
    };

    setEvents([...events, event].sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    ));

    setNewEvent({
      title: '',
      date: format(new Date(), 'yyyy-MM-dd'),
      type: 'custom',
      description: '',
      isCompleted: false
    });
    setShowAddEvent(false);
  };

  const toggleEventComplete = (eventId: string) => {
    setEvents(events.map(event => 
      event.id === eventId 
        ? { ...event, isCompleted: !event.isCompleted }
        : event
    ));
  };

  const deleteEvent = (eventId: string) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  const exportTimeline = () => {
    const timelineData = events.map(event => ({
      Date: format(new Date(event.date), 'MM/dd/yyyy'),
      Event: event.title,
      Type: event.type,
      Description: event.description || '',
      Status: event.isCompleted ? 'Completed' : 'Pending',
      'Days from Today': event.daysFromToday
    }));

    const csv = [
      Object.keys(timelineData[0]).join(','),
      ...timelineData.map(row => Object.values(row).join(','))
    ].join('\\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `legal-timeline-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    a.click();
  };

  const getEventIcon = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'filing': return '📄';
      case 'deadline': return '⏰';
      case 'hearing': return '⚖️';
      case 'milestone': return '🎯';
      case 'custom': return '📌';
    }
  };

  const getEventColor = (type: TimelineEvent['type'], daysFromToday?: number) => {
    if (daysFromToday !== undefined && daysFromToday < 0) {
      return 'border-gray-300 bg-gray-50';
    }
    if (daysFromToday !== undefined && daysFromToday <= 7) {
      return 'border-red-300 bg-red-50';
    }
    switch (type) {
      case 'filing': return 'border-blue-300 bg-blue-50';
      case 'deadline': return 'border-orange-300 bg-orange-50';
      case 'hearing': return 'border-purple-300 bg-purple-50';
      case 'milestone': return 'border-green-300 bg-green-50';
      case 'custom': return 'border-gray-300 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold">Interactive Timeline Builder</h2>
            </div>
            <div className="flex gap-2">
              {events.length > 0 && (
                <>
                  <Button variant="outline" size="sm" onClick={exportTimeline}>
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm">
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Template Selection */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start from Template
              </label>
              <div className="flex flex-wrap gap-2">
                {TIMELINE_TEMPLATES.map(template => (
                  <Button
                    key={template.name}
                    variant={selectedTemplate === template.name ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => loadTemplate(template.name)}
                  >
                    {template.name}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-end gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Case Start Date
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button
                onClick={() => setShowAddEvent(!showAddEvent)}
                className="flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Event
              </Button>
            </div>
          </div>

          {/* Add Event Form */}
          {showAddEvent && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-medium mb-3">Add Custom Event</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Event Title *
                  </label>
                  <input
                    type="text"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., File Motion"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Type
                  </label>
                  <select
                    value={newEvent.type}
                    onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value as TimelineEvent['type'] })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="custom">Custom</option>
                    <option value="filing">Filing</option>
                    <option value="deadline">Deadline</option>
                    <option value="hearing">Hearing</option>
                    <option value="milestone">Milestone</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Optional details"
                  />
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                <Button size="sm" onClick={addCustomEvent}>Add Event</Button>
                <Button size="sm" variant="outline" onClick={() => setShowAddEvent(false)}>Cancel</Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Timeline Display */}
      {events.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              Your Legal Timeline
            </h3>
            
            <div className="space-y-3">
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className={`relative border-2 rounded-lg p-4 transition-all ${getEventColor(event.type, event.daysFromToday)} ${
                    event.isCompleted ? 'opacity-75' : ''
                  }`}
                >
                  {/* Timeline Line */}
                  {index < events.length - 1 && (
                    <div className="absolute left-8 top-full h-6 w-0.5 bg-gray-300 -mt-1" />
                  )}
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-xl">
                        {event.isCompleted ? '✅' : getEventIcon(event.type)}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className={`font-semibold ${event.isCompleted ? 'line-through' : ''}`}>
                            {event.title}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            {format(new Date(event.date), 'MMMM d, yyyy')}
                            {event.daysFromToday !== undefined && (
                              <span className={`ml-2 font-medium ${
                                event.daysFromToday < 0 ? 'text-gray-500' :
                                event.daysFromToday === 0 ? 'text-red-600' :
                                event.daysFromToday <= 7 ? 'text-orange-600' :
                                'text-green-600'
                              }`}>
                                {event.daysFromToday < 0 ? `${Math.abs(event.daysFromToday)} days ago` :
                                 event.daysFromToday === 0 ? 'TODAY' :
                                 `in ${event.daysFromToday} days`}
                              </span>
                            )}
                          </p>
                          {event.description && (
                            <p className="text-sm text-gray-500 mt-1">{event.description}</p>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => toggleEventComplete(event.id)}
                            className="p-1 hover:bg-white rounded transition-colors"
                            title={event.isCompleted ? 'Mark as pending' : 'Mark as complete'}
                          >
                            {event.isCompleted ? 
                              <CheckCircle className="w-5 h-5 text-green-600" /> :
                              <Clock className="w-5 h-5 text-gray-400" />
                            }
                          </button>
                          <button
                            onClick={() => deleteEvent(event.id)}
                            className="p-1 hover:bg-white rounded transition-colors"
                            title="Delete event"
                          >
                            <Trash2 className="w-5 h-5 text-red-500" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Alert for upcoming deadlines */}
                  {event.type === 'deadline' && event.daysFromToday !== undefined && 
                   event.daysFromToday > 0 && event.daysFromToday <= 7 && !event.isCompleted && (
                    <div className="mt-3 flex items-center gap-2 text-orange-700 bg-orange-100 rounded p-2">
                      <AlertTriangle className="w-4 h-4" />
                      <span className="text-sm font-medium">Deadline approaching!</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Summary Stats */}
            <div className="mt-6 pt-6 border-t grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{events.length}</p>
                <p className="text-sm text-gray-600">Total Events</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">
                  {events.filter(e => e.isCompleted).length}
                </p>
                <p className="text-sm text-gray-600">Completed</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-600">
                  {events.filter(e => !e.isCompleted && e.type === 'deadline').length}
                </p>
                <p className="text-sm text-gray-600">Pending Deadlines</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">
                  {events.filter(e => !e.isCompleted && e.type === 'hearing').length}
                </p>
                <p className="text-sm text-gray-600">Upcoming Hearings</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Empty State */}
      {events.length === 0 && (
        <InfoCard type="info" title="Get Started">
          <p>Select a template above or add custom events to build your legal timeline. 
          This tool helps you track important dates, deadlines, and milestones in your case.</p>
        </InfoCard>
      )}
    </div>
  );
}