'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Upload, Download, FileText, File, Image, Folder, Share2, Lock, Unlock, Clock, CheckCircle, XCircle, AlertTriangle, Search, Filter, Grid, List, Eye, Trash2, Edit3, Users, Shield, Link2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export interface SharedDocument {
  id: string;
  name: string;
  type: string;
  size: number;
  uploadedAt: Date;
  uploadedBy: {
    id: string;
    name: string;
    role: 'attorney' | 'client' | 'opposing_party' | 'court';
  };
  category: 'pleading' | 'discovery' | 'financial' | 'evidence' | 'correspondence' | 'court_order' | 'agreement' | 'other';
  status: 'pending_review' | 'reviewed' | 'approved' | 'rejected' | 'signed';
  confidential: boolean;
  encrypted: boolean;
  sharedWith: {
    userId: string;
    name: string;
    permission: 'view' | 'edit' | 'download' | 'share';
    sharedAt: Date;
  }[];
  version: number;
  previousVersions?: {
    id: string;
    version: number;
    uploadedAt: Date;
    uploadedBy: string;
  }[];
  metadata?: {
    caseNumber?: string;
    courtDate?: Date;
    dueDate?: Date;
    description?: string;
    tags?: string[];
    batesNumber?: string;
    pageCount?: number;
  };
  accessLog?: {
    userId: string;
    action: 'view' | 'download' | 'edit' | 'share' | 'delete';
    timestamp: Date;
    ip?: string;
  }[];
  expiresAt?: Date;
  watermarked?: boolean;
  signatureRequired?: boolean;
  signatures?: {
    userId: string;
    name: string;
    signedAt: Date;
    ip: string;
  }[];
}

interface DocumentFolder {
  id: string;
  name: string;
  parentId?: string;
  createdAt: Date;
  createdBy: string;
  documents: string[]; // Document IDs
  subfolders: string[]; // Subfolder IDs
  sharedWith: {
    userId: string;
    permission: 'view' | 'edit' | 'manage';
  }[];
}

interface DocumentSharingProps {
  userId: string;
  caseId?: string;
  onDocumentSelect?: (document: SharedDocument) => void;
  onUploadComplete?: (document: SharedDocument) => void;
}

// Sample documents for demonstration
const SAMPLE_DOCUMENTS: SharedDocument[] = [
  {
    id: 'doc1',
    name: 'Divorce Petition - Filed.pdf',
    type: 'application/pdf',
    size: 2456789,
    uploadedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5),
    uploadedBy: { id: 'user1', name: 'Sarah Johnson', role: 'attorney' },
    category: 'pleading',
    status: 'approved',
    confidential: false,
    encrypted: true,
    sharedWith: [
      { userId: 'client1', name: 'John Smith', permission: 'view', sharedAt: new Date() }
    ],
    version: 2,
    metadata: {
      caseNumber: 'FC2024-001234',
      courtDate: new Date('2024-03-15'),
      description: 'Initial divorce petition filed with the court',
      tags: ['divorce', 'petition', 'filed'],
      pageCount: 12
    },
    watermarked: true
  },
  {
    id: 'doc2',
    name: 'Financial Affidavit.xlsx',
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    size: 456789,
    uploadedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
    uploadedBy: { id: 'client1', name: 'John Smith', role: 'client' },
    category: 'financial',
    status: 'pending_review',
    confidential: true,
    encrypted: true,
    sharedWith: [
      { userId: 'attorney1', name: 'Sarah Johnson', permission: 'edit', sharedAt: new Date() }
    ],
    version: 1,
    metadata: {
      caseNumber: 'FC2024-001234',
      dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      description: 'Complete financial disclosure',
      tags: ['financial', 'disclosure', 'affidavit']
    }
  },
  {
    id: 'doc3',
    name: 'Parenting Plan Draft v3.docx',
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    size: 156789,
    uploadedAt: new Date(Date.now() - 1000 * 60 * 60 * 12),
    uploadedBy: { id: 'user1', name: 'Sarah Johnson', role: 'attorney' },
    category: 'agreement',
    status: 'reviewed',
    confidential: false,
    encrypted: true,
    sharedWith: [
      { userId: 'client1', name: 'John Smith', permission: 'edit', sharedAt: new Date() },
      { userId: 'opposing1', name: 'Jane Doe', permission: 'view', sharedAt: new Date() }
    ],
    version: 3,
    previousVersions: [
      { id: 'doc3v1', version: 1, uploadedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7), uploadedBy: 'user1' },
      { id: 'doc3v2', version: 2, uploadedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), uploadedBy: 'user1' }
    ],
    metadata: {
      caseNumber: 'FC2024-001234',
      description: 'Proposed parenting plan with holiday schedule',
      tags: ['parenting', 'custody', 'draft'],
      pageCount: 8
    },
    signatureRequired: true,
    signatures: []
  }
];

