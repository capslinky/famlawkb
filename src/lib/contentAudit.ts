// Content Audit System
// Comprehensive content review and quality assurance system

export interface ContentPage {
  id: string;
  path: string;
  title: string;
  component: string;
  category: 'topic' | 'procedure' | 'form' | 'resource' | 'tool' | 'module' | 'reference';
  priority: 'critical' | 'high' | 'medium' | 'low';
  lastModified?: Date;
  wordCount?: number;
  readingTime?: number;
  status: 'complete' | 'partial' | 'placeholder' | 'needs-review';
}

export interface ContentAuditCriteria {
  legalAccuracy: {
    statutes: boolean;
    caselaw: boolean;
    procedures: boolean;
    formsAccuracy: boolean;
    disclaimers: boolean;
  };
  completeness: {
    introduction: boolean;
    mainContent: boolean;
    examples: boolean;
    nextSteps: boolean;
    relatedLinks: boolean;
    faqs: boolean;
  };
  userExperience: {
    clarity: boolean;
    structure: boolean;
    navigation: boolean;
    visualAids: boolean;
    actionability: boolean;
    mobileOptimized: boolean;
  };
  technical: {
    seoOptimized: boolean;
    metaTags: boolean;
    headingStructure: boolean;
    altText: boolean;
    loadTime: boolean;
    brokenLinks: boolean;
  };
  accessibility: {
    wcagCompliant: boolean;
    readabilityScore: number;
    contrastRatio: boolean;
    keyboardNav: boolean;
    screenReader: boolean;
    languageSimplicity: boolean;
  };
}

export interface ContentAuditResult {
  pageId: string;
  path: string;
  score: number;
  status: 'passed' | 'needs-improvement' | 'failed';
  criteria: ContentAuditCriteria;
  issues: ContentIssue[];
  recommendations: string[];
  metrics: {
    wordCount: number;
    readingTime: number;
    gradeLevel: number;
    sentenceComplexity: number;
    passiveVoicePercentage: number;
  };
}

export interface ContentIssue {
  id: string;
  severity: 'critical' | 'major' | 'minor' | 'suggestion';
  category: string;
  description: string;
  location?: string;
  recommendation: string;
}

export interface AuditReport {
  timestamp: Date;
  summary: {
    totalPages: number;
    passedPages: number;
    failedPages: number;
    needsImprovementPages: number;
    averageScore: number;
    criticalIssues: number;
    totalIssues: number;
  };
  byCategory: Map<string, CategorySummary>;
  results: ContentAuditResult[];
  prioritizedActions: ActionItem[];
}

export interface CategorySummary {
  category: string;
  pageCount: number;
  averageScore: number;
  commonIssues: string[];
  status: 'good' | 'needs-attention' | 'critical';
}

export interface ActionItem {
  priority: 'immediate' | 'high' | 'medium' | 'low';
  page: string;
  action: string;
  impact: string;
  estimatedTime: string;
}

class ContentAuditService {
  private contentInventory: ContentPage[] = [];
  private auditResults: Map<string, ContentAuditResult> = new Map();

  constructor() {
    this.initializeContentInventory();
  }

