'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  Home, 
  Shield, 
  Users, 
  FileText, 
  Scale, 
  BookOpen, 
  AlertTriangle,
  Heart,
  Calendar,
  DollarSign,
  Gavel,
  Phone,
  Search,
  Plus,
  Minus,
  Map,
  Route,
  Target,
  ArrowRight,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { Button } from './button';
import { Card } from './card';
import { cn } from '@/lib/utils';

// Types for sitemap structure
interface SiteMapNode {
  id: string;
  title: string;
  path: string;
  description?: string;
  icon?: React.ReactNode;
  children?: SiteMapNode[];
  category: 'core' | 'process' | 'resource' | 'emergency' | 'form';
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  urgency?: 'low' | 'medium' | 'high' | 'emergency';
  estimatedTime?: string;
  tags?: string[];
}

interface UserJourney {
  id: string;
  title: string;
  description: string;
  steps: JourneyStep[];
  category: 'divorce' | 'custody' | 'protection' | 'support' | 'general';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedDuration: string;
}

interface JourneyStep {
  id: string;
  title: string;
  path: string;
  description: string;
  icon?: React.ReactNode;
  isOptional?: boolean;
  prerequisites?: string[];
  outcomes?: string[];
}

// Site structure data
const SITE_STRUCTURE: SiteMapNode[] = [
  {
    id: 'home',
    title: 'Home',
    path: '/',
    description: 'Start here for legal guidance',
    icon: <Home className="w-4 h-4" />,
    category: 'core',
    children: [
      {
        id: 'getting-divorced',
        title: 'Getting Divorced',
        path: '/getting-divorced',
        description: 'Complete divorce process guide',
        icon: <Heart className="w-4 h-4" />,
        category: 'process',
        difficulty: 'intermediate',
        urgency: 'medium',
        estimatedTime: '30-45 min',
        children: [
          {
            id: 'uncontested-simple',
            title: 'Simple Uncontested Divorce',
            path: '/divorce/uncontested-simple',
            description: 'For couples without children or major assets',
            category: 'process',
            difficulty: 'beginner',
            urgency: 'low',
            estimatedTime: '15-20 min'
          },
          {
            id: 'uncontested-children',
            title: 'Uncontested with Children',
            path: '/divorce/uncontested-with-children',
            description: 'When you have children together',
            category: 'process',
            difficulty: 'intermediate',
            urgency: 'medium',
            estimatedTime: '25-30 min'
          },
          {
            id: 'contested-full',
            title: 'Contested Divorce',
            path: '/divorce/contested-full',
            description: 'When you can\'t agree on major issues',
            category: 'process',
            difficulty: 'advanced',
            urgency: 'high',
            estimatedTime: '45-60 min'
          }
        ]
      },
      {
        id: 'protection',
        title: 'Get Protection',
        path: '/get-protection',
        description: 'Safety and protection orders',
        icon: <Shield className="w-4 h-4" />,
        category: 'emergency',
        urgency: 'emergency',
        children: [
          {
            id: 'emergency-protection',
            title: 'Emergency Protection',
            path: '/protection/emergency',
            description: 'Immediate safety resources',
            category: 'emergency',
            urgency: 'emergency',
            estimatedTime: '5-10 min'
          },
          {
            id: 'how-to-file',
            title: 'How to File',
            path: '/protection/how-to-file',
            description: 'Step-by-step filing process',
            category: 'process',
            difficulty: 'intermediate',
            urgency: 'high',
            estimatedTime: '20-25 min'
          },
          {
            id: 'safety-plan',
            title: 'Safety Planning',
            path: '/protection/safety-plan',
            description: 'Create a personal safety plan',
            category: 'resource',
            urgency: 'high',
            estimatedTime: '15-20 min'
          }
        ]
      },
      {
        id: 'custody',
        title: 'Child Custody',
        path: '/custody',
        description: 'Custody and parenting time',
        icon: <Users className="w-4 h-4" />,
        category: 'core',
        difficulty: 'intermediate',
        urgency: 'medium',
        children: [
          {
            id: 'establish-order',
            title: 'Establish Custody Order',
            path: '/custody/establish-order',
            description: 'Create initial custody arrangements',
            category: 'process',
            difficulty: 'intermediate'
          }
        ]
      },
      {
        id: 'forms',
        title: 'Court Forms',
        path: '/forms',
        description: 'Legal forms and documents',
        icon: <FileText className="w-4 h-4" />,
        category: 'form',
        difficulty: 'beginner',
        children: [
          {
            id: 'divorce-petition',
            title: 'Divorce Petition Assistant',
            path: '/forms/divorce-petition-children',
            description: 'Interactive form helper',
            category: 'form',
            difficulty: 'intermediate'
          }
        ]
      },
      {
        id: 'resources',
        title: 'Resources',
        path: '/resources',
        description: 'Additional help and information',
        icon: <BookOpen className="w-4 h-4" />,
        category: 'resource',
        children: [
          {
            id: 'self-representation',
            title: 'Self-Representation Guide',
            path: '/resources/self-representation-guide',
            description: 'Representing yourself in court',
            category: 'resource',
            difficulty: 'intermediate'
          }
        ]
      }
    ]
  }
];

