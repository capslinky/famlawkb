'use client';

import React, { useState, useEffect } from 'react';
import { Bell, Mail, MessageSquare, Calendar, FileText, AlertTriangle, Clock, Check, X, Settings, Filter, Archive, Trash2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export interface Notification {
  id: string;
  type: 'message' | 'document' | 'deadline' | 'hearing' | 'system' | 'reminder';
  title: string;
  description: string;
  timestamp: Date;
  read: boolean;
  urgent: boolean;
  actionRequired: boolean;
  source: {
    type: 'user' | 'system' | 'court' | 'attorney';
    name?: string;
    id?: string;
  };
  actions?: {
    label: string;
    action: () => void;
    primary?: boolean;
  }[];
  metadata?: {
    caseNumber?: string;
    documentId?: string;
    messageId?: string;
    hearingDate?: Date;
    deadline?: Date;
  };
  category?: string;
}

interface NotificationGroup {
  date: string;
  notifications: Notification[];
}

interface NotificationCenterProps {
  userId: string;
  onNotificationClick?: (notification: Notification) => void;
  onSettingsClick?: () => void;
}

// Sample notifications for demonstration
const SAMPLE_NOTIFICATIONS: Notification[] = [
  {
    id: 'notif1',
    type: 'message',
    title: 'New message from your attorney',
    description: 'Regarding the upcoming mediation session next week',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    read: false,
    urgent: false,
    actionRequired: true,
    source: { type: 'attorney', name: 'Sarah Johnson' },
    actions: [
      { label: 'View Message', action: () => console.log('View message'), primary: true },
      { label: 'Mark as Read', action: () => console.log('Mark read') }
    ]
  },
  {
    id: 'notif2',
    type: 'deadline',
    title: 'Response deadline approaching',
    description: 'Financial disclosure documents due in 3 days',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    read: false,
    urgent: true,
    actionRequired: true,
    source: { type: 'system' },
    metadata: { deadline: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3) },
    actions: [
      { label: 'Upload Documents', action: () => console.log('Upload'), primary: true },
      { label: 'Set Reminder', action: () => console.log('Remind') }
    ]
  },
  {
    id: 'notif3',
    type: 'hearing',
    title: 'Hearing scheduled',
    description: 'Temporary orders hearing on March 15, 2024 at 9:00 AM',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    read: true,
    urgent: false,
    actionRequired: false,
    source: { type: 'court', name: 'Maricopa County Court' },
    metadata: { hearingDate: new Date('2024-03-15T09:00:00'), caseNumber: 'FC2024-001234' },
    actions: [
      { label: 'Add to Calendar', action: () => console.log('Add to calendar') },
      { label: 'View Details', action: () => console.log('View details') }
    ]
  },
  {
    id: 'notif4',
    type: 'document',
    title: 'Document shared with you',
    description: 'Parenting plan draft v2 is ready for review',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    read: true,
    urgent: false,
    actionRequired: true,
    source: { type: 'attorney', name: 'Sarah Johnson' },
    actions: [
      { label: 'Review Document', action: () => console.log('Review'), primary: true }
    ]
  },
  {
    id: 'notif5',
    type: 'system',
    title: 'Form auto-saved',
    description: 'Your divorce petition draft has been automatically saved',
    timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    read: false,
    urgent: false,
    actionRequired: false,
    source: { type: 'system' },
    actions: [
      { label: 'Continue Editing', action: () => console.log('Edit') }
    ]
  }
];

