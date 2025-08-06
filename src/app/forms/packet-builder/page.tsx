'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Package, Sparkles, Info, FileText, Users, Clock } from 'lucide-react';
import FormPacketBuilder from '@/components/forms/FormPacketBuilder';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function PacketBuilderPage() {
  const [selectedPacketType, setSelectedPacketType] = useState<string>('');
  const [showBuilder, setShowBuilder] = useState(false);

  const packetTypes = [
    {
      id: 'divorce_with_children',
      name: 'Divorce with Children',
      description: 'Complete packet for divorce when you have minor children',
      forms: 6,
      time: '4-5 hours',
      fee: '$349'
    },
    {
      id: 'uncontested_divorce',
      name: 'Uncontested Divorce',
      description: 'Simplified packet when both parties agree',
      forms: 3,
      time: '2 hours',
      fee: '$349'
    },
    {
      id: 'child_support_modification',
      name: 'Modify Child Support',
      description: 'Change existing child support order',
      forms: 3,
      time: '2 hours',
      fee: '$139'
    },
    {
      id: 'protection_order',
      name: 'Protection Order',
      description: 'Emergency protection from domestic violence',
      forms: 2,
      time: '45 minutes',
      fee: 'Free'
    },
    {
      id: 'custom',
      name: 'Custom Packet',
      description: 'Build your own form packet',
      forms: '?',
      time: 'Varies',
      fee: 'Varies'
    }
  ];

  const handlePacketSelect = (packetId: string) => {
    setSelectedPacketType(packetId);
    setShowBuilder(true);
  };

  const handleSavePacket = (packet: any) => {
    console.log('Packet saved:', packet);
    // In a real app, this would save to a database or local storage
    alert('Form packet saved successfully!');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-4">
            <Package className="w-10 h-10" />
            <div>
              <h1 className="text-3xl font-bold">Form Packet Builder</h1>
              <p className="text-indigo-100 text-lg">Organize all your court forms in one complete packet</p>
            </div>
          </div>
          
          <div className="mt-6 bg-white/10 backdrop-blur rounded-lg p-4 max-w-3xl">
            <p className="text-white/90">
              The Form Packet Builder helps you organize all required court forms for your case. 
              Choose a pre-built packet for common situations or create a custom packet with exactly 
              the forms you need. Track your progress, manage deadlines, and ensure nothing is missed.
            </p>
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
            <Link href="/forms" className="text-blue-600 hover:text-blue-800">
              Forms
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Packet Builder</span>
          </nav>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          {!showBuilder ? (
            <>
              {/* Feature Cards */}
              <div className="mb-8 grid md:grid-cols-4 gap-4">
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Package className="w-5 h-5 text-blue-600" />
                      <h3 className="font-semibold">Organized</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Keep all your forms organized in one packet
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="w-5 h-5 text-green-600" />
                      <h3 className="font-semibold">Complete</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Ensure you have all required forms
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-purple-50 border-purple-200">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-purple-600" />
                      <h3 className="font-semibold">Track Progress</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Monitor completion status of each form
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-orange-50 border-orange-200">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-orange-600" />
                      <h3 className="font-semibold">Collaborate</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Share packets with attorneys or helpers
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Packet Type Selection */}
              <h2 className="text-xl font-semibold mb-4">Choose a Packet Type</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {packetTypes.map(packet => (
                  <Card 
                    key={packet.id}
                    className="hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => handlePacketSelect(packet.id)}
                  >
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h3 className="font-semibold text-lg mb-2">{packet.name}</h3>
                        <p className="text-sm text-gray-600">{packet.description}</p>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div className="text-center">
                          <div className="font-semibold text-blue-600">{packet.forms}</div>
                          <div className="text-xs text-gray-500">Forms</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-green-600">{packet.time}</div>
                          <div className="text-xs text-gray-500">Est. Time</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-red-600">{packet.fee}</div>
                          <div className="text-xs text-gray-500">Filing Fee</div>
                        </div>
                      </div>
                      
                      <Button className="w-full mt-4">
                        {packet.id === 'custom' ? 'Build Custom' : 'Use This Packet'}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* How It Works */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-yellow-500" />
                    How the Packet Builder Works
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Building Your Packet</h3>
                      <ol className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="font-semibold text-blue-600">1.</span>
                          <span>Choose a pre-built packet or start with custom</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold text-blue-600">2.</span>
                          <span>Add or remove forms as needed for your situation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold text-blue-600">3.</span>
                          <span>Set the number of copies needed for each form</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold text-blue-600">4.</span>
                          <span>Track completion status as you work through forms</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold text-blue-600">5.</span>
                          <span>Export or print your packet checklist</span>
                        </li>
                      </ol>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3">Features</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          <span>Pre-built packets for common scenarios</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          <span>Time estimates for completing each form</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          <span>Filing order guidance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          <span>Deadline tracking and reminders</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          <span>Export packets for sharing or backup</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          <span>Print checklist for court filing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tips */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Pro Tips</h3>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Always make extra copies - courts often require 2-3 copies of each form</li>
                        <li>• Complete forms in the suggested order to avoid having to redo work</li>
                        <li>• Save your packet to resume work later or share with helpers</li>
                        <li>• Check with your local court for any county-specific forms needed</li>
                        <li>• Consider having a legal professional review your packet before filing</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <>
              {/* Back Button */}
              <div className="mb-6">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowBuilder(false);
                    setSelectedPacketType('');
                  }}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Packet Selection
                </Button>
              </div>

              {/* Form Packet Builder Component */}
              <FormPacketBuilder
                packetType={selectedPacketType === 'custom' ? undefined : selectedPacketType}
                onSave={handleSavePacket}
              />
            </>
          )}
        </div>
      </div>
    </main>
  );
}