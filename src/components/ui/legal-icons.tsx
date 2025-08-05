'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Base icon component with consistent styling
interface LegalIconProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'gray';
  animated?: boolean;
  strokeWidth?: number;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6', 
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};

const colorClasses = {
  primary: 'text-blue-600',
  secondary: 'text-purple-600',
  success: 'text-green-600',
  warning: 'text-yellow-600',
  danger: 'text-red-600',
  gray: 'text-gray-600'
};

function BaseIcon({ 
  children, 
  className = '', 
  size = 'md', 
  color = 'primary',
  animated = false,
  strokeWidth = 2,
  ...props 
}: LegalIconProps & { children: React.ReactNode }) {
  const Component = animated ? motion.svg : 'svg';
  const animationProps = animated ? {
    initial: { scale: 0.8, opacity: 0.8 },
    animate: { scale: 1, opacity: 1 },
    whileHover: { scale: 1.05 },
    transition: { duration: 0.2 }
  } : {};

  return (
    <Component
      className={cn(
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      {...animationProps}
      {...props}
    >
      {children}
    </Component>
  );
}

// Legal concept icons
export function DivorceIcon(props: LegalIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      <path d="M12 5.67L8.5 2.17" strokeDasharray="2,2" />
      <path d="M15.5 2.17L12 5.67" strokeDasharray="2,2" />
    </BaseIcon>
  );
}

export function CustodyIcon(props: LegalIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      <path d="M12 14v7" />
      <path d="M9 17h6" />
    </BaseIcon>
  );
}

export function SupportIcon(props: LegalIconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </BaseIcon>
  );
}

export function ProtectionIcon(props: LegalIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
      <circle cx="12" cy="10" r="1" fill="currentColor" />
    </BaseIcon>
  );
}

export function PropertyIcon(props: LegalIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M3 21h18" />
      <path d="M5 21V7l8-4v18" />
      <path d="M19 21V11l-6-4" />
      <path d="M9 9v1" />
      <path d="M9 12v1" />
      <path d="M9 15v1" />
      <path d="M16 12v1" />
      <path d="M16 15v1" />
    </BaseIcon>
  );
}

export function CourtIcon(props: LegalIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M3 21h18" />
      <path d="M6 21V10" />
      <path d="M10 21V10" />
      <path d="M14 21V10" />
      <path d="M18 21V10" />
      <path d="M2 10l10-8 10 8" />
      <path d="M12 2v8" />
      <circle cx="12" cy="6" r="1" fill="currentColor" />
    </BaseIcon>
  );
}

export function GavelIcon(props: LegalIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M14.5 2l-4 4 1.5 1.5 4-4L14.5 2z" />
      <path d="M6.5 6l-4 4L4 11.5l4-4L6.5 6z" />
      <path d="M10 10l-2 2" />
      <path d="M8 12l-2 2" />
      <path d="M15 15l-6 6h8l4-4-6-2z" />
      <circle cx="11.5" cy="8.5" r="2.5" />
    </BaseIcon>
  );
}

export function DocumentIcon(props: LegalIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10,9 9,9 8,9" />
    </BaseIcon>
  );
}

export function MediationIcon(props: LegalIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      <path d="M12 12l3 3-3 3" />
      <path d="M9 15h6" />
    </BaseIcon>
  );
}

export function EmergencyIcon(props: LegalIconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
      <path d="M8 12l8 0" strokeWidth="3" />
      <path d="M12 8l0 8" strokeWidth="3" />
    </BaseIcon>
  );
}

export function CalendarIcon(props: LegalIconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
    </BaseIcon>
  );
}

export function LegalAidIcon(props: LegalIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.46 9-11V7l-10-5z" />
      <path d="M8 11l2 2 4-4" />
      <circle cx="12" cy="8" r="1" fill="currentColor" />
      <path d="M9 15h6" />
    </BaseIcon>
  );
}

export function FormIcon(props: LegalIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
      <path d="M9 20h6" />
    </BaseIcon>
  );
}

export function TimelineIcon(props: LegalIconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
      <path d="M8 12h8" />
      <circle cx="8" cy="12" r="2" />
      <circle cx="16" cy="12" r="2" />
    </BaseIcon>
  );
}

