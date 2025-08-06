'use client';

import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Award, Target, AlertCircle, CheckCircle, XCircle, MessageSquare, User, Gavel, Clock, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ScenarioChoice {
  id: string;
  text: string;
  response: string;
  impact: 'positive' | 'neutral' | 'negative';
  explanation: string;
  points: number;
}

interface ScenarioEvent {
  id: string;
  type: 'question' | 'statement' | 'objection' | 'ruling' | 'document';
  speaker: 'judge' | 'opposing_counsel' | 'your_client' | 'witness' | 'narrator';
  content: string;
  choices?: ScenarioChoice[];
  timedResponse?: number; // seconds to respond
  correctChoice?: string;
  hint?: string;
}

interface PracticeScenario {
  id: string;
  title: string;
  description: string;
  category: 'court_hearing' | 'mediation' | 'negotiation' | 'deposition' | 'client_meeting';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: number; // minutes
  objectives: string[];
  events: ScenarioEvent[];
  passingScore: number;
  maxScore: number;
  tips?: string[];
}

interface ScenarioProgress {
  scenarioId: string;
  currentEventIndex: number;
  score: number;
  choices: Map<string, string>;
  startedAt: Date;
  completedAt?: Date;
  attempts: number;
}

interface PracticeScenarioProps {
  scenario: PracticeScenario;
  onComplete?: (scenarioId: string, score: number) => void;
  showHints?: boolean;
  practiceMode?: boolean; // vs test mode
}

