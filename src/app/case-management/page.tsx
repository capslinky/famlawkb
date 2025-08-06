'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Briefcase, Calendar, CheckSquare, FileText, Users, TrendingUp, Clock, AlertTriangle, Plus, Search, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TimelineView from '@/components/case/TimelineView';
import TaskManager from '@/components/case/TaskManager';
import { caseManagementService, Case, CaseEvent, CaseTask, CaseTimeline } from '@/lib/caseManagement';

export default function CaseManagementDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'timeline' | 'tasks' | 'documents'>('overview');
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);
  const [cases, setCases] = useState<Case[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<Case['status'] | 'all'>('all');
  const [filterType, setFilterType] = useState<Case['type'] | 'all'>('all');

  // Initialize with sample data
  useEffect(() => {
    // Create sample case
    const sampleCase = caseManagementService.createCase({
      caseNumber: 'FC2024-001234',
      title: 'Smith v. Smith',
      type: 'divorce',
      status: 'discovery',
      priority: 'high',
      filedDate: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000), // 60 days ago
      serviceDate: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000), // 45 days ago
      parties: [
        {
          id: 'party1',
          name: 'John Smith',
          role: 'petitioner',
          represented: true,
          attorney: {
            name: 'Sarah Johnson',
            barNumber: 'AZ12345',
            firm: 'Johnson Law Firm',
            email: 'sarah@johnsonlaw.com',
            phone: '(602) 555-0100'
          }
        },
        {
          id: 'party2',
          name: 'Jane Smith',
          role: 'respondent',
          represented: true,
          attorney: {
            name: 'Michael Brown',
            barNumber: 'AZ54321',
            firm: 'Brown & Associates',
            email: 'michael@brownlaw.com',
            phone: '(602) 555-0200'
          }
        }
      ],
      court: {
        name: 'Maricopa County Superior Court',
        department: 'Family Court Department 4',
        judge: 'Hon. Patricia Williams'
      },
      children: [
        {
          name: 'Emily Smith',
          dateOfBirth: new Date('2015-03-15')
        },
        {
          name: 'Michael Smith Jr.',
          dateOfBirth: new Date('2017-07-22')
        }
      ],
      issues: {
        divorce: true,
        custody: true,
        childSupport: true,
        spousalMaintenance: true,
        propertyDivision: true,
        debts: true
      },
      financials: {
        petitionerMonthlyIncome: 8500,
        respondentMonthlyIncome: 6200,
        childSupportAmount: 1200,
        propertyValue: 750000,
        debtsTotal: 125000
      },
      tags: ['high-conflict', 'children', 'property']
    });

    // Add some events
    caseManagementService.addEvent(sampleCase.id, {
      type: 'hearing',
      title: 'Temporary Orders Hearing',
      description: 'Hearing on temporary custody and support',
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      time: '9:00 AM',
      duration: 120,
      location: 'Courtroom 4B',
      status: 'scheduled',
      visibility: 'public'
    });

    caseManagementService.addEvent(sampleCase.id, {
      type: 'deadline',
      title: 'Financial Disclosure Due',
      description: 'Complete financial disclosure documents',
      date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
      status: 'scheduled',
      visibility: 'public'
    });

    // Add some tasks
    caseManagementService.addTask(sampleCase.id, {
      title: 'Prepare temporary orders motion',
      description: 'Draft motion for temporary custody and support orders',
      category: 'preparation',
      priority: 'urgent',
      dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
      estimatedHours: 4,
      billable: true,
      billingRate: 250
    });

    caseManagementService.addTask(sampleCase.id, {
      title: 'Complete financial affidavit',
      description: 'Gather documents and complete financial affidavit form',
      category: 'financial',
      priority: 'high',
      dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
      estimatedHours: 3,
      subtasks: [
        { id: 'st1', title: 'Gather bank statements', completed: false },
        { id: 'st2', title: 'Compile income documentation', completed: false },
        { id: 'st3', title: 'List assets and debts', completed: false },
        { id: 'st4', title: 'Complete form', completed: false }
      ]
    });

    setCases([sampleCase]);
    setSelectedCase(sampleCase);
  }, []);

  // Get filtered cases
  const getFilteredCases = (): Case[] => {
    let filtered = [...cases];

    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(c => 
        c.caseNumber.toLowerCase().includes(search) ||
        c.title.toLowerCase().includes(search) ||
        c.parties.some(p => p.name.toLowerCase().includes(search))
      );
    }

    if (filterStatus !== 'all') {
      filtered = filtered.filter(c => c.status === filterStatus);
    }

    if (filterType !== 'all') {
      filtered = filtered.filter(c => c.type === filterType);
    }

    return filtered;
  };

  // Get case statistics
  const getCaseStats = () => {
    if (!selectedCase) return null;
    return caseManagementService.getCaseStatistics(selectedCase.id);
  };

  // Get upcoming events
  const getUpcomingEvents = () => {
    if (!selectedCase) return [];
    return caseManagementService.getUpcomingEvents(selectedCase.id, 30);
  };

  // Get case timeline
  const getCaseTimeline = (): CaseTimeline | null => {
    if (!selectedCase) return null;
    return caseManagementService.getCaseTimeline(selectedCase.id);
  };

  // Get case tasks
  const getCaseTasks = (): CaseTask[] => {
    if (!selectedCase) return [];
    return caseManagementService.getCaseTasks(selectedCase.id);
  };

  const stats = getCaseStats();
  const upcomingEvents = getUpcomingEvents();
  const timeline = getCaseTimeline();
  const tasks = getCaseTasks();
  const filteredCases = getFilteredCases();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-10 h-10" />
            <div>
              <h1 className="text-3xl font-bold">Case Management</h1>
              <p className="text-blue-100 text-lg">Track cases, events, tasks, and deadlines</p>
            </div>
          </div>
          
          {selectedCase && (
            <div className="mt-6 bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{selectedCase.title}</h2>
                  <p className="text-blue-100">
                    Case #{selectedCase.caseNumber} • {selectedCase.court.name}
                  </p>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedCase.priority === 'urgent' ? 'bg-red-500' :
                    selectedCase.priority === 'high' ? 'bg-orange-500' :
                    selectedCase.priority === 'medium' ? 'bg-yellow-500' :
                    'bg-gray-500'
                  }`}>
                    {selectedCase.priority} priority
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Case Management</span>
          </nav>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          {/* Case Selector */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search cases..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border rounded-lg"
                    />
                  </div>
                </div>
                
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value as any)}
                  className="px-3 py-2 border rounded-lg"
                >
                  <option value="all">All Types</option>
                  <option value="divorce">Divorce</option>
                  <option value="custody">Custody</option>
                  <option value="support">Support</option>
                  <option value="modification">Modification</option>
                  <option value="protection_order">Protection Order</option>
                </select>

                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value as any)}
                  className="px-3 py-2 border rounded-lg"
                >
                  <option value="all">All Status</option>
                  <option value="intake">Intake</option>
                  <option value="filed">Filed</option>
                  <option value="discovery">Discovery</option>
                  <option value="negotiation">Negotiation</option>
                  <option value="trial">Trial</option>
                  <option value="settled">Settled</option>
                  <option value="closed">Closed</option>
                </select>

                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  New Case
                </Button>
              </div>

              {/* Case List */}
              {filteredCases.length > 0 && (
                <div className="mt-4 grid gap-2">
                  {filteredCases.map(c => (
                    <div
                      key={c.id}
                      onClick={() => setSelectedCase(c)}
                      className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                        selectedCase?.id === c.id 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{c.title}</h4>
                          <p className="text-sm text-gray-600">
                            {c.caseNumber} • {c.type} • {c.status}
                          </p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          c.priority === 'urgent' ? 'bg-red-100 text-red-700' :
                          c.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                          c.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {c.priority}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {selectedCase && (
            <>
              {/* Tab Navigation */}
              <div className="flex gap-2 mb-6 border-b">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                    activeTab === 'overview' 
                      ? 'border-blue-600 text-blue-600' 
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Briefcase className="w-5 h-5 inline mr-2" />
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('timeline')}
                  className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                    activeTab === 'timeline' 
                      ? 'border-blue-600 text-blue-600' 
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Calendar className="w-5 h-5 inline mr-2" />
                  Timeline
                </button>
                <button
                  onClick={() => setActiveTab('tasks')}
                  className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                    activeTab === 'tasks' 
                      ? 'border-blue-600 text-blue-600' 
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <CheckSquare className="w-5 h-5 inline mr-2" />
                  Tasks
                </button>
                <button
                  onClick={() => setActiveTab('documents')}
                  className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                    activeTab === 'documents' 
                      ? 'border-blue-600 text-blue-600' 
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <FileText className="w-5 h-5 inline mr-2" />
                  Documents
                </button>
              </div>

              {/* Overview Tab */}
              {activeTab === 'overview' && stats && (
                <div className="space-y-6">
                  {/* Statistics */}
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600">Days Active</p>
                            <p className="text-2xl font-bold">{stats.daysActive}</p>
                          </div>
                          <Clock className="w-8 h-8 text-blue-400" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600">Total Tasks</p>
                            <p className="text-2xl font-bold">
                              {stats.completedTasks}/{stats.totalTasks}
                            </p>
                          </div>
                          <CheckSquare className="w-8 h-8 text-green-400" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600">Upcoming Events</p>
                            <p className="text-2xl font-bold">{stats.upcomingEvents}</p>
                          </div>
                          <Calendar className="w-8 h-8 text-purple-400" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600">Compliance</p>
                            <p className={`text-lg font-bold ${
                              stats.complianceStatus === 'compliant' ? 'text-green-600' :
                              stats.complianceStatus === 'at_risk' ? 'text-yellow-600' :
                              'text-red-600'
                            }`}>
                              {stats.complianceStatus.replace('_', ' ')}
                            </p>
                          </div>
                          <TrendingUp className="w-8 h-8 text-gray-400" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Case Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Case Information</h3>
                        <div className="space-y-3 text-sm">
                          <div>
                            <span className="text-gray-600">Type:</span>
                            <span className="ml-2 font-medium capitalize">{selectedCase.type.replace('_', ' ')}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Status:</span>
                            <span className="ml-2 font-medium capitalize">{selectedCase.status}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Judge:</span>
                            <span className="ml-2 font-medium">{selectedCase.court.judge}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Filed:</span>
                            <span className="ml-2 font-medium">
                              {selectedCase.filedDate?.toLocaleDateString()}
                            </span>
                          </div>
                          {selectedCase.children && selectedCase.children.length > 0 && (
                            <div>
                              <span className="text-gray-600">Children:</span>
                              <span className="ml-2 font-medium">{selectedCase.children.length}</span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Parties</h3>
                        <div className="space-y-3">
                          {selectedCase.parties.map(party => (
                            <div key={party.id} className="text-sm">
                              <div className="font-medium">{party.name}</div>
                              <div className="text-gray-600 capitalize">{party.role}</div>
                              {party.attorney && (
                                <div className="text-xs text-gray-500 mt-1">
                                  Attorney: {party.attorney.name}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Upcoming Events */}
                  {upcomingEvents.length > 0 && (
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Upcoming Events</h3>
                        <div className="space-y-3">
                          {upcomingEvents.slice(0, 5).map(event => (
                            <div key={event.id} className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">{event.title}</p>
                                <p className="text-sm text-gray-600">
                                  {event.date.toLocaleDateString()} {event.time && `at ${event.time}`}
                                </p>
                              </div>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                event.type === 'hearing' ? 'bg-purple-100 text-purple-700' :
                                event.type === 'deadline' ? 'bg-red-100 text-red-700' :
                                'bg-gray-100 text-gray-700'
                              }`}>
                                {event.type}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}

              {/* Timeline Tab */}
              {activeTab === 'timeline' && timeline && (
                <TimelineView
                  timeline={timeline}
                  onEventClick={(event) => console.log('Event clicked:', event)}
                  onAddEvent={() => console.log('Add event')}
                  viewMode="vertical"
                  showFilters={true}
                />
              )}

              {/* Tasks Tab */}
              {activeTab === 'tasks' && (
                <TaskManager
                  tasks={tasks}
                  onTaskStatusChange={(taskId, status) => {
                    caseManagementService.updateTaskStatus(taskId, status);
                    // Refresh tasks
                    setSelectedCase({ ...selectedCase });
                  }}
                  onAddTask={() => console.log('Add task')}
                  showStats={true}
                  viewMode="list"
                />
              )}

              {/* Documents Tab */}
              {activeTab === 'documents' && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <h3 className="text-lg font-medium mb-2">Documents</h3>
                    <p className="text-gray-600">
                      Document management would be integrated here
                    </p>
                    <Button className="mt-4">
                      <Plus className="w-4 h-4 mr-2" />
                      Upload Document
                    </Button>
                  </CardContent>
                </Card>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}