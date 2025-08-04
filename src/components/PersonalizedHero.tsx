'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import { useUserType } from '@/hooks/useUserType';
import { AlertCircle, BookOpen, Clock, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function PersonalizedHero() {
  const { userType, userData, isLoading } = useUserType();

  if (isLoading) {
    return (
      <section className="bg-white py-12 px-4 sm:px-6 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-10 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-8"></div>
          </div>
        </div>
      </section>
    );
  }

  // Emergency user - show crisis resources prominently
  if (userType === 'emergency') {
    return (
      <section className="bg-red-50 py-12 px-4 sm:px-6 md:py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Welcome Back - We&apos;re Here to Help
                </h1>
                <p className="text-lg text-gray-600">
                  Your safety is our priority. Here are resources available to you.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <Link href="/emergency-help">
                <Button size="lg" className="w-full bg-red-600 hover:bg-red-700">
                  Emergency Resources
                </Button>
              </Link>
              <Link href="/get-protection">
                <Button size="lg" variant="outline" className="w-full">
                  Protection Orders
                </Button>
              </Link>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Remember:</strong> You can call the National Domestic Violence Hotline 
                at <a href="tel:1-800-799-7233" className="font-semibold text-blue-600">1-800-799-7233</a> anytime, 
                24/7, for confidential support.
              </p>
            </div>
          </motion.div>

          <SearchBar />
        </div>
      </section>
    );
  }

  // In-progress user - show their saved progress
  if (userType === 'in-progress') {
    return (
      <section className="bg-blue-50 py-12 px-4 sm:px-6 md:py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Continue Where You Left Off
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              You have an assessment in progress. Pick up where you left off or start fresh.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/assessment">
                <Button size="lg" className="gap-2">
                  <Clock className="w-5 h-5" />
                  Continue Assessment
                </Button>
              </Link>
              <Button size="lg" variant="outline" onClick={() => {
                localStorage.removeItem('assessmentProgress');
                window.location.href = '/';
              }}>
                Start Over
              </Button>
            </div>
          </motion.div>

          <SearchBar />

          {userData?.savedProgress?.bookmarks && userData.savedProgress.bookmarks.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <h2 className="text-lg font-semibold mb-4">Your Saved Resources</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {userData.savedProgress.bookmarks.map((bookmark) => (
                  <Card key={bookmark} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <Link href={bookmark} className="flex items-center gap-3">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                        <span className="text-blue-600 hover:underline">{bookmark}</span>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    );
  }

  // Returning user - show quick actions
  if (userType === 'returning') {
    return (
      <section className="bg-green-50 py-12 px-4 sm:px-6 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Welcome Back!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Quick access to resources and tools for your Arizona family law needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <SearchBar />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid sm:grid-cols-3 gap-4 mb-8"
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <BookOpen className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Learning Modules</h3>
                <Link href="/modules/pre-filing">
                  <Button variant="outline" size="sm">Browse Modules</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-green-600 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Quick Assessment</h3>
                <Link href="/assessment">
                  <Button variant="outline" size="sm">Start Assessment</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Heart className="w-8 h-8 text-purple-600 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Support Resources</h3>
                <Link href="/support/calculator">
                  <Button variant="outline" size="sm">Calculate Support</Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-gray-600"
          >
            Visit #{userData?.visitCount || 2} • Last visit: {
              userData?.lastVisit 
                ? new Date(userData.lastVisit).toLocaleDateString()
                : 'Recently'
            }
          </motion.p>
        </div>
      </section>
    );
  }

  // Default first-time visitor experience
  return (
    <section className="bg-white py-12 px-4 sm:px-6 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
        >
          Navigate Arizona Family Law with Confidence
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
        >
          Free legal guidance for divorce, custody, and family matters. 
          Get clear answers in plain English.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto mb-6 sm:mb-8 px-4"
        >
          <SearchBar />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
        >
          <Link href="/getting-divorced" className="w-full sm:w-auto">
            <Button size="lg" className="w-full text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
              Getting Divorced
            </Button>
          </Link>
          <Link href="/child-custody" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
              Child Custody
            </Button>
          </Link>
          <Link href="/get-protection" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
              Get Protection
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-base text-gray-600"
        >
          <span>Not sure where to start? </span>
          <Link href="/assessment" className="text-blue-600 hover:underline font-medium">
            Take our guided assessment →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}