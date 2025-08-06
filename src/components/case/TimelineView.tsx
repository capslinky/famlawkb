'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, CheckCircle, Circle, AlertCircle, FileText, Users, Gavel, MessageSquare, DollarSign, Home, Baby, Target, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CaseEvent, CaseTimeline } from '@/lib/caseManagement';

interface TimelineViewProps {
  timeline: CaseTimeline;
  onEventClick?: (event: CaseEvent) => void;
  onAddEvent?: () => void;
  viewMode?: 'vertical' | 'horizontal' | 'calendar';
  showFilters?: boolean;
}

export default function TimelineView({
  timeline,
  onEventClick,
  onAddEvent,
  viewMode = 'vertical',
  showFilters = true
}: TimelineViewProps) {
  const [selectedCategories, setSelectedCategories] = useState<Set<CaseEvent['type']>>(
    new Set(['filing', 'hearing', 'deadline', 'order'])
  );
  const [expandedPhases, setExpandedPhases] = useState<Set<string>>(new Set());
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);
  const [showPastEvents, setShowPastEvents] = useState(true);
  const [showFutureEvents, setShowFutureEvents] = useState(true);

  // Get event icon based on type
  const getEventIcon = (type: CaseEvent['type']) => {
    switch (type) {
      case 'filing':
        return <FileText className="w-4 h-4" />;
      case 'hearing':
        return <Gavel className="w-4 h-4" />;
      case 'deadline':
        return <Clock className="w-4 h-4" />;
      case 'meeting':
        return <Users className="w-4 h-4" />;
      case 'communication':
        return <MessageSquare className="w-4 h-4" />;
      case 'discovery':
        return <FileText className="w-4 h-4" />;
      case 'motion':
        return <FileText className="w-4 h-4" />;
      case 'order':
        return <Gavel className="w-4 h-4" />;
      case 'settlement':
        return <DollarSign className="w-4 h-4" />;
      default:
        return <Circle className="w-4 h-4" />;
    }
  };

  // Get event color based on type and status
  const getEventColor = (event: CaseEvent) => {
    if (event.status === 'cancelled') return 'text-gray-400 bg-gray-100';
    if (event.status === 'missed') return 'text-red-600 bg-red-100';
    if (event.status === 'completed') return 'text-green-600 bg-green-100';
    
    switch (event.type) {
      case 'hearing':
        return 'text-purple-600 bg-purple-100';
      case 'deadline':
        return 'text-red-600 bg-red-100';
      case 'filing':
        return 'text-blue-600 bg-blue-100';
      case 'order':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  // Filter events based on selected categories and time
  const filteredEvents = timeline.events.filter(event => {
    if (!selectedCategories.has(event.type)) return false;
    
    const isPast = event.date < new Date();
    if (isPast && !showPastEvents) return false;
    if (!isPast && !showFutureEvents) return false;
    
    if (selectedPhase) {
      const phase = timeline.phases.find(p => p.name === selectedPhase);
      if (phase) {
        if (event.date < phase.startDate) return false;
        if (phase.endDate && event.date > phase.endDate) return false;
      }
    }
    
    return true;
  });

  // Group events by date for vertical view
  const groupEventsByDate = (events: CaseEvent[]) => {
    const groups: Map<string, CaseEvent[]> = new Map();
    
    events.forEach(event => {
      const dateKey = event.date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      const existing = groups.get(dateKey) || [];
      existing.push(event);
      groups.set(dateKey, existing);
    });
    
    return Array.from(groups.entries()).sort((a, b) => {
      const dateA = new Date(a[0]);
      const dateB = new Date(b[0]);
      return dateB.getTime() - dateA.getTime();
    });
  };

  // Format time
  const formatTime = (time?: string) => {
    if (!time) return '';
    return time;
  };

  // Format date relative to today
  const formatRelativeDate = (date: Date) => {
    const today = new Date();
    const diffTime = date.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays === -1) return 'Yesterday';
    if (diffDays > 0 && diffDays <= 7) return `In ${diffDays} days`;
    if (diffDays < 0 && diffDays >= -7) return `${Math.abs(diffDays)} days ago`;
    
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: date.getFullYear() !== today.getFullYear() ? 'numeric' : undefined
    });
  };

  // Toggle phase expansion
  const togglePhase = (phaseName: string) => {
    const newExpanded = new Set(expandedPhases);
    if (newExpanded.has(phaseName)) {
      newExpanded.delete(phaseName);
    } else {
      newExpanded.add(phaseName);
    }
    setExpandedPhases(newExpanded);
  };

  // Toggle category filter
  const toggleCategory = (category: CaseEvent['type']) => {
    const newCategories = new Set(selectedCategories);
    if (newCategories.has(category)) {
      newCategories.delete(category);
    } else {
      newCategories.add(category);
    }
    setSelectedCategories(newCategories);
  };

  const eventCategories: CaseEvent['type'][] = [
    'filing', 'hearing', 'deadline', 'meeting', 
    'communication', 'discovery', 'motion', 'order', 'settlement'
  ];

  if (viewMode === 'vertical') {
    const groupedEvents = groupEventsByDate(filteredEvents);

    return (
      <div className="space-y-6">
        {/* Filters */}
        {showFilters && (
          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                {/* Time Filter */}
                <div className="flex gap-2">
                  <Button
                    variant={showPastEvents ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setShowPastEvents(!showPastEvents)}
                  >
                    Past Events
                  </Button>
                  <Button
                    variant={showFutureEvents ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setShowFutureEvents(!showFutureEvents)}
                  >
                    Future Events
                  </Button>
                </div>

                {/* Category Filter */}
                <div>
                  <p className="text-sm font-medium mb-2">Event Types</p>
                  <div className="flex flex-wrap gap-2">
                    {eventCategories.map(category => (
                      <button
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                          selectedCategories.has(category)
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {category.replace('_', ' ')}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Phase Filter */}
                {timeline.phases.length > 0 && (
                  <div>
                    <p className="text-sm font-medium mb-2">Case Phase</p>
                    <select
                      value={selectedPhase || ''}
                      onChange={(e) => setSelectedPhase(e.target.value || null)}
                      className="w-full px-3 py-2 border rounded-md text-sm"
                    >
                      <option value="">All Phases</option>
                      {timeline.phases.map(phase => (
                        <option key={phase.name} value={phase.name}>
                          {phase.name} ({phase.status})
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Milestones */}
        {timeline.milestones.length > 0 && (
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Key Milestones</h3>
              <div className="space-y-3">
                {timeline.milestones.map(milestone => (
                  <div key={milestone.id} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      milestone.achieved ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      {milestone.achieved ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <Circle className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{milestone.title}</p>
                      <p className="text-sm text-gray-600">
                        {formatRelativeDate(milestone.date)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Timeline Events */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

          {/* Events */}
          <div className="space-y-8">
            {groupedEvents.map(([date, events]) => (
              <div key={date}>
                {/* Date Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{date}</h3>
                    <p className="text-sm text-gray-600">
                      {events.length} event{events.length > 1 ? 's' : ''}
                    </p>
                  </div>
                </div>

                {/* Events for this date */}
                <div className="ml-20 space-y-3">
                  {events.map(event => (
                    <Card
                      key={event.id}
                      className={`cursor-pointer hover:shadow-md transition-shadow ${
                        event.status === 'cancelled' ? 'opacity-50' : ''
                      }`}
                      onClick={() => onEventClick?.(event)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg ${getEventColor(event)}`}>
                            {getEventIcon(event.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-medium">{event.title}</h4>
                                {event.description && (
                                  <p className="text-sm text-gray-600 mt-1">
                                    {event.description}
                                  </p>
                                )}
                                <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                                  {event.time && (
                                    <span className="flex items-center gap-1">
                                      <Clock className="w-3 h-3" />
                                      {formatTime(event.time)}
                                    </span>
                                  )}
                                  {event.location && (
                                    <span className="flex items-center gap-1">
                                      <Home className="w-3 h-3" />
                                      {event.location}
                                    </span>
                                  )}
                                  {event.participants && event.participants.length > 0 && (
                                    <span className="flex items-center gap-1">
                                      <Users className="w-3 h-3" />
                                      {event.participants.length} participants
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="text-right">
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                  event.status === 'completed' ? 'bg-green-100 text-green-700' :
                                  event.status === 'cancelled' ? 'bg-gray-100 text-gray-700' :
                                  event.status === 'missed' ? 'bg-red-100 text-red-700' :
                                  event.status === 'rescheduled' ? 'bg-yellow-100 text-yellow-700' :
                                  'bg-blue-100 text-blue-700'
                                }`}>
                                  {event.status}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Event Button */}
        {onAddEvent && (
          <div className="text-center">
            <Button onClick={onAddEvent}>
              Add Event
            </Button>
          </div>
        )}
      </div>
    );
  }

  // Calendar view (simplified)
  if (viewMode === 'calendar') {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center py-12">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-medium mb-2">Calendar View</h3>
            <p className="text-gray-600">
              Calendar view would show events in a monthly grid format
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Horizontal view (simplified)
  return (
    <Card>
      <CardContent className="p-6">
        <div className="text-center py-12">
          <Target className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <h3 className="text-lg font-medium mb-2">Horizontal Timeline</h3>
          <p className="text-gray-600">
            Horizontal timeline would show events along a horizontal axis
          </p>
        </div>
      </CardContent>
    </Card>
  );
}