// Sample practice scenarios
export const PRACTICE_SCENARIOS: PracticeScenario[] = [
  {
    id: 'temp-orders-hearing',
    title: 'Temporary Orders Hearing',
    description: 'Practice presenting your case for temporary orders in a divorce proceeding',
    category: 'court_hearing',
    difficulty: 'intermediate',
    estimatedTime: 20,
    objectives: [
      'Present your case clearly and concisely',
      'Respond appropriately to judge questions',
      'Handle opposing counsel objections',
      'Maintain professional demeanor'
    ],
    passingScore: 70,
    maxScore: 100,
    events: [
      {
        id: 'opening',
        type: 'statement',
        speaker: 'judge',
        content: 'Good morning. We\'re here for the temporary orders hearing in the matter of Smith v. Smith. Petitioner, you may begin.',
        choices: [
          {
            id: 'formal',
            text: 'Thank you, Your Honor. I\'m here today requesting temporary orders for child support and spousal maintenance.',
            response: 'The judge nods and appears ready to listen.',
            impact: 'positive',
            explanation: 'Professional and direct opening that clearly states your purpose.',
            points: 10
          },
          {
            id: 'nervous',
            text: 'Um, hi. I need money for me and my kids.',
            response: 'The judge looks slightly concerned about your preparedness.',
            impact: 'negative',
            explanation: 'Too informal and vague. Always address the judge formally and be specific.',
            points: 2
          },
          {
            id: 'lengthy',
            text: 'Your Honor, let me tell you everything that\'s happened since we got married 15 years ago...',
            response: 'The judge interrupts you.',
            impact: 'neutral',
            explanation: 'Too broad. Focus on current needs for temporary orders.',
            points: 5
          }
        ]
      },
      {
        id: 'financial-question',
        type: 'question',
        speaker: 'judge',
        content: 'What is your current monthly income?',
        timedResponse: 30,
        choices: [
          {
            id: 'prepared',
            text: 'Your Honor, according to my financial affidavit filed with the court, my gross monthly income is $3,500.',
            response: 'The judge reviews the document and nods.',
            impact: 'positive',
            explanation: 'Excellent - you referenced your filed documents and gave a specific answer.',
            points: 10
          },
          {
            id: 'uncertain',
            text: 'I think it\'s around $3,000 or $4,000, I\'m not exactly sure.',
            response: 'The judge frowns slightly.',
            impact: 'negative',
            explanation: 'You should know exact figures. Always refer to your financial documents.',
            points: 3
          },
          {
            id: 'emotional',
            text: 'Not enough! My ex makes way more than me!',
            response: 'The judge asks you to please answer the question asked.',
            impact: 'negative',
            explanation: 'Stay focused on answering the specific question asked.',
            points: 2
          }
        ]
      },
      {
        id: 'objection',
        type: 'objection',
        speaker: 'opposing_counsel',
        content: 'Objection, Your Honor! The petitioner hasn\'t provided any documentation for these claimed expenses.',
        choices: [
          {
            id: 'proper-response',
            text: 'Your Honor, I have copies of all receipts and bills here, marked as Exhibit A through D.',
            response: 'The judge asks to see the exhibits.',
            impact: 'positive',
            explanation: 'Perfect response - you came prepared with documentation.',
            points: 15
          },
          {
            id: 'argue',
            text: 'That\'s not true! They\'re lying!',
            response: 'The judge warns you about proper courtroom behavior.',
            impact: 'negative',
            explanation: 'Never argue directly with opposing counsel. Address the judge.',
            points: 0
          },
          {
            id: 'unprepared',
            text: 'I didn\'t know I needed to bring those...',
            response: 'The judge notes the lack of documentation.',
            impact: 'negative',
            explanation: 'Always bring supporting documentation to court.',
            points: 3
          }
        ]
      },
      {
        id: 'child-custody',
        type: 'question',
        speaker: 'judge',
        content: 'What temporary parenting time schedule are you proposing?',
        choices: [
          {
            id: 'specific',
            text: 'Your Honor, I\'m proposing alternating weeks with exchanges on Fridays at 6 PM at the school.',
            response: 'The judge takes notes on your specific proposal.',
            impact: 'positive',
            explanation: 'Specific, practical proposal shows you\'ve thought this through.',
            points: 12
          },
          {
            id: 'vindictive',
            text: 'They shouldn\'t see the kids at all after what they\'ve done!',
            response: 'The judge reminds you that Arizona favors both parents having time with children.',
            impact: 'negative',
            explanation: 'Courts prefer both parents to have time unless there\'s danger to children.',
            points: 2
          },
          {
            id: 'vague',
            text: 'Whatever you think is best, Your Honor.',
            response: 'The judge asks you to make a specific proposal.',
            impact: 'neutral',
            explanation: 'You should come with a specific proposal, even if flexible.',
            points: 5
          }
        ]
      },
      {
        id: 'closing',
        type: 'statement',
        speaker: 'judge',
        content: 'Do you have anything else you\'d like to add before I make my ruling?',
        choices: [
          {
            id: 'concise',
            text: 'Just that these temporary orders are crucial for my children\'s stability during this transition. Thank you for your time, Your Honor.',
            response: 'The judge appears to appreciate your brevity and focus.',
            impact: 'positive',
            explanation: 'Perfect closing - brief, focused on children, and respectful.',
            points: 10
          },
          {
            id: 'rambling',
            text: 'Yes, let me tell you about all the other things my ex has done wrong...',
            response: 'The judge cuts you off and says that\'s enough.',
            impact: 'negative',
            explanation: 'Stay focused on the issues at hand, not past grievances.',
            points: 2
          },
          {
            id: 'nothing',
            text: 'No, Your Honor.',
            response: 'The judge proceeds to make a ruling.',
            impact: 'neutral',
            explanation: 'Acceptable if you\'ve covered everything, but a brief summary can help.',
            points: 6
          }
        ]
      }
    ],
    tips: [
      'Always address the judge as "Your Honor"',
      'Bring organized copies of all documents',
      'Answer only the question asked',
      'Remain calm and professional',
      'Never argue with opposing counsel directly'
    ]
  },
  {
    id: 'mediation-session',
    title: 'Mediation Session',
    description: 'Practice negotiating in a mediation setting',
    category: 'mediation',
    difficulty: 'beginner',
    estimatedTime: 15,
    objectives: [
      'Communicate your priorities clearly',
      'Listen to the other party\'s concerns',
      'Find mutually acceptable solutions',
      'Work collaboratively with the mediator'
    ],
    passingScore: 60,
    maxScore: 100,
    events: [
      {
        id: 'mediator-intro',
        type: 'statement',
        speaker: 'narrator',
        content: 'The mediator begins: "Today we\'re here to work together on reaching agreements about your divorce. Let\'s start with what\'s most important to each of you."',
        choices: [
          {
            id: 'collaborative',
            text: 'The children\'s well-being is my top priority. I want to ensure they have stability.',
            response: 'The mediator nods approvingly at your child-focused approach.',
            impact: 'positive',
            explanation: 'Starting with children\'s needs shows good faith.',
            points: 15
          },
          {
            id: 'aggressive',
            text: 'I want the house, the car, and full custody.',
            response: 'The mediator suggests focusing on interests rather than positions.',
            impact: 'negative',
            explanation: 'Too demanding. Mediation requires give and take.',
            points: 5
          },
          {
            id: 'emotional',
            text: 'I just want this to be over as quickly as possible.',
            response: 'The mediator acknowledges your feelings but encourages thoughtful discussion.',
            impact: 'neutral',
            explanation: 'Understandable, but try to focus on specific issues.',
            points: 8
          }
        ]
      },
      {
        id: 'spouse-proposal',
        type: 'statement',
        speaker: 'opposing_counsel',
        content: 'Your spouse proposes: "I\'d like 50/50 custody and to keep the family home, buying out your share over 3 years."',
        choices: [
          {
            id: 'consider',
            text: 'I\'m open to 50/50 custody, but I have concerns about the buyout timeline. Can we discuss other options?',
            response: 'The mediator helps explore alternative arrangements.',
            impact: 'positive',
            explanation: 'Good negotiation - accepting part while raising specific concerns.',
            points: 15
          },
          {
            id: 'reject',
            text: 'Absolutely not. That\'s completely unfair.',
            response: 'The mediator asks you to explain your concerns more specifically.',
            impact: 'negative',
            explanation: 'Flat rejection doesn\'t help. Explain specific concerns.',
            points: 5
          },
          {
            id: 'accept',
            text: 'Okay, fine, whatever they want.',
            response: 'The mediator checks if you really understand and agree.',
            impact: 'neutral',
            explanation: 'Don\'t agree just to end it. Make sure terms work for you.',
            points: 7
          }
        ]
      }
    ]
  },
  {
    id: 'client-meeting',
    title: 'Initial Client Consultation',
    description: 'Practice conducting an initial consultation with a family law client',
    category: 'client_meeting',
    difficulty: 'advanced',
    estimatedTime: 25,
    objectives: [
      'Gather essential information',
      'Explain the legal process',
      'Set realistic expectations',
      'Establish attorney-client relationship'
    ],
    passingScore: 75,
    maxScore: 100,
    events: [
      {
        id: 'client-emotional',
        type: 'statement',
        speaker: 'your_client',
        content: 'I just found out my spouse has been hiding money. I\'m so angry! What can I do?',
        choices: [
          {
            id: 'professional',
            text: 'I understand this is upsetting. Let\'s document what you know and we can request full financial disclosure through the legal process.',
            response: 'The client calms down and starts providing details.',
            impact: 'positive',
            explanation: 'Acknowledged emotions while focusing on legal solutions.',
            points: 15
          },
          {
            id: 'dismissive',
            text: 'Try not to get emotional. Let\'s just focus on the facts.',
            response: 'The client seems hurt and withdraws slightly.',
            impact: 'negative',
            explanation: 'Dismissing emotions damages rapport. Acknowledge feelings.',
            points: 5
          },
          {
            id: 'join-anger',
            text: 'That\'s terrible! We\'ll make them pay for this!',
            response: 'The client gets more agitated.',
            impact: 'negative',
            explanation: 'Don\'t inflame emotions. Stay professional and solution-focused.',
            points: 3
          }
        ]
      }
    ]
  }
];

