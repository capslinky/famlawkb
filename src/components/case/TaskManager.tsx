'use client';

import React, { useState, useEffect } from 'react';
import { CheckSquare, Square, Clock, AlertTriangle, Users, Calendar, ChevronRight, Plus, Filter, BarChart3, Tag, Paperclip, DollarSign, Ban, PlayCircle, PauseCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CaseTask } from '@/lib/caseManagement';

interface TaskManagerProps {
  tasks: CaseTask[];
  onTaskUpdate?: (taskId: string, updates: Partial<CaseTask>) => void;
  onTaskStatusChange?: (taskId: string, status: CaseTask['status']) => void;
  onAddTask?: () => void;
  showStats?: boolean;
  viewMode?: 'list' | 'kanban' | 'timeline';
}

export default function TaskManager({
  tasks,
  onTaskUpdate,
  onTaskStatusChange,
  onAddTask,
  showStats = true,
  viewMode = 'list'
}: TaskManagerProps) {
  const [filterCategory, setFilterCategory] = useState<CaseTask['category'] | 'all'>('all');
  const [filterPriority, setFilterPriority] = useState<CaseTask['priority'] | 'all'>('all');
  const [filterStatus, setFilterStatus] = useState<CaseTask['status'] | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'dueDate' | 'priority' | 'status'>('dueDate');
  const [expandedTasks, setExpandedTasks] = useState<Set<string>>(new Set());

  // Filter tasks
  const filteredTasks = tasks.filter(task => {
    if (filterCategory !== 'all' && task.category !== filterCategory) return false;
    if (filterPriority !== 'all' && task.priority !== filterPriority) return false;
    if (filterStatus !== 'all' && task.status !== filterStatus) return false;
    
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      return (
        task.title.toLowerCase().includes(search) ||
        task.description?.toLowerCase().includes(search) ||
        task.tags?.some(tag => tag.toLowerCase().includes(search))
      );
    }
    
    return true;
  });

  // Sort tasks
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    switch (sortBy) {
      case 'dueDate':
        if (!a.dueDate && !b.dueDate) return 0;
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return a.dueDate.getTime() - b.dueDate.getTime();
      
      case 'priority':
        const priorityOrder = { urgent: 0, high: 1, medium: 2, low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      
      case 'status':
        const statusOrder = { 
          blocked: 0, 
          pending: 1, 
          in_progress: 2, 
          completed: 3, 
          cancelled: 4 
        };
        return statusOrder[a.status] - statusOrder[b.status];
      
      default:
        return 0;
    }
  });

  // Calculate statistics
  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.status === 'completed').length,
    inProgress: tasks.filter(t => t.status === 'in_progress').length,
    pending: tasks.filter(t => t.status === 'pending').length,
    blocked: tasks.filter(t => t.status === 'blocked').length,
    overdue: tasks.filter(t => 
      t.dueDate && 
      t.dueDate < new Date() && 
      t.status !== 'completed' && 
      t.status !== 'cancelled'
    ).length,
    totalHours: tasks.reduce((sum, t) => sum + (t.actualHours || t.estimatedHours || 0), 0),
    billableHours: tasks.filter(t => t.billable).reduce((sum, t) => sum + (t.actualHours || 0), 0)
  };

  // Toggle task expansion
  const toggleTaskExpansion = (taskId: string) => {
    const newExpanded = new Set(expandedTasks);
    if (newExpanded.has(taskId)) {
      newExpanded.delete(taskId);
    } else {
      newExpanded.add(taskId);
    }
    setExpandedTasks(newExpanded);
  };

  // Get task icon
  const getTaskIcon = (status: CaseTask['status']) => {
    switch (status) {
      case 'completed':
        return <CheckSquare className="w-4 h-4 text-green-600" />;
      case 'in_progress':
        return <PlayCircle className="w-4 h-4 text-blue-600" />;
      case 'blocked':
        return <Ban className="w-4 h-4 text-red-600" />;
      case 'cancelled':
        return <Square className="w-4 h-4 text-gray-400" />;
      default:
        return <Square className="w-4 h-4 text-gray-600" />;
    }
  };

  // Get priority color
  const getPriorityColor = (priority: CaseTask['priority']) => {
    switch (priority) {
      case 'urgent':
        return 'text-red-600 bg-red-100';
      case 'high':
        return 'text-orange-600 bg-orange-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'low':
        return 'text-gray-600 bg-gray-100';
    }
  };

  // Format date
  const formatDate = (date: Date) => {
    const today = new Date();
    const diffTime = date.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays === -1) return 'Yesterday';
    if (diffDays < -1) return `${Math.abs(diffDays)} days overdue`;
    if (diffDays > 1 && diffDays <= 7) return `In ${diffDays} days`;
    
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  // Handle status change
  const handleStatusChange = (taskId: string, newStatus: CaseTask['status']) => {
    if (onTaskStatusChange) {
      onTaskStatusChange(taskId, newStatus);
    }
  };

  // Kanban columns
  const kanbanColumns = [
    { status: 'pending' as const, title: 'To Do', color: 'bg-gray-50' },
    { status: 'in_progress' as const, title: 'In Progress', color: 'bg-blue-50' },
    { status: 'blocked' as const, title: 'Blocked', color: 'bg-red-50' },
    { status: 'completed' as const, title: 'Completed', color: 'bg-green-50' }
  ];

  // Categories for filtering
  const categories: CaseTask['category'][] = [
    'filing', 'discovery', 'communication', 'court', 
    'financial', 'investigation', 'preparation', 'other'
  ];

  return (
    <div className="space-y-6">
      {/* Statistics */}
      {showStats && (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Tasks</p>
                  <p className="text-2xl font-bold">{stats.total}</p>
                </div>
                <CheckSquare className="w-8 h-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-green-600">
                    {stats.completed}
                    <span className="text-sm text-gray-500 ml-2">
                      ({Math.round((stats.completed / stats.total) * 100)}%)
                    </span>
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
                  <p className="text-sm text-gray-600">Overdue</p>
                  <p className="text-2xl font-bold text-red-600">{stats.overdue}</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Hours</p>
                  <p className="text-2xl font-bold">{stats.totalHours.toFixed(1)}</p>
                </div>
                <Clock className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="space-y-4">
            {/* Search */}
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-3 py-2 border rounded-md"
              />
              {onAddTask && (
                <Button onClick={onAddTask}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Task
                </Button>
              )}
            </div>

            {/* Filter Options */}
            <div className="flex flex-wrap gap-4">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value as any)}
                className="px-3 py-2 border rounded-md text-sm"
              >
                <option value="all">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>

              <select
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value as any)}
                className="px-3 py-2 border rounded-md text-sm"
              >
                <option value="all">All Priorities</option>
                <option value="urgent">Urgent</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>

              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as any)}
                className="px-3 py-2 border rounded-md text-sm"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="in_progress">In Progress</option>
                <option value="blocked">Blocked</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 border rounded-md text-sm"
              >
                <option value="dueDate">Sort by Due Date</option>
                <option value="priority">Sort by Priority</option>
                <option value="status">Sort by Status</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Task View */}
      {viewMode === 'list' && (
        <div className="space-y-3">
          {sortedTasks.map(task => {
            const isExpanded = expandedTasks.has(task.id);
            const isOverdue = task.dueDate && task.dueDate < new Date() && 
                             task.status !== 'completed' && task.status !== 'cancelled';

            return (
              <Card key={task.id} className={isOverdue ? 'border-red-200' : ''}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    {/* Status Icon */}
                    <button
                      onClick={() => handleStatusChange(
                        task.id,
                        task.status === 'completed' ? 'pending' : 'completed'
                      )}
                      className="mt-0.5"
                    >
                      {getTaskIcon(task.status)}
                    </button>

                    {/* Task Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className={`font-medium ${
                            task.status === 'completed' ? 'line-through text-gray-500' : ''
                          }`}>
                            {task.title}
                          </h3>
                          
                          {task.description && (
                            <p className="text-sm text-gray-600 mt-1">
                              {task.description}
                            </p>
                          )}

                          {/* Task Meta */}
                          <div className="flex flex-wrap items-center gap-4 mt-2 text-xs">
                            {/* Priority */}
                            <span className={`px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
                              {task.priority}
                            </span>

                            {/* Category */}
                            <span className="text-gray-600">
                              {task.category}
                            </span>

                            {/* Due Date */}
                            {task.dueDate && (
                              <span className={`flex items-center gap-1 ${
                                isOverdue ? 'text-red-600 font-medium' : 'text-gray-600'
                              }`}>
                                <Calendar className="w-3 h-3" />
                                {formatDate(task.dueDate)}
                              </span>
                            )}

                            {/* Assigned To */}
                            {task.assignedTo && (
                              <span className="flex items-center gap-1 text-gray-600">
                                <Users className="w-3 h-3" />
                                {task.assignedTo}
                              </span>
                            )}

                            {/* Hours */}
                            {(task.estimatedHours || task.actualHours) && (
                              <span className="flex items-center gap-1 text-gray-600">
                                <Clock className="w-3 h-3" />
                                {task.actualHours || task.estimatedHours}h
                                {task.billable && ' (billable)'}
                              </span>
                            )}

                            {/* Attachments */}
                            {task.attachments && task.attachments.length > 0 && (
                              <span className="flex items-center gap-1 text-gray-600">
                                <Paperclip className="w-3 h-3" />
                                {task.attachments.length}
                              </span>
                            )}
                          </div>

                          {/* Subtasks */}
                          {task.subtasks && task.subtasks.length > 0 && (
                            <div className="mt-3">
                              <button
                                onClick={() => toggleTaskExpansion(task.id)}
                                className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
                              >
                                <ChevronRight className={`w-4 h-4 transition-transform ${
                                  isExpanded ? 'rotate-90' : ''
                                }`} />
                                {task.subtasks.filter(st => st.completed).length} of {task.subtasks.length} subtasks
                              </button>

                              {isExpanded && (
                                <div className="mt-2 ml-6 space-y-1">
                                  {task.subtasks.map(subtask => (
                                    <div key={subtask.id} className="flex items-center gap-2">
                                      <button
                                        onClick={() => {
                                          const newSubtasks = [...task.subtasks!];
                                          const idx = newSubtasks.findIndex(st => st.id === subtask.id);
                                          newSubtasks[idx] = {
                                            ...subtask,
                                            completed: !subtask.completed,
                                            completedDate: !subtask.completed ? new Date() : undefined
                                          };
                                          onTaskUpdate?.(task.id, { subtasks: newSubtasks });
                                        }}
                                      >
                                        {subtask.completed ? (
                                          <CheckSquare className="w-4 h-4 text-green-600" />
                                        ) : (
                                          <Square className="w-4 h-4 text-gray-400" />
                                        )}
                                      </button>
                                      <span className={`text-sm ${
                                        subtask.completed ? 'line-through text-gray-500' : ''
                                      }`}>
                                        {subtask.title}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}

                          {/* Blocked Reason */}
                          {task.status === 'blocked' && task.blockedReason && (
                            <div className="mt-2 p-2 bg-red-50 rounded text-sm text-red-600">
                              <strong>Blocked:</strong> {task.blockedReason}
                            </div>
                          )}

                          {/* Tags */}
                          {task.tags && task.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {task.tags.map(tag => (
                                <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Task Actions */}
                        <div className="flex gap-1">
                          <select
                            value={task.status}
                            onChange={(e) => handleStatusChange(task.id, e.target.value as CaseTask['status'])}
                            className="px-2 py-1 border rounded text-xs"
                          >
                            <option value="pending">Pending</option>
                            <option value="in_progress">In Progress</option>
                            <option value="blocked">Blocked</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* Kanban View */}
      {viewMode === 'kanban' && (
        <div className="grid md:grid-cols-4 gap-4">
          {kanbanColumns.map(column => {
            const columnTasks = sortedTasks.filter(t => t.status === column.status);
            
            return (
              <div key={column.status} className={`${column.color} rounded-lg p-4`}>
                <h3 className="font-semibold mb-3">
                  {column.title}
                  <span className="ml-2 text-sm text-gray-500">
                    ({columnTasks.length})
                  </span>
                </h3>
                
                <div className="space-y-3">
                  {columnTasks.map(task => (
                    <Card key={task.id} className="cursor-move hover:shadow-md transition-shadow">
                      <CardContent className="p-3">
                        <h4 className="font-medium text-sm mb-1">{task.title}</h4>
                        
                        <div className="flex items-center gap-2 text-xs">
                          <span className={`px-2 py-0.5 rounded-full ${getPriorityColor(task.priority)}`}>
                            {task.priority}
                          </span>
                          
                          {task.dueDate && (
                            <span className="text-gray-600">
                              {formatDate(task.dueDate)}
                            </span>
                          )}
                        </div>

                        {task.assignedTo && (
                          <p className="text-xs text-gray-600 mt-2">
                            Assigned to: {task.assignedTo}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Empty State */}
      {sortedTasks.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <CheckSquare className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-medium mb-2">No tasks found</h3>
            <p className="text-gray-600">
              {searchTerm || filterCategory !== 'all' || filterPriority !== 'all' || filterStatus !== 'all'
                ? 'Try adjusting your filters'
                : 'Add a task to get started'}
            </p>
            {onAddTask && (
              <Button className="mt-4" onClick={onAddTask}>
                <Plus className="w-4 h-4 mr-2" />
                Add Task
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}