'use client';

import Link from 'next/link';
import { Phone, MapPin, Shield, FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useUserType } from '@/hooks/useUserType';
import { useEffect } from 'react';

export default function EmergencyHelpPage() {
  const { updateUserType } = useUserType();

  useEffect(() => {
    // Track that user has viewed emergency content
    updateUserType('emergency');
  }, [updateUserType]);
  return (
    <main className="min-h-screen bg-red-50">
      <div className="bg-red-600 text-white py-6">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold mb-2">Emergency Help</h1>
          <p className="text-red-100">Immediate resources for your safety</p>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          {/* Emergency Numbers */}
          <Card className="mb-8 border-red-200">
            <CardContent className="p-6 bg-white">
              <h2 className="text-2xl font-bold mb-4 text-red-900">
                Call For Immediate Help
              </h2>
              
              <div className="space-y-4">
                <a href="tel:911" className="block">
                  <div className="bg-red-600 text-white p-4 rounded-lg hover:bg-red-700 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold">911</p>
                        <p>Police, Fire, Medical Emergency</p>
                      </div>
                      <Phone className="w-8 h-8" />
                    </div>
                  </div>
                </a>

                <a href="tel:1-800-799-7233" className="block">
                  <div className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xl font-bold">1-800-799-7233</p>
                        <p>National Domestic Violence Hotline</p>
                        <p className="text-sm mt-1">24/7 • Confidential • Free</p>
                      </div>
                      <Phone className="w-8 h-8" />
                    </div>
                  </div>
                </a>

                <a href="tel:1-800-273-8255" className="block">
                  <div className="bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xl font-bold">988</p>
                        <p>Suicide & Crisis Lifeline</p>
                        <p className="text-sm mt-1">24/7 • Confidential</p>
                      </div>
                      <Phone className="w-8 h-8" />
                    </div>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Safety Steps */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Immediate Safety Steps</h2>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <div>
                    <p className="font-semibold">Get to a safe location</p>
                    <p className="text-sm text-gray-600">Leave the house, go to a neighbor, friend, or public place</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <p className="font-semibold">Call for help</p>
                    <p className="text-sm text-gray-600">Use the emergency numbers above</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <p className="font-semibold">Document injuries</p>
                    <p className="text-sm text-gray-600">Take photos, keep medical records, save threatening messages</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <div>
                    <p className="font-semibold">Create a safety plan</p>
                    <p className="text-sm text-gray-600">Plan where to go, what to take, who to contact</p>
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Local Resources */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Arizona Shelters</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold">Phoenix Area</p>
                    <p>Sojourner Center: <a href="tel:602-244-0089" className="text-blue-600">602-244-0089</a></p>
                  </div>
                  <div>
                    <p className="font-semibold">Tucson Area</p>
                    <p>Emerge!: <a href="tel:520-795-8001" className="text-blue-600">520-795-8001</a></p>
                  </div>
                  <div>
                    <p className="font-semibold">Statewide</p>
                    <p>AZ Coalition: <a href="tel:1-800-782-6400" className="text-blue-600">1-800-782-6400</a></p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Legal Protection</h3>
                <p className="text-gray-600 mb-4">Get an Order of Protection today</p>
                <div className="space-y-2">
                  <Link href="/get-protection">
                    <Button className="w-full">Protection Orders</Button>
                  </Link>
                  <a 
                    href="https://azpoint.azcourts.gov" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="outline" className="w-full gap-2">
                      File Online Now
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What to Pack */}
          <Card>
            <CardContent className="p-6">
              <FileText className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold mb-3">If You Need to Leave - Important Items</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold mb-2">Documents</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Driver&apos;s license / ID</li>
                    <li>• Birth certificates</li>
                    <li>• Social Security cards</li>
                    <li>• Immigration papers</li>
                    <li>• Protection orders</li>
                    <li>• Medical records</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Essentials</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Medications</li>
                    <li>• Money / credit cards</li>
                    <li>• Keys (house, car)</li>
                    <li>• Phone & charger</li>
                    <li>• Clothes for you & children</li>
                    <li>• Children&apos;s favorite items</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Link href="/">
              <Button variant="outline" size="lg">
                Return to Home Page
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}