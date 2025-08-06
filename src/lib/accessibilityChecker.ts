// Accessibility Checker Service
// Provides automated accessibility testing and recommendations

export interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  category: 'aria' | 'color' | 'keyboard' | 'screen-reader' | 'structure' | 'forms' | 'media';
  element?: string;
  selector?: string;
  description: string;
  impact: 'critical' | 'serious' | 'moderate' | 'minor';
  recommendation: string;
  wcagCriteria?: string;
  wcagLevel?: 'A' | 'AA' | 'AAA';
}

export interface AccessibilityReport {
  score: number;
  issues: AccessibilityIssue[];
  summary: {
    totalIssues: number;
    criticalIssues: number;
    seriousIssues: number;
    moderateIssues: number;
    minorIssues: number;
    passedChecks: number;
    failedChecks: number;
  };
  recommendations: string[];
  wcagCompliance: {
    levelA: boolean;
    levelAA: boolean;
    levelAAA: boolean;
  };
}

class AccessibilityChecker {
  private issues: AccessibilityIssue[] = [];
  private passedChecks: number = 0;
  private failedChecks: number = 0;

  // Run all accessibility checks
  runFullCheck(element?: HTMLElement): AccessibilityReport {
    this.reset();
    const root = element || document.body;

    // Run all checks
    this.checkImages(root);
    this.checkHeadings(root);
    this.checkForms(root);
    this.checkLinks(root);
    this.checkARIA(root);
    this.checkColorContrast(root);
    this.checkKeyboardNavigation(root);
    this.checkLandmarks(root);
    this.checkTables(root);
    this.checkMedia(root);
    this.checkLanguage(root);
    this.checkFocusIndicators(root);

    return this.generateReport();
  }

  // Reset checker state
  private reset(): void {
    this.issues = [];
    this.passedChecks = 0;
    this.failedChecks = 0;
  }

  // Check images for alt text
  private checkImages(root: HTMLElement): void {
    const images = root.querySelectorAll('img');
    
    images.forEach((img, index) => {
      const altText = img.getAttribute('alt');
      const src = img.getAttribute('src');
      
      if (altText === null) {
        this.addIssue({
          id: `img-alt-${index}`,
          type: 'error',
          category: 'media',
          element: 'img',
          selector: this.getSelector(img),
          description: 'Image missing alt attribute',
          impact: 'critical',
          recommendation: 'Add descriptive alt text to the image',
          wcagCriteria: '1.1.1',
          wcagLevel: 'A'
        });
      } else if (altText === '') {
        // Empty alt is okay for decorative images
        this.passedChecks++;
      } else if (altText.length > 125) {
        this.addIssue({
          id: `img-alt-long-${index}`,
          type: 'warning',
          category: 'media',
          element: 'img',
          selector: this.getSelector(img),
          description: 'Alt text is too long (>125 characters)',
          impact: 'minor',
          recommendation: 'Consider shortening alt text or using longdesc attribute',
          wcagCriteria: '1.1.1',
          wcagLevel: 'A'
        });
      } else {
        this.passedChecks++;
      }
    });
  }

  // Check heading structure
  private checkHeadings(root: HTMLElement): void {
    const headings = root.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let lastLevel = 0;
    let h1Count = 0;

    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName[1]);
      
      // Check for multiple H1s
      if (level === 1) {
        h1Count++;
        if (h1Count > 1) {
          this.addIssue({
            id: `heading-multiple-h1-${index}`,
            type: 'warning',
            category: 'structure',
            element: heading.tagName,
            selector: this.getSelector(heading),
            description: 'Multiple H1 elements found on page',
            impact: 'moderate',
            recommendation: 'Use only one H1 per page',
            wcagCriteria: '2.4.6',
            wcagLevel: 'AA'
          });
        }
      }

      // Check for skipped heading levels
      if (lastLevel > 0 && level > lastLevel + 1) {
        this.addIssue({
          id: `heading-skip-${index}`,
          type: 'warning',
          category: 'structure',
          element: heading.tagName,
          selector: this.getSelector(heading),
          description: `Heading level skipped (H${lastLevel} to H${level})`,
          impact: 'moderate',
          recommendation: 'Maintain proper heading hierarchy',
          wcagCriteria: '1.3.1',
          wcagLevel: 'A'
        });
      } else {
        this.passedChecks++;
      }

