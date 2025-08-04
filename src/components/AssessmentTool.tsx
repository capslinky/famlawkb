'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, AlertCircle, CheckCircle } from 'lucide-react';
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

  // Progress indicator
  const progress = Math.min((history.length / 3) * 100, 90);

  if (isComplete && resultPath) {
    const result = getAssessmentResult(resultPath);
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto p-6"
      >
        <Card>
          <CardContent className="p-8">
            <div className="mb-6">
              <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Assessment Complete</h2>
            </div>

            {result && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{result.title}</h3>
                  <p className="text-gray-600">{result.description}</p>
                </div>

                {result.urgencyLevel === 'immediate' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <div>
                        <p className="font-semibold text-red-900">Immediate Action Required</p>
                        <p className="text-sm text-red-700 mt-1">
                          This situation requires urgent attention. Please review the recommended actions carefully.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="font-semibold mb-3">Recommended Next Steps:</h4>
                  <ol className="space-y-2">
                    {result.recommendedActions.map((action, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="flex gap-4 pt-4">
                  <Link href={result.path}>
                    <Button size="lg" className="gap-2">
                      Get Started
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" onClick={handleRestart}>
                    Start Over
                  </Button>
                </div>
              </div>
            )}
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
      className="max-w-2xl mx-auto p-6"
    >
      {/* Progress bar */}
      <div className="mb-8">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Step {history.length + 1} of approximately 3-4 steps
        </p>
      </div>

      <Card>
        <CardContent className="p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold mb-2">{currentQuestion.question}</h2>
                {currentQuestion.description && (
                  <p className="text-gray-600">{currentQuestion.description}</p>
                )}
              </div>

              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionSelect(option)}
                    className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <span className="text-lg">{option.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {history.length > 0 && (
            <div className="mt-8 pt-6 border-t">
              <Button
                variant="outline"
                onClick={handleBack}
                className="gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="mt-6 text-center">
        <button
          onClick={handleRestart}
          className="text-sm text-gray-500 hover:text-gray-700 underline"
        >
          Start over
        </button>
      </div>
    </motion.div>
  );
}