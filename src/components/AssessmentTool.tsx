'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, AlertCircle, CheckCircle, RotateCcw, BookOpen, FileText, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  assessmentQuestions, 
  AssessmentOption,
  getAssessmentResult 
} from '@/data/assessment';
import Link from 'next/link';

interface AssessmentHistory {
  questionId: string;
  selectedOption: AssessmentOption;
}

export default function AssessmentTool() {
  const [currentQuestionId, setCurrentQuestionId] = useState('start');
  const [history, setHistory] = useState<AssessmentHistory[]>([]);
  const [resultPath, setResultPath] = useState<string | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  // Get current question
  const currentQuestion = assessmentQuestions.find(q => q.id === currentQuestionId);
  
  // Save/load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('assessmentProgress');
    if (saved) {
      const { questionId, history: savedHistory } = JSON.parse(saved);
      setCurrentQuestionId(questionId);
      setHistory(savedHistory);
    }
  }, []);

  useEffect(() => {
    if (!isComplete && currentQuestionId !== 'start') {
      localStorage.setItem('assessmentProgress', JSON.stringify({
        questionId: currentQuestionId,
        history
      }));
    }
  }, [currentQuestionId, history, isComplete]);

  const handleOptionSelect = (option: AssessmentOption) => {
    // Add to history
    const newHistory = [...history, { questionId: currentQuestionId, selectedOption: option }];
    setHistory(newHistory);

    // Navigate to next question or result
    if (option.resultPath) {
      setResultPath(option.resultPath);
      setIsComplete(true);
      localStorage.removeItem('assessmentProgress');
    } else if (option.nextQuestionId) {
      setCurrentQuestionId(option.nextQuestionId);
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
    localStorage.removeItem('assessmentProgress');
  };

  // Calculate progress more dynamically
  const totalExpectedQuestions = 4; // Average expected path length
  const progress = Math.min((history.length / totalExpectedQuestions) * 100, 90);
  
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

            {/* Urgency Alert */}
            {result.urgencyLevel === 'immediate' && (
              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-red-900 mb-2">⚠️ URGENT SITUATION</p>
                    <p className="text-red-800">
                      This situation requires immediate attention. Do not delay taking action. 
                      If you are in immediate physical danger, call 911 first.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {result.urgencyLevel === 'high' && (
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-orange-900">Time-Sensitive Matter</p>
                    <p className="text-sm text-orange-800 mt-1">
                      This situation has important deadlines. Take action promptly to protect your rights.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Action Steps */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Your Next Steps
              </h4>
              <div className="space-y-4">
                {result.recommendedActions.map((action, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold ${urgencyColor}`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 leading-relaxed">{action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
              <Link href={result.path} className="flex-1">
                <Button size="lg" className="w-full gap-2">
                  <BookOpen className="w-5 h-5" />
                  Get Detailed Guidance
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button variant="outline" onClick={handleRestart} className="gap-2">
                <RotateCcw className="w-4 h-4" />
                Start New Assessment
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Assessment Summary */}
        <Card>
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Assessment Summary</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Questions answered:</strong> {history.length}</p>
              <p><strong>Assessment path:</strong></p>
              <div className="ml-4 space-y-1">
                {history.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs">
                      {index + 1}
                    </span>
                    <span>{item.selectedOption.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  if (!currentQuestion) {
    return <div>Question not found</div>;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto p-6"
    >
      {/* Enhanced Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Step {history.length + 1} of approximately {totalExpectedQuestions}
          </span>
          <span className="text-sm text-gray-500">
            {Math.round(progress)}% complete
          </span>
        </div>
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        
        {/* Progress dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalExpectedQuestions }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i < history.length ? 'bg-blue-500' : 
                i === history.length ? 'bg-blue-300' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      <Card className="shadow-lg">
        <CardContent className="p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold mb-3">{currentQuestion.question}</h2>
                {currentQuestion.description && (
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">{currentQuestion.description}</p>
                )}
              </div>

              <div className="space-y-4">
                {currentQuestion.options.map((option, index) => (
                  <motion.button
                    key={option.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    onClick={() => handleOptionSelect(option)}
                    className="w-full text-left p-6 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-gray-100 group-hover:bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                        <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600">
                          {String.fromCharCode(65 + index)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <span className="text-lg text-gray-900 group-hover:text-blue-900 transition-colors">
                          {option.label}
                        </span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t">
            <div>
              {history.length > 0 && (
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous Question
                </Button>
              )}
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={handleRestart}
                className="text-sm text-gray-500 hover:text-gray-700 underline transition-colors"
              >
                Start over
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progress Summary */}
      {history.length > 0 && (
        <Card className="mt-6">
          <CardContent className="p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Your answers so far:</h4>
            <div className="space-y-1">
              {history.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-4 h-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium">
                    {index + 1}
                  </span>
                  <span className="truncate">{item.selectedOption.label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </motion.div>
  );
}