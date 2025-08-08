"use client";

import { XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function QuickExitButton({ className }: { className?: string }) {
  const quickExit = () => {
    try {
      window.location.replace('https://www.weather.com');
    } catch {
      window.location.href = 'https://www.weather.com';
    }
  };

  return (
    <Button
      onClick={quickExit}
      className={className ?? 'bg-white/10 hover:bg-white/20 text-white border border-white/30'}
    >
      <XCircle className="w-4 h-4 mr-2" />
      Quick Exit
    </Button>
  );
}