  // Initialize content inventory with all pages
  private initializeContentInventory(): void {
    this.contentInventory = [
      // Main Topics
      {
        id: 'getting-divorced',
        path: '/getting-divorced',
        title: 'Getting Divorced in Arizona',
        component: 'GettingDivorcedContent.tsx',
        category: 'topic',
        priority: 'critical',
        status: 'complete'
      },
      {
        id: 'child-custody',
        path: '/child-custody',
        title: 'Child Custody',
        component: 'ChildCustodyContent.tsx',
        category: 'topic',
        priority: 'critical',
        status: 'complete'
      },
      {
        id: 'child-support',
        path: '/topics/child-support',
        title: 'Child Support',
        component: 'ChildSupportContent.tsx',
        category: 'topic',
        priority: 'critical',
        status: 'complete'
      },
      {
        id: 'property-division',
        path: '/topics/property-division',
        title: 'Property Division',
        component: 'PropertyDivisionContent.tsx',
        category: 'topic',
        priority: 'high',
        status: 'complete'
      },
      {
        id: 'spousal-maintenance',
        path: '/topics/spousal-maintenance',
        title: 'Spousal Maintenance',
        component: 'SpousalMaintenanceContent.tsx',
        category: 'topic',
        priority: 'high',
        status: 'complete'
      },
      {
        id: 'get-protection',
        path: '/get-protection',
        title: 'Get Protection',
        component: 'GetProtectionContent.tsx',
        category: 'topic',
        priority: 'critical',
        status: 'complete'
      },

      // Procedures
      {
        id: 'court-procedures',
        path: '/procedures/court-procedures',
        title: 'Court Procedures',
        component: 'CourtProceduresContent.tsx',
        category: 'procedure',
        priority: 'critical',
        status: 'complete'
      },
      {
        id: 'emergency-orders',
        path: '/procedures/emergency-orders',
        title: 'Emergency Orders',
        component: 'EmergencyOrdersContent.tsx',
        category: 'procedure',
        priority: 'critical',
        status: 'complete'
      },

      // Divorce Types
      {
        id: 'uncontested-simple',
        path: '/divorce/uncontested-simple',
        title: 'Uncontested Divorce (Simple)',
        component: 'UncontestedSimpleContent.tsx',
        category: 'procedure',
        priority: 'high',
        status: 'complete'
      },
      {
        id: 'uncontested-children',
        path: '/divorce/uncontested-with-children',
        title: 'Uncontested Divorce with Children',
        component: 'UncontestedWithChildrenContent.tsx',
        category: 'procedure',
        priority: 'high',
        status: 'complete'
      },
      {
        id: 'contested-divorce',
        path: '/divorce/contested-full',
        title: 'Contested Divorce',
        component: 'ContestedFullContent.tsx',
        category: 'procedure',
        priority: 'high',
        status: 'complete'
      },

      // Forms
      {
        id: 'forms-hub',
        path: '/forms',
        title: 'Court Forms Hub',
        component: 'FormsContent.tsx',
        category: 'form',
        priority: 'high',
        status: 'complete'
      },
      {
        id: 'divorce-petition-children',
        path: '/forms/divorce-petition-children',
        title: 'Divorce Petition with Children',
        component: 'DivorcePetitionChildrenContent.tsx',
        category: 'form',
        priority: 'high',
        status: 'complete'
      },
      {
        id: 'response-petition',
        path: '/forms/response-petition',
        title: 'Response to Petition',
        component: 'ResponsePetitionContent.tsx',
        category: 'form',
        priority: 'high',
        status: 'complete'
      },

      // Resources
      {
        id: 'resources-hub',
        path: '/resources',
        title: 'Resources Hub',
        component: 'ResourcesContent.tsx',
        category: 'resource',
        priority: 'medium',
        status: 'complete'
      },
      {
        id: 'self-representation',
        path: '/resources/self-representation-guide',
        title: 'Self-Representation Guide',
        component: 'SelfRepresentationGuideContent.tsx',
        category: 'resource',
        priority: 'high',
        status: 'complete'
      },
      {
        id: 'legal-representation',
        path: '/resources/legal-representation',
        title: 'Legal Representation Guide',
        component: 'LegalRepresentationContent.tsx',
        category: 'resource',
        priority: 'high',
        status: 'complete'
      },

      // Reference
      {
        id: 'faq',
        path: '/reference/faq',
        title: 'Frequently Asked Questions',
        component: 'FAQContent.tsx',
        category: 'reference',
        priority: 'high',
        status: 'complete'
      },
      {
        id: 'legal-disclaimer',
        path: '/legal-disclaimer',
        title: 'Legal Disclaimer',
        component: 'LegalDisclaimerContent.tsx',
        category: 'reference',
        priority: 'critical',
        status: 'complete'
      },

      // Process Modules
      {
        id: 'module-responding',
        path: '/modules/responding',
        title: 'Responding to Divorce',
        component: 'RespondingContent.tsx',
        category: 'module',
        priority: 'high',
        status: 'complete'
      },
      {
        id: 'module-first-appearance',
        path: '/modules/first-appearance',
        title: 'First Court Appearance',
        component: 'FirstAppearanceContent.tsx',
        category: 'module',
        priority: 'high',
        status: 'complete'
      },
      {
        id: 'module-disclosures',
        path: '/modules/disclosures',
        title: 'Financial Disclosures',
        component: 'DisclosuresContent.tsx',
        category: 'module',
        priority: 'high',
        status: 'complete'
      },
      {
        id: 'module-temporary-orders',
        path: '/modules/temporary-orders',
        title: 'Temporary Orders',
        component: 'TemporaryOrdersContent.tsx',
        category: 'module',
        priority: 'high',
        status: 'complete'
      },
      {
        id: 'module-mediation',
        path: '/modules/mediation',
        title: 'Mediation',
        component: 'MediationContent.tsx',
        category: 'module',
        priority: 'high',
        status: 'complete'
      },
      {
        id: 'module-trial-prep',
        path: '/modules/trial-prep',
        title: 'Trial Preparation',
        component: 'TrialPrepContent.tsx',
        category: 'module',
        priority: 'high',
        status: 'complete'
      },
      {
        id: 'module-modifications',
        path: '/modules/modifications',
        title: 'Post-Decree Modifications',
        component: 'ModificationsContent.tsx',
        category: 'module',
        priority: 'medium',
        status: 'complete'
      },
      {
        id: 'module-enforcement',
        path: '/modules/enforcement-appeals',
        title: 'Enforcement & Appeals',
        component: 'EnforcementAppealsContent.tsx',
        category: 'module',
        priority: 'medium',
        status: 'complete'
      },

      // Tools
      {
        id: 'support-calculator',
        path: '/support/calculator',
        title: 'Child Support Calculator',
        component: 'CalculatorPage.tsx',
        category: 'tool',
        priority: 'critical',
        status: 'placeholder'
      },
      {
        id: 'assessment-tool',
        path: '/assessment',
        title: 'Legal Situation Assessment',
        component: 'AssessmentTool.tsx',
        category: 'tool',
        priority: 'critical',
        status: 'complete'
      },
      {
        id: 'calculators-hub',
        path: '/calculators',
        title: 'Financial Calculators',
        component: 'CalculatorsPage.tsx',
        category: 'tool',
        priority: 'high',
        status: 'complete'
      }
    ];
  }

