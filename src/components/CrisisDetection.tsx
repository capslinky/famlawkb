'use client';

import { useEffect, useState } from 'react';
import { AlertTriangle, Phone, Shield, Heart } from 'lucide-react';
import { quickExit } from '@/components/ui/quick-exit';

// Crisis keywords that trigger immediate help
const CRISIS_KEYWORDS = [
  // Immediate danger
  'kill me', 'kill myself', 'suicide', 'suicidal', 'end my life', 'want to die',
  'hurt myself', 'self harm', 'cutting', 'overdose',
  
  // Domestic violence
  'hitting me', 'beats me', 'abuses me', 'violent', 'afraid of',
  'threatens me', 'going to hurt me', 'scared for my life',
  'choking', 'strangling', 'weapon', 'gun', 'knife',
  
  // Child abuse
  'hurting my child', 'abuse my kids', 'molesting', 'sexual abuse',
  'child in danger', 'kids not safe',
  
  // Immediate threats
  'going to kill', 'threatened to kill', 'said he would kill',
  'following me', 'stalking', 'watching me', 'knows where I am',
  
  // Urgent situations
  'emergency', 'urgent help', 'need help now', 'call police',
  'not safe', 'in danger', 'trapped', 'locked in', 'cant leave'
];

interface CrisisResource {
  name: string;
  phone: string;
  description: string;
  available: string;
}

const CRISIS_RESOURCES: CrisisResource[] = [
  {
    name: 'Emergency Services',
    phone: '911',
    description: 'Immediate police, fire, or medical help',
    available: '24/7'
  },
  {
    name: 'National Domestic Violence Hotline',
    phone: '1-800-799-7233',
    description: 'Confidential support for domestic violence',
    available: '24/7'
  },
  {
    name: '988 Suicide & Crisis Lifeline',
    phone: '988',
    description: 'Mental health crisis support',
    available: '24/7'
  },
  {
    name: 'Crisis Text Line',
    phone: 'Text HOME to 741741',
    description: 'Text-based crisis support',
    available: '24/7'
  }
];

export default function CrisisDetection() {
  const [showCrisisModal, setShowCrisisModal] = useState(false);
  const [detectedKeywords, setDetectedKeywords] = useState<string[]>([]);

  useEffect(() => {
    let debounceTimer: NodeJS.Timeout;

    const detectCrisis = () => {
      // Check all text inputs, textareas, and contenteditable elements
      const inputs = document.querySelectorAll('input[type="text"], textarea, [contenteditable="true"]');
      const allText: string[] = [];

      inputs.forEach((element) => {
        if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
          allText.push(element.value.toLowerCase());
        } else if (element instanceof HTMLElement) {
          allText.push(element.textContent?.toLowerCase() || '');
        }
      });

      const combinedText = allText.join(' ');
      const detected: string[] = [];

      CRISIS_KEYWORDS.forEach(keyword => {
        if (combinedText.includes(keyword.toLowerCase())) {
          detected.push(keyword);
        }
      });

      if (detected.length > 0) {
        setDetectedKeywords(detected);
        setShowCrisisModal(true);
      }
    };

    const handleInput = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(detectCrisis, 500); // Debounce for 500ms
    };

    // Listen for input events
    document.addEventListener('input', handleInput);
    document.addEventListener('paste', handleInput);

    return () => {
      document.removeEventListener('input', handleInput);
      document.removeEventListener('paste', handleInput);
      clearTimeout(debounceTimer);
    };
  }, []);

  const handleSafeExit = () => {
    quickExit();
  };

  const handleStay = () => {
    setShowCrisisModal(false);
    setDetectedKeywords([]);
  };

  if (!showCrisisModal) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fadeIn">
      <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-red-600 text-white p-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-8 h-8" />
            <div>
              <h2 className="text-2xl font-bold">Are You Safe?</h2>
              <p className="text-red-100">We noticed you may need immediate help</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Quick Actions */}
          <div className="flex gap-3">
            <button
              onClick={handleSafeExit}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Leave Site Immediately
            </button>
            <button
              onClick={handleStay}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors"
            >
              I'm Safe, Continue
            </button>
          </div>

          {/* Crisis Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-red-600" />
              Get Help Now
            </h3>
            <div className="space-y-3">
              {CRISIS_RESOURCES.map((resource) => (
                <div key={resource.phone} className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{resource.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{resource.available}</p>
                    </div>
                    <a
                      href={`tel:${resource.phone.replace(/[^0-9]/g, '')}`}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                    >
                      {resource.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Tips */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Quick Safety Tips
            </h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Use a safe computer or phone</li>
              <li>• Clear your browser history after visiting</li>
              <li>• Create a safety plan before leaving</li>
              <li>• Trust your instincts</li>
            </ul>
          </div>

          {/* Additional Support */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h3 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              You're Not Alone
            </h3>
            <p className="text-sm text-purple-800">
              Many people have been where you are now. Help is available, and you deserve to be safe. 
              These resources are confidential and here to support you.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 rounded-b-lg">
          <p className="text-xs text-gray-600 text-center">
            This popup appeared because we detected keywords suggesting you may need immediate help. 
            Your safety is our priority.
          </p>
        </div>
      </div>
    </div>
  );
}