// User journey definitions
const USER_JOURNEYS: UserJourney[] = [
  {
    id: 'simple-divorce',
    title: 'Simple Divorce Without Children',
    description: 'Complete an uncontested divorce when you have no children and few assets',
    category: 'divorce',
    difficulty: 'beginner',
    estimatedDuration: '2-4 weeks',
    steps: [
      {
        id: 'overview',
        title: 'Understand Your Options',
        path: '/getting-divorced',
        description: 'Learn about different types of divorce',
        icon: <BookOpen className="w-4 h-4" />
      },
      {
        id: 'simple-process',
        title: 'Simple Divorce Process',
        path: '/divorce/uncontested-simple',
        description: 'Follow the step-by-step process',
        icon: <Route className="w-4 h-4" />
      },
      {
        id: 'forms',
        title: 'Complete Forms',
        path: '/forms',
        description: 'Fill out required court documents',
        icon: <FileText className="w-4 h-4" />
      },
      {
        id: 'file',
        title: 'File with Court',
        path: '/procedures/court-procedures',
        description: 'Submit your paperwork',
        icon: <Gavel className="w-4 h-4" />
      }
    ]
  },
  {
    id: 'emergency-protection',
    title: 'Get Emergency Protection',
    description: 'Obtain immediate safety through court orders',
    category: 'protection',
    difficulty: 'beginner',
    estimatedDuration: '1-3 days',
    steps: [
      {
        id: 'safety-first',
        title: 'Ensure Immediate Safety',
        path: '/protection/emergency',
        description: 'Call emergency services if in immediate danger',
        icon: <Phone className="w-4 h-4" />
      },
      {
        id: 'safety-plan',
        title: 'Create Safety Plan',
        path: '/protection/safety-plan',
        description: 'Develop a personal safety strategy',
        icon: <Shield className="w-4 h-4" />
      },
      {
        id: 'file-order',
        title: 'File Protection Order',
        path: '/protection/how-to-file',
        description: 'Submit paperwork for court protection',
        icon: <FileText className="w-4 h-4" />
      },
      {
        id: 'court-hearing',
        title: 'Attend Court Hearing',
        path: '/procedures/court-procedures',
        description: 'Present your case to the judge',
        icon: <Gavel className="w-4 h-4" />
      }
    ]
  }
];

// Visual Sitemap Component
interface VisualSitemapProps {
  className?: string;
  interactive?: boolean;
  showSearch?: boolean;
  maxDepth?: number;
}