  // Run comprehensive audit on a single page
  async auditPage(pageId: string): Promise<ContentAuditResult> {
    const page = this.contentInventory.find(p => p.id === pageId);
    if (!page) {
      throw new Error(`Page ${pageId} not found in inventory`);
    }

    const result: ContentAuditResult = {
      pageId: page.id,
      path: page.path,
      score: 0,
      status: 'passed',
      criteria: this.getDefaultCriteria(),
      issues: [],
      recommendations: [],
      metrics: {
        wordCount: 0,
        readingTime: 0,
        gradeLevel: 0,
        sentenceComplexity: 0,
        passiveVoicePercentage: 0
      }
    };

    // Run audit checks
    this.checkLegalAccuracy(page, result);
    this.checkCompleteness(page, result);
    this.checkUserExperience(page, result);
    this.checkTechnical(page, result);
    this.checkAccessibility(page, result);

    // Calculate score
    result.score = this.calculateScore(result.criteria);
    result.status = this.determineStatus(result.score);

    // Generate recommendations
    result.recommendations = this.generateRecommendations(result);

    // Store result
    this.auditResults.set(pageId, result);

    return result;
  }

  // Check legal accuracy
  private checkLegalAccuracy(page: ContentPage, result: ContentAuditResult): void {
    // Check for required legal elements based on page type
    if (page.category === 'topic' || page.category === 'procedure') {
      // Check for statute references
      if (!this.hasStatuteReferences(page)) {
        result.issues.push({
          id: `${page.id}-statutes`,
          severity: 'major',
          category: 'legal',
          description: 'Missing Arizona statute references',
          recommendation: 'Add relevant A.R.S. citations'
        });
        result.criteria.legalAccuracy.statutes = false;
      }

      // Check for disclaimers
      if (page.priority === 'critical' && !this.hasLegalDisclaimer(page)) {
        result.issues.push({
          id: `${page.id}-disclaimer`,
          severity: 'critical',
          category: 'legal',
          description: 'Missing legal disclaimer',
          recommendation: 'Add disclaimer stating this is not legal advice'
        });
        result.criteria.legalAccuracy.disclaimers = false;
      }
    }

    // Check forms accuracy
    if (page.category === 'form') {
      if (!this.hasCurrentFormVersion(page)) {
        result.issues.push({
          id: `${page.id}-form-version`,
          severity: 'critical',
          category: 'legal',
          description: 'Form version may be outdated',
          recommendation: 'Verify form is current version from Arizona courts'
        });
        result.criteria.legalAccuracy.formsAccuracy = false;
      }
    }
  }