export default function DocumentSharing({
  userId,
  caseId,
  onDocumentSelect,
  onUploadComplete
}: DocumentSharingProps) {
  const [documents, setDocuments] = useState<SharedDocument[]>(SAMPLE_DOCUMENTS);
  const [selectedDocument, setSelectedDocument] = useState<SharedDocument | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [filter, setFilter] = useState<'all' | 'shared_with_me' | 'shared_by_me' | 'pending' | 'signed'>('all');
  const [categoryFilter, setCategoryFilter] = useState<SharedDocument['category'] | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set());
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Filter documents
  const getFilteredDocuments = (): SharedDocument[] => {
    let filtered = [...documents];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(doc => 
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.metadata?.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.metadata?.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(doc => doc.category === categoryFilter);
    }

    // Status filter
    switch (filter) {
      case 'shared_with_me':
        filtered = filtered.filter(doc => 
          doc.sharedWith.some(share => share.userId === userId)
        );
        break;
      case 'shared_by_me':
        filtered = filtered.filter(doc => doc.uploadedBy.id === userId);
        break;
      case 'pending':
        filtered = filtered.filter(doc => doc.status === 'pending_review');
        break;
      case 'signed':
        filtered = filtered.filter(doc => 
          doc.signatures && doc.signatures.length > 0
        );
        break;
    }

    return filtered.sort((a, b) => b.uploadedAt.getTime() - a.uploadedAt.getTime());
  };

  // Handle file upload
  const handleFileUpload = (files: FileList) => {
    Array.from(files).forEach(file => {
      const newDoc: SharedDocument = {
        id: `doc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        name: file.name,
        type: file.type,
        size: file.size,
        uploadedAt: new Date(),
        uploadedBy: { id: userId, name: 'Current User', role: 'client' },
        category: 'other',
        status: 'pending_review',
        confidential: false,
        encrypted: true,
        sharedWith: [],
        version: 1,
        metadata: {
          caseNumber: caseId,
          tags: []
        }
      };

      setDocuments(prev => [newDoc, ...prev]);
      
      if (onUploadComplete) {
        onUploadComplete(newDoc);
      }
    });
  };

  // Handle document download
  const handleDownload = (document: SharedDocument) => {
    // Log access
    const accessEntry = {
      userId,
      action: 'download' as const,
      timestamp: new Date()
    };
    
    // In production, would trigger actual download
    console.log('Downloading:', document.name);
    
    // Update access log
    if (!document.accessLog) {
      document.accessLog = [];
    }
    document.accessLog.push(accessEntry);
  };

  // Handle document sharing
  const handleShare = (documentId: string, shareWith: { userId: string; name: string; permission: 'view' | 'edit' | 'download' | 'share' }) => {
    setDocuments(prev => 
      prev.map(doc => {
        if (doc.id === documentId) {
          return {
            ...doc,
            sharedWith: [...doc.sharedWith, { ...shareWith, sharedAt: new Date() }]
          };
        }
        return doc;
      })
    );
  };

  // Format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  // Get file icon based on type
  const getFileIcon = (type: string) => {
    if (type.includes('image')) return <Image className="w-5 h-5" />;
    if (type.includes('pdf')) return <FileText className="w-5 h-5 text-red-600" />;
    if (type.includes('word')) return <FileText className="w-5 h-5 text-blue-600" />;
    if (type.includes('sheet')) return <FileText className="w-5 h-5 text-green-600" />;
    return <File className="w-5 h-5" />;
  };

  // Get status badge
  const getStatusBadge = (status: SharedDocument['status']) => {
    switch (status) {
      case 'pending_review':
        return <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Pending Review</span>;
      case 'reviewed':
        return <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Reviewed</span>;
      case 'approved':
        return <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Approved</span>;
      case 'rejected':
        return <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">Rejected</span>;
      case 'signed':
        return <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Signed</span>;
    }
  };

  const filteredDocuments = getFilteredDocuments();

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold">Document Sharing</h2>
              <p className="text-sm text-gray-600">
                Securely share and manage case documents
              </p>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload Documents
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
                className="hidden"
              />
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                />
              </div>
            </div>

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value as any)}
              className="px-3 py-2 border rounded-lg"
            >
              <option value="all">All Categories</option>
              <option value="pleading">Pleadings</option>
              <option value="discovery">Discovery</option>
              <option value="financial">Financial</option>
              <option value="evidence">Evidence</option>
              <option value="correspondence">Correspondence</option>
              <option value="court_order">Court Orders</option>
              <option value="agreement">Agreements</option>
              <option value="other">Other</option>
            </select>

            <div className="flex gap-1 border rounded-lg p-1">
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
              >
                <List className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 overflow-x-auto">
            {['all', 'shared_with_me', 'shared_by_me', 'pending', 'signed'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === f 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {f.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Documents List/Grid */}
      {filteredDocuments.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <Folder className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No documents found</h3>
            <p className="text-gray-500">
              Upload documents to get started or adjust your filters
            </p>
          </CardContent>
        </Card>
      ) : viewMode === 'list' ? (
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">Name</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">Category</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">Status</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">Uploaded</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">Size</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredDocuments.map(doc => (
                    <tr key={doc.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          {getFileIcon(doc.type)}
                          <div>
                            <div className="font-medium text-sm">{doc.name}</div>
                            {doc.metadata?.description && (
                              <div className="text-xs text-gray-500">{doc.metadata.description}</div>
                            )}
                          </div>
                          <div className="flex gap-1">
                            {doc.confidential && (
                              <span title="Confidential">
                                <Lock className="w-4 h-4 text-gray-400" />
                              </span>
                            )}
                            {doc.encrypted && (
                              <span title="Encrypted">
                                <Shield className="w-4 h-4 text-green-600" />
                              </span>
                            )}
                            {doc.watermarked && (
                              <span title="Watermarked">
                                <FileText className="w-4 h-4 text-blue-600" />
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-sm text-gray-600 capitalize">
                          {doc.category.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {getStatusBadge(doc.status)}
                      </td>
                      <td className="px-4 py-3">
                        <div className="text-sm">
                          <div>{doc.uploadedAt.toLocaleDateString()}</div>
                          <div className="text-xs text-gray-500">by {doc.uploadedBy.name}</div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-sm text-gray-600">{formatFileSize(doc.size)}</span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-1">
                          <button
                            onClick={() => {
                              setSelectedDocument(doc);
                              if (onDocumentSelect) onDocumentSelect(doc);
                            }}
                            className="p-1.5 hover:bg-gray-100 rounded"
                            aria-label="View"
                          >
                            <Eye className="w-4 h-4 text-gray-500" />
                          </button>
                          <button
                            onClick={() => handleDownload(doc)}
                            className="p-1.5 hover:bg-gray-100 rounded"
                            aria-label="Download"
                          >
                            <Download className="w-4 h-4 text-gray-500" />
                          </button>
                          <button
                            onClick={() => {
                              setSelectedDocument(doc);
                              setShowShareModal(true);
                            }}
                            className="p-1.5 hover:bg-gray-100 rounded"
                            aria-label="Share"
                          >
                            <Share2 className="w-4 h-4 text-gray-500" />
                          </button>
                          {doc.uploadedBy.id === userId && (
                            <button
                              className="p-1.5 hover:bg-gray-100 rounded"
                              aria-label="Delete"
                            >
                              <Trash2 className="w-4 h-4 text-gray-500" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredDocuments.map(doc => (
            <Card key={doc.id} className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => {
                    setSelectedDocument(doc);
                    if (onDocumentSelect) onDocumentSelect(doc);
                  }}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  {getFileIcon(doc.type)}
                  <div className="flex gap-1">
                    {doc.confidential && <Lock className="w-3 h-3 text-gray-400" />}
                    {doc.encrypted && <Shield className="w-3 h-3 text-green-600" />}
                  </div>
                </div>
                
                <h3 className="font-medium text-sm mb-1 line-clamp-2">{doc.name}</h3>
                {doc.metadata?.description && (
                  <p className="text-xs text-gray-500 mb-2 line-clamp-2">{doc.metadata.description}</p>
                )}
                
                <div className="space-y-1 text-xs text-gray-600">
                  <div>{formatFileSize(doc.size)}</div>
                  <div>{doc.uploadedAt.toLocaleDateString()}</div>
                </div>

                <div className="mt-3">
                  {getStatusBadge(doc.status)}
                </div>

                <div className="mt-3 pt-3 border-t flex justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(doc);
                    }}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDocument(doc);
                      setShowShareModal(true);
                    }}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Security Notice */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-semibold mb-2">Document Security</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• All documents are encrypted at rest and in transit</li>
                <li>• Access is logged for audit trail purposes</li>
                <li>• Confidential documents require additional authentication</li>
                <li>• Documents may be watermarked with user information</li>
                <li>• Sharing creates a permanent record for legal compliance</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}