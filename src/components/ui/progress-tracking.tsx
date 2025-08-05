'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Circle, 
  Clock, 
  BookOpen, 
  FileText, 
  Calendar,
  TrendingUp
} from 'lucide-react';
import { Card } from './card';
import { cn } from '@/lib/utils';

// Types
export interface LegalTask {
  id: string;
  title: string;
  description?: string;
  category: 'forms' | 'court' | 'research' | 'deadlines' | 'other';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'not_started' | 'in_progress' | 'completed' | 'blocked';
  dueDate?: Date;
  estimatedTime?: number; // in minutes
  completedAt?: Date;
  notes?: string;
  resources?: string[];
}

export interface UserProgress {
  tasksCompleted: number;
  totalTasks: number;
  currentJourney?: 'divorce' | 'custody' | 'support' | 'protection' | 'modification';
  journeyStage?: string;
  bookmarkedPages: string[];
  visitedPages: string[];
  timeSpent: number; // in minutes
  lastActive: Date;
}

export interface JourneyStage {
  id: string;
  title: string;
  description: string;
  estimatedTime: string;
  tasks: string[];
  resources: string[];
  isCompleted: boolean;
  isActive: boolean;
}

// Context
interface ProgressContextType {
  userProgress: UserProgress;
  tasks: LegalTask[];
  addTask: (task: Omit<LegalTask, 'id'>) => void;
  updateTask: (id: string, updates: Partial<LegalTask>) => void;
  deleteTask: (id: string) => void;
  completeTask: (id: string) => void;
  addBookmark: (pageUrl: string) => void;
  removeBookmark: (pageUrl: string) => void;
  setCurrentJourney: (journey: UserProgress['currentJourney'], stage?: string) => void;
  getJourneyProgress: () => number;
  getCompletionRate: () => number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}

// Provider Component
interface ProgressProviderProps {
  children: React.ReactNode;
}

