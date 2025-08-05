'use client';

import { useState, useEffect } from 'react';
import { Heart, CheckCircle, Star, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface SupportMessage {
  id: string;
  type: 'encouragement' | 'progress' | 'milestone' | 'check-in';
  title: string;
  message: string;
  action?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  displayCondition?: () => boolean;
}

const SUPPORT_MESSAGES: SupportMessage[] = [
  {
    id: 'first-visit',
    type: 'encouragement',
    title: 'You\'re taking the right step',
    message: 'Seeking information about your legal rights shows incredible strength. Many people in your situation feel overwhelmed - this is completely normal, and you\'re not alone.',
    action: {
      text: 'Start Here Guide',
      href: '/getting-divorced'
    }
  },
  {
    id: 'return-visitor',
    type: 'progress',
    title: 'Welcome back',
    message: 'We see you\'re continuing your journey. That takes courage. Each step you take, no matter how small, is progress toward a better future.',
    displayCondition: () => {
      const visits = parseInt(localStorage.getItem('visitCount') || '0');
      return visits > 1;
    }
  },
  {
    id: 'page-progress',
    type: 'milestone',
    title: 'You\'re making progress',
    message: 'You\'ve learned about several important topics. Knowledge is power, and you\'re building the foundation for your future decisions.',
    displayCondition: () => {
      const viewedPages = JSON.parse(localStorage.getItem('viewedPages') || '[]');
      return viewedPages.length >= 3;
    }
  },
  {
    id: 'emotional-check-in',
    type: 'check-in',
    title: 'How are you feeling?',
    message: 'Learning about legal processes can be emotionally draining. Remember to take breaks, breathe, and be kind to yourself. You deserve support and care.',
    action: {
      text: 'Find Support Resources',
      href: '/protection/emergency'
    }
  }
];

const MICRO_COPY_PHRASES = [
  'You\'re not alone in this',
  'This is a normal part of the process',
  'You\'re being incredibly brave',
  'One step at a time is all you need',
  'Your feelings are valid',
  'You deserve peace and safety',
  'This difficult time will pass',
  'You\'re stronger than you know',
  'Help is available when you need it',
  'You\'re doing the best you can'
];

export function ReassuranceWidget() {
  const [currentMessage, setCurrentMessage] = useState<SupportMessage | null>(null);
  const [showWidget, setShowWidget] = useState(false);
  const [dismissedMessages, setDismissedMessages] = useState<string[]>([]);

  useEffect(() => {
    // Load dismissed messages from localStorage
    const dismissed = JSON.parse(localStorage.getItem('dismissedSupportMessages') || '[]');
    setDismissedMessages(dismissed);

    // Find the most appropriate message to show
    const availableMessages = SUPPORT_MESSAGES.filter(msg => {
      if (dismissed.includes(msg.id)) return false;
      if (msg.displayCondition && !msg.displayCondition()) return false;
      return true;
    });

    if (availableMessages.length > 0) {
      // Show after a brief delay to not overwhelm
      setTimeout(() => {
        setCurrentMessage(availableMessages[0]);
        setShowWidget(true);
      }, 3000);
    }
  }, []);

  const dismissMessage = (messageId: string) => {
    const newDismissed = [...dismissedMessages, messageId];
    setDismissedMessages(newDismissed);
    localStorage.setItem('dismissedSupportMessages', JSON.stringify(newDismissed));
    setShowWidget(false);
  };

  if (!showWidget || !currentMessage) return null;

  const getIcon = () => {
    switch (currentMessage.type) {
      case 'progress': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'milestone': return <Star className="w-5 h-5 text-blue-600" />;
      case 'check-in': return <Heart className="w-5 h-5 text-pink-600" />;
      default: return <Heart className="w-5 h-5 text-purple-600" />;
    }
  };

  const getColorScheme = () => {
    switch (currentMessage.type) {
      case 'progress': return 'bg-green-50 border-green-200 text-green-900';
      case 'milestone': return 'bg-blue-50 border-blue-200 text-blue-900';
      case 'check-in': return 'bg-pink-50 border-pink-200 text-pink-900';
      default: return 'bg-purple-50 border-purple-200 text-purple-900';
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-sm animate-in slide-in-from-bottom-2">
      <Card className={`border-2 shadow-lg ${getColorScheme()}`}>
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="mt-1">
              {getIcon()}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-sm mb-1">
                {currentMessage.title}
              </h4>
              <p className="text-xs mb-3 leading-relaxed">
                {currentMessage.message}
              </p>
              <div className="flex items-center gap-2">
                {currentMessage.action && (
                  <Button
                    size="sm"
                    className="text-xs py-1 px-3 h-auto"
                    onClick={currentMessage.action.onClick}
                  >
                    {currentMessage.action.href ? (
                      <a href={currentMessage.action.href} className="flex items-center gap-1">
                        {currentMessage.action.text}
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    ) : (
                      currentMessage.action.text
                    )}
                  </Button>
                )}
                <button
                  onClick={() => dismissMessage(currentMessage.id)}
                  className="text-xs text-gray-500 hover:text-gray-700"
                >
                  Dismiss
                </button>
              </div>
            </div>
            <button
              onClick={() => dismissMessage(currentMessage.id)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function ProgressTracker() {
  const [progress, setProgress] = useState({
    pagesViewed: 0,
    sectionsCompleted: 0,
    toolsUsed: 0,
    totalScore: 0
  });

  useEffect(() => {
    // Track page views
    const viewedPages = JSON.parse(localStorage.getItem('viewedPages') || '[]');
    const currentPath = window.location.pathname;
    
    if (!viewedPages.includes(currentPath)) {
      const updatedPages = [...viewedPages, currentPath];
      localStorage.setItem('viewedPages', JSON.stringify(updatedPages));
      setProgress(prev => ({ ...prev, pagesViewed: updatedPages.length }));
    } else {
      setProgress(prev => ({ ...prev, pagesViewed: viewedPages.length }));
    }

    // Calculate total progress score
    const completedChecklists = Object.keys(localStorage).filter(key => 
      key.includes('Checklist') && localStorage.getItem(key)
    ).length;

    const toolsUsed = Object.keys(localStorage).filter(key =>
      key.includes('calculator') || key.includes('form') || key.includes('wizard')
    ).length;

    setProgress(prev => ({
      ...prev,
      sectionsCompleted: completedChecklists,
      toolsUsed,
      totalScore: prev.pagesViewed + completedChecklists * 2 + toolsUsed * 3
    }));
  }, []);

  const getProgressMessage = () => {
    if (progress.totalScore >= 15) {
      return {
        message: "You've made exceptional progress! You're well-prepared for your next steps.",
        color: 'text-green-600',
        emoji: '🎉'
      };
    } else if (progress.totalScore >= 8) {
      return {
        message: "Great progress! You're building a strong foundation of knowledge.",
        color: 'text-blue-600',
        emoji: '💪'
      };
    } else if (progress.totalScore >= 3) {
      return {
        message: "You're off to a good start. Every step forward matters.",
        color: 'text-purple-600',
        emoji: '⭐'
      };
    } else {
      return {
        message: "Welcome! You're taking the first important steps.",
        color: 'text-gray-600',
        emoji: '🌟'
      };
    }
  };

  const progressInfo = getProgressMessage();

  return (
    <Card className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-2xl">{progressInfo.emoji}</div>
          <div>
            <h3 className="font-semibold text-gray-900">Your Journey Progress</h3>
            <p className={`text-sm ${progressInfo.color}`}>
              {progressInfo.message}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          <div>
            <div className="font-bold text-lg text-blue-600">{progress.pagesViewed}</div>
            <div className="text-gray-600">Pages Explored</div>
          </div>
          <div>
            <div className="font-bold text-lg text-green-600">{progress.sectionsCompleted}</div>
            <div className="text-gray-600">Checklists Used</div>
          </div>
          <div>
            <div className="font-bold text-lg text-purple-600">{progress.toolsUsed}</div>
            <div className="text-gray-600">Tools Tried</div>
          </div>
        </div>
        <div className="mt-3">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min((progress.totalScore / 20) * 100, 100)}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1 text-center">
            Progress Score: {progress.totalScore}/20
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export function RandomEncouragement() {
  const [phrase, setPhrase] = useState('');

  useEffect(() => {
    const randomPhrase = MICRO_COPY_PHRASES[Math.floor(Math.random() * MICRO_COPY_PHRASES.length)];
    setPhrase(randomPhrase);
  }, []);

  if (!phrase) return null;

  return (
    <div className="inline-flex items-center gap-2 text-sm text-gray-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
      <Heart className="w-3 h-3 text-purple-500" />
      <span className="italic">{phrase}</span>
    </div>
  );
}

export function CelebrationMoment({ trigger }: { trigger: 'form-completed' | 'section-finished' | 'milestone-reached' | 'progress-made' }) {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const celebrations = {
      'form-completed': 'Amazing work! You\'ve completed an important step in your journey. 🎉',
      'section-finished': 'Well done! You\'ve finished this section. You\'re making real progress! ⭐',
      'milestone-reached': 'Incredible! You\'ve reached an important milestone. You should be proud! 🌟',
      'progress-made': 'Every step forward matters, and you\'re doing great! Keep going! 💪'
    };

    setMessage(celebrations[trigger]);
    setShow(true);

    // Auto-hide after 5 seconds
    const timer = setTimeout(() => setShow(false), 5000);
    return () => clearTimeout(timer);
  }, [trigger]);

  if (!show) return null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 animate-in zoom-in-50 duration-500">
      <Card className="bg-gradient-to-r from-green-400 to-blue-500 text-white border-0 shadow-2xl">
        <CardContent className="p-6 text-center">
          <div className="text-4xl mb-2">🎉</div>
          <p className="font-semibold text-lg mb-2">Congratulations!</p>
          <p className="text-sm opacity-90">{message}</p>
          <Button
            onClick={() => setShow(false)}
            className="mt-4 bg-white text-gray-800 hover:bg-gray-100"
            size="sm"
          >
            Continue
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}