export function SafetyIcon(props: LegalIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 1L3 5v6c0 6 8 10 8 10s8-4 8-10V5l-9-4z" />
      <path d="M12 7v10" />
      <path d="M7 12l5-5 5 5" />
      <circle cx="12" cy="9" r="1" fill="currentColor" />
    </BaseIcon>
  );
}

export function ModificationIcon(props: LegalIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      <path d="M12 12l3 3" />
      <path d="M9 9l3 3" />
    </BaseIcon>
  );
}

export function EnforcementIcon(props: LegalIconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <path d="M7 10l5-3 5 3-5 3-5-3z" />
      <circle cx="12" cy="10" r="1" fill="currentColor" />
    </BaseIcon>
  );
}

// Illustration components for complex concepts
export function DivorceIllustration({ className = '', animated = false }: { className?: string; animated?: boolean }) {
  const Component = animated ? motion.div : 'div';
  
  return (
    <Component className={cn('relative', className)}>
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect width="400" height="300" fill="#f8fafc" />
        
        {/* Broken heart illustration */}
        <g transform="translate(100, 50)">
          <path
            d="M100 80c0-30-25-55-55-55S-10 50-10 80c0 55 55 100 110 130 55-30 110-75 110-130 0-30-25-55-55-55s-55 25-55 55z"
            fill="#fecaca"
            stroke="#dc2626"
            strokeWidth="2"
          />
          <path
            d="M100 80L45 135"
            stroke="#dc2626"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="5,5"
          />
          <path
            d="M100 80L155 135"
            stroke="#dc2626"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="5,5"
          />
        </g>
        
        {/* Document icons */}
        <g transform="translate(50, 200)">
          <rect x="0" y="0" width="60" height="80" rx="4" fill="#e0e7ff" stroke="#3b82f6" strokeWidth="2" />
          <rect x="10" y="15" width="40" height="2" fill="#3b82f6" />
          <rect x="10" y="25" width="40" height="2" fill="#3b82f6" />
          <rect x="10" y="35" width="30" height="2" fill="#3b82f6" />
        </g>
        
        <g transform="translate(290, 200)">
          <rect x="0" y="0" width="60" height="80" rx="4" fill="#e0e7ff" stroke="#3b82f6" strokeWidth="2" />
          <rect x="10" y="15" width="40" height="2" fill="#3b82f6" />
          <rect x="10" y="25" width="40" height="2" fill="#3b82f6" />
          <rect x="10" y="35" width="30" height="2" fill="#3b82f6" />
        </g>
        
        {/* Arrow pointing to process */}
        <path
          d="M130 240 L270 240"
          stroke="#6b7280"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
        
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
          </marker>
        </defs>
        
        {/* Text labels */}
        <text x="200" y="30" textAnchor="middle" className="text-lg font-semibold fill-gray-700">
          Divorce Process
        </text>
        <text x="80" y="295" textAnchor="middle" className="text-sm fill-gray-600">
          Filing
        </text>
        <text x="320" y="295" textAnchor="middle" className="text-sm fill-gray-600">
          Resolution
        </text>
      </svg>
    </Component>
  );
}

export function CustodyIllustration({ className = '', animated = false }: { className?: string; animated?: boolean }) {
  return (
    <div className={cn('relative', className)}>
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="400" height="300" fill="#f8fafc" />
        
        {/* Child figure in center */}
        <g transform="translate(200, 100)">
          <circle cx="0" cy="0" r="25" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
          <rect x="-15" y="20" width="30" height="40" rx="5" fill="#60a5fa" stroke="#3b82f6" strokeWidth="2" />
          <circle cx="-8" cy="-5" r="3" fill="#374151" />
          <circle cx="8" cy="-5" r="3" fill="#374151" />
          <path d="M-8 8 Q0 15 8 8" stroke="#374151" strokeWidth="2" fill="none" />
        </g>
        
        {/* Parent figures */}
        <g transform="translate(100, 200)">
          <circle cx="0" cy="0" r="20" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
          <rect x="-12" y="15" width="24" height="35" rx="4" fill="#ec4899" stroke="#db2777" strokeWidth="2" />
          <text x="0" y="70" textAnchor="middle" className="text-sm fill-gray-600">Parent A</text>
        </g>
        
        <g transform="translate(300, 200)">
          <circle cx="0" cy="0" r="20" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
          <rect x="-12" y="15" width="24" height="35" rx="4" fill="#10b981" stroke="#059669" strokeWidth="2" />
          <text x="0" y="70" textAnchor="middle" className="text-sm fill-gray-600">Parent B</text>
        </g>
        
        {/* Connection lines */}
        <path d="M120 210 L185 145" stroke="#6b7280" strokeWidth="2" strokeDasharray="3,3" />
        <path d="M280 210 L215 145" stroke="#6b7280" strokeWidth="2" strokeDasharray="3,3" />
        
        <text x="200" y="30" textAnchor="middle" className="text-lg font-semibold fill-gray-700">
          Child Custody Arrangement
        </text>
      </svg>
    </div>
  );
}