      lastLevel = level;
    });

    // Check for missing H1
    if (h1Count === 0) {
      this.addIssue({
        id: 'heading-no-h1',
        type: 'warning',
        category: 'structure',
        description: 'No H1 element found on page',
        impact: 'serious',
        recommendation: 'Add an H1 element as the main page heading',
        wcagCriteria: '2.4.6',
        wcagLevel: 'AA'
      });
    }
  }

  // Check form accessibility
  private checkForms(root: HTMLElement): void {
    // Check form labels
    const inputs = root.querySelectorAll('input, select, textarea');
    
    inputs.forEach((input, index) => {
      const inputElement = input as HTMLInputElement;
      const type = inputElement.type;
      
      // Skip hidden and submit/button inputs
      if (type === 'hidden' || type === 'submit' || type === 'button') {
        return;
      }

      const id = inputElement.id;
      const ariaLabel = inputElement.getAttribute('aria-label');
      const ariaLabelledBy = inputElement.getAttribute('aria-labelledby');
      const label = id ? root.querySelector(`label[for="${id}"]`) : null;
      
      if (!label && !ariaLabel && !ariaLabelledBy) {
        this.addIssue({
          id: `form-label-${index}`,
          type: 'error',
          category: 'forms',
          element: input.tagName,
          selector: this.getSelector(input),
          description: 'Form input missing label',
          impact: 'critical',
          recommendation: 'Add a label element or aria-label attribute',
          wcagCriteria: '3.3.2',
          wcagLevel: 'A'
        });
      } else {
        this.passedChecks++;
      }

      // Check required fields
      if (inputElement.required && !inputElement.getAttribute('aria-required')) {
        this.addIssue({
          id: `form-required-${index}`,
          type: 'warning',
          category: 'forms',
          element: input.tagName,
          selector: this.getSelector(input),
          description: 'Required field missing aria-required attribute',
          impact: 'minor',
          recommendation: 'Add aria-required="true" for better screen reader support',
          wcagCriteria: '3.3.2',
          wcagLevel: 'A'
        });
      }
    });

    // Check fieldsets for radio and checkbox groups
    const radioGroups = new Map<string, HTMLInputElement[]>();
    const radios = root.querySelectorAll('input[type="radio"]');
    
    radios.forEach(radio => {
      const name = (radio as HTMLInputElement).name;
      if (name) {
        if (!radioGroups.has(name)) {
          radioGroups.set(name, []);
        }
        radioGroups.get(name)!.push(radio as HTMLInputElement);
      }
    });

    radioGroups.forEach((group, name) => {
      const fieldset = group[0].closest('fieldset');
      if (!fieldset) {
        this.addIssue({
          id: `form-fieldset-${name}`,
          type: 'warning',
          category: 'forms',
          description: `Radio group "${name}" not wrapped in fieldset`,
          impact: 'moderate',
          recommendation: 'Wrap related radio buttons in a fieldset with legend',
          wcagCriteria: '1.3.1',
          wcagLevel: 'A'
        });
      } else {
        this.passedChecks++;
      }
    });
  }

  // Check links
  private checkLinks(root: HTMLElement): void {
    const links = root.querySelectorAll('a');
    
    links.forEach((link, index) => {
      const href = link.getAttribute('href');
      const text = link.textContent?.trim();
      const ariaLabel = link.getAttribute('aria-label');
      
      // Check for empty links
      if (!text && !ariaLabel) {
        this.addIssue({
          id: `link-empty-${index}`,
          type: 'error',
          category: 'structure',
          element: 'a',
          selector: this.getSelector(link),
          description: 'Link has no accessible text',
          impact: 'critical',
          recommendation: 'Add link text or aria-label',
          wcagCriteria: '2.4.4',
          wcagLevel: 'A'
        });
      } 
      // Check for generic link text
      else if (text && ['click here', 'read more', 'learn more', 'here'].includes(text.toLowerCase())) {
        this.addIssue({
          id: `link-generic-${index}`,
          type: 'warning',
          category: 'structure',
          element: 'a',
          selector: this.getSelector(link),
          description: `Generic link text: "${text}"`,
          impact: 'moderate',
          recommendation: 'Use descriptive link text that explains the destination',
          wcagCriteria: '2.4.4',
          wcagLevel: 'A'
        });
      } else {
        this.passedChecks++;
      }

      // Check for target="_blank" without warning
      if (link.getAttribute('target') === '_blank' && 
          !text?.includes('new window') && 
          !text?.includes('new tab') &&
          !ariaLabel?.includes('opens in')) {
        this.addIssue({
          id: `link-target-${index}`,
          type: 'warning',
          category: 'structure',
          element: 'a',
          selector: this.getSelector(link),
          description: 'Link opens in new window without warning',
          impact: 'minor',
          recommendation: 'Add text or aria-label indicating link opens in new window',
          wcagCriteria: '3.2.2',
          wcagLevel: 'A'
        });
      }
    });
  }

  // Check ARIA attributes
  private checkARIA(root: HTMLElement): void {
    // Check for invalid ARIA roles
    const elementsWithRoles = root.querySelectorAll('[role]');
    const validRoles = [
      'alert', 'alertdialog', 'application', 'article', 'banner', 'button',
      'cell', 'checkbox', 'columnheader', 'combobox', 'complementary',
      'contentinfo', 'definition', 'dialog', 'directory', 'document',
      'feed', 'figure', 'form', 'grid', 'gridcell', 'group', 'heading',
      'img', 'link', 'list', 'listbox', 'listitem', 'log', 'main',
      'marquee', 'math', 'menu', 'menubar', 'menuitem', 'menuitemcheckbox',
      'menuitemradio', 'navigation', 'none', 'note', 'option', 'presentation',
      'progressbar', 'radio', 'radiogroup', 'region', 'row', 'rowgroup',
      'rowheader', 'scrollbar', 'search', 'searchbox', 'separator', 'slider',
      'spinbutton', 'status', 'switch', 'tab', 'table', 'tablist', 'tabpanel',
      'term', 'textbox', 'timer', 'toolbar', 'tooltip', 'tree', 'treegrid',
      'treeitem'
    ];

    elementsWithRoles.forEach((element, index) => {
      const role = element.getAttribute('role');
      if (role && !validRoles.includes(role)) {
        this.addIssue({
          id: `aria-invalid-role-${index}`,
          type: 'error',
          category: 'aria',
          element: element.tagName,
          selector: this.getSelector(element),
          description: `Invalid ARIA role: "${role}"`,
          impact: 'serious',
          recommendation: 'Use a valid ARIA role',
          wcagCriteria: '4.1.2',
          wcagLevel: 'A'
        });
      } else {
        this.passedChecks++;
      }
    });

    // Check for aria-labelledby pointing to non-existent elements
    const elementsWithLabelledBy = root.querySelectorAll('[aria-labelledby]');
    elementsWithLabelledBy.forEach((element, index) => {
      const labelIds = element.getAttribute('aria-labelledby')?.split(' ') || [];
      labelIds.forEach(id => {
        if (!document.getElementById(id)) {
          this.addIssue({
            id: `aria-labelledby-${index}`,
            type: 'error',
            category: 'aria',
            element: element.tagName,
            selector: this.getSelector(element),
            description: `aria-labelledby references non-existent element: "${id}"`,
            impact: 'serious',
            recommendation: 'Ensure referenced element exists',
            wcagCriteria: '1.3.1',
            wcagLevel: 'A'
          });
        }
      });
    });
  }

  // Check color contrast (simplified version)
  private checkColorContrast(root: HTMLElement): void {
    // This is a simplified check - real contrast checking requires color analysis
    const elements = root.querySelectorAll('*');
    
    elements.forEach((element) => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      // Check for very light gray text
      if (color && color.includes('rgb')) {
        const match = color.match(/\d+/g);
        if (match) {
          const [r, g, b] = match.map(Number);
          const brightness = (r + g + b) / 3;
          
          if (brightness > 200) {
            this.addIssue({
              id: `color-low-contrast-${this.issues.length}`,
              type: 'warning',
              category: 'color',
              element: element.tagName,
              selector: this.getSelector(element),
              description: 'Potentially low color contrast',
              impact: 'moderate',
              recommendation: 'Ensure text has sufficient contrast (4.5:1 for normal text, 3:1 for large text)',
              wcagCriteria: '1.4.3',
              wcagLevel: 'AA'
            });
          }
        }
      }
    });
  }

  // Check keyboard navigation
  private checkKeyboardNavigation(root: HTMLElement): void {
    // Check for positive tabindex
    const elementsWithTabindex = root.querySelectorAll('[tabindex]');
    
    elementsWithTabindex.forEach((element, index) => {
      const tabindex = parseInt(element.getAttribute('tabindex') || '0');
      
      if (tabindex > 0) {
        this.addIssue({
          id: `keyboard-tabindex-${index}`,
          type: 'warning',
          category: 'keyboard',
          element: element.tagName,
          selector: this.getSelector(element),
          description: `Positive tabindex value (${tabindex}) disrupts natural tab order`,
          impact: 'moderate',
          recommendation: 'Use tabindex="0" or "-1" only',
          wcagCriteria: '2.4.3',
          wcagLevel: 'A'
        });
      } else {
        this.passedChecks++;
      }
    });

    // Check for click handlers on non-interactive elements
    const nonInteractive = ['div', 'span', 'p', 'section', 'article'];
    nonInteractive.forEach(tag => {
      const elements = root.querySelectorAll(tag);
      elements.forEach((element, index) => {
        if (element.hasAttribute('onclick') || 
            element.hasAttribute('ng-click') ||
            element.hasAttribute('v-on:click')) {
          
          const role = element.getAttribute('role');
          const tabindex = element.getAttribute('tabindex');
          
          if (!role && !tabindex) {
            this.addIssue({
              id: `keyboard-click-${tag}-${index}`,
              type: 'error',
              category: 'keyboard',
              element: tag,
              selector: this.getSelector(element),
              description: 'Click handler on non-interactive element without keyboard support',
              impact: 'serious',
              recommendation: 'Add role="button" and tabindex="0", or use a button element',
              wcagCriteria: '2.1.1',
              wcagLevel: 'A'
            });
          }
        }
      });
    });
  }

  // Check landmarks
  private checkLandmarks(root: HTMLElement): void {
    const landmarks = {
      main: root.querySelectorAll('main, [role="main"]'),
      nav: root.querySelectorAll('nav, [role="navigation"]'),
      banner: root.querySelectorAll('header, [role="banner"]'),
      contentinfo: root.querySelectorAll('footer, [role="contentinfo"]')
    };

    // Check for missing main landmark
    if (landmarks.main.length === 0) {
      this.addIssue({
        id: 'landmark-no-main',
        type: 'warning',
        category: 'structure',
        description: 'No main landmark found',
        impact: 'moderate',
        recommendation: 'Add a <main> element or role="main" to identify main content',
        wcagCriteria: '1.3.1',
        wcagLevel: 'A'
      });
    } else if (landmarks.main.length > 1) {
      this.addIssue({
        id: 'landmark-multiple-main',
        type: 'warning',
        category: 'structure',
        description: 'Multiple main landmarks found',
        impact: 'moderate',
        recommendation: 'Use only one main landmark per page',
        wcagCriteria: '1.3.1',
        wcagLevel: 'A'
      });
    } else {
      this.passedChecks++;
    }

    // Check for navigation landmarks
    if (landmarks.nav.length === 0) {
      this.addIssue({
        id: 'landmark-no-nav',
        type: 'info',
        category: 'structure',
        description: 'No navigation landmark found',
        impact: 'minor',
        recommendation: 'Consider adding <nav> elements for navigation areas',
        wcagCriteria: '1.3.1',
        wcagLevel: 'A'
      });
    }
  }

  // Check tables
  private checkTables(root: HTMLElement): void {
    const tables = root.querySelectorAll('table');
    
    tables.forEach((table, index) => {
      const caption = table.querySelector('caption');
      const th = table.querySelectorAll('th');
      
      // Check for caption or summary
      if (!caption && !table.getAttribute('aria-label')) {
        this.addIssue({
          id: `table-caption-${index}`,
          type: 'warning',
          category: 'structure',
          element: 'table',
          selector: this.getSelector(table),
          description: 'Table missing caption or description',
          impact: 'moderate',
          recommendation: 'Add a <caption> element or aria-label to describe the table',
          wcagCriteria: '1.3.1',
          wcagLevel: 'A'
        });
      }

      // Check for table headers
      if (th.length === 0) {
        this.addIssue({
          id: `table-headers-${index}`,
          type: 'error',
          category: 'structure',
          element: 'table',
          selector: this.getSelector(table),
          description: 'Table missing header cells',
          impact: 'serious',
          recommendation: 'Use <th> elements for table headers',
          wcagCriteria: '1.3.1',
          wcagLevel: 'A'
        });
      } else {
        // Check for scope attributes on headers
        th.forEach((header, hIndex) => {
          if (!header.getAttribute('scope')) {
            this.addIssue({
              id: `table-scope-${index}-${hIndex}`,
              type: 'warning',
              category: 'structure',
              element: 'th',
              selector: this.getSelector(header),
              description: 'Table header missing scope attribute',
              impact: 'minor',
              recommendation: 'Add scope="col" or scope="row" to clarify header relationships',
              wcagCriteria: '1.3.1',
              wcagLevel: 'A'
            });
          }
        });
      }
    });
  }

  // Check media elements
  private checkMedia(root: HTMLElement): void {
    // Check videos for captions
    const videos = root.querySelectorAll('video');
    videos.forEach((video, index) => {
      const tracks = video.querySelectorAll('track[kind="captions"]');
      
      if (tracks.length === 0) {
        this.addIssue({
          id: `media-video-captions-${index}`,
          type: 'error',
          category: 'media',
          element: 'video',
          selector: this.getSelector(video),
          description: 'Video missing captions',
          impact: 'critical',
          recommendation: 'Add caption tracks for video content',
          wcagCriteria: '1.2.2',
          wcagLevel: 'A'
        });
      } else {
        this.passedChecks++;
      }
    });

    // Check audio for transcripts
    const audios = root.querySelectorAll('audio');
    audios.forEach((audio, index) => {
      const ariaDescribedBy = audio.getAttribute('aria-describedby');
      
      if (!ariaDescribedBy) {
        this.addIssue({
          id: `media-audio-transcript-${index}`,
          type: 'warning',
          category: 'media',
          element: 'audio',
          selector: this.getSelector(audio),
          description: 'Audio may be missing transcript',
          impact: 'serious',
          recommendation: 'Provide transcript for audio content',
          wcagCriteria: '1.2.1',
          wcagLevel: 'A'
        });
      }
    });
  }

  // Check language attributes
  private checkLanguage(root: HTMLElement): void {
    // Check for lang attribute on html element
    if (root === document.body) {
      const html = document.documentElement;
      if (!html.getAttribute('lang')) {
        this.addIssue({
          id: 'language-missing',
          type: 'error',
          category: 'structure',
          description: 'Page missing language declaration',
          impact: 'serious',
          recommendation: 'Add lang attribute to <html> element',
          wcagCriteria: '3.1.1',
          wcagLevel: 'A'
        });
      } else {
        this.passedChecks++;
      }
    }
  }

  // Check focus indicators
  private checkFocusIndicators(root: HTMLElement): void {
    // This is a simplified check
    const interactiveElements = root.querySelectorAll(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    interactiveElements.forEach((element) => {
      const styles = window.getComputedStyle(element);
      const outlineStyle = styles.outlineStyle;
      
      // Check if outline is explicitly removed
      if (outlineStyle === 'none') {
        // Check for alternative focus styles
        const boxShadow = styles.boxShadow;
        const border = styles.border;
        
        if (boxShadow === 'none' && border === 'none') {
          this.addIssue({
            id: `focus-indicator-${this.issues.length}`,
            type: 'warning',
            category: 'keyboard',
            element: element.tagName,
            selector: this.getSelector(element),
            description: 'Element may lack visible focus indicator',
            impact: 'serious',
            recommendation: 'Ensure element has visible focus state',
            wcagCriteria: '2.4.7',
            wcagLevel: 'AA'
          });
        }
      }
    });
  }

  // Helper to get CSS selector for element
  private getSelector(element: Element): string {
    if (element.id) {
      return `#${element.id}`;
    }
    
    const classNames = Array.from(element.classList).join('.');
    if (classNames) {
      return `${element.tagName.toLowerCase()}.${classNames}`;
    }
    
    return element.tagName.toLowerCase();
  }

  // Add issue to list
  private addIssue(issue: AccessibilityIssue): void {
    this.issues.push(issue);
    this.failedChecks++;
  }

  // Generate accessibility report
  private generateReport(): AccessibilityReport {
    const summary = {
      totalIssues: this.issues.length,
      criticalIssues: this.issues.filter(i => i.impact === 'critical').length,
      seriousIssues: this.issues.filter(i => i.impact === 'serious').length,
      moderateIssues: this.issues.filter(i => i.impact === 'moderate').length,
      minorIssues: this.issues.filter(i => i.impact === 'minor').length,
      passedChecks: this.passedChecks,
      failedChecks: this.failedChecks
    };

    const score = this.calculateScore(summary);
    const recommendations = this.generateRecommendations();
    const wcagCompliance = this.checkWCAGCompliance();

    return {
      score,
      issues: this.issues,
      summary,
      recommendations,
      wcagCompliance
    };
  }

  // Calculate accessibility score
  private calculateScore(summary: AccessibilityReport['summary']): number {
    const totalChecks = summary.passedChecks + summary.failedChecks;
    if (totalChecks === 0) return 100;

    let score = 100;

    // Deduct points based on issue severity
    score -= summary.criticalIssues * 15;
    score -= summary.seriousIssues * 10;
    score -= summary.moderateIssues * 5;
    score -= summary.minorIssues * 2;

    // Factor in pass rate
    const passRate = summary.passedChecks / totalChecks;
    score = score * passRate;

    return Math.max(0, Math.min(100, Math.round(score)));
  }

  // Generate recommendations
  private generateRecommendations(): string[] {
    const recommendations: string[] = [];
    const issueCounts = new Map<string, number>();

    // Count issues by category
    this.issues.forEach(issue => {
      const count = issueCounts.get(issue.category) || 0;
      issueCounts.set(issue.category, count + 1);
    });

    // Generate recommendations based on most common issues
    const sortedCategories = Array.from(issueCounts.entries())
      .sort((a, b) => b[1] - a[1]);

    sortedCategories.forEach(([category, count]) => {
      switch (category) {
        case 'aria':
          recommendations.push(`Fix ${count} ARIA attribute issues for better screen reader support`);
          break;
        case 'color':
          recommendations.push(`Review ${count} color contrast issues to meet WCAG standards`);
          break;
        case 'keyboard':
          recommendations.push(`Improve keyboard navigation for ${count} elements`);
          break;
        case 'forms':
          recommendations.push(`Add proper labels and descriptions to ${count} form elements`);
          break;
        case 'structure':
          recommendations.push(`Fix ${count} document structure issues for better navigation`);
          break;
        case 'media':
          recommendations.push(`Add captions/transcripts for ${count} media elements`);
          break;
      }
    });

    // Add general recommendations
    if (this.issues.filter(i => i.impact === 'critical').length > 0) {
      recommendations.unshift('Address critical accessibility issues immediately');
    }

    if (this.issues.filter(i => i.wcagLevel === 'A').length > 0) {
      recommendations.push('Focus on fixing Level A WCAG issues first');
    }

    return recommendations.slice(0, 5);
  }

  // Check WCAG compliance levels
  private checkWCAGCompliance(): AccessibilityReport['wcagCompliance'] {
    const levelAIssues = this.issues.filter(i => i.wcagLevel === 'A' && 
                                             (i.impact === 'critical' || i.impact === 'serious'));
    const levelAAIssues = this.issues.filter(i => i.wcagLevel === 'AA' && 
                                              (i.impact === 'critical' || i.impact === 'serious'));
    const levelAAAIssues = this.issues.filter(i => i.wcagLevel === 'AAA' && 
                                               (i.impact === 'critical' || i.impact === 'serious'));

    return {
      levelA: levelAIssues.length === 0,
      levelAA: levelAIssues.length === 0 && levelAAIssues.length === 0,
      levelAAA: levelAIssues.length === 0 && levelAAIssues.length === 0 && levelAAAIssues.length === 0
    };
  }

  // Export report
  exportReport(report: AccessibilityReport): string {
    return JSON.stringify(report, null, 2);
  }
}

// Export singleton instance
export const accessibilityChecker = new AccessibilityChecker();