  // Check content completeness
  private checkCompleteness(page: ContentPage, result: ContentAuditResult): void {
    const requiredSections = this.getRequiredSections(page.category);
    
    requiredSections.forEach(section => {
      if (!this.hasSection(page, section)) {
        result.issues.push({
          id: `${page.id}-missing-${section}`,
          severity: 'major',
          category: 'completeness',
          description: `Missing ${section} section`,
          recommendation: `Add ${section} section to improve completeness`
        });
        
        // Update criteria based on missing section
        switch (section) {
          case 'introduction':
            result.criteria.completeness.introduction = false;
            break;
          case 'examples':
            result.criteria.completeness.examples = false;
            break;
          case 'next-steps':
            result.criteria.completeness.nextSteps = false;
            break;
          case 'related-links':
            result.criteria.completeness.relatedLinks = false;
            break;
          case 'faqs':
            result.criteria.completeness.faqs = false;
            break;
        }
      }
    });

    // Check word count
    if (page.wordCount && page.wordCount < this.getMinWordCount(page.category)) {
      result.issues.push({
        id: `${page.id}-word-count`,
        severity: 'minor',
        category: 'completeness',
        description: `Content too brief (${page.wordCount} words)`,
        recommendation: `Expand content to at least ${this.getMinWordCount(page.category)} words`
      });
    }
  }

  // Check user experience
  private checkUserExperience(page: ContentPage, result: ContentAuditResult): void {
    // Check readability
    const readabilityScore = this.calculateReadabilityScore(page);
    if (readabilityScore > 12) { // Grade 12 reading level
      result.issues.push({
        id: `${page.id}-readability`,
        severity: 'major',
        category: 'ux',
        description: `Content too complex (Grade ${readabilityScore} reading level)`,
        recommendation: 'Simplify language to Grade 8-10 reading level'
      });
      result.criteria.userExperience.clarity = false;
    }

    // Check for visual aids
    if (page.category === 'procedure' && !this.hasVisualAids(page)) {
      result.issues.push({
        id: `${page.id}-visual-aids`,
        severity: 'minor',
        category: 'ux',
        description: 'No visual aids or diagrams',
        recommendation: 'Add flowcharts or diagrams to illustrate process'
      });
      result.criteria.userExperience.visualAids = false;
    }

    // Check actionability
    if (!this.hasActionableContent(page)) {
      result.issues.push({
        id: `${page.id}-actionability`,
        severity: 'major',
        category: 'ux',
        description: 'Content lacks clear action items',
        recommendation: 'Add clear, actionable next steps'
      });
      result.criteria.userExperience.actionability = false;
    }
  }

  // Check technical aspects
  private checkTechnical(page: ContentPage, result: ContentAuditResult): void {
    // Check SEO
    if (!this.hasSEOOptimization(page)) {
      result.issues.push({
        id: `${page.id}-seo`,
        severity: 'minor',
        category: 'technical',
        description: 'Missing SEO optimization',
        recommendation: 'Add meta description and keywords'
      });
      result.criteria.technical.seoOptimized = false;
    }

    // Check heading structure
    if (!this.hasProperHeadingStructure(page)) {
      result.issues.push({
        id: `${page.id}-headings`,
        severity: 'minor',
        category: 'technical',
        description: 'Improper heading hierarchy',
        recommendation: 'Fix heading structure (H1 -> H2 -> H3)'
      });
      result.criteria.technical.headingStructure = false;
    }
  }

