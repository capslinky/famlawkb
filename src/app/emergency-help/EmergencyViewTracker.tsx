"use client";

import { useEffect } from 'react';
import { useUserType } from '@/hooks/useUserType';

export function EmergencyViewTracker() {
  const { updateUserType } = useUserType();
  useEffect(() => {
    updateUserType('emergency');
  }, [updateUserType]);
  return null;
}

