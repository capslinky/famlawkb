'use client';

import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Maximize, Clock, BookOpen, CheckCircle, Lock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface VideoChapter {
  id: string;
  title: string;
  startTime: number;
  endTime: number;
  description?: string;
}

interface VideoTranscript {
  time: number;
  text: string;
  speaker?: string;
}

interface VideoTutorial {
  id: string;
  title: string;
  description: string;
  duration: number;
  videoUrl: string;
  thumbnailUrl?: string;
  chapters: VideoChapter[];
  transcript?: VideoTranscript[];
  relatedTopics?: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  completionCertificate?: boolean;
}

interface VideoProgress {
  videoId: string;
  watchedTime: number;
  completed: boolean;
  lastWatched: Date;
  chaptersCompleted: string[];
}

interface VideoTutorialPlayerProps {
  tutorial: VideoTutorial;
  onComplete?: (videoId: string) => void;
  showTranscript?: boolean;
  autoplay?: boolean;
}

// Sample video tutorials database
export const VIDEO_TUTORIALS: VideoTutorial[] = [
  {
    id: 'filing-petition',
    title: 'How to File a Divorce Petition',
    description: 'Step-by-step guide to filing your initial divorce petition in Arizona',
    duration: 900, // 15 minutes
    videoUrl: '/videos/filing-petition.mp4',
    thumbnailUrl: '/thumbnails/filing-petition.jpg',
    category: 'Divorce',
    difficulty: 'beginner',
    completionCertificate: true,
    chapters: [
      {
        id: 'intro',
        title: 'Introduction',
        startTime: 0,
        endTime: 60,
        description: 'Overview of the divorce petition process'
      },
      {
        id: 'forms',
        title: 'Required Forms',
        startTime: 60,
        endTime: 300,
        description: 'Understanding which forms you need'
      },
      {
        id: 'filling',
        title: 'Filling Out the Petition',
        startTime: 300,
        endTime: 600,
        description: 'Line-by-line instructions for completing the petition'
      },
      {
        id: 'filing',
        title: 'Filing with the Court',
        startTime: 600,
        endTime: 780,
        description: 'How to file your documents with the clerk'
      },
      {
        id: 'next-steps',
        title: 'Next Steps',
        startTime: 780,
        endTime: 900,
        description: 'What happens after filing'
      }
    ],
    relatedTopics: ['Service of Process', 'Response Deadlines', 'Temporary Orders']
  },
  {
    id: 'court-hearing-prep',
    title: 'Preparing for Your Court Hearing',
    description: 'Essential preparation tips for your family court appearance',
    duration: 1200, // 20 minutes
    videoUrl: '/videos/court-hearing-prep.mp4',
    category: 'Court Procedures',
    difficulty: 'intermediate',
    chapters: [
      {
        id: 'before',
        title: 'Before the Hearing',
        startTime: 0,
        endTime: 400,
        description: 'Documents and preparation needed'
      },
      {
        id: 'dress-code',
        title: 'Court Etiquette & Dress Code',
        startTime: 400,
        endTime: 600,
        description: 'How to present yourself professionally'
      },
      {
        id: 'testimony',
        title: 'Giving Testimony',
        startTime: 600,
        endTime: 1000,
        description: 'How to answer questions effectively'
      },
      {
        id: 'evidence',
        title: 'Presenting Evidence',
        startTime: 1000,
        endTime: 1200,
        description: 'How to introduce documents and exhibits'
      }
    ]
  },
  {
    id: 'parenting-plan',
    title: 'Creating a Parenting Plan',
    description: 'Comprehensive guide to developing a parenting plan that works',
    duration: 1800, // 30 minutes
    videoUrl: '/videos/parenting-plan.mp4',
    category: 'Child Custody',
    difficulty: 'intermediate',
    chapters: [
      {
        id: 'basics',
        title: 'Parenting Plan Basics',
        startTime: 0,
        endTime: 300
      },
      {
        id: 'custody-types',
        title: 'Types of Custody',
        startTime: 300,
        endTime: 600
      },
      {
        id: 'schedules',
        title: 'Creating Schedules',
        startTime: 600,
        endTime: 1200
      },
      {
        id: 'holidays',
        title: 'Holidays & Special Occasions',
        startTime: 1200,
        endTime: 1500
      },
      {
        id: 'modifications',
        title: 'Future Modifications',
        startTime: 1500,
        endTime: 1800
      }
    ]
  },
  {
    id: 'financial-disclosure',
    title: 'Financial Disclosure Requirements',
    description: 'Understanding and completing financial disclosure forms',
    duration: 1500, // 25 minutes
    videoUrl: '/videos/financial-disclosure.mp4',
    category: 'Financial',
    difficulty: 'advanced',
    chapters: [
      {
        id: 'requirements',
        title: 'Disclosure Requirements',
        startTime: 0,
        endTime: 300
      },
      {
        id: 'affidavit',
        title: 'Financial Affidavit',
        startTime: 300,
        endTime: 900
      },
      {
        id: 'documents',
        title: 'Supporting Documents',
        startTime: 900,
        endTime: 1200
      },
      {
        id: 'deadlines',
        title: 'Deadlines & Penalties',
        startTime: 1200,
        endTime: 1500
      }
    ]
  },
  {
    id: 'mediation-prep',
    title: 'Mediation Preparation',
    description: 'How to prepare for and succeed in mediation',
    duration: 1080, // 18 minutes
    videoUrl: '/videos/mediation-prep.mp4',
    category: 'Alternative Dispute Resolution',
    difficulty: 'beginner',
    chapters: [
      {
        id: 'what-is-mediation',
        title: 'What is Mediation?',
        startTime: 0,
        endTime: 180
      },
      {
        id: 'preparation',
        title: 'Preparing Your Case',
        startTime: 180,
        endTime: 600
      },
      {
        id: 'negotiation',
        title: 'Negotiation Strategies',
        startTime: 600,
        endTime: 900
      },
      {
        id: 'agreement',
        title: 'Reaching Agreement',
        startTime: 900,
        endTime: 1080
      }
    ]
  }
];