export function VisualSitemap({ 
  className = '', 
  interactive = true,
  showSearch = true,
  maxDepth = 3
}: VisualSitemapProps) {
  const [expandedNodes, setExpandedNodes] = useState(new Set(['home']));
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const filteredStructure = useMemo(() => {
    const filterNode = (node: SiteMapNode, depth: number = 0): SiteMapNode | null => {
      if (depth >= maxDepth) return null;

      // Search filter
      const matchesSearch = searchTerm === '' || 
        node.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        node.description?.toLowerCase().includes(searchTerm.toLowerCase());

      // Category filter
      const matchesCategory = selectedCategory === 'all' || node.category === selectedCategory;

      // Difficulty filter
      const matchesDifficulty = selectedDifficulty === 'all' || node.difficulty === selectedDifficulty;

      if (!matchesSearch || !matchesCategory || !matchesDifficulty) {
        // Check if any children match
        const matchingChildren = node.children?.filter(child => 
          filterNode(child, depth + 1) !== null
        );
        
        if (!matchingChildren?.length) return null;
      }

      const filteredChildren = node.children?.map(child => 
        filterNode(child, depth + 1)
      ).filter(Boolean) as SiteMapNode[];

      return {
        ...node,
        children: filteredChildren
      };
    };

    return SITE_STRUCTURE.map(node => filterNode(node)).filter(Boolean) as SiteMapNode[];
  }, [searchTerm, selectedCategory, selectedDifficulty, maxDepth]);

  const toggleNode = (nodeId: string) => {
    if (!interactive) return;
    
    setExpandedNodes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId);
      } else {
        newSet.add(nodeId);
      }
      return newSet;
    });
  };

  const renderNode = (node: SiteMapNode, depth: number = 0) => {
    const isExpanded = expandedNodes.has(node.id);
    const hasChildren = node.children && node.children.length > 0;

    const categoryColors = {
      core: 'border-blue-200 bg-blue-50',
      process: 'border-green-200 bg-green-50',
      resource: 'border-purple-200 bg-purple-50',
      emergency: 'border-red-200 bg-red-50',
      form: 'border-orange-200 bg-orange-50'
    };

    const urgencyIndicators = {
      emergency: 'bg-red-500',
      high: 'bg-orange-500',
      medium: 'bg-yellow-500',
      low: 'bg-green-500'
    };

    return (
      <motion.div
        key={node.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: depth * 0.1 }}
        className={`ml-${depth * 4}`}
      >
        <Card className={cn(
          'p-4 mb-2 transition-all hover:shadow-md',
          categoryColors[node.category],
          interactive && 'cursor-pointer'
        )}>
          <div 
            className="flex items-start gap-3"
            onClick={() => interactive && toggleNode(node.id)}
          >
            {hasChildren && interactive && (
              <button className="mt-1 text-gray-400 hover:text-gray-600">
                {isExpanded ? (
                  <Minus className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </button>
            )}
            
            <div className="flex-shrink-0 mt-1">
              {node.icon || <FileText className="w-4 h-4" />}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-gray-900 truncate">
                  {node.title}
                </h3>
                
                {node.urgency && (
                  <div className={cn(
                    'w-2 h-2 rounded-full',
                    urgencyIndicators[node.urgency]
                  )} />
                )}
                
                {node.difficulty && (
                  <span className={cn(
                    'px-2 py-1 text-xs font-medium rounded-full',
                    node.difficulty === 'beginner' && 'bg-green-100 text-green-700',
                    node.difficulty === 'intermediate' && 'bg-yellow-100 text-yellow-700',
                    node.difficulty === 'advanced' && 'bg-red-100 text-red-700'
                  )}>
                    {node.difficulty}
                  </span>
                )}
              </div>
              
              {node.description && (
                <p className="text-sm text-gray-600 mb-2">
                  {node.description}
                </p>
              )}
              
              <div className="flex items-center gap-4 text-xs text-gray-500">
                {node.estimatedTime && (
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {node.estimatedTime}
                  </span>
                )}
                
                <a
                  href={node.path}
                  className="flex items-center gap-1 text-primary-600 hover:text-primary-700"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-3 h-3" />
                  Visit page
                </a>
              </div>
            </div>
          </div>
        </Card>
        
        <AnimatePresence>
          {hasChildren && isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              {node.children!.map(child => renderNode(child, depth + 1))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <div className={cn('space-y-6', className)}>
      <div className="flex items-center gap-2 mb-6">
        <Map className="w-6 h-6 text-primary-600" />
        <h2 className="text-2xl font-bold text-gray-900">Site Map</h2>
      </div>

      {showSearch && (
        <Card className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Search
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Search pages..."
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="all">All Categories</option>
                <option value="core">Core Topics</option>
                <option value="process">Processes</option>
                <option value="resource">Resources</option>
                <option value="emergency">Emergency</option>
                <option value="form">Forms</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Difficulty
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </Card>
      )}

      <div className="space-y-2">
        {filteredStructure.map(node => renderNode(node))}
      </div>
    </div>
  );
}

// User Journey Map Component
interface JourneyMapProps {
  journey?: UserJourney;
  compact?: boolean;
  className?: string;
}

export function JourneyMap({ journey, compact = false, className = '' }: JourneyMapProps) {
  const [selectedJourney, setSelectedJourney] = useState<UserJourney>(
    journey || USER_JOURNEYS[0]
  );
  const [currentStep, setCurrentStep] = useState(0);

  const renderStep = (step: JourneyStep, index: number) => {
    const isActive = index === currentStep;
    const isCompleted = index < currentStep;
    const isAccessible = index <= currentStep;

    return (
      <motion.div
        key={step.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="relative"
      >
        {/* Connection Line */}
        {index < selectedJourney.steps.length - 1 && (
          <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200" />
        )}
        
        <div className="flex items-start gap-4">
          {/* Step indicator */}
          <div className={cn(
            'w-12 h-12 rounded-full flex items-center justify-center transition-all',
            isCompleted && 'bg-green-600 text-white',
            isActive && 'bg-primary-600 text-white',
            !isActive && !isCompleted && 'bg-gray-200 text-gray-600'
          )}>
            {step.icon || <span>{index + 1}</span>}
          </div>
          
          {/* Step content */}
          <div className="flex-1 pb-8">
            <Card className={cn(
              'p-4 transition-all',
              isActive && 'ring-2 ring-primary-500 bg-primary-50',
              isCompleted && 'bg-green-50 border-green-200'
            )}>
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-900">
                  {step.title}
                </h3>
                {step.isOptional && (
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    Optional
                  </span>
                )}
              </div>
              
              <p className="text-sm text-gray-600 mb-3">
                {step.description}
              </p>
              
              <div className="flex items-center justify-between">
                <a
                  href={step.path}
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center gap-1"
                >
                  Go to step
                  <ArrowRight className="w-3 h-3" />
                </a>
                
                {isAccessible && !isCompleted && (
                  <Button
                    size="sm"
                    onClick={() => setCurrentStep(index + 1)}
                  >
                    Mark Complete
                  </Button>
                )}
              </div>
            </Card>
          </div>
        </div>
      </motion.div>
    );
  };

  if (compact) {
    return (
      <div className={cn('space-y-4', className)}>
        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
          <Route className="w-5 h-5" />
          {selectedJourney.title}
        </h3>
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {selectedJourney.steps.map((step, index) => (
            <div
              key={step.id}
              className="flex-shrink-0 p-2 bg-gray-100 rounded-lg text-sm"
            >
              {step.title}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn('space-y-6', className)}>
      <div className="flex items-center gap-2 mb-6">
        <Route className="w-6 h-6 text-primary-600" />
        <h2 className="text-2xl font-bold text-gray-900">User Journey Map</h2>
      </div>

      {!journey && (
        <Card className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {USER_JOURNEYS.map((journeyOption) => (
              <button
                key={journeyOption.id}
                onClick={() => {
                  setSelectedJourney(journeyOption);
                  setCurrentStep(0);
                }}
                className={cn(
                  'p-4 text-left border rounded-lg transition-all hover:shadow-md',
                  selectedJourney.id === journeyOption.id
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200'
                )}
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  {journeyOption.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {journeyOption.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>{journeyOption.difficulty}</span>
                  <span>{journeyOption.estimatedDuration}</span>
                  <span>{journeyOption.steps.length} steps</span>
                </div>
              </button>
            ))}
          </div>
        </Card>
      )}

      <Card className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {selectedJourney.title}
          </h3>
          <p className="text-gray-600 mb-4">
            {selectedJourney.description}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Target className="w-4 h-4" />
              {selectedJourney.difficulty}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {selectedJourney.estimatedDuration}
            </span>
          </div>
        </div>

        <div className="space-y-6">
          {selectedJourney.steps.map((step, index) => renderStep(step, index))}
        </div>
      </Card>
    </div>
  );
}

// Combined component
interface SiteNavigationMapProps {
  mode?: 'sitemap' | 'journeys' | 'both';
  className?: string;
}

export function SiteNavigationMap({ 
  mode = 'both', 
  className = '' 
}: SiteNavigationMapProps) {
  const [activeTab, setActiveTab] = useState<'sitemap' | 'journeys'>('sitemap');

  if (mode === 'sitemap') {
    return <VisualSitemap className={className} />;
  }

  if (mode === 'journeys') {
    return <JourneyMap className={className} />;
  }

  return (
    <div className={cn('space-y-6', className)}>
      <div className="flex items-center gap-4">
        <Button
          variant={activeTab === 'sitemap' ? 'default' : 'outline'}
          onClick={() => setActiveTab('sitemap')}
          leftIcon={<Map className="w-4 h-4" />}
        >
          Site Map
        </Button>
        <Button
          variant={activeTab === 'journeys' ? 'default' : 'outline'}
          onClick={() => setActiveTab('journeys')}
          leftIcon={<Route className="w-4 h-4" />}
        >
          User Journeys
        </Button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'sitemap' && <VisualSitemap />}
          {activeTab === 'journeys' && <JourneyMap />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}