/* eslint-disable react/no-unescaped-entities */
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, GraduationCap, PlayCircle, BookOpen, Target, Award, Clock, TrendingUp, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import VideoTutorialPlayer, { VIDEO_TUTORIALS } from '@/components/learning/VideoTutorialPlayer';
import InteractiveGuide, { INTERACTIVE_GUIDES } from '@/components/learning/InteractiveGuide';
import PracticeScenario, { PRACTICE_SCENARIOS } from '@/components/learning/PracticeScenario';

export default function LearningResourcesPage() {
  const [activeTab, setActiveTab] = useState<'videos' | 'guides' | 'scenarios'>('videos');
  const [selectedVideo, setSelectedVideo] = useState(VIDEO_TUTORIALS[0]);
  const [selectedGuide, setSelectedGuide] = useState(INTERACTIVE_GUIDES[0]);
  const [selectedScenario, setSelectedScenario] = useState(PRACTICE_SCENARIOS[0]);
  const [showPlayer, setShowPlayer] = useState(false);

  const stats = {
    totalVideos: VIDEO_TUTORIALS.length,
    totalGuides: INTERACTIVE_GUIDES.length,
    totalScenarios: PRACTICE_SCENARIOS.length,
    totalLearningTime: VIDEO_TUTORIALS.reduce((acc, v) => acc + v.duration, 0) / 60 + 
                       INTERACTIVE_GUIDES.reduce((acc, g) => acc + g.estimatedTime, 0) +
                       PRACTICE_SCENARIOS.reduce((acc, s) => acc + s.estimatedTime, 0)
  };

  const handleVideoComplete = (videoId: string) => {
    console.log(`Video ${videoId} completed`);
    // In a real app, would save to user profile
  };

  const handleGuideComplete = (guideId: string, responses: Map<string, string | number | boolean>) => {
    console.log(`Guide ${guideId} completed with responses:`, responses);
    // In a real app, would save progress
  };

  const handleScenarioComplete = (scenarioId: string, score: number) => {
    console.log(`Scenario ${scenarioId} completed with score: ${score}`);
    // In a real app, would save score to leaderboard
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-10 h-10" />
            <div>
              <h1 className="text-3xl font-bold">Learning Resources</h1>
              <p className="text-purple-100 text-lg">Interactive tutorials, guides, and practice scenarios</p>
            </div>
          </div>
          
          <div className="mt-6 grid md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <PlayCircle className="w-8 h-8 mb-2" />
              <div className="text-2xl font-bold">{stats.totalVideos}</div>
              <div className="text-sm text-purple-100">Video Tutorials</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <BookOpen className="w-8 h-8 mb-2" />
              <div className="text-2xl font-bold">{stats.totalGuides}</div>
              <div className="text-sm text-purple-100">Interactive Guides</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <Target className="w-8 h-8 mb-2" />
              <div className="text-2xl font-bold">{stats.totalScenarios}</div>
              <div className="text-sm text-purple-100">Practice Scenarios</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <Clock className="w-8 h-8 mb-2" />
              <div className="text-2xl font-bold">{Math.round(stats.totalLearningTime)}</div>
              <div className="text-sm text-purple-100">Total Minutes</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Learning Resources</span>
          </nav>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          {/* Tab Navigation */}
          <div className="flex gap-2 mb-8 border-b">
            <button
              onClick={() => {
                setActiveTab('videos');
                setShowPlayer(false);
              }}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                activeTab === 'videos' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <PlayCircle className="w-5 h-5 inline mr-2" />
              Video Tutorials
            </button>
            <button
              onClick={() => {
                setActiveTab('guides');
                setShowPlayer(false);
              }}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                activeTab === 'guides' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <BookOpen className="w-5 h-5 inline mr-2" />
              Interactive Guides
            </button>
            <button
              onClick={() => {
                setActiveTab('scenarios');
                setShowPlayer(false);
              }}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                activeTab === 'scenarios' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Target className="w-5 h-5 inline mr-2" />
              Practice Scenarios
            </button>
          </div>

          {/* Video Tutorials Tab */}
          {activeTab === 'videos' && !showPlayer && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Video Tutorials</h2>
                <p className="text-gray-600">
                  Watch step-by-step video guides covering essential family law procedures and forms.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {VIDEO_TUTORIALS.map(video => (
                  <Card key={video.id} className="hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => {
                          setSelectedVideo(video);
                          setShowPlayer(true);
                        }}>
                    <CardContent className="p-6">
                      <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                        <PlayCircle className="w-12 h-12 text-gray-400" />
                      </div>
                      <h3 className="font-semibold mb-2">{video.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{video.description}</p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className={`px-2 py-1 rounded text-xs ${
                          video.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                          video.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {video.difficulty}
                        </span>
                        <span className="text-gray-500">
                          {Math.floor(video.duration / 60)} min
                        </span>
                      </div>

                      <Button className="w-full mt-4" size="sm">
                        Watch Now
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Video Player */}
          {activeTab === 'videos' && showPlayer && (
            <div>
              <Button 
                variant="outline" 
                size="sm" 
                className="mb-4"
                onClick={() => setShowPlayer(false)}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Videos
              </Button>
              <VideoTutorialPlayer
                tutorial={selectedVideo}
                onComplete={handleVideoComplete}
                showTranscript={true}
                autoplay={false}
              />
            </div>
          )}

          {/* Interactive Guides Tab */}
          {activeTab === 'guides' && !showPlayer && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Interactive Guides</h2>
                <p className="text-gray-600">
                  Follow step-by-step interactive guides that adapt to your specific situation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {INTERACTIVE_GUIDES.map(guide => (
                  <Card key={guide.id} className="hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => {
                          setSelectedGuide(guide);
                          setShowPlayer(true);
                        }}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{guide.title}</h3>
                          <p className="text-sm text-gray-600">{guide.description}</p>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs ${
                          guide.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                          guide.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {guide.difficulty}
                        </span>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{guide.estimatedTime} minutes</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <BookOpen className="w-4 h-4" />
                          <span>{guide.steps.length} steps</span>
                        </div>
                      </div>

                      {guide.outcomes && (
                        <div className="mb-4">
                          <p className="text-sm font-medium mb-2">You'll learn:</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {guide.outcomes.slice(0, 2).map((outcome, idx) => (
                              <li key={idx} className="flex items-start gap-1">
                                <span className="text-green-500">✓</span>
                                <span className="text-xs">{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <Button className="w-full" size="sm">
                        Start Guide
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Guide Player */}
          {activeTab === 'guides' && showPlayer && (
            <div>
              <Button 
                variant="outline" 
                size="sm" 
                className="mb-4"
                onClick={() => setShowPlayer(false)}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Guides
              </Button>
              <InteractiveGuide
                guide={selectedGuide}
                onComplete={handleGuideComplete}
                showProgress={true}
                allowNavigation={true}
              />
            </div>
          )}

          {/* Practice Scenarios Tab */}
          {activeTab === 'scenarios' && !showPlayer && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Practice Scenarios</h2>
                <p className="text-gray-600">
                  Practice real courtroom and legal situations in a safe environment.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {PRACTICE_SCENARIOS.map(scenario => (
                  <Card key={scenario.id} className="hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => {
                          setSelectedScenario(scenario);
                          setShowPlayer(true);
                        }}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{scenario.title}</h3>
                          <p className="text-sm text-gray-600">{scenario.description}</p>
                        </div>
                        <Target className="w-8 h-8 text-blue-600" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-gray-600">Category:</span>
                          <p className="font-medium capitalize">{scenario.category.replace('_', ' ')}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Difficulty:</span>
                          <p className={`inline-block px-2 py-1 rounded text-xs ${
                            scenario.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                            scenario.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {scenario.difficulty}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {scenario.estimatedTime} min
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          Pass: {scenario.passingScore}%
                        </span>
                      </div>

                      <Button className="w-full" size="sm">
                        Start Practice
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Scenario Player */}
          {activeTab === 'scenarios' && showPlayer && (
            <div>
              <Button 
                variant="outline" 
                size="sm" 
                className="mb-4"
                onClick={() => setShowPlayer(false)}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Scenarios
              </Button>
              <PracticeScenario
                scenario={selectedScenario}
                onComplete={handleScenarioComplete}
                showHints={true}
                practiceMode={true}
              />
            </div>
          )}

          {/* Learning Path Recommendations */}
          {!showPlayer && (
            <Card className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Award className="w-10 h-10 text-purple-600" />
                  <div>
                    <h2 className="text-2xl font-bold">Recommended Learning Path</h2>
                    <p className="text-gray-600">Follow this sequence for the best learning experience</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                        1
                      </div>
                      <h3 className="font-semibold">Start with Videos</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Watch video tutorials to get visual understanding of procedures and forms.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                        2
                      </div>
                      <h3 className="font-semibold">Interactive Guides</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Work through guides that adapt to your specific situation and needs.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                        3
                      </div>
                      <h3 className="font-semibold">Practice Scenarios</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Test your knowledge with realistic courtroom and legal scenarios.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  );
}