export function ProtectionIllustration({ className = '', animated = false }: { className?: string; animated?: boolean }) {
  return (
    <div className={cn('relative', className)}>
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="400" height="300" fill="#f8fafc" />
        
        {/* Shield */}
        <g transform="translate(200, 150)">
          <path
            d="M0 -100 L-60 -60 L-60 20 C-60 60 0 100 0 100 C0 100 60 60 60 20 L60 -60 Z"
            fill="#dbeafe"
            stroke="#3b82f6"
            strokeWidth="3"
          />
          <path
            d="M-30 -20 L-10 0 L30 -40"
            stroke="#10b981"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        
        {/* Person figure */}
        <g transform="translate(140, 200)">
          <circle cx="0" cy="0" r="15" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
          <rect x="-10" y="10" width="20" height="25" rx="3" fill="#60a5fa" stroke="#3b82f6" strokeWidth="2" />
        </g>
        
        {/* Danger symbol (crossed out) */}
        <g transform="translate(320, 120)">
          <circle cx="0" cy="0" r="30" fill="#fecaca" stroke="#dc2626" strokeWidth="3" />
          <path d="M-15 -15 L15 15" stroke="#dc2626" strokeWidth="4" />
          <path d="M15 -15 L-15 15" stroke="#dc2626" strokeWidth="4" />
          <text x="0" y="50" textAnchor="middle" className="text-xs fill-red-600 font-semibold">DANGER</text>
        </g>
        
        <text x="200" y="30" textAnchor="middle" className="text-lg font-semibold fill-gray-700">
          Protection Order
        </text>
        <text x="200" y="280" textAnchor="middle" className="text-sm fill-gray-600">
          Legal protection from harm
        </text>
      </svg>
    </div>
  );
}

// Icon collection for easy access
export const LegalIcons = {
  Divorce: DivorceIcon,
  Custody: CustodyIcon,
  Support: SupportIcon,
  Protection: ProtectionIcon,
  Property: PropertyIcon,
  Court: CourtIcon,
  Gavel: GavelIcon,
  Document: DocumentIcon,
  Mediation: MediationIcon,
  Emergency: EmergencyIcon,
  Calendar: CalendarIcon,
  LegalAid: LegalAidIcon,
  Form: FormIcon,
  Timeline: TimelineIcon,
  Safety: SafetyIcon,
  Modification: ModificationIcon,
  Enforcement: EnforcementIcon
};

// Icon grid for displaying all legal icons
interface LegalIconGridProps {
  className?: string;
  iconSize?: 'sm' | 'md' | 'lg' | 'xl';
  showLabels?: boolean;
  animated?: boolean;
}

export function LegalIconGrid({ 
  className = '', 
  iconSize = 'lg',
  showLabels = true,
  animated = false 
}: LegalIconGridProps) {
  return (
    <div className={cn('grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4', className)}>
      {Object.entries(LegalIcons).map(([name, IconComponent]) => (
        <div key={name} className="flex flex-col items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
          <IconComponent 
            size={iconSize} 
            animated={animated}
            className="mb-2"
          />
          {showLabels && (
            <span className="text-xs text-gray-600 text-center">
              {name}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

// Legal concept illustration selector
interface LegalIllustrationProps {
  concept: 'divorce' | 'custody' | 'protection';
  className?: string;
  animated?: boolean;
}

export function LegalIllustration({ concept, className = '', animated = false }: LegalIllustrationProps) {
  switch (concept) {
    case 'divorce':
      return <DivorceIllustration className={className} animated={animated} />;
    case 'custody':
      return <CustodyIllustration className={className} animated={animated} />;
    case 'protection':
      return <ProtectionIllustration className={className} animated={animated} />;
    default:
      return null;
  }
}