  // Check accessibility
  private checkAccessibility(page: ContentPage, result: ContentAuditResult): void {
    // Check WCAG compliance
    if (!this.isWCAGCompliant(page)) {
      result.issues.push({
        id: `${page.id}-wcag`,
        severity: 'critical',
        category: 'accessibility',
        description: 'Not WCAG 2.1 Level AA compliant',
        recommendation: 'Review and fix accessibility issues'
      });
      result.criteria.accessibility.wcagCompliant = false;
    }

    // Check language simplicity
    if (!this.hasSimpleLanguage(page)) {
      result.issues.push({
        id: `${page.id}-language`,
        severity: 'major',
        category: 'accessibility',
        description: 'Language too complex for general audience',
        recommendation: 'Use plain language and define legal terms'
      });
      result.criteria.accessibility.languageSimplicity = false;
    }
  }

  // Helper methods (simplified implementations)
  private getDefaultCriteria(): ContentAuditCriteria {
    return {
      legalAccuracy: {
        statutes: true,
        caselaw: true,
        procedures: true,
        formsAccuracy: true,
        disclaimers: true
      },
      completeness: {
        introduction: true,
        mainContent: true,
        examples: true,
        nextSteps: true,
        relatedLinks: true,
        faqs: true
      },
      userExperience: {
        clarity: true,
        structure: true,
        navigation: true,
        visualAids: true,
        actionability: true,
        mobileOptimized: true
      },
      technical: {
        seoOptimized: true,
        metaTags: true,
        headingStructure: true,
        altText: true,
        loadTime: true,
        brokenLinks: false
      },
      accessibility: {
        wcagCompliant: true,
        readabilityScore: 10,
        contrastRatio: true,
        keyboardNav: true,
        screenReader: true,
        languageSimplicity: true
      }
    };
  }

  private hasStatuteReferences(page: ContentPage): boolean {
    // Check if page contains A.R.S. references
    return page.status === 'complete'; // Simplified
  }

  private hasLegalDisclaimer(page: ContentPage): boolean {
    return page.status === 'complete'; // Simplified
  }

  private hasCurrentFormVersion(page: ContentPage): boolean {
    return true; // Simplified - would check actual form versions
  }

  private getRequiredSections(category: string): string[] {
    switch (category) {
      case 'topic':
        return ['introduction', 'main-content', 'examples', 'next-steps', 'related-links'];
      case 'procedure':
        return ['introduction', 'requirements', 'steps', 'timeline', 'next-steps'];
      case 'form':
        return ['description', 'when-to-use', 'instructions', 'common-mistakes'];
      case 'module':
        return ['overview', 'objectives', 'content', 'action-items'];
      default:
        return ['introduction', 'main-content', 'next-steps'];
    }
  }

  private hasSection(page: ContentPage, section: string): boolean {
    return page.status === 'complete'; // Simplified
  }

  private getMinWordCount(category: string): number {
    switch (category) {
      case 'topic':
        return 800;
      case 'procedure':
        return 600;
      case 'form':
        return 400;
      case 'module':
        return 700;
      case 'reference':
        return 500;
      default:
        return 500;
    }
  }

  private calculateReadabilityScore(page: ContentPage): number {
    // Simplified Flesch-Kincaid grade level
    return 10; // Placeholder
  }

  private hasVisualAids(page: ContentPage): boolean {
    return page.status === 'complete';
  }

  private hasActionableContent(page: ContentPage): boolean {
    return page.status === 'complete';
  }

  private hasSEOOptimization(page: ContentPage): boolean {
    return true; // All pages have metadata
  }

  private hasProperHeadingStructure(page: ContentPage): boolean {
    return true; // Simplified
  }

  private isWCAGCompliant(page: ContentPage): boolean {
    return page.status === 'complete';
  }

  private hasSimpleLanguage(page: ContentPage): boolean {
    return true; // Simplified
  }

  private calculateScore(criteria: ContentAuditCriteria): number {
    let totalPoints = 0;
    let maxPoints = 0;

    // Legal accuracy (25%)
    Object.values(criteria.legalAccuracy).forEach(value => {
      maxPoints += 5;
      if (value) totalPoints += 5;
    });

    // Completeness (25%)
    Object.values(criteria.completeness).forEach(value => {
      maxPoints += 4.17;
      if (value) totalPoints += 4.17;
    });

    // User experience (20%)
    Object.values(criteria.userExperience).forEach(value => {
      maxPoints += 3.33;
      if (value) totalPoints += 3.33;
    });

    // Technical (15%)
    Object.values(criteria.technical).forEach(value => {
      maxPoints += 2.5;
      if (value) totalPoints += 2.5;
    });

    // Accessibility (15%)
    if (criteria.accessibility.wcagCompliant) totalPoints += 5;
    maxPoints += 5;
    if (criteria.accessibility.readabilityScore <= 10) totalPoints += 5;
    maxPoints += 5;
    if (criteria.accessibility.languageSimplicity) totalPoints += 5;
    maxPoints += 5;

    return Math.round((totalPoints / maxPoints) * 100);
  }

