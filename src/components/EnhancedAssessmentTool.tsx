'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, AlertCircle, CheckCircle, RotateCcw, 
  BookOpen, FileText, Shield, Save, Mail, Clock, Printer, 
  TrendingUp, Calendar, Download, Send, Bell
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { InfoCard } from '@/components/ui/info-card';
import { 
  assessmentQuestions, 
  AssessmentOption,
  getAssessmentResult 
} from '@/data/assessment';
import Link from 'next/link';
import { format } from 'date-fns';

interface AssessmentHistory {
  questionId: string;
  selectedOption: AssessmentOption;
  timestamp: string;
  confidence?: number;
}

interface AssessmentSession {
  id: string;
  startTime: string;
  lastUpdated: string;
  currentQuestionId: string;
  history: AssessmentHistory[];
  isComplete: boolean;
  resultPath?: string;
  userEmail?: string;
  confidenceScores: Record<string, number>;
  estimatedTime?: number;
  reminderSet?: boolean;
}

interface TimeEstimate {
  questionsRemaining: number;
  averageTimePerQuestion: number;
  estimatedMinutes: number;
}

export default function EnhancedAssessmentTool() {
  const [currentQuestionId, setCurrentQuestionId] = useState('start');
  const [history, setHistory] = useState<AssessmentHistory[]>([]);
  const [resultPath, setResultPath] = useState<string | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');
  const [confidenceScores, setConfidenceScores] = useState<Record<string, number>>({});
  const [showConfidencePrompt, setShowConfidencePrompt] = useState(false);
  const [currentConfidence, setCurrentConfidence] = useState(5);
  const [userEmail, setUserEmail] = useState('');
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [timeEstimate, setTimeEstimate] = useState<TimeEstimate | null>(null);
  const [sessionStartTime] = useState(new Date().toISOString());
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [averageResponseTime, setAverageResponseTime] = useState(30); // seconds
  const [showPrintPreview, setShowPrintPreview] = useState(false);
  const [reminderSet, setReminderSet] = useState(false);

  // Get current question
  const currentQuestion = assessmentQuestions.find(q => q.id === currentQuestionId);
  
  // Initialize session
  useEffect(() => {
    const id = `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    setSessionId(id);
    loadSavedSessions();
  }, []);

  // Calculate time estimate
  useEffect(() => {
    if (!isComplete && currentQuestion) {
      const pathLength = estimatePathLength(currentQuestionId);
      const questionsRemaining = Math.max(1, pathLength - history.length);
      const estimatedMinutes = Math.ceil((questionsRemaining * averageResponseTime) / 60);
      
      setTimeEstimate({
        questionsRemaining,
        averageTimePerQuestion: averageResponseTime,
        estimatedMinutes
      });
    }
  }, [currentQuestionId, history, averageResponseTime, isComplete]);

  // Save progress with enhanced data
  useEffect(() => {
    if (!isComplete && currentQuestionId !== 'start' && sessionId) {
      const session: AssessmentSession = {
        id: sessionId,
        startTime: sessionStartTime,
        lastUpdated: new Date().toISOString(),
        currentQuestionId,
        history,
        isComplete: false,
        confidenceScores,
        estimatedTime: timeEstimate?.estimatedMinutes,
        userEmail: userEmail || undefined,
        reminderSet
      };
      
      saveSession(session);
    }
  }, [currentQuestionId, history, isComplete, sessionId, confidenceScores, userEmail, timeEstimate, reminderSet]);

  const saveSession = (session: AssessmentSession) => {
    const sessions = getSavedSessions();
    const index = sessions.findIndex(s => s.id === session.id);
    
    if (index >= 0) {
      sessions[index] = session;
    } else {
      sessions.push(session);
    }
    
    // Keep only last 5 sessions
    if (sessions.length > 5) {
      sessions.shift();
    }
    
    localStorage.setItem('assessmentSessions', JSON.stringify(sessions));
  };

  const getSavedSessions = (): AssessmentSession[] => {
    const saved = localStorage.getItem('assessmentSessions');
    return saved ? JSON.parse(saved) : [];
  };

  const loadSavedSessions = () => {
    const sessions = getSavedSessions();
    if (sessions.length > 0) {
      const mostRecent = sessions[sessions.length - 1];
      if (!mostRecent.isComplete) {
        // Offer to resume
        if (confirm('You have an incomplete assessment. Would you like to continue where you left off?')) {
          resumeSession(mostRecent);
        }
      }
    }
  };

  const resumeSession = (session: AssessmentSession) => {
    setSessionId(session.id);
    setCurrentQuestionId(session.currentQuestionId);
    setHistory(session.history);
    setConfidenceScores(session.confidenceScores);
    setUserEmail(session.userEmail || '');
    setReminderSet(session.reminderSet || false);
    
    if (session.isComplete && session.resultPath) {
      setIsComplete(true);
      setResultPath(session.resultPath);
    }
  };

  const estimatePathLength = (questionId: string): number => {
    // Estimate based on typical assessment paths
    const pathEstimates: Record<string, number> = {
      'start': 4,
      'divorce-type': 5,
      'custody-situation': 6,
      'protection-needed': 3,
      'financial-issues': 5
    };
    
    return pathEstimates[questionId] || 4;
  };

  const handleOptionSelect = (option: AssessmentOption) => {
    // Calculate response time
    const responseTime = (Date.now() - questionStartTime) / 1000;
    const newAverageTime = (averageResponseTime * history.length + responseTime) / (history.length + 1);
    setAverageResponseTime(newAverageTime);
    
    // Show confidence prompt
    setShowConfidencePrompt(true);
    
    const completeSelection = () => {
      // Add to history with confidence
      const newHistoryItem: AssessmentHistory = {
        questionId: currentQuestionId,
        selectedOption: option,
        timestamp: new Date().toISOString(),
        confidence: currentConfidence
      };
      
      const newHistory = [...history, newHistoryItem];
      setHistory(newHistory);
      
      // Update confidence scores
      const newConfidenceScores = {
        ...confidenceScores,
        [currentQuestionId]: currentConfidence
      };
      setConfidenceScores(newConfidenceScores);
      
      // Navigate to next question or result
      if (option.resultPath) {
        setResultPath(option.resultPath);
        setIsComplete(true);
        completeSession(option.resultPath);
      } else if (option.nextQuestionId) {
        setCurrentQuestionId(option.nextQuestionId);
        setQuestionStartTime(Date.now());
      }
      
      setShowConfidencePrompt(false);
      setCurrentConfidence(5);
    };
    
    // Store the function to call after confidence is set
    (window as any).completeSelection = completeSelection;
  };

  const completeSession = (resultPath: string) => {
    const session: AssessmentSession = {
      id: sessionId,
      startTime: sessionStartTime,
      lastUpdated: new Date().toISOString(),
      currentQuestionId,
      history,
      isComplete: true,
      resultPath,
      confidenceScores,
      userEmail: userEmail || undefined,
      reminderSet
    };
    
    saveSession(session);
    
    // Show email option
    if (!userEmail) {
      setShowEmailForm(true);
    }
  };

  const handleBack = () => {
    if (history.length > 0) {
      const newHistory = [...history];
      const lastItem = newHistory.pop();
      setHistory(newHistory);
      setCurrentQuestionId(lastItem!.questionId);
      setIsComplete(false);
      setResultPath(null);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionId('start');
    setHistory([]);
    setIsComplete(false);
    setResultPath(null);
    setConfidenceScores({});
    setQuestionStartTime(Date.now());
    
    // Create new session
    const id = `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    setSessionId(id);
  };

  const generateActionPlan = () => {
    if (!resultPath) return null;
    
    const result = getAssessmentResult(resultPath);
    if (!result) return null;
    
    const avgConfidence = Object.values(confidenceScores).reduce((a, b) => a + b, 0) / Object.values(confidenceScores).length;
    
    return {
      title: result.title,
      description: result.description,
      urgencyLevel: result.urgencyLevel,
      confidenceLevel: avgConfidence,
      actions: result.recommendedActions,
      resources: result.resources,
      timeline: generateTimeline(result.urgencyLevel),
      sessionId,
      completedAt: new Date().toISOString()
    };
  };

  const generateTimeline = (urgency: string) => {
    const timelines = {
      immediate: ['Today: Contact emergency services or crisis hotline', 'Within 24 hours: File emergency orders', 'Within 48 hours: Secure temporary housing'],
      high: ['This week: Gather documents', 'Within 2 weeks: File initial paperwork', 'Within 1 month: Attend first hearing'],
      medium: ['This month: Research options', 'Within 6 weeks: Consult attorney', 'Within 2 months: File paperwork'],
      low: ['Next 2 months: Gather information', 'Within 3 months: Make decision', 'Within 6 months: Take action if needed']
    };
    
    return timelines[urgency as keyof typeof timelines] || timelines.medium;
  };

  const handlePrint = () => {
    const actionPlan = generateActionPlan();
    if (!actionPlan) return;
    
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Your Legal Action Plan</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 40px auto; }
            h1 { color: #1e40af; }
            h2 { color: #374151; margin-top: 30px; }
            .urgency { padding: 10px; margin: 20px 0; border-left: 4px solid; }
            .urgency.immediate { border-color: #dc2626; background: #fee2e2; }
            .urgency.high { border-color: #ea580c; background: #fef3c7; }
            .urgency.medium { border-color: #ca8a04; background: #fef9c3; }
            .urgency.low { border-color: #16a34a; background: #dcfce7; }
            .action { margin: 15px 0; padding: 15px; background: #f3f4f6; }
            .resource { margin: 10px 0; padding: 10px; border: 1px solid #d1d5db; }
            .confidence { margin: 20px 0; }
            .timeline { margin: 20px 0; }
            .timeline li { margin: 10px 0; }
            .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #d1d5db; text-align: center; color: #6b7280; }
          </style>
        </head>
        <body>
          <h1>Your Arizona Family Law Action Plan</h1>
          <p><strong>Generated:</strong> ${format(new Date(), 'MMMM d, yyyy h:mm a')}</p>
          <p><strong>Session ID:</strong> ${actionPlan.sessionId}</p>
          
          <div class="urgency ${actionPlan.urgencyLevel}">
            <strong>Priority Level:</strong> ${actionPlan.urgencyLevel.toUpperCase()}
          </div>
          
          <h2>${actionPlan.title}</h2>
          <p>${actionPlan.description}</p>
          
          <div class="confidence">
            <strong>Assessment Confidence:</strong> ${Math.round(actionPlan.confidenceLevel * 10)}%
            ${actionPlan.confidenceLevel < 5 ? '<p><em>Note: Lower confidence suggests you may benefit from professional legal consultation.</em></p>' : ''}
          </div>
          
          <h2>Recommended Actions</h2>
          ${actionPlan.actions.map((action, i) => `
            <div class="action">
              <strong>Step ${i + 1}:</strong> ${action}
            </div>
          `).join('')}
          
          <h2>Timeline</h2>
          <ul class="timeline">
            ${actionPlan.timeline.map(item => `<li>${item}</li>`).join('')}
          </ul>
          
          <h2>Resources</h2>
          ${actionPlan.resources.map(resource => `
            <div class="resource">
              <strong>${resource.title}</strong>
              <p>${resource.description}</p>
              ${resource.url ? `<p>Learn more: ${resource.url}</p>` : ''}
            </div>
          `).join('')}
          
          <div class="footer">
            <p><strong>Disclaimer:</strong> This action plan provides general guidance only. For specific legal advice, consult with a qualified Arizona family law attorney.</p>
            <p>Arizona Family Law Knowledge Base - ${new Date().getFullYear()}</p>
          </div>
        </body>
      </html>
    `;
    
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.print();
  };

  const handleEmailResults = async () => {
    if (!userEmail || !resultPath) return;
    
    const actionPlan = generateActionPlan();
    if (!actionPlan) return;
    
    // In production, this would send to a backend API
    // For now, we'll create a mailto link
    const subject = encodeURIComponent('Your Arizona Family Law Action Plan');
    const body = encodeURIComponent(`
Your assessment has been completed. Here's your action plan:

${actionPlan.title}
${actionPlan.description}

Priority Level: ${actionPlan.urgencyLevel.toUpperCase()}
Confidence Score: ${Math.round(actionPlan.confidenceLevel * 10)}%

RECOMMENDED ACTIONS:
${actionPlan.actions.map((action, i) => `${i + 1}. ${action}`).join('\n')}

TIMELINE:
${actionPlan.timeline.join('\n')}

For full details and resources, please return to the website.

Session ID: ${actionPlan.sessionId}

---
This email was sent from the Arizona Family Law Knowledge Base.
For specific legal advice, consult with a qualified attorney.
    `);
    
    window.location.href = `mailto:${userEmail}?subject=${subject}&body=${body}`;
    
    // Save email preference
    setUserEmail(userEmail);
    setShowEmailForm(false);
    
    // Show confirmation
    alert('Your action plan has been prepared for email. Please check your email client.');
  };

  const setReminder = () => {
    if (!userEmail) {
      setShowEmailForm(true);
      return;
    }
    
    // In production, this would schedule actual reminders
    // For now, we'll use browser notifications
    if ('Notification' in window && Notification.permission === 'granted') {
      // Schedule a demonstration notification
      setTimeout(() => {
        new Notification('Legal Action Reminder', {
          body: 'Don\'t forget to review your action plan and take the next steps.',
          icon: '/favicon.ico'
        });
      }, 5000);
    } else if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          setReminder();
        }
      });
    }
    
    setReminderSet(true);
    alert('Reminder set! You\'ll receive follow-up notifications about your action plan.');
  };

  // Calculate progress
  const totalExpectedQuestions = 4;
  const progress = isComplete ? 100 : Math.min((history.length / totalExpectedQuestions) * 100, 90);
  
  // Get urgency color based on result
  const getUrgencyColor = (urgency: string) => {
    switch(urgency) {
      case 'immediate': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-blue-500';
    }
  };

  // Get urgency icon
  const getUrgencyIcon = (urgency: string) => {
    switch(urgency) {
      case 'immediate': return AlertCircle;
      case 'high': return Shield;
      case 'medium': return FileText;
      case 'low': return BookOpen;
      default: return CheckCircle;
    }
  };

  if (isComplete && resultPath) {
    const result = getAssessmentResult(resultPath);
    if (!result) return <div>Result not found</div>;
    
    const UrgencyIcon = getUrgencyIcon(result.urgencyLevel);
    const urgencyColor = getUrgencyColor(result.urgencyLevel);
    const avgConfidence = Object.values(confidenceScores).reduce((a, b) => a + b, 0) / Object.values(confidenceScores).length;
    
    const urgencyLabels = {
      immediate: 'IMMEDIATE ACTION REQUIRED',
      high: 'High Priority',
      medium: 'Medium Priority',
      low: 'Standard Process'
    };
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto p-6"
      >
        {/* Session Info Bar */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div>
              <p className="text-sm text-gray-600">Session ID</p>
              <p className="font-mono text-xs">{sessionId}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Confidence</p>
              <p className="font-semibold">{Math.round(avgConfidence * 10)}%</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={handlePrint}>
              <Printer className="w-4 h-4 mr-2" />
              Print Plan
            </Button>
            <Button size="sm" variant="outline" onClick={() => setShowEmailForm(true)}>
              <Mail className="w-4 h-4 mr-2" />
              Email Results
            </Button>
            <Button size="sm" variant="outline" onClick={setReminder} disabled={reminderSet}>
              <Bell className="w-4 h-4 mr-2" />
              {reminderSet ? 'Reminder Set' : 'Set Reminder'}
            </Button>
          </div>
        </div>

        {/* Email Form Dialog */}
        {showEmailForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="w-full max-w-md">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Email Your Action Plan</h3>
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-3 py-2 border rounded-md mb-4"
                />
                <div className="flex gap-2">
                  <Button onClick={handleEmailResults} disabled={!userEmail}>
                    <Send className="w-4 h-4 mr-2" />
                    Send
                  </Button>
                  <Button variant="outline" onClick={() => setShowEmailForm(false)}>
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Progress Completion */}
        <div className="mb-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden max-w-md mx-auto">
            <div className="h-full bg-green-500 w-full" />
          </div>
          <p className="text-sm text-gray-600 mt-2">Assessment Complete</p>
        </div>

        <Card className="mb-6">
          <CardContent className="p-8">
            {/* Header with urgency indicator */}
            <div className="mb-6">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-white text-sm font-medium mb-4 ${urgencyColor}`}>
                <UrgencyIcon className="w-4 h-4" />
                {urgencyLabels[result.urgencyLevel as keyof typeof urgencyLabels]}
              </div>
              <h2 className="text-3xl font-bold mb-3">{result.title}</h2>
              <p className="text-lg text-gray-600">{result.description}</p>
            </div>

            {/* Confidence Score Indicator */}
            {avgConfidence < 5 && (
              <InfoCard type="warning" className="mb-6">
                <p>Your confidence level suggests uncertainty. Consider consulting with a legal professional for clarification.</p>
              </InfoCard>
            )}

            {/* Urgency Alert */}
            {result.urgencyLevel === 'immediate' && (
              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-red-900 mb-2">URGENT SITUATION</p>
                    <p className="text-red-800">
                      This situation requires immediate attention. Do not delay taking action. 
                      If you are in immediate physical danger, call 911 first.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Action Steps with Timeline */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                Your Personalized Action Plan
              </h4>
              <div className="space-y-4">
                {result.recommendedActions.map((action, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold ${urgencyColor}`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 leading-relaxed">{action}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {generateTimeline(result.urgencyLevel)[index] || `Step ${index + 1}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4">📚 Relevant Resources</h4>
              <div className="grid gap-3">
                {result.resources.map((resource, index) => (
                  <Link
                    key={index}
                    href={resource.url}
                    className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <h5 className="font-medium text-blue-900 mb-1">{resource.title}</h5>
                    <p className="text-sm text-blue-700">{resource.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <Button onClick={handleBack} variant="outline">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Review Answers
          </Button>
          <Button onClick={handleRestart}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Start New Assessment
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto p-6"
    >
      {/* Progress Bar with Time Estimate */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm text-gray-600">
            Question {history.length + 1} of approximately {totalExpectedQuestions}
          </p>
          {timeEstimate && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>About {timeEstimate.estimatedMinutes} min remaining</span>
            </div>
          )}
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        {/* Save Progress Button */}
        <div className="flex justify-end mt-2">
          <Button 
            size="sm" 
            variant="ghost" 
            onClick={() => setShowSaveDialog(true)}
          >
            <Save className="w-4 h-4 mr-2" />
            Save Progress
          </Button>
        </div>
      </div>

      {/* Save Dialog */}
      {showSaveDialog && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium text-green-900">Progress Saved!</p>
              <p className="text-sm text-green-700 mt-1">
                Your session ID: <span className="font-mono">{sessionId}</span>
              </p>
              <p className="text-sm text-green-700 mt-1">
                You can close this page and return anytime to continue.
              </p>
              
              <div className="mt-3">
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="Email (optional - for reminders)"
                  className="px-3 py-2 border rounded-md text-sm mr-2"
                />
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => setShowSaveDialog(false)}
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Question Card */}
      {currentQuestion && (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="mb-6">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">{currentQuestion.question}</h3>
                
                {currentQuestion.description && (
                  <p className="text-gray-600 mb-6">{currentQuestion.description}</p>
                )}

                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionSelect(option)}
                      className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-gray-800">{option.label}</span>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Confidence Modal */}
      {showConfidencePrompt && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">How confident are you in this answer?</h3>
              <div className="mb-4">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={currentConfidence}
                  onChange={(e) => setCurrentConfidence(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>Not sure</span>
                  <span className="font-semibold text-lg">{currentConfidence}/10</span>
                  <span>Very sure</span>
                </div>
              </div>
              <Button 
                onClick={() => {
                  setShowConfidencePrompt(false);
                  (window as any).completeSelection();
                }}
                className="w-full"
              >
                Continue
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          onClick={handleBack}
          disabled={history.length === 0}
          variant="outline"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        
        <Button
          onClick={handleRestart}
          variant="outline"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Start Over
        </Button>
      </div>
    </motion.div>
  );
}