export default function NotificationCenter({ 
  userId, 
  onNotificationClick,
  onSettingsClick 
}: NotificationCenterProps) {
  const [notifications, setNotifications] = useState<Notification[]>(SAMPLE_NOTIFICATIONS);
  const [filter, setFilter] = useState<'all' | 'unread' | 'urgent' | 'action'>('all');
  const [selectedType, setSelectedType] = useState<Notification['type'] | 'all'>('all');
  const [showArchived, setShowArchived] = useState(false);

  // Group notifications by date
  const groupNotificationsByDate = (notifs: Notification[]): NotificationGroup[] => {
    const groups: Map<string, Notification[]> = new Map();
    
    notifs.forEach(notif => {
      const date = new Date(notif.timestamp);
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      
      let dateKey: string;
      if (date.toDateString() === today.toDateString()) {
        dateKey = 'Today';
      } else if (date.toDateString() === yesterday.toDateString()) {
        dateKey = 'Yesterday';
      } else {
        dateKey = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      }
      
      const existing = groups.get(dateKey) || [];
      existing.push(notif);
      groups.set(dateKey, existing);
    });

    return Array.from(groups.entries()).map(([date, notifs]) => ({
      date,
      notifications: notifs
    }));
  };

  // Filter notifications
  const getFilteredNotifications = (): Notification[] => {
    let filtered = [...notifications];

    // Type filter
    if (selectedType !== 'all') {
      filtered = filtered.filter(n => n.type === selectedType);
    }

    // Status filter
    switch (filter) {
      case 'unread':
        filtered = filtered.filter(n => !n.read);
        break;
      case 'urgent':
        filtered = filtered.filter(n => n.urgent);
        break;
      case 'action':
        filtered = filtered.filter(n => n.actionRequired);
        break;
    }

    return filtered.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  };

  // Mark notification as read
  const markAsRead = (notificationId: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === notificationId ? { ...n, read: true } : n)
    );
  };

  // Mark all as read
  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  // Delete notification
  const deleteNotification = (notificationId: string) => {
    setNotifications(prev => prev.filter(n => n.id !== notificationId));
  };

  // Archive notification
  const archiveNotification = (notificationId: string) => {
    // In production, would move to archived collection
    deleteNotification(notificationId);
  };

  // Get notification icon
  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'message':
        return <MessageSquare className="w-5 h-5" />;
      case 'document':
        return <FileText className="w-5 h-5" />;
      case 'deadline':
        return <Clock className="w-5 h-5" />;
      case 'hearing':
        return <Calendar className="w-5 h-5" />;
      case 'reminder':
        return <Bell className="w-5 h-5" />;
      default:
        return <Bell className="w-5 h-5" />;
    }
  };

  // Get notification color
  const getNotificationColor = (notification: Notification) => {
    if (notification.urgent) return 'text-red-600';
    if (notification.actionRequired) return 'text-orange-600';
    if (!notification.read) return 'text-blue-600';
    return 'text-gray-600';
  };

  // Get unread count
  const unreadCount = notifications.filter(n => !n.read).length;
  const urgentCount = notifications.filter(n => n.urgent && !n.read).length;

  // Handle notification click
  const handleNotificationClick = (notification: Notification) => {
    markAsRead(notification.id);
    if (onNotificationClick) {
      onNotificationClick(notification);
    }
  };

  // Format timestamp
  const formatTimestamp = (timestamp: Date): string => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    
    return timestamp.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const filteredNotifications = getFilteredNotifications();
  const groupedNotifications = groupNotificationsByDate(filteredNotifications);

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Bell className="w-6 h-6" />
                {unreadCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </div>
              <div>
                <h2 className="text-xl font-semibold">Notifications</h2>
                {urgentCount > 0 && (
                  <p className="text-sm text-red-600">
                    {urgentCount} urgent notification{urgentCount > 1 ? 's' : ''}
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={markAllAsRead}
                disabled={unreadCount === 0}
              >
                <Check className="w-4 h-4 mr-2" />
                Mark All Read
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={onSettingsClick}
              >
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                filter === 'unread' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Unread ({unreadCount})
            </button>
            <button
              onClick={() => setFilter('urgent')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                filter === 'urgent' 
                  ? 'bg-red-100 text-red-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Urgent
            </button>
            <button
              onClick={() => setFilter('action')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                filter === 'action' 
                  ? 'bg-orange-100 text-orange-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Action Required
            </button>
          </div>

          {/* Type Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as any)}
              className="px-3 py-1 border rounded-md text-sm"
            >
              <option value="all">All Types</option>
              <option value="message">Messages</option>
              <option value="document">Documents</option>
              <option value="deadline">Deadlines</option>
              <option value="hearing">Hearings</option>
              <option value="reminder">Reminders</option>
              <option value="system">System</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Notifications List */}
      {filteredNotifications.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
            <p className="text-gray-500">
              {filter === 'all' 
                ? "You're all caught up!"
                : `No ${filter} notifications`}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {groupedNotifications.map(group => (
            <div key={group.date}>
              <h3 className="text-sm font-medium text-gray-500 mb-2">{group.date}</h3>
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {group.notifications.map(notification => (
                      <div
                        key={notification.id}
                        className={`p-4 hover:bg-gray-50 transition-colors cursor-pointer ${
                          !notification.read ? 'bg-blue-50/50' : ''
                        }`}
                        onClick={() => handleNotificationClick(notification)}
                      >
                        <div className="flex items-start gap-3">
                          {/* Icon */}
                          <div className={`mt-0.5 ${getNotificationColor(notification)}`}>
                            {getNotificationIcon(notification.type)}
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className={`font-medium ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                                    {notification.title}
                                  </h4>
                                  {notification.urgent && (
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full">
                                      <AlertTriangle className="w-3 h-3" />
                                      Urgent
                                    </span>
                                  )}
                                  {notification.actionRequired && (
                                    <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded-full">
                                      Action Required
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-gray-600 mb-2">
                                  {notification.description}
                                </p>
                                
                                {/* Source and Time */}
                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                  {notification.source.name && (
                                    <span>From: {notification.source.name}</span>
                                  )}
                                  <span>{formatTimestamp(notification.timestamp)}</span>
                                  {notification.metadata?.caseNumber && (
                                    <span>Case: {notification.metadata.caseNumber}</span>
                                  )}
                                </div>

                                {/* Actions */}
                                {notification.actions && notification.actions.length > 0 && (
                                  <div className="flex gap-2 mt-3">
                                    {notification.actions.map((action, idx) => (
                                      <Button
                                        key={idx}
                                        size="sm"
                                        variant={action.primary ? 'default' : 'outline'}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          action.action();
                                        }}
                                      >
                                        {action.label}
                                      </Button>
                                    ))}
                                  </div>
                                )}
                              </div>

                              {/* Quick Actions */}
                              <div className="flex gap-1">
                                {!notification.read && (
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      markAsRead(notification.id);
                                    }}
                                    className="p-1 hover:bg-gray-200 rounded"
                                    title="Mark as read"
                                  >
                                    <Check className="w-4 h-4 text-gray-500" />
                                  </button>
                                )}
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    archiveNotification(notification.id);
                                  }}
                                  className="p-1 hover:bg-gray-200 rounded"
                                  title="Archive"
                                >
                                  <Archive className="w-4 h-4 text-gray-500" />
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    deleteNotification(notification.id);
                                  }}
                                  className="p-1 hover:bg-gray-200 rounded"
                                  title="Delete"
                                >
                                  <X className="w-4 h-4 text-gray-500" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      )}

      {/* Load More / Pagination */}
      {filteredNotifications.length > 0 && (
        <div className="text-center">
          <Button variant="outline">
            Load More Notifications
          </Button>
        </div>
      )}
    </div>
  );
}