export default function VideoTutorialPlayer({ 
  tutorial, 
  onComplete, 
  showTranscript = false,
  autoplay = false 
}: VideoTutorialPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentChapter, setCurrentChapter] = useState<VideoChapter | null>(null);
  const [progress, setProgress] = useState<VideoProgress | null>(null);
  const [showChapterList, setShowChapterList] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [completedChapters, setCompletedChapters] = useState<Set<string>>(new Set());

  // Load saved progress
  useEffect(() => {
    const savedProgress = localStorage.getItem(`video_progress_${tutorial.id}`);
    if (savedProgress) {
      const parsed = JSON.parse(savedProgress);
      setProgress({
        ...parsed,
        lastWatched: new Date(parsed.lastWatched)
      });
      setCurrentTime(parsed.watchedTime);
      setCompletedChapters(new Set(parsed.chaptersCompleted));
    }
  }, [tutorial.id]);

  // Update current chapter based on time
  useEffect(() => {
    const chapter = tutorial.chapters.find(ch => 
      currentTime >= ch.startTime && currentTime < ch.endTime
    );
    if (chapter && chapter !== currentChapter) {
      setCurrentChapter(chapter);
    }
  }, [currentTime, tutorial.chapters, currentChapter]);

  // Save progress periodically
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying && currentTime > 0) {
        saveProgress();
      }
    }, 10000); // Save every 10 seconds

    return () => clearInterval(interval);
  }, [isPlaying, currentTime]);

  const saveProgress = () => {
    const progressData: VideoProgress = {
      videoId: tutorial.id,
      watchedTime: currentTime,
      completed: currentTime >= tutorial.duration - 5, // Within 5 seconds of end
      lastWatched: new Date(),
      chaptersCompleted: Array.from(completedChapters)
    };

    localStorage.setItem(`video_progress_${tutorial.id}`, JSON.stringify(progressData));

    // Check for completion
    if (progressData.completed && onComplete) {
      onComplete(tutorial.id);
    }
  };

  const handleChapterComplete = (chapterId: string) => {
    setCompletedChapters(prev => new Set([...prev, chapterId]));
  };

  const jumpToChapter = (chapter: VideoChapter) => {
    setCurrentTime(chapter.startTime);
    setCurrentChapter(chapter);
    if (!isPlaying) setIsPlaying(true);
  };

  const skipForward = () => {
    setCurrentTime(prev => Math.min(prev + 10, tutorial.duration));
  };

  const skipBackward = () => {
    setCurrentTime(prev => Math.max(prev - 10, 0));
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    // In a real implementation, would use Fullscreen API
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgressPercentage = (): number => {
    return (currentTime / tutorial.duration) * 100;
  };

  const getChapterProgress = (): number => {
    return (completedChapters.size / tutorial.chapters.length) * 100;
  };

  return (
    <div className="space-y-6">
      {/* Video Player */}
      <Card className="overflow-hidden">
        <div className="relative bg-black aspect-video">
          {/* Video Element (Placeholder) */}
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center">
              <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Video Player Placeholder</p>
              <p className="text-sm opacity-75">{tutorial.title}</p>
            </div>
          </div>

          {/* Video Controls Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="relative h-1 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="absolute left-0 top-0 h-full bg-blue-500 transition-all duration-200"
                  style={{ width: `${getProgressPercentage()}%` }}
                />
                {/* Chapter Markers */}
                {tutorial.chapters.map(chapter => (
                  <div
                    key={chapter.id}
                    className="absolute top-0 w-1 h-full bg-white/40"
                    style={{ left: `${(chapter.startTime / tutorial.duration) * 100}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlayPause}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>

                <button
                  onClick={skipBackward}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <SkipBack className="w-5 h-5" />
                </button>

                <button
                  onClick={skipForward}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <SkipForward className="w-5 h-5" />
                </button>

                <button
                  onClick={toggleMute}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>

                <span className="text-white text-sm">
                  {formatTime(currentTime)} / {formatTime(tutorial.duration)}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <select
                  value={playbackSpeed}
                  onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
                  className="bg-transparent text-white text-sm border border-white/20 rounded px-2 py-1"
                >
                  <option value="0.5">0.5x</option>
                  <option value="0.75">0.75x</option>
                  <option value="1">1x</option>
                  <option value="1.25">1.25x</option>
                  <option value="1.5">1.5x</option>
                  <option value="2">2x</option>
                </select>

                <button
                  onClick={toggleFullscreen}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <Maximize className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Chapter List */}
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  Chapters
                </h3>
                <span className="text-sm text-gray-600">
                  {completedChapters.size} of {tutorial.chapters.length} completed
                </span>
              </div>

              <div className="space-y-3">
                {tutorial.chapters.map((chapter, index) => {
                  const isCompleted = completedChapters.has(chapter.id);
                  const isCurrent = currentChapter?.id === chapter.id;

                  return (
                    <div
                      key={chapter.id}
                      onClick={() => jumpToChapter(chapter)}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        isCurrent ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                            isCompleted ? 'bg-green-100 text-green-700' : 
                            isCurrent ? 'bg-blue-100 text-blue-700' : 
                            'bg-gray-100 text-gray-600'
                          }`}>
                            {isCompleted ? <CheckCircle className="w-4 h-4" /> : index + 1}
                          </div>
                          <div>
                            <h4 className="font-medium">{chapter.title}</h4>
                            {chapter.description && (
                              <p className="text-sm text-gray-600 mt-1">{chapter.description}</p>
                            )}
                            <p className="text-xs text-gray-500 mt-2">
                              {formatTime(chapter.startTime)} - {formatTime(chapter.endTime)}
                            </p>
                          </div>
                        </div>
                        {isCurrent && (
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                            Now Playing
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video Info & Progress */}
        <div className="space-y-6">
          {/* Progress Card */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Your Progress</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Video Progress</span>
                    <span>{Math.round(getProgressPercentage())}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${getProgressPercentage()}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Chapters Complete</span>
                    <span>{Math.round(getChapterProgress())}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full transition-all"
                      style={{ width: `${getChapterProgress()}%` }}
                    />
                  </div>
                </div>

                {progress?.lastWatched && (
                  <p className="text-xs text-gray-500">
                    Last watched: {progress.lastWatched.toLocaleDateString()}
                  </p>
                )}
              </div>

              {tutorial.completionCertificate && getChapterProgress() === 100 && (
                <Button className="w-full mt-4" size="sm">
                  Download Certificate
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Video Details */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">About This Video</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-600">Category:</span>
                  <span className="ml-2 font-medium">{tutorial.category}</span>
                </div>
                <div>
                  <span className="text-gray-600">Difficulty:</span>
                  <span className={`ml-2 px-2 py-1 rounded text-xs ${
                    tutorial.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                    tutorial.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {tutorial.difficulty}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Duration:</span>
                  <span className="ml-2 font-medium">{Math.floor(tutorial.duration / 60)} minutes</span>
                </div>
              </div>

              {tutorial.relatedTopics && tutorial.relatedTopics.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-2">Related Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    {tutorial.relatedTopics.map(topic => (
                      <span
                        key={topic}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}