export function ProgressProvider({ children }: ProgressProviderProps) {
  const [userProgress, setUserProgress] = useState<UserProgress>({
    tasksCompleted: 0,
    totalTasks: 0,
    bookmarkedPages: [],
    visitedPages: [],
    timeSpent: 0,
    lastActive: new Date(),
  });
  
  const [tasks, setTasks] = useState<LegalTask[]>([]);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('userProgress');
    const savedTasks = localStorage.getItem('userTasks');
    
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }
    
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('userProgress', JSON.stringify(userProgress));
  }, [userProgress]);

  useEffect(() => {
    localStorage.setItem('userTasks', JSON.stringify(tasks));
  }, [tasks]);

  // Task management functions
  const addTask = (taskData: Omit<LegalTask, 'id'>) => {
    const newTask: LegalTask = {
      ...taskData,
      id: Date.now().toString(),
    };
    
    setTasks(prev => [...prev, newTask]);
    setUserProgress(prev => ({
      ...prev,
      totalTasks: prev.totalTasks + 1,
    }));
  };

  const updateTask = (id: string, updates: Partial<LegalTask>) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, ...updates } : task
    ));
  };

  const deleteTask = (id: string) => {
    const task = tasks.find(t => t.id === id);
    setTasks(prev => prev.filter(task => task.id !== id));
    
    setUserProgress(prev => ({
      ...prev,
      totalTasks: prev.totalTasks - 1,
      tasksCompleted: task?.status === 'completed' 
        ? prev.tasksCompleted - 1 
        : prev.tasksCompleted,
    }));
  };

  const completeTask = (id: string) => {
    const task = tasks.find(t => t.id === id);
    if (task && task.status !== 'completed') {
      updateTask(id, { 
        status: 'completed', 
        completedAt: new Date() 
      });
      
      setUserProgress(prev => ({
        ...prev,
        tasksCompleted: prev.tasksCompleted + 1,
      }));
    }
  };

  // Bookmark management
  const addBookmark = (pageUrl: string) => {
    setUserProgress(prev => ({
      ...prev,
      bookmarkedPages: [...prev.bookmarkedPages, pageUrl],
    }));
  };

  const removeBookmark = (pageUrl: string) => {
    setUserProgress(prev => ({
      ...prev,
      bookmarkedPages: prev.bookmarkedPages.filter(url => url !== pageUrl),
    }));
  };

  // Journey management
  const setCurrentJourney = (journey: UserProgress['currentJourney'], stage?: string) => {
    setUserProgress(prev => ({
      ...prev,
      currentJourney: journey,
      journeyStage: stage,
    }));
  };

  const getJourneyProgress = (): number => {
    if (!userProgress.currentJourney) return 0;
    // This would be calculated based on completed stages/tasks in the journey
    return Math.round((userProgress.tasksCompleted / Math.max(userProgress.totalTasks, 1)) * 100);
  };

  const getCompletionRate = (): number => {
    return Math.round((userProgress.tasksCompleted / Math.max(userProgress.totalTasks, 1)) * 100);
  };

  return (
    <ProgressContext.Provider
      value={{
        userProgress,
        tasks,
        addTask,
        updateTask,
        deleteTask,
        completeTask,
        addBookmark,
        removeBookmark,
        setCurrentJourney,
        getJourneyProgress,
        getCompletionRate,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

// Dashboard Component
export function ProgressDashboard({ className = '' }: { className?: string }) {
  const { userProgress, tasks, getCompletionRate, getJourneyProgress } = useProgress();
  
  const completionRate = getCompletionRate();
  const journeyProgress = getJourneyProgress();
  
  const upcomingTasks = tasks
    .filter(task => task.status !== 'completed' && task.dueDate)
    .sort((a, b) => (a.dueDate?.getTime() || 0) - (b.dueDate?.getTime() || 0))
    .slice(0, 3);

  const recentlyCompleted = tasks
    .filter(task => task.status === 'completed')
    .sort((a, b) => (b.completedAt?.getTime() || 0) - (a.completedAt?.getTime() || 0))
    .slice(0, 3);

  return (
    <div className={cn('space-y-6', className)}>
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Your Legal Journey</h1>
        <p className="text-gray-600">
          Track your progress and stay organized throughout your legal process.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Overall Progress</p>
              <p className="text-2xl font-bold text-gray-900">{completionRate}%</p>
            </div>
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary-600" />
            </div>
          </div>
          <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-primary-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${completionRate}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Tasks Completed</p>
              <p className="text-2xl font-bold text-gray-900">
                {userProgress.tasksCompleted} / {userProgress.totalTasks}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Time Invested</p>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round(userProgress.timeSpent / 60)}h
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Current Journey */}
      {userProgress.currentJourney && (
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Current Journey: {userProgress.currentJourney.charAt(0).toUpperCase() + userProgress.currentJourney.slice(1)}
            </h2>
            <span className="text-sm text-gray-500">{journeyProgress}% complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <motion.div
              className="bg-primary-600 h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${journeyProgress}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </div>
          {userProgress.journeyStage && (
            <p className="text-sm text-gray-600">
              Current stage: {userProgress.journeyStage}
            </p>
          )}
        </Card>
      )}

      {/* Tasks Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Tasks */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Tasks</h3>
          {upcomingTasks.length > 0 ? (
            <div className="space-y-3">
              {upcomingTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No upcoming tasks with deadlines.</p>
          )}
        </Card>

        {/* Recently Completed */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recently Completed</h3>
          {recentlyCompleted.length > 0 ? (
            <div className="space-y-3">
              {recentlyCompleted.map((task) => (
                <TaskItem key={task.id} task={task} showCompleted />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No completed tasks yet.</p>
          )}
        </Card>
      </div>
    </div>
  );
}

// Task Item Component
interface TaskItemProps {
  task: LegalTask;
  showCompleted?: boolean;
  onUpdate?: (updates: Partial<LegalTask>) => void;
}

function TaskItem({ task, showCompleted = false }: TaskItemProps) {
  const { completeTask } = useProgress();
  
  const getPriorityColor = (priority: LegalTask['priority']) => {
    switch (priority) {
      case 'urgent': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
    }
  };

  const getCategoryIcon = (category: LegalTask['category']) => {
    switch (category) {
      case 'forms': return <FileText className="w-4 h-4" />;
      case 'court': return <Calendar className="w-4 h-4" />;
      case 'research': return <BookOpen className="w-4 h-4" />;
      case 'deadlines': return <Clock className="w-4 h-4" />;
      default: return <Circle className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
      <button
        onClick={() => completeTask(task.id)}
        className="mt-0.5 flex-shrink-0"
        disabled={task.status === 'completed'}
      >
        {task.status === 'completed' ? (
          <CheckCircle className="w-5 h-5 text-green-600" />
        ) : (
          <Circle className="w-5 h-5 text-gray-400 hover:text-primary-600 transition-colors" />
        )}
      </button>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <div className="text-gray-500">
            {getCategoryIcon(task.category)}
          </div>
          <h4 className={cn(
            "font-medium text-sm",
            task.status === 'completed' ? 'line-through text-gray-500' : 'text-gray-900'
          )}>
            {task.title}
          </h4>
          <span className={cn(
            'px-2 py-1 rounded-full text-xs font-medium',
            getPriorityColor(task.priority)
          )}>
            {task.priority}
          </span>
        </div>
        
        {task.description && (
          <p className="text-xs text-gray-600 mb-2">{task.description}</p>
        )}
        
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-3">
            {task.dueDate && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {task.dueDate.toLocaleDateString()}
              </span>
            )}
            {task.estimatedTime && (
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {task.estimatedTime}m
              </span>
            )}
          </div>
          
          {showCompleted && task.completedAt && (
            <span>Completed {task.completedAt.toLocaleDateString()}</span>
          )}
        </div>
      </div>
    </div>
  );
}

// Journey Timeline Component
interface JourneyTimelineProps {
  journey: 'divorce' | 'custody' | 'support' | 'protection' | 'modification';
  className?: string;
}

export function JourneyTimeline({ journey, className = '' }: JourneyTimelineProps) {
  const stages = getJourneyStages(journey);
  
  return (
    <div className={cn('space-y-6', className)}>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        {journey.charAt(0).toUpperCase() + journey.slice(1)} Journey Timeline
      </h2>
      
      <div className="relative">
        {stages.map((stage, index) => (
          <div key={stage.id} className="relative flex gap-4 pb-8">
            {/* Timeline line */}
            {index < stages.length - 1 && (
              <div className="absolute left-4 top-8 w-0.5 h-full bg-gray-300" />
            )}
            
            {/* Stage indicator */}
            <div className={cn(
              'flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center',
              stage.isCompleted
                ? 'bg-green-100 border-green-500'
                : stage.isActive
                ? 'bg-primary-100 border-primary-500'
                : 'bg-gray-100 border-gray-300'
            )}>
              {stage.isCompleted ? (
                <CheckCircle className="w-4 h-4 text-green-600" />
              ) : (
                <span className={cn(
                  'text-xs font-medium',
                  stage.isActive ? 'text-primary-600' : 'text-gray-600'
                )}>
                  {index + 1}
                </span>
              )}
            </div>
            
            {/* Stage content */}
            <div className="flex-1">
              <div className="bg-white border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">{stage.title}</h3>
                  <span className="text-xs text-gray-500">{stage.estimatedTime}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{stage.description}</p>
                
                {stage.tasks.length > 0 && (
                  <div className="mb-3">
                    <h4 className="text-xs font-medium text-gray-700 mb-2">Key Tasks:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {stage.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-gray-400 rounded-full" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {stage.resources.length > 0 && (
                  <div>
                    <h4 className="text-xs font-medium text-gray-700 mb-2">Resources:</h4>
                    <div className="flex flex-wrap gap-1">
                      {stage.resources.map((resource, resourceIndex) => (
                        <span 
                          key={resourceIndex}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {resource}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper function to get journey stages
function getJourneyStages(journey: string): JourneyStage[] {
  const stages: Record<string, JourneyStage[]> = {
    divorce: [
      {
        id: 'preparation',
        title: 'Preparation & Planning',
        description: 'Gather documents and understand the process',
        estimatedTime: '1-2 weeks',
        tasks: ['Collect financial documents', 'List assets and debts', 'Consider mediation'],
        resources: ['Document Checklist', 'Asset Worksheet'],
        isCompleted: false,
        isActive: true,
      },
      {
        id: 'filing',
        title: 'Filing Petition',
        description: 'File initial divorce papers with the court',
        estimatedTime: '1 week',
        tasks: ['Complete petition form', 'File with court clerk', 'Serve spouse'],
        resources: ['Petition Forms', 'Filing Instructions'],
        isCompleted: false,
        isActive: false,
      },
      // Add more stages...
    ],
    // Add other journey types...
  };
  
  return stages[journey] || [];
}