  private determineStatus(score: number): 'passed' | 'needs-improvement' | 'failed' {
    if (score >= 80) return 'passed';
    if (score >= 60) return 'needs-improvement';
    return 'failed';
  }

  private generateRecommendations(result: ContentAuditResult): string[] {
    const recommendations: string[] = [];

    // Priority 1: Critical issues
    result.issues
      .filter(i => i.severity === 'critical')
      .forEach(issue => {
        recommendations.push(`CRITICAL: ${issue.recommendation}`);
      });

    // Priority 2: Major issues
    result.issues
      .filter(i => i.severity === 'major')
      .slice(0, 3)
      .forEach(issue => {
        recommendations.push(`HIGH: ${issue.recommendation}`);
      });

    // Priority 3: Quick wins
    result.issues
      .filter(i => i.severity === 'minor')
      .slice(0, 2)
      .forEach(issue => {
        recommendations.push(`QUICK WIN: ${issue.recommendation}`);
      });

    return recommendations;
  }

  // Run full audit on all pages
  async runFullAudit(): Promise<AuditReport> {
    const results: ContentAuditResult[] = [];
    
    // Audit all pages
    for (const page of this.contentInventory) {
      const result = await this.auditPage(page.id);
      results.push(result);
    }

    // Generate summary
    const summary = {
      totalPages: results.length,
      passedPages: results.filter(r => r.status === 'passed').length,
      failedPages: results.filter(r => r.status === 'failed').length,
      needsImprovementPages: results.filter(r => r.status === 'needs-improvement').length,
      averageScore: results.reduce((sum, r) => sum + r.score, 0) / results.length,
      criticalIssues: results.reduce((sum, r) => 
        sum + r.issues.filter(i => i.severity === 'critical').length, 0),
      totalIssues: results.reduce((sum, r) => sum + r.issues.length, 0)
    };

    // Group by category
    const byCategory = new Map<string, CategorySummary>();
    const categories = [...new Set(this.contentInventory.map(p => p.category))];
    
    categories.forEach(category => {
      const categoryPages = this.contentInventory.filter(p => p.category === category);
      const categoryResults = results.filter(r => 
        categoryPages.some(p => p.id === r.pageId)
      );

      const avgScore = categoryResults.reduce((sum, r) => sum + r.score, 0) / categoryResults.length;
      
      byCategory.set(category, {
        category,
        pageCount: categoryPages.length,
        averageScore: avgScore,
        commonIssues: this.getCommonIssues(categoryResults),
        status: avgScore >= 80 ? 'good' : avgScore >= 60 ? 'needs-attention' : 'critical'
      });
    });

    // Generate prioritized actions
    const prioritizedActions = this.generatePrioritizedActions(results);

    return {
      timestamp: new Date(),
      summary,
      byCategory,
      results,
      prioritizedActions
    };
  }

  private getCommonIssues(results: ContentAuditResult[]): string[] {
    const issueCounts = new Map<string, number>();
    
    results.forEach(result => {
      result.issues.forEach(issue => {
        const count = issueCounts.get(issue.description) || 0;
        issueCounts.set(issue.description, count + 1);
      });
    });

    return Array.from(issueCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([issue]) => issue);
  }

