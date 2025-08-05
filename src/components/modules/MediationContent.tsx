/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, Clock, FileText, DollarSign, Users, Calendar, Shield, Target, ArrowRight, User, Heart, MessageSquare, HandHeart, Scale, Building, Phone, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function MediationContent() {
  return (
    <div className="space-y-8">
      {/* At a Glance Summary */}
      <Card className="border-l-4 border-l-green-500">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <HandHeart className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">🤝 At a Glance</h2>
              <p className="text-gray-700 mb-4">
                <strong>Quick Summary:</strong> Mediation is a confidential, voluntary process where a neutral third party helps divorcing or separating couples reach mutually acceptable agreements. In Arizona, most family court cases require mediation before trial, making it a crucial step toward resolution.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-600" />
                  <span><strong>Duration:</strong> 2-8 hours (often split across sessions)</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-blue-600" />
                  <span><strong>Cost:</strong> $200-400 per session (shared between parties)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span><strong>Success Rate:</strong> 70-80% of cases reach partial or full agreement</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-orange-600" />
                  <span><strong>Key Benefit:</strong> Confidential, faster, and less expensive than trial</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What is Mediation */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-blue-600" />
            💬 What is Family Law Mediation?
          </h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Core Principles of Mediation</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Voluntary participation:</strong> Both parties must agree to mediate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Neutral mediator:</strong> Impartial third party facilitates discussion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Confidential process:</strong> Discussions cannot be used in court</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Self-determination:</strong> Parties control the outcome, not the mediator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Future-focused:</strong> Emphasis on solutions, not blame</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Interest-based:</strong> Focus on underlying needs, not positions</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">What Mediators Do</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Facilitate communication</li>
                  <li>• Help identify issues</li>
                  <li>• Generate options</li>
                  <li>• Reality-test proposals</li>
                  <li>• Draft agreements</li>
                </ul>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">What Mediators Don't Do</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Give legal advice</li>
                  <li>• Make decisions for parties</li>
                  <li>• Take sides or advocate</li>
                  <li>• Provide therapy or counseling</li>
                  <li>• Force agreements</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Types of Issues Mediated</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Child custody and parenting</li>
                  <li>• Child and spousal support</li>
                  <li>• Property division</li>
                  <li>• Debt allocation</li>
                  <li>• Post-decree modifications</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Arizona Mediation Requirements */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-red-600" />
            ⚖️ Arizona Mediation Requirements
          </h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-3">Mandatory Mediation in Arizona</h3>
              <p className="text-sm text-gray-700 mb-3">
                Arizona courts require mediation in most contested family law cases before trial. This applies to disputes involving:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-red-600" />
                    <span>Child custody and parenting time</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-red-600" />
                    <span>Child support modifications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-red-600" />
                    <span>Spousal maintenance disputes</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-red-600" />
                    <span>Property and debt division</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-red-600" />
                    <span>Post-decree enforcement issues</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-red-600" />
                    <span>Relocation requests</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">When Mediation is Waived</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Domestic violence:</strong> Active restraining orders or safety concerns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Child abuse:</strong> Substantiated abuse allegations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Mental incapacity:</strong> Party unable to participate meaningfully</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Default cases:</strong> One party not participating in case</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">Court-Ordered Mediation Process</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span><strong>Timing:</strong> Usually ordered at case management conference</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span><strong>Deadline:</strong> Must complete within 120 days of order</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-blue-600" />
                    <span><strong>Cost sharing:</strong> Parties split mediator fees equally</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span><strong>Reporting:</strong> Mediator reports completion to court</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Types of Mediation */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-600" />
            🎯 Types of Family Law Mediation
          </h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-3">Comprehensive Mediation</h3>
                <p className="text-sm text-gray-700 mb-3">Addresses all issues in the case at once</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Best for:</strong> Parties who want to resolve everything together</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Timeline:</strong> Usually requires multiple sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Outcome:</strong> Complete settlement agreement or trial on all issues</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-3">Issue-Specific Mediation</h3>
                <p className="text-sm text-gray-700 mb-3">Focuses on particular disputed topics</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Best for:</strong> Cases where most issues are resolved</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Timeline:</strong> Often completed in single session</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Outcome:</strong> Partial agreement with remaining issues for trial</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">Early Mediation</h3>
                <p className="text-sm text-gray-700 mb-3">Conducted early in the case process</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    <span>Before extensive discovery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    <span>Lower cost and emotional toll</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    <span>May require more information gathering</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    <span>Good for cooperative parties</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">Pre-Trial Mediation</h3>
                <p className="text-sm text-gray-700 mb-3">Last chance settlement before trial</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                    <span>After discovery is complete</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                    <span>Parties have full information</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                    <span>Higher settlement rates due to trial proximity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                    <span>Most expensive but comprehensive</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Choosing a Mediator */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-indigo-600" />
            👤 Choosing the Right Mediator
          </h2>
          
          <div className="space-y-6">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-3">Essential Mediator Qualifications</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Court certification:</strong> Approved by Arizona Supreme Court</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Family law experience:</strong> Background in divorce and custody matters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Mediation training:</strong> Completed approved mediation program</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Ongoing education:</strong> Regular training updates and continuing education</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Professional liability:</strong> Appropriate insurance coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Ethical standards:</strong> Bound by professional conduct rules</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Attorney-Mediators</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    <span><strong>Pros:</strong> Legal knowledge, court experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    <span><strong>Cons:</strong> May be more adversarial in style</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    <span><strong>Best for:</strong> Complex legal issues</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Mental Health Mediators</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                    <span><strong>Pros:</strong> Communication skills, child focus</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                    <span><strong>Cons:</strong> Limited legal knowledge</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                    <span><strong>Best for:</strong> High-conflict custody cases</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Retired Judges</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-600" />
                    <span><strong>Pros:</strong> Extensive court experience, reality-testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-600" />
                    <span><strong>Cons:</strong> May be more directive</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-600" />
                    <span><strong>Best for:</strong> Cases needing firm guidance</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-3">Questions to Ask Potential Mediators</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-1">
                  <li>• How many family law mediations have you conducted?</li>
                  <li>• What is your success rate for reaching agreements?</li>
                  <li>• How do you handle high-conflict situations?</li>
                  <li>• What is your fee structure and payment terms?</li>
                </ul>
                <ul className="space-y-1">
                  <li>• How long do sessions typically last?</li>
                  <li>• Do you draft settlement agreements?</li>
                  <li>• Are you available for follow-up sessions if needed?</li>
                  <li>• Can you provide references from recent clients?</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preparing for Mediation */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-orange-600" />
            📚 Preparing for Mediation
          </h2>
          
          <div className="space-y-6">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-3">Essential Pre-Mediation Preparation</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <span className="text-orange-800 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-semibold">Gather All Financial Information</p>
                    <p className="text-sm text-gray-600">Complete financial affidavits, bank statements, tax returns, asset valuations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <span className="text-orange-800 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-semibold">Identify Your Priorities and Interests</p>
                    <p className="text-sm text-gray-600">Distinguish between what you want (positions) and why you want it (interests)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <span className="text-orange-800 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-semibold">Consider Your BATNA</p>
                    <p className="text-sm text-gray-600">Best Alternative to Negotiated Agreement - what happens if mediation fails</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <span className="text-orange-800 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <p className="font-semibold">Prepare Childcare and Parenting Information</p>
                    <p className="text-sm text-gray-600">School schedules, activities, medical needs, current parenting arrangements</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">Documents to Bring</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-green-600" />
                    <span>Financial affidavits and supporting documents</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-green-600" />
                    <span>Property valuations and appraisals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-green-600" />
                    <span>Children's school and medical records</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-green-600" />
                    <span>Current parenting time schedules</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-green-600" />
                    <span>Proposed settlement terms</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">Mental and Emotional Preparation</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Heart className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Manage expectations:</strong> Focus on reasonable outcomes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Practice active listening:</strong> Hear the other party's concerns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Stay future-focused:</strong> Concentrate on solutions, not past grievances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Prepare for compromise:</strong> Identify areas where you can be flexible</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Mediation Process */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-600" />
            🎯 The Mediation Process: What to Expect
          </h2>
          
          <div className="space-y-6">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Typical Mediation Session Structure</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <span className="text-purple-800 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-semibold">Opening Statement (15-30 minutes)</p>
                    <p className="text-sm text-gray-600">Mediator explains process, ground rules, confidentiality</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <span className="text-purple-800 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-semibold">Issue Identification (30-60 minutes)</p>
                    <p className="text-sm text-gray-600">Each party presents their perspective, mediator identifies key issues</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <span className="text-purple-800 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-semibold">Information Gathering (60-90 minutes)</p>
                    <p className="text-sm text-gray-600">Review financial documents, discuss children's needs, clarify facts</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <span className="text-purple-800 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <p className="font-semibold">Option Generation (60-120 minutes)</p>
                    <p className="text-sm text-gray-600">Brainstorm solutions, evaluate proposals, negotiate terms</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <span className="text-purple-800 font-bold text-sm">5</span>
                  </div>
                  <div>
                    <p className="font-semibold">Agreement Drafting (30-60 minutes)</p>
                    <p className="text-sm text-gray-600">Document agreed terms, review and sign memorandum</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">Communication Techniques</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Use "I" statements:</strong> Express your needs without blaming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Ask open-ended questions:</strong> Encourage dialogue and understanding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Acknowledge concerns:</strong> Validate the other party's feelings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Focus on interests:</strong> Explain why something matters to you</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-semibold text-amber-800 mb-3">Managing Difficult Moments</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Take breaks:</strong> Request time to collect thoughts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Use caucus:</strong> Meet privately with mediator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Stay calm:</strong> Don't react to provocative statements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Redirect focus:</strong> Return discussion to children or future</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benefits and Limitations */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-blue-600" />
            ⚖️ Benefits and Limitations of Mediation
          </h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Benefits of Mediation
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Cost-effective:</strong> Much less expensive than trial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Faster resolution:</strong> Weeks or months vs. years in court</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Confidential process:</strong> Private discussions, no public record</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Party control:</strong> You decide the outcome, not a judge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Flexible solutions:</strong> Creative agreements not available in court</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Better co-parenting:</strong> Improved communication for future</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Less adversarial:</strong> Reduces hostility and emotional trauma</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Limitations and Concerns
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Power imbalances:</strong> One party may dominate discussions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>No legal advice:</strong> Mediator cannot advise individual parties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>No enforceable orders:</strong> Agreements require court approval</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>May delay resolution:</strong> Failed mediation means trial preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Pressure to settle:</strong> May agree to unfavorable terms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Hidden assets:</strong> Relies on good faith disclosure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Unsuitable for abuse:</strong> Not appropriate with domestic violence</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">When Mediation Works Best</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Both parties willing to negotiate in good faith</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Similar bargaining power between parties</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Full financial disclosure has occurred</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Children's interests are prioritized</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Parties want to maintain ongoing relationship</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Creative solutions are needed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Cost and time are important factors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Privacy and confidentiality are valued</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* When Mediation Fails */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            ⚠️ When Mediation Doesn't Work
          </h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-3">Common Reasons Mediation Fails</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Unrealistic expectations:</strong> One party wants "everything"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>High conflict:</strong> Too much anger and hostility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Hidden assets:</strong> Lack of full financial disclosure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Power imbalance:</strong> One party intimidates the other</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Principled positions:</strong> "It's the principle of the matter"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Mental health issues:</strong> Untreated substance abuse or personality disorders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Complex valuation issues:</strong> Disputed business or asset values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Bad faith participation:</strong> Using mediation to delay or gather information</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-3">What Happens After Failed Mediation</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-orange-600" />
                    <span>Case proceeds to trial on unresolved issues</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-orange-600" />
                    <span>Mediator files completion report with court</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-orange-600" />
                    <span>Discovery process may resume or continue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-orange-600" />
                    <span>Trial preparation begins or intensifies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-orange-600" />
                    <span>Settlement conferences may be scheduled</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">Partial Success Options</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Partial agreements:</strong> Settle some issues, trial on others</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Narrow issues:</strong> Focus trial on specific disputes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Follow-up mediation:</strong> Try again after cooling-off period</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Different mediator:</strong> Sometimes a new perspective helps</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cost and Logistics */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-600" />
            💰 Cost and Logistics
          </h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">Typical Costs</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Hourly rates:</strong> $150-400 per hour per party</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Half-day sessions:</strong> $800-1,600 total (split between parties)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Full-day sessions:</strong> $1,600-3,200 total (split between parties)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Agreement drafting:</strong> $200-500 additional</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">Cost Comparison</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span><strong>Mediation:</strong> $2,000-8,000 total</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600" />
                    <span><strong>Contested trial:</strong> $15,000-50,000+ each party</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span><strong>Time savings:</strong> Weeks vs. 1-2 years</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-blue-600" />
                    <span><strong>Emotional cost:</strong> Significantly less stressful</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Scheduling and Logistics</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    <span><strong>Session length:</strong> 3-8 hours typical</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    <span><strong>Multiple sessions:</strong> Often required for complex cases</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-purple-600" />
                    <span><strong>Location:</strong> Mediator's office or neutral venue</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-600" />
                    <span><strong>Attendance:</strong> Both parties required</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <User className="w-4 h-4 text-purple-600" />
                    <span><strong>Attorneys:</strong> May attend but not required</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-purple-600" />
                    <span><strong>Remote options:</strong> Video mediation available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="border-l-4 border-l-green-500">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-green-600" />
            🎯 Next Steps After Mediation
          </h2>
          
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-green-800 mb-2">Full Agreement</h3>
                <p className="text-sm text-gray-600">Convert mediation agreement into court decree</p>
              </div>
              
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <Scale className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-blue-800 mb-2">Partial Agreement</h3>
                <p className="text-sm text-gray-600">Proceed to trial on remaining disputed issues</p>
                <Link href="/modules/trial-prep" className="text-blue-600 text-xs hover:underline">
                  Learn more →
                </Link>
              </div>
              
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-orange-800 mb-2">No Agreement</h3>
                <p className="text-sm text-gray-600">Return to litigation process and trial preparation</p>
                <Link href="/modules/trial-prep" className="text-orange-600 text-xs hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Remember:</strong> Even if mediation doesn't result in a complete agreement, the process often helps 
                narrow issues and improve communication between parties. Many cases settle some issues in mediation and 
                proceed to trial only on the most contentious matters, saving time and money while reducing conflict.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}