import React from 'react';
import NavigationHeader from './NavigationHeader';
import Footer from './Footer';

interface LayoutWrapperProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

export default function LayoutWrapper({ 
  children, 
  showHeader = true, 
  showFooter = true 
}: LayoutWrapperProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {showHeader && <NavigationHeader />}
      <main className="flex-grow">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
}