  private generatePrioritizedActions(results: ContentAuditResult[]): ActionItem[] {
    const actions: ActionItem[] = [];

    // Critical issues first
    results.forEach(result => {
      const page = this.contentInventory.find(p => p.id === result.pageId);
      
      result.issues
        .filter(i => i.severity === 'critical')
        .forEach(issue => {
          actions.push({
            priority: 'immediate',
            page: page?.title || result.pageId,
            action: issue.recommendation,
            impact: 'Legal compliance / Critical functionality',
            estimatedTime: '1-2 hours'
          });
        });
    });

    // Failed pages
    results
      .filter(r => r.status === 'failed')
      .forEach(result => {
        const page = this.contentInventory.find(p => p.id === result.pageId);
        actions.push({
          priority: 'high',
          page: page?.title || result.pageId,
          action: 'Complete comprehensive content review and updates',
          impact: 'Page quality and user trust',
          estimatedTime: '2-4 hours'
        });
      });

    // Sort by priority
    const priorityOrder = { immediate: 0, high: 1, medium: 2, low: 3 };
    actions.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

    return actions.slice(0, 20); // Top 20 actions
  }

  // Get audit status
  getAuditStatus(): {
    inventoryCount: number;
    auditedCount: number;
    pendingCount: number;
  } {
    return {
      inventoryCount: this.contentInventory.length,
      auditedCount: this.auditResults.size,
      pendingCount: this.contentInventory.length - this.auditResults.size
    };
  }

  // Export audit report
  exportReport(report: AuditReport, format: 'json' | 'csv' | 'html' = 'json'): string {
    switch (format) {
      case 'json':
        return JSON.stringify(report, null, 2);
      case 'csv':
        return this.exportToCSV(report);
      case 'html':
        return this.exportToHTML(report);
      default:
        return JSON.stringify(report, null, 2);
    }
  }

  private exportToCSV(report: AuditReport): string {
    let csv = 'Page,Path,Score,Status,Critical Issues,Total Issues,Primary Recommendation\n';
    
    report.results.forEach(result => {
      const page = this.contentInventory.find(p => p.id === result.pageId);
      const criticalCount = result.issues.filter(i => i.severity === 'critical').length;
      const primaryRec = result.recommendations[0] || 'None';
      
      csv += `"${page?.title}","${result.path}",${result.score},"${result.status}",${criticalCount},${result.issues.length},"${primaryRec}"\n`;
    });

    return csv;
  }

  private exportToHTML(report: AuditReport): string {
    return `
<!DOCTYPE html>
<html>
<head>
  <title>Content Audit Report - ${report.timestamp.toLocaleDateString()}</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    h1 { color: #333; }
    .summary { background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0; }
    .passed { color: green; }
    .failed { color: red; }
    .needs-improvement { color: orange; }
    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
    th { background: #f2f2f2; }
  </style>
</head>
<body>
  <h1>Content Audit Report</h1>
  <div class="summary">
    <h2>Summary</h2>
    <p>Date: ${report.timestamp.toLocaleString()}</p>
    <p>Total Pages: ${report.summary.totalPages}</p>
    <p>Average Score: ${report.summary.averageScore.toFixed(1)}%</p>
    <p class="passed">Passed: ${report.summary.passedPages}</p>
    <p class="needs-improvement">Needs Improvement: ${report.summary.needsImprovementPages}</p>
    <p class="failed">Failed: ${report.summary.failedPages}</p>
    <p>Total Issues: ${report.summary.totalIssues} (${report.summary.criticalIssues} critical)</p>
  </div>
  
  <h2>Results by Page</h2>
  <table>
    <thead>
      <tr>
        <th>Page</th>
        <th>Score</th>
        <th>Status</th>
        <th>Issues</th>
        <th>Top Recommendation</th>
      </tr>
    </thead>
    <tbody>
      ${report.results.map(result => {
        const page = this.contentInventory.find(p => p.id === result.pageId);
        return `
        <tr>
          <td>${page?.title || result.pageId}</td>
          <td>${result.score}%</td>
          <td class="${result.status}">${result.status}</td>
          <td>${result.issues.length}</td>
          <td>${result.recommendations[0] || 'None'}</td>
        </tr>`;
      }).join('')}
    </tbody>
  </table>
  
  <h2>Priority Actions</h2>
  <ol>
    ${report.prioritizedActions.slice(0, 10).map(action => `
      <li>
        <strong>[${action.priority.toUpperCase()}]</strong> ${action.page}: ${action.action}
        <br><em>Impact: ${action.impact} | Time: ${action.estimatedTime}</em>
      </li>
    `).join('')}
  </ol>
</body>
</html>`;
  }
}

// Export singleton instance
export const contentAuditService = new ContentAuditService();