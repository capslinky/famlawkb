'use client';

import { useState, useEffect } from 'react';

export type UserType = 'first-time' | 'returning' | 'emergency' | 'in-progress';

interface UserData {
  type: UserType;
  lastVisit?: Date;
  visitCount: number;
  savedProgress?: {
    assessment?: string;
    bookmarks?: string[];
  };
  hasViewedEmergency: boolean;
}

export function useUserType() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for user data
    const storedData = localStorage.getItem('azUserData');
    const assessmentProgress = localStorage.getItem('assessmentProgress');
    const currentTime = new Date();

    if (storedData) {
      const parsed: UserData = JSON.parse(storedData);
      
      // Update visit count and last visit
      parsed.visitCount += 1;
      parsed.lastVisit = currentTime;

      // Determine user type based on their behavior
      if (parsed.hasViewedEmergency) {
        parsed.type = 'emergency';
      } else if (assessmentProgress) {
        parsed.type = 'in-progress';
      } else if (parsed.visitCount > 1) {
        parsed.type = 'returning';
      }

      setUserData(parsed);
      localStorage.setItem('azUserData', JSON.stringify(parsed));
    } else {
      // First time visitor
      const newUserData: UserData = {
        type: 'first-time',
        lastVisit: currentTime,
        visitCount: 1,
        hasViewedEmergency: false
      };
      
      setUserData(newUserData);
      localStorage.setItem('azUserData', JSON.stringify(newUserData));
    }

    setIsLoading(false);
  }, []);

  const updateUserType = (type: UserType) => {
    if (!userData) return;

    const updated = { ...userData, type };
    
    // Track if they viewed emergency content
    if (type === 'emergency') {
      updated.hasViewedEmergency = true;
    }

    setUserData(updated);
    localStorage.setItem('azUserData', JSON.stringify(updated));
  };

  const saveBookmark = (path: string) => {
    if (!userData) return;

    const bookmarks = userData.savedProgress?.bookmarks || [];
    if (!bookmarks.includes(path)) {
      bookmarks.push(path);
    }

    const updated = {
      ...userData,
      savedProgress: {
        ...userData.savedProgress,
        bookmarks
      }
    };

    setUserData(updated);
    localStorage.setItem('azUserData', JSON.stringify(updated));
  };

  const removeBookmark = (path: string) => {
    if (!userData) return;

    const bookmarks = userData.savedProgress?.bookmarks || [];
    const filtered = bookmarks.filter(b => b !== path);

    const updated = {
      ...userData,
      savedProgress: {
        ...userData.savedProgress,
        bookmarks: filtered
      }
    };

    setUserData(updated);
    localStorage.setItem('azUserData', JSON.stringify(updated));
  };

  const isBookmarked = (path: string): boolean => {
    return userData?.savedProgress?.bookmarks?.includes(path) || false;
  };

  const clearUserData = () => {
    localStorage.removeItem('azUserData');
    localStorage.removeItem('assessmentProgress');
    setUserData({
      type: 'first-time',
      lastVisit: new Date(),
      visitCount: 0,
      hasViewedEmergency: false
    });
  };

  return {
    userData,
    userType: userData?.type || 'first-time',
    isLoading,
    updateUserType,
    saveBookmark,
    removeBookmark,
    isBookmarked,
    clearUserData
  };
}