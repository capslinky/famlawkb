/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { OfflinePageClient } from './offline-client';

export const metadata = {
  title: 'Offline - Arizona Family Law',
  description: 'You are currently offline. Some content is available offline.',
};

export default function OfflinePage() {
  return <OfflinePageClient />;
}