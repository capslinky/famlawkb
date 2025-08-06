'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, MessageSquare, Bell, FileText, Shield, Users, Settings, Search, Plus, Send, Paperclip, Lock, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import NotificationCenter from '@/components/communication/NotificationCenter';
import DocumentSharing from '@/components/communication/DocumentSharing';
import { messagingService, type User, type Conversation, type Message } from '@/lib/messaging';

export default function CommunicationHubPage() {
  const [activeTab, setActiveTab] = useState<'messages' | 'notifications' | 'documents'>('messages');
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [messageInput, setMessageInput] = useState('');
  const [showNewConversation, setShowNewConversation] = useState(false);
  
  // Mock user for demo
  const currentUser: User = {
    id: 'user1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    role: 'client',
    verified: true
  };

  // Sample conversations
  const [conversations] = useState<Conversation[]>([
    {
      id: 'conv1',
      title: 'Case Discussion with Attorney',
      participants: [
        currentUser,
        { id: 'attorney1', name: 'Sarah Johnson', email: 'sarah@lawfirm.com', role: 'attorney', verified: true }
      ],
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5),
      lastMessageAt: new Date(Date.now() - 1000 * 60 * 30),
      type: 'case_discussion',
      caseId: 'FC2024-001234',
      archived: false,
      pinned: true,
      muted: new Map(),
      settings: {
        endToEndEncryption: true,
        messageRetention: 365,
        allowEditing: true,
        allowDeleting: false,
        requireReadReceipts: true,
        courtAdmissible: true
      },
      lastMessage: {
        id: 'msg1',
        conversationId: 'conv1',
        senderId: 'attorney1',
        recipientIds: ['user1'],
        content: 'I\'ve reviewed the financial documents. Let\'s discuss the next steps.',
        timestamp: new Date(Date.now() - 1000 * 60 * 30),
        readBy: new Map(),
        deliveredTo: new Map(),
        encrypted: true
      }
    },
    {
      id: 'conv2',
      title: 'Mediation Coordination',
      participants: [
        currentUser,
        { id: 'mediator1', name: 'Robert Chen', email: 'robert@mediation.com', role: 'mediator', verified: true },
        { id: 'opposing1', name: 'Jane Doe', email: 'jane.doe@example.com', role: 'opposing_party', verified: false }
      ],
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10),
      lastMessageAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
      type: 'mediation',
      caseId: 'FC2024-001234',
      archived: false,
      pinned: false,
      muted: new Map(),
      settings: {
        endToEndEncryption: true,
        messageRetention: 365,
        allowEditing: false,
        allowDeleting: false,
        requireReadReceipts: true,
        courtAdmissible: true
      }
    }
  ]);

  // Sample messages
  const [messages] = useState<Message[]>([
    {
      id: 'msg1',
      conversationId: 'conv1',
      senderId: 'attorney1',
      recipientIds: ['user1'],
      content: 'Good morning! I\'ve reviewed your financial affidavit.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      readBy: new Map([['user1', new Date()]]),
      deliveredTo: new Map([['user1', new Date()]]),
      encrypted: true
    },
    {
      id: 'msg2',
      conversationId: 'conv1',
      senderId: 'user1',
      recipientIds: ['attorney1'],
      content: 'Thank you for reviewing. Are there any issues I should address?',
      timestamp: new Date(Date.now() - 1000 * 60 * 60),
      readBy: new Map([['attorney1', new Date()]]),
      deliveredTo: new Map([['attorney1', new Date()]]),
      encrypted: true
    },
    {
      id: 'msg3',
      conversationId: 'conv1',
      senderId: 'attorney1',
      recipientIds: ['user1'],
      content: 'I\'ve reviewed the financial documents. Let\'s discuss the next steps.',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      readBy: new Map(),
      deliveredTo: new Map([['user1', new Date()]]),
      encrypted: true,
      metadata: {
        urgent: false,
        requiresResponse: true,
        responseDeadline: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2)
      }
    }
  ]);

  const handleSendMessage = () => {
    if (!messageInput.trim() || !selectedConversation) return;

    const recipientIds = selectedConversation.participants
      .filter(p => p.id !== currentUser.id)
      .map(p => p.id);

    messagingService.sendMessage(
      selectedConversation.id,
      currentUser.id,
      messageInput,
      recipientIds
    );

    setMessageInput('');
  };

  const formatMessageTime = (timestamp: Date): string => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const days = Math.floor(diff / 86400000);
    
    if (days === 0) {
      return timestamp.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    } else if (days === 1) {
      return 'Yesterday';
    } else if (days < 7) {
      return timestamp.toLocaleDateString('en-US', { weekday: 'short' });
    } else {
      return timestamp.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  const getConversationMessages = (conversationId: string): Message[] => {
    return messages.filter(m => m.conversationId === conversationId);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-10 h-10" />
            <div>
              <h1 className="text-3xl font-bold">Communication Hub</h1>
              <p className="text-indigo-100 text-lg">Secure messaging, notifications, and document sharing</p>
            </div>
          </div>
          
          <div className="mt-6 bg-white/10 backdrop-blur rounded-lg p-4 max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">End-to-End Encrypted</span>
            </div>
            <p className="text-white/90 text-sm">
              All communications are encrypted and court-admissible. Messages create a permanent 
              legal record with full audit trails and digital signatures.
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
            <span className="text-gray-600">Communication Hub</span>
          </nav>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          {/* Tab Navigation */}
          <div className="flex gap-2 mb-8 border-b">
            <button
              onClick={() => setActiveTab('messages')}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                activeTab === 'messages' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <MessageSquare className="w-5 h-5 inline mr-2" />
              Messages
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                activeTab === 'notifications' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Bell className="w-5 h-5 inline mr-2" />
              Notifications
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                activeTab === 'documents' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText className="w-5 h-5 inline mr-2" />
              Documents
            </button>
          </div>

          {/* Messages Tab */}
          {activeTab === 'messages' && (
            <div className="grid md:grid-cols-3 gap-6">
              {/* Conversations List */}
              <div className="md:col-span-1">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Conversations</h3>
                      <Button size="sm" onClick={() => setShowNewConversation(true)}>
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="mb-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search conversations..."
                          className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      {conversations.map(conv => (
                        <div
                          key={conv.id}
                          onClick={() => setSelectedConversation(conv)}
                          className={`p-3 rounded-lg cursor-pointer transition-colors ${
                            selectedConversation?.id === conv.id 
                              ? 'bg-blue-50 border-blue-200' 
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-start justify-between mb-1">
                            <h4 className="font-medium text-sm">{conv.title}</h4>
                            {conv.pinned && <span className="text-xs text-gray-500">📌</span>}
                          </div>
                          {conv.lastMessage && (
                            <p className="text-xs text-gray-600 line-clamp-2 mb-1">
                              {conv.lastMessage.content}
                            </p>
                          )}
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">
                              {formatMessageTime(conv.lastMessageAt)}
                            </span>
                            {conv.settings.endToEndEncryption && (
                              <Lock className="w-3 h-3 text-green-600" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Messages View */}
              <div className="md:col-span-2">
                {selectedConversation ? (
                  <Card className="h-[600px] flex flex-col">
                    {/* Conversation Header */}
                    <div className="p-4 border-b">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{selectedConversation.title}</h3>
                          <p className="text-sm text-gray-600">
                            {selectedConversation.participants.length} participants
                            {selectedConversation.caseId && ` • Case: ${selectedConversation.caseId}`}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          {selectedConversation.settings.courtAdmissible && (
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                              Court Admissible
                            </span>
                          )}
                          <Button variant="outline" size="sm">
                            <Settings className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {getConversationMessages(selectedConversation.id).map(msg => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.senderId === currentUser.id ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-[70%] ${
                            msg.senderId === currentUser.id 
                              ? 'bg-blue-500 text-white' 
                              : 'bg-gray-100'
                          } rounded-lg p-3`}>
                            <p className="text-sm">{msg.content}</p>
                            <div className={`flex items-center gap-2 mt-2 text-xs ${
                              msg.senderId === currentUser.id ? 'text-blue-100' : 'text-gray-500'
                            }`}>
                              <span>{formatMessageTime(msg.timestamp)}</span>
                              {msg.encrypted && <Lock className="w-3 h-3" />}
                              {msg.readBy.size > 0 && <CheckCircle className="w-3 h-3" />}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Message Input */}
                    <div className="p-4 border-t">
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded">
                          <Paperclip className="w-5 h-5 text-gray-500" />
                        </button>
                        <input
                          type="text"
                          value={messageInput}
                          onChange={(e) => setMessageInput(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          placeholder="Type a message..."
                          className="flex-1 px-3 py-2 border rounded-lg"
                        />
                        <Button onClick={handleSendMessage}>
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ) : (
                  <Card className="h-[600px] flex items-center justify-center">
                    <div className="text-center">
                      <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
                      <p className="text-gray-500">Choose a conversation to view messages</p>
                    </div>
                  </Card>
                )}
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <NotificationCenter
              userId={currentUser.id}
              onNotificationClick={(notification) => console.log('Notification clicked:', notification)}
              onSettingsClick={() => console.log('Settings clicked')}
            />
          )}

          {/* Documents Tab */}
          {activeTab === 'documents' && (
            <DocumentSharing
              userId={currentUser.id}
              caseId="FC2024-001234"
              onDocumentSelect={(doc) => console.log('Document selected:', doc)}
              onUploadComplete={(doc) => console.log('Upload complete:', doc)}
            />
          )}

          {/* Security Features Card */}
          <Card className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                Communication Security Features
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Message Security</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>End-to-end encryption for all messages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Digital signatures for authenticity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Court-admissible message records</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Read receipts and delivery confirmation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Document Protection</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Encrypted file storage and transfer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Access control and permissions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Automatic watermarking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Complete audit trail</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}