export default function PracticeScenario({
  scenario,
  onComplete,
  showHints = true,
  practiceMode = true
}: PracticeScenarioProps) {
  const [isActive, setIsActive] = useState(false);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [progress, setProgress] = useState<ScenarioProgress>({
    scenarioId: scenario.id,
    currentEventIndex: 0,
    score: 0,
    choices: new Map(),
    startedAt: new Date(),
    attempts: 0
  });
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [scenarioComplete, setScenarioComplete] = useState(false);

  const currentEvent = scenario.events[currentEventIndex];

  // Load saved progress
  useEffect(() => {
    const saved = localStorage.getItem(`scenario_progress_${scenario.id}`);
    if (saved) {
      const parsed = JSON.parse(saved);
      setProgress({
        ...parsed,
        choices: new Map(parsed.choices),
        startedAt: new Date(parsed.startedAt)
      });
    }
  }, [scenario.id]);

  // Timer for timed responses
  useEffect(() => {
    if (currentEvent?.timedResponse && isActive && !showFeedback) {
      setTimeRemaining(currentEvent.timedResponse);
      
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev === null || prev <= 0) {
            handleTimeout();
            return null;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [currentEventIndex, isActive, showFeedback]);

  const handleTimeout = () => {
    if (!selectedChoice && currentEvent.choices) {
      // Auto-select worst option on timeout
      const worstChoice = currentEvent.choices.reduce((worst, choice) => 
        choice.points < worst.points ? choice : worst
      );
      handleChoiceSelect(worstChoice.id);
    }
  };

  const startScenario = () => {
    setIsActive(true);
    setProgress({
      ...progress,
      startedAt: new Date(),
      attempts: progress.attempts + 1
    });
  };

  const handleChoiceSelect = (choiceId: string) => {
    if (showFeedback) return;

    setSelectedChoice(choiceId);
    const choice = currentEvent.choices?.find(c => c.id === choiceId);
    
    if (choice) {
      const newScore = progress.score + choice.points;
      const newChoices = new Map(progress.choices);
      newChoices.set(currentEvent.id, choiceId);

      setProgress({
        ...progress,
        score: newScore,
        choices: newChoices
      });

      setShowFeedback(true);
      setTimeRemaining(null);

      // Save progress
      const toSave = {
        ...progress,
        score: newScore,
        choices: Array.from(newChoices),
        currentEventIndex
      };
      localStorage.setItem(`scenario_progress_${scenario.id}`, JSON.stringify(toSave));
    }
  };

  const handleNext = () => {
    if (currentEventIndex < scenario.events.length - 1) {
      setCurrentEventIndex(currentEventIndex + 1);
      setSelectedChoice(null);
      setShowFeedback(false);
      setTimeRemaining(null);
    } else {
      completeScenario();
    }
  };

  const completeScenario = () => {
    const finalProgress = {
      ...progress,
      completedAt: new Date()
    };
    setProgress(finalProgress);
    setScenarioComplete(true);
    
    if (onComplete) {
      onComplete(scenario.id, progress.score);
    }
  };

  const resetScenario = () => {
    setIsActive(false);
    setCurrentEventIndex(0);
    setProgress({
      scenarioId: scenario.id,
      currentEventIndex: 0,
      score: 0,
      choices: new Map(),
      startedAt: new Date(),
      attempts: progress.attempts
    });
    setSelectedChoice(null);
    setShowFeedback(false);
    setTimeRemaining(null);
    setScenarioComplete(false);
    localStorage.removeItem(`scenario_progress_${scenario.id}`);
  };

  const getScorePercentage = (): number => {
    return Math.round((progress.score / scenario.maxScore) * 100);
  };

  const getSpeakerIcon = (speaker: string) => {
    switch (speaker) {
      case 'judge':
        return <Gavel className="w-5 h-5" />;
      case 'opposing_counsel':
        return <User className="w-5 h-5" />;
      case 'your_client':
        return <User className="w-5 h-5" />;
      default:
        return <MessageSquare className="w-5 h-5" />;
    }
  };

  const getSpeakerName = (speaker: string) => {
    switch (speaker) {
      case 'judge':
        return 'Judge';
      case 'opposing_counsel':
        return 'Opposing Counsel';
      case 'your_client':
        return 'Your Client';
      case 'witness':
        return 'Witness';
      case 'narrator':
        return 'Scenario';
      default:
        return speaker;
    }
  };

  if (!isActive && !scenarioComplete) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">{scenario.title}</h2>
          <p className="text-gray-600 mb-6">{scenario.description}</p>

          <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
            <div>
              <h3 className="font-semibold mb-3">Learning Objectives</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                {scenario.objectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Scenario Details</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-600">Category:</span>
                  <span className="ml-2 font-medium capitalize">{scenario.category.replace('_', ' ')}</span>
                </div>
                <div>
                  <span className="text-gray-600">Difficulty:</span>
                  <span className={`ml-2 px-2 py-1 rounded text-xs ${
                    scenario.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                    scenario.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {scenario.difficulty}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Time:</span>
                  <span className="ml-2 font-medium">{scenario.estimatedTime} minutes</span>
                </div>
                <div>
                  <span className="text-gray-600">Passing Score:</span>
                  <span className="ml-2 font-medium">{scenario.passingScore}%</span>
                </div>
              </div>
            </div>
          </div>

          {scenario.tips && practiceMode && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg text-left">
              <h3 className="font-semibold mb-2 text-blue-900">Tips for Success</h3>
              <ul className="space-y-1 text-sm text-blue-800">
                {scenario.tips.map((tip, idx) => (
                  <li key={idx}>• {tip}</li>
                ))}
              </ul>
            </div>
          )}

          <Button size="lg" onClick={startScenario}>
            <Play className="w-5 h-5 mr-2" />
            Start {practiceMode ? 'Practice' : 'Test'}
          </Button>

          {progress.attempts > 0 && (
            <p className="text-sm text-gray-500 mt-4">
              Previous attempts: {progress.attempts}
            </p>
          )}
        </CardContent>
      </Card>
    );
  }

  if (scenarioComplete) {
    const passed = getScorePercentage() >= scenario.passingScore;

    return (
      <Card>
        <CardContent className="p-8 text-center">
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
            passed ? 'bg-green-100' : 'bg-yellow-100'
          }`}>
            {passed ? (
              <Award className="w-8 h-8 text-green-600" />
            ) : (
              <TrendingUp className="w-8 h-8 text-yellow-600" />
            )}
          </div>

          <h2 className="text-2xl font-bold mb-2">
            {passed ? 'Excellent Work!' : 'Good Effort!'}
          </h2>

          <div className="text-3xl font-bold mb-4">
            Score: {progress.score} / {scenario.maxScore}
            <span className="text-lg ml-2">({getScorePercentage()}%)</span>
          </div>

          <p className="text-gray-600 mb-6">
            {passed 
              ? 'You successfully completed this scenario and demonstrated strong understanding.'
              : `You need ${scenario.passingScore}% to pass. Try again to improve your score!`}
          </p>

          {/* Performance Breakdown */}
          <div className="mb-8 p-6 bg-gray-50 rounded-lg text-left">
            <h3 className="font-semibold mb-4">Performance Review</h3>
            <div className="space-y-3">
              {scenario.events.map((event, idx) => {
                const choice = event.choices?.find(c => c.id === progress.choices.get(event.id));
                if (!choice) return null;

                return (
                  <div key={event.id} className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      choice.impact === 'positive' ? 'bg-green-100 text-green-700' :
                      choice.impact === 'negative' ? 'bg-red-100 text-red-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-1">
                        Scenario {idx + 1}: {choice.points}/{Math.max(...(event.choices?.map(c => c.points) || [0]))} points
                      </p>
                      <p className="text-sm text-gray-600">{choice.explanation}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Button variant="outline" onClick={resetScenario}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            <Button onClick={() => window.location.reload()}>
              View Other Scenarios
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">
                Event {currentEventIndex + 1} of {scenario.events.length}
              </span>
              <span className="text-sm text-gray-600">
                Score: {progress.score} / {scenario.maxScore}
              </span>
            </div>
            {timeRemaining !== null && (
              <div className="flex items-center gap-2 text-red-600">
                <Clock className="w-4 h-4" />
                <span className="font-medium">{timeRemaining}s</span>
              </div>
            )}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentEventIndex + 1) / scenario.events.length) * 100}%` }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Current Event */}
      <Card>
        <CardContent className="p-6">
          {/* Speaker */}
          <div className="flex items-center gap-3 mb-4 text-gray-600">
            {getSpeakerIcon(currentEvent.speaker)}
            <span className="font-medium">{getSpeakerName(currentEvent.speaker)}</span>
            {currentEvent.type === 'objection' && (
              <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">OBJECTION</span>
            )}
          </div>

          {/* Content */}
          <div className="text-lg mb-6 p-4 bg-gray-50 rounded-lg">
            {currentEvent.content}
          </div>

          {/* Hint */}
          {showHints && practiceMode && currentEvent.hint && !showFeedback && (
            <div className="mb-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
              <strong>Hint:</strong> {currentEvent.hint}
            </div>
          )}

          {/* Choices */}
          {currentEvent.choices && (
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-600">Choose your response:</p>
              {currentEvent.choices.map(choice => {
                const isSelected = selectedChoice === choice.id;
                const showResult = showFeedback && isSelected;

                return (
                  <div key={choice.id}>
                    <button
                      onClick={() => handleChoiceSelect(choice.id)}
                      disabled={showFeedback}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${
                        showResult 
                          ? choice.impact === 'positive' ? 'border-green-500 bg-green-50' :
                            choice.impact === 'negative' ? 'border-red-500 bg-red-50' :
                            'border-yellow-500 bg-yellow-50'
                          : isSelected ? 'border-blue-500 bg-blue-50' :
                            'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      } ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-start justify-between">
                        <p className="flex-1">{choice.text}</p>
                        {showResult && (
                          <div className="ml-4">
                            {choice.impact === 'positive' ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : choice.impact === 'negative' ? (
                              <XCircle className="w-5 h-5 text-red-600" />
                            ) : (
                              <AlertCircle className="w-5 h-5 text-yellow-600" />
                            )}
                          </div>
                        )}
                      </div>
                    </button>

                    {showResult && (
                      <div className={`mt-2 p-3 rounded-lg text-sm ${
                        choice.impact === 'positive' ? 'bg-green-100 text-green-800' :
                        choice.impact === 'negative' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        <p className="font-medium mb-1">{choice.response}</p>
                        <p>{choice.explanation}</p>
                        <p className="mt-1 font-medium">Points earned: {choice.points}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Navigation */}
          {(showFeedback || !currentEvent.choices) && (
            <div className="mt-6 flex justify-between">
              <Button variant="outline" onClick={resetScenario}>
                <RotateCcw className="w-4 h-4 mr-2" />
                Restart
              </Button>
              <Button onClick={handleNext}>
                {currentEventIndex === scenario.events.length - 1 ? 'Complete Scenario' : 'Next'}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}