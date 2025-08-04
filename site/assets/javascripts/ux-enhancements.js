// Arizona Family Law Wiki - Advanced UX Enhancements

// Initialize all UX enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Core systems
    AZLawSearch.init();
    AZLawWorkflows.init();
    AZLawCalculators.init();
    AZLawHelp.init();
    AZLawPreferences.init();
    AZLawMobile.init();
    AZLawAnalytics.init();
});

// Enhanced Search System with Auto-complete and Smart Suggestions
const AZLawSearch = {
    searchIndex: null,
    searchHistory: [],
    popularSearches: [
        'divorce process', 'child custody', 'child support calculator',
        'spousal maintenance', 'property division', 'parenting time',
        'order of protection', 'legal forms', 'court fees', 'mediation'
    ],
    
    init() {
        this.enhanceSearchBar();
        this.loadSearchIndex();
        this.setupKeyboardShortcuts();
    },
    
    enhanceSearchBar() {
        const searchInput = document.querySelector('.md-search__input');
        if (!searchInput) return;
        
        // Create enhanced search container
        const searchWrapper = document.createElement('div');
        searchWrapper.className = 'enhanced-search-wrapper';
        searchInput.parentNode.insertBefore(searchWrapper, searchInput);
        searchWrapper.appendChild(searchInput);
        
        // Add auto-complete dropdown
        const dropdown = document.createElement('div');
        dropdown.className = 'search-dropdown';
        dropdown.innerHTML = `
            <div class="search-suggestions">
                <h4>Popular Searches</h4>
                <ul class="popular-searches"></ul>
            </div>
            <div class="search-results-preview"></div>
        `;
        searchWrapper.appendChild(dropdown);
        
        // Populate popular searches
        this.updatePopularSearches();
        
        // Enhanced search events
        searchInput.addEventListener('input', this.debounce((e) => {
            this.handleSearchInput(e.target.value);
        }, 300));
        
        searchInput.addEventListener('focus', () => {
            dropdown.classList.add('active');
        });
        
        // Smart search suggestions based on context
        this.addContextualSuggestions();
    },
    
    handleSearchInput(query) {
        if (query.length < 2) {
            this.showPopularSearches();
            return;
        }
        
        // Fuzzy search with typo tolerance
        const results = this.fuzzySearch(query);
        this.displaySearchPreview(results);
        
        // Track search for analytics
        this.trackSearch(query);
    },
    
    fuzzySearch(query) {
        // Simple fuzzy matching algorithm
        const searchTerms = query.toLowerCase().split(' ');
        const results = [];
        
        // Search through all content
        document.querySelectorAll('.md-content h1, .md-content h2, .md-content h3, .md-content p').forEach(element => {
            const text = element.textContent.toLowerCase();
            let score = 0;
            
            searchTerms.forEach(term => {
                if (text.includes(term)) score += 2;
                else if (this.fuzzyMatch(term, text)) score += 1;
            });
            
            if (score > 0) {
                results.push({
                    element: element,
                    text: element.textContent,
                    score: score,
                    type: element.tagName,
                    url: this.getElementUrl(element)
                });
            }
        });
        
        return results.sort((a, b) => b.score - a.score).slice(0, 5);
    },
    
    fuzzyMatch(needle, haystack) {
        const hlen = haystack.length;
        const nlen = needle.length;
        if (nlen > hlen) return false;
        if (nlen === hlen) return needle === haystack;
        
        outer: for (let i = 0, j = 0; i < nlen; i++) {
            const nch = needle.charCodeAt(i);
            while (j < hlen) {
                if (haystack.charCodeAt(j++) === nch) continue outer;
            }
            return false;
        }
        return true;
    },
    
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Cmd/Ctrl + K for quick search
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                document.querySelector('.md-search__input').focus();
            }
            
            // Escape to close search
            if (e.key === 'Escape') {
                document.querySelector('.search-dropdown').classList.remove('active');
            }
        });
    },
    
    updatePopularSearches() {
        const list = document.querySelector('.popular-searches');
        if (!list) return;
        
        list.innerHTML = this.popularSearches.map(search => `
            <li><a href="#" class="search-suggestion" data-search="${search}">${search}</a></li>
        `).join('');
        
        // Add click handlers
        list.querySelectorAll('.search-suggestion').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const searchInput = document.querySelector('.md-search__input');
                searchInput.value = e.target.dataset.search;
                searchInput.dispatchEvent(new Event('input'));
            });
        });
    },
    
    trackSearch(query) {
        this.searchHistory.push({
            query: query,
            timestamp: new Date(),
            page: window.location.pathname
        });
        
        // Store in localStorage
        localStorage.setItem('azlaw_search_history', JSON.stringify(this.searchHistory.slice(-50)));
    },
    
    getElementUrl(element) {
        // Find the closest heading with an ID
        let current = element;
        while (current && !current.id) {
            current = current.previousElementSibling || current.parentElement;
        }
        return current ? `#${current.id}` : '';
    },
    
    displaySearchPreview(results) {
        const preview = document.querySelector('.search-results-preview');
        if (!preview) return;
        
        if (results.length === 0) {
            preview.innerHTML = '<p class="no-results">No results found. Try different keywords.</p>';
            return;
        }
        
        preview.innerHTML = `
            <h4>Quick Results</h4>
            <ul class="search-preview-list">
                ${results.map(result => `
                    <li>
                        <a href="${result.url}" class="search-preview-item">
                            <span class="result-type">${result.type}</span>
                            <span class="result-text">${this.highlightText(result.text, 100)}</span>
                        </a>
                    </li>
                `).join('')}
            </ul>
        `;
    },
    
    highlightText(text, maxLength) {
        if (text.length > maxLength) {
            text = text.substring(0, maxLength) + '...';
        }
        return text;
    },
    
    addContextualSuggestions() {
        // Add "Did you mean?" functionality
        const currentPage = window.location.pathname;
        const suggestions = this.getContextualSuggestions(currentPage);
        
        if (suggestions.length > 0) {
            const suggestionBox = document.createElement('div');
            suggestionBox.className = 'contextual-suggestions';
            suggestionBox.innerHTML = `
                <h4>Related to this page:</h4>
                <ul>
                    ${suggestions.map(s => `<li><a href="${s.url}">${s.title}</a></li>`).join('')}
                </ul>
            `;
            
            const searchWrapper = document.querySelector('.enhanced-search-wrapper');
            if (searchWrapper) {
                searchWrapper.appendChild(suggestionBox);
            }
        }
    },
    
    getContextualSuggestions(page) {
        const suggestions = {
            '/divorce/': [
                {title: 'Calculate Child Support', url: '/resources/child-support-calculator/'},
                {title: 'Property Division Worksheet', url: '/resources/property-division-worksheet/'},
                {title: 'Filing for Divorce Checklist', url: '/resources/divorce-checklist/'}
            ],
            '/child-custody/': [
                {title: 'Parenting Time Schedules', url: '/special-situations/parenting-time/'},
                {title: 'Best Interests Factors', url: '/child-custody/#best-interests'},
                {title: 'Modification Process', url: '/resources/post-decree-issues/'}
            ]
        };
        
        for (const [key, value] of Object.entries(suggestions)) {
            if (page.includes(key)) return value;
        }
        return [];
    },
    
    loadSearchIndex() {
        // Load and parse search index for faster searching
        fetch('/search/search_index.json')
            .then(response => response.json())
            .then(data => {
                this.searchIndex = data;
            })
            .catch(err => console.error('Failed to load search index:', err));
    }
};

// Guided Workflow System
const AZLawWorkflows = {
    workflows: {
        divorce: {
            title: 'Divorce Process Guide',
            steps: [
                {
                    id: 'eligibility',
                    title: 'Check Eligibility',
                    questions: [
                        {
                            text: 'Have you or your spouse lived in Arizona for at least 90 days?',
                            type: 'boolean',
                            required: true,
                            help: 'Arizona requires residency for divorce filing'
                        },
                        {
                            text: 'Do you have children together?',
                            type: 'boolean',
                            affects: ['custody', 'support']
                        }
                    ]
                },
                {
                    id: 'preparation',
                    title: 'Gather Documents',
                    checklist: [
                        'Marriage certificate',
                        'Financial records',
                        'Property deeds',
                        'Bank statements',
                        'Tax returns'
                    ]
                },
                {
                    id: 'filing',
                    title: 'File Petition',
                    actions: [
                        {text: 'Download forms', url: '/resources/forms/'},
                        {text: 'Calculate fees', url: '/procedures/court-procedures/#fees'},
                        {text: 'Find your court', url: 'https://www.azcourts.gov/find-a-court'}
                    ]
                }
            ]
        },
        custody: {
            title: 'Child Custody Guide',
            steps: [
                {
                    id: 'understand',
                    title: 'Understand Arizona Law',
                    content: 'Learn about legal decision-making and parenting time'
                },
                {
                    id: 'factors',
                    title: 'Best Interests Factors',
                    checklist: [
                        'Relationship with each parent',
                        'Child adjustment to home/school',
                        'Mental and physical health',
                        'Domestic violence history'
                    ]
                }
            ]
        }
    },
    
    currentWorkflow: null,
    currentStep: 0,
    userData: {},
    
    init() {
        this.createWorkflowLauncher();
        this.loadSavedProgress();
    },
    
    createWorkflowLauncher() {
        const launcher = document.createElement('div');
        launcher.className = 'workflow-launcher';
        launcher.innerHTML = `
            <button class="workflow-toggle" title="Interactive Guides">
                <span class="material-icons">assistant</span>
                <span class="text">Need Help?</span>
            </button>
            <div class="workflow-menu">
                <h3>Interactive Guides</h3>
                <ul>
                    <li><a href="#" data-workflow="divorce">📋 Divorce Process</a></li>
                    <li><a href="#" data-workflow="custody">👨‍👩‍👧 Child Custody</a></li>
                    <li><a href="#" data-workflow="support">💰 Child Support</a></li>
                    <li><a href="#" data-workflow="property">🏠 Property Division</a></li>
                </ul>
            </div>
        `;
        
        document.body.appendChild(launcher);
        
        // Toggle menu
        launcher.querySelector('.workflow-toggle').addEventListener('click', () => {
            launcher.classList.toggle('active');
        });
        
        // Launch workflows
        launcher.querySelectorAll('[data-workflow]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.startWorkflow(e.target.dataset.workflow);
            });
        });
    },
    
    startWorkflow(workflowId) {
        this.currentWorkflow = this.workflows[workflowId];
        this.currentStep = 0;
        this.showWorkflowModal();
    },
    
    showWorkflowModal() {
        const modal = document.createElement('div');
        modal.className = 'workflow-modal active';
        modal.innerHTML = `
            <div class="workflow-content">
                <div class="workflow-header">
                    <h2>${this.currentWorkflow.title}</h2>
                    <button class="close-workflow">&times;</button>
                </div>
                <div class="workflow-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${this.getProgress()}%"></div>
                    </div>
                    <div class="progress-steps">
                        ${this.currentWorkflow.steps.map((step, i) => `
                            <div class="progress-step ${i <= this.currentStep ? 'active' : ''} ${i < this.currentStep ? 'completed' : ''}">
                                <span class="step-number">${i + 1}</span>
                                <span class="step-title">${step.title}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="workflow-body">
                    ${this.renderCurrentStep()}
                </div>
                <div class="workflow-footer">
                    <button class="workflow-back" ${this.currentStep === 0 ? 'disabled' : ''}>Back</button>
                    <button class="workflow-next">${this.currentStep === this.currentWorkflow.steps.length - 1 ? 'Finish' : 'Next'}</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Event handlers
        modal.querySelector('.close-workflow').addEventListener('click', () => {
            this.closeWorkflow();
        });
        
        modal.querySelector('.workflow-back').addEventListener('click', () => {
            this.previousStep();
        });
        
        modal.querySelector('.workflow-next').addEventListener('click', () => {
            this.nextStep();
        });
    },
    
    renderCurrentStep() {
        const step = this.currentWorkflow.steps[this.currentStep];
        let html = `<h3>${step.title}</h3>`;
        
        if (step.questions) {
            html += `<form class="workflow-questions">`;
            step.questions.forEach((q, i) => {
                html += `
                    <div class="workflow-question">
                        <label>
                            ${q.text}
                            ${q.required ? '<span class="required">*</span>' : ''}
                        </label>
                        ${this.renderQuestionInput(q, i)}
                        ${q.help ? `<p class="question-help">${q.help}</p>` : ''}
                    </div>
                `;
            });
            html += `</form>`;
        }
        
        if (step.checklist) {
            html += `<div class="workflow-checklist">
                <h4>Required Documents/Information:</h4>
                <ul>
                    ${step.checklist.map((item, i) => `
                        <li>
                            <label>
                                <input type="checkbox" data-checklist="${i}">
                                <span>${item}</span>
                            </label>
                        </li>
                    `).join('')}
                </ul>
            </div>`;
        }
        
        if (step.actions) {
            html += `<div class="workflow-actions">
                <h4>Next Actions:</h4>
                ${step.actions.map(action => `
                    <a href="${action.url}" class="workflow-action-link" target="_blank">
                        <span class="material-icons">open_in_new</span>
                        ${action.text}
                    </a>
                `).join('')}
            </div>`;
        }
        
        return html;
    },
    
    renderQuestionInput(question, index) {
        switch (question.type) {
            case 'boolean':
                return `
                    <div class="radio-group">
                        <label>
                            <input type="radio" name="q${index}" value="yes">
                            Yes
                        </label>
                        <label>
                            <input type="radio" name="q${index}" value="no">
                            No
                        </label>
                    </div>
                `;
            case 'text':
                return `<input type="text" name="q${index}" class="workflow-input">`;
            case 'select':
                return `
                    <select name="q${index}" class="workflow-select">
                        <option value="">Select...</option>
                        ${question.options.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('')}
                    </select>
                `;
            default:
                return '';
        }
    },
    
    getProgress() {
        return ((this.currentStep + 1) / this.currentWorkflow.steps.length) * 100;
    },
    
    nextStep() {
        // Save current step data
        this.saveStepData();
        
        if (this.currentStep < this.currentWorkflow.steps.length - 1) {
            this.currentStep++;
            this.updateWorkflowDisplay();
        } else {
            this.completeWorkflow();
        }
    },
    
    previousStep() {
        if (this.currentStep > 0) {
            this.currentStep--;
            this.updateWorkflowDisplay();
        }
    },
    
    updateWorkflowDisplay() {
        const modal = document.querySelector('.workflow-modal');
        if (!modal) return;
        
        // Update progress
        modal.querySelector('.progress-fill').style.width = `${this.getProgress()}%`;
        
        // Update steps
        modal.querySelectorAll('.progress-step').forEach((step, i) => {
            step.classList.toggle('active', i <= this.currentStep);
            step.classList.toggle('completed', i < this.currentStep);
        });
        
        // Update content
        modal.querySelector('.workflow-body').innerHTML = this.renderCurrentStep();
        
        // Update buttons
        modal.querySelector('.workflow-back').disabled = this.currentStep === 0;
        modal.querySelector('.workflow-next').textContent = 
            this.currentStep === this.currentWorkflow.steps.length - 1 ? 'Finish' : 'Next';
    },
    
    saveStepData() {
        const stepData = {};
        const form = document.querySelector('.workflow-questions');
        
        if (form) {
            new FormData(form).forEach((value, key) => {
                stepData[key] = value;
            });
        }
        
        // Save checklist data
        document.querySelectorAll('.workflow-checklist input[type="checkbox"]').forEach((cb, i) => {
            stepData[`checklist_${i}`] = cb.checked;
        });
        
        this.userData[this.currentStep] = stepData;
        
        // Save to localStorage
        localStorage.setItem('azlaw_workflow_progress', JSON.stringify({
            workflow: this.currentWorkflow.title,
            step: this.currentStep,
            data: this.userData
        }));
    },
    
    loadSavedProgress() {
        const saved = localStorage.getItem('azlaw_workflow_progress');
        if (saved) {
            const progress = JSON.parse(saved);
            // Show resume option
            this.showResumeOption(progress);
        }
    },
    
    showResumeOption(progress) {
        const resumeBanner = document.createElement('div');
        resumeBanner.className = 'resume-workflow-banner';
        resumeBanner.innerHTML = `
            <p>You have an incomplete ${progress.workflow}. Would you like to continue?</p>
            <button class="resume-yes">Resume</button>
            <button class="resume-no">Start Fresh</button>
        `;
        
        document.body.appendChild(resumeBanner);
        
        resumeBanner.querySelector('.resume-yes').addEventListener('click', () => {
            this.resumeWorkflow(progress);
            resumeBanner.remove();
        });
        
        resumeBanner.querySelector('.resume-no').addEventListener('click', () => {
            localStorage.removeItem('azlaw_workflow_progress');
            resumeBanner.remove();
        });
    },
    
    completeWorkflow() {
        // Generate summary
        const summary = this.generateSummary();
        
        const modal = document.querySelector('.workflow-modal');
        modal.querySelector('.workflow-body').innerHTML = `
            <div class="workflow-complete">
                <div class="complete-icon">✅</div>
                <h3>Workflow Complete!</h3>
                <p>Here's your personalized action plan:</p>
                <div class="workflow-summary">
                    ${summary}
                </div>
                <div class="workflow-actions">
                    <button class="download-summary">📥 Download Summary</button>
                    <button class="email-summary">📧 Email Summary</button>
                    <button class="print-summary">🖨️ Print Summary</button>
                </div>
            </div>
        `;
        
        // Add action handlers
        modal.querySelector('.download-summary').addEventListener('click', () => {
            this.downloadSummary(summary);
        });
    },
    
    generateSummary() {
        let summary = `<h4>${this.currentWorkflow.title} - Summary</h4>`;
        summary += '<ul>';
        
        this.currentWorkflow.steps.forEach((step, i) => {
            const stepData = this.userData[i] || {};
            summary += `<li><strong>${step.title}</strong>: `;
            
            if (step.questions) {
                summary += step.questions.map(q => `${q.text}: ${stepData[`q${i}`] || 'Not answered'}`).join(', ');
            }
            
            if (step.checklist) {
                const completed = step.checklist.filter((_, idx) => stepData[`checklist_${idx}`]).length;
                summary += `${completed}/${step.checklist.length} items completed`;
            }
            
            summary += '</li>';
        });
        
        summary += '</ul>';
        
        // Add next steps
        summary += '<h4>Recommended Next Steps:</h4><ol>';
        summary += '<li>Review all gathered documents</li>';
        summary += '<li>Consult with an attorney if needed</li>';
        summary += '<li>File necessary paperwork with the court</li>';
        summary += '</ol>';
        
        return summary;
    },
    
    closeWorkflow() {
        const modal = document.querySelector('.workflow-modal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
        
        document.querySelector('.workflow-launcher').classList.remove('active');
    }
};

// Enhanced Calculator System
const AZLawCalculators = {
    init() {
        this.enhanceExistingCalculators();
        this.createCalculatorHub();
    },
    
    enhanceExistingCalculators() {
        // Find all calculator containers
        document.querySelectorAll('.calculator-container').forEach(container => {
            this.enhanceCalculator(container);
        });
    },
    
    enhanceCalculator(container) {
        // Add real-time validation
        container.querySelectorAll('input[type="number"]').forEach(input => {
            input.addEventListener('input', (e) => {
                this.validateInput(e.target);
                this.updateCalculation(container);
            });
            
            // Add formatting
            input.addEventListener('blur', (e) => {
                this.formatCurrency(e.target);
            });
        });
        
        // Add visual feedback
        this.addVisualFeedback(container);
        
        // Add save/load functionality
        this.addSaveLoad(container);
    },
    
    validateInput(input) {
        const value = parseFloat(input.value);
        const min = parseFloat(input.min);
        const max = parseFloat(input.max);
        
        // Remove any existing error state
        input.classList.remove('error', 'warning', 'success');
        this.hideTooltip(input);
        
        if (input.value === '') {
            // Empty field - no validation needed
            return true;
        }
        
        if (isNaN(value)) {
            input.classList.add('error');
            this.showTooltip(input, 'Please enter a valid number', 'error');
            this.shakeElement(input);
            return false;
        } else if (min && value < min) {
            input.classList.add('error');
            this.showTooltip(input, `Minimum value is ${this.formatMoney(min)}`, 'error');
            this.shakeElement(input);
            return false;
        } else if (max && value > max) {
            input.classList.add('error');
            this.showTooltip(input, `Maximum value is ${this.formatMoney(max)}`, 'error');
            this.shakeElement(input);
            return false;
        } else {
            // Show success feedback
            input.classList.add('success');
            
            // Contextual warnings
            if (input.id === 'income1' || input.id === 'income2') {
                if (value < 1300) {
                    input.classList.add('warning');
                    this.showTooltip(input, 'Income below self-support reserve ($1,300)', 'warning');
                } else if (value > 30000) {
                    input.classList.add('warning');
                    this.showTooltip(input, 'High income - special rules may apply', 'warning');
                }
            }
            
            return true;
        }
    },
    
    shakeElement(element) {
        element.classList.add('shake');
        setTimeout(() => element.classList.remove('shake'), 500);
    },
    
    formatMoney(value) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
        }).format(value);
    },
    
    formatCurrency(input) {
        const value = parseFloat(input.value);
        if (!isNaN(value)) {
            input.value = value.toFixed(2);
        }
    },
    
    updateCalculation(container) {
        // Find calculation function
        const calcType = container.dataset.calculator;
        
        switch (calcType) {
            case 'child-support':
                this.calculateChildSupport(container);
                break;
            case 'spousal-maintenance':
                this.calculateSpousalMaintenance(container);
                break;
            case 'property-division':
                this.calculatePropertyDivision(container);
                break;
        }
    },
    
    calculateChildSupport(container) {
        // Get all inputs
        const inputs = {
            income1: parseFloat(container.querySelector('#income1')?.value) || 0,
            income2: parseFloat(container.querySelector('#income2')?.value) || 0,
            childrenCount: parseInt(container.querySelector('#children')?.value) || 0,
            parentingDays1: parseInt(container.querySelector('#days1')?.value) || 0,
            parentingDays2: parseInt(container.querySelector('#days2')?.value) || 0,
            healthInsurance: parseFloat(container.querySelector('#health')?.value) || 0,
            childcare: parseFloat(container.querySelector('#childcare')?.value) || 0
        };
        
        // Validate inputs
        if (inputs.childrenCount === 0) {
            this.displayResults(container, null, 'Please select the number of children');
            return;
        }
        
        if (inputs.parentingDays1 + inputs.parentingDays2 !== 365) {
            this.showNotification('Warning: Parenting days should total 365', 'warning');
        }
        
        // Arizona calculations
        const combinedIncome = inputs.income1 + inputs.income2;
        
        // Self-support reserve check
        const selfSupportReserve = 1300;
        const income1Adjusted = Math.max(inputs.income1 - selfSupportReserve, 0);
        const income2Adjusted = Math.max(inputs.income2 - selfSupportReserve, 0);
        const combinedAdjusted = income1Adjusted + income2Adjusted;
        
        // Get basic support amount from tables
        const basicSupport = this.getBasicSupportAmount(combinedIncome, inputs.childrenCount);
        
        // Calculate income shares
        const parent1Share = combinedAdjusted > 0 ? income1Adjusted / combinedAdjusted : 0.5;
        const parent2Share = combinedAdjusted > 0 ? income2Adjusted / combinedAdjusted : 0.5;
        
        // Basic obligations
        let parent1Obligation = basicSupport * parent1Share;
        let parent2Obligation = basicSupport * parent2Share;
        
        // Parenting time adjustments
        const parentingTimeAdjustment = this.getParentingTimeAdjustment(inputs.parentingDays1);
        parent1Obligation *= (1 - parentingTimeAdjustment);
        parent2Obligation *= (1 - this.getParentingTimeAdjustment(inputs.parentingDays2));
        
        // Add additional expenses
        parent1Obligation += (inputs.healthInsurance + inputs.childcare) * parent1Share;
        parent2Obligation += (inputs.healthInsurance + inputs.childcare) * parent2Share;
        
        // Calculate net payment (who pays whom)
        const netPayment = parent1Obligation - parent2Obligation;
        const payingParent = netPayment > 0 ? 'Parent 1' : 'Parent 2';
        const receivingParent = netPayment > 0 ? 'Parent 2' : 'Parent 1';
        const paymentAmount = Math.abs(netPayment);
        
        // Prepare detailed results
        const results = {
            'Combined Monthly Income': this.formatMoney(combinedIncome),
            'Basic Support Obligation': this.formatMoney(basicSupport),
            'Parent 1 Income Share': `${(parent1Share * 100).toFixed(1)}%`,
            'Parent 2 Income Share': `${(parent2Share * 100).toFixed(1)}%`,
            'Parent 1 Base Obligation': this.formatMoney(parent1Obligation),
            'Parent 2 Base Obligation': this.formatMoney(parent2Obligation),
            'Additional Expenses': this.formatMoney(inputs.healthInsurance + inputs.childcare),
            [`${payingParent} Pays ${receivingParent}`]: this.formatMoney(paymentAmount) + '/month'
        };
        
        // Update display with animation
        this.displayResults(container, results);
        
        // Create enhanced visualization
        this.createVisualization(container, {
            parent1: parent1Obligation,
            parent2: parent2Obligation,
            netPayment: paymentAmount,
            payingParent: payingParent
        });
        
        // Add confidence indicator
        this.addConfidenceIndicator(container, combinedIncome, inputs.childrenCount);
    },
    
    getParentingTimeAdjustment(days) {
        // Arizona parenting time adjustment table
        if (days < 58) return 0;
        if (days < 88) return 0.10;
        if (days < 116) return 0.20;
        if (days < 143) return 0.30;
        return 0.40; // Near equal time
    },
    
    getBasicSupportAmount(income, children) {
        // Simplified table lookup (actual uses official tables)
        const baseAmount = 1000;
        const incomeMultiplier = Math.min(income / 10000, 2);
        const childMultiplier = Math.sqrt(children);
        
        return baseAmount * incomeMultiplier * childMultiplier;
    },
    
    displayResults(container, results, error = null) {
        let resultsDiv = container.querySelector('.calculation-results');
        if (!resultsDiv) {
            resultsDiv = document.createElement('div');
            resultsDiv.className = 'calculation-results';
            container.appendChild(resultsDiv);
        }
        
        if (error) {
            resultsDiv.innerHTML = `
                <div class="results-error">
                    <span class="error-icon">⚠️</span>
                    <span>${error}</span>
                </div>
            `;
            resultsDiv.classList.add('fade-in');
            return;
        }
        
        if (!results) {
            resultsDiv.style.display = 'none';
            return;
        }
        
        resultsDiv.style.display = 'block';
        resultsDiv.innerHTML = `
            <h4>Calculation Results</h4>
            <div class="results-grid">
                ${Object.entries(results).map(([key, value]) => {
                    const isHighlight = key.includes('Pays');
                    return `
                        <div class="result-item ${isHighlight ? 'highlight' : ''}">
                            <span class="result-label">${key}:</span>
                            <span class="result-value">${value}</span>
                        </div>
                    `;
                }).join('')}
            </div>
            <div class="results-disclaimer">
                <strong>⚠️ Important:</strong> This is an estimate only. Actual amounts may vary based on additional factors. 
                Consult the <a href="https://www.azcourts.gov/familylaw/2022-Child-Support-Calculator" target="_blank">official Arizona calculator</a> 
                or an attorney for accurate calculations.
            </div>
        `;
        
        // Animate results with staggered effect
        resultsDiv.classList.add('fade-in');
        resultsDiv.querySelectorAll('.result-item').forEach((item, index) => {
            item.style.animationDelay = `${index * 0.05}s`;
            item.classList.add('slide-in');
        });
    },
    
    addConfidenceIndicator(container, income, children) {
        let confidenceDiv = container.querySelector('.confidence-indicator');
        if (!confidenceDiv) {
            confidenceDiv = document.createElement('div');
            confidenceDiv.className = 'confidence-indicator';
            container.appendChild(confidenceDiv);
        }
        
        // Calculate confidence level
        let confidence = 'high';
        let message = 'Standard calculation - high confidence';
        
        if (income > 20000) {
            confidence = 'medium';
            message = 'High income - results may vary';
        } else if (income < 2600) {
            confidence = 'low';
            message = 'Low income - minimum support may apply';
        } else if (children > 3) {
            confidence = 'medium';
            message = 'Multiple children - complex factors';
        }
        
        confidenceDiv.innerHTML = `
            <div class="confidence-level ${confidence}">
                <span class="confidence-icon">${confidence === 'high' ? '✅' : confidence === 'medium' ? '⚠️' : '❌'}</span>
                <span class="confidence-text">Confidence Level: ${confidence.toUpperCase()}</span>
                <span class="confidence-message">${message}</span>
            </div>
        `;
    },
    
    createVisualization(container, data) {
        let vizDiv = container.querySelector('.calculation-viz');
        if (!vizDiv) {
            vizDiv = document.createElement('div');
            vizDiv.className = 'calculation-viz';
            container.appendChild(vizDiv);
        }
        
        const total = data.parent1 + data.parent2;
        const parent1Percent = (data.parent1 / total * 100) || 0;
        const parent2Percent = (data.parent2 / total * 100) || 0;
        
        vizDiv.innerHTML = `
            <h4>Visual Breakdown</h4>
            
            <!-- Obligation Comparison -->
            <div class="viz-section">
                <h5>Monthly Obligations</h5>
                <div class="viz-bar-chart">
                    <div class="bar-item">
                        <div class="bar-label">Parent 1</div>
                        <div class="bar-container">
                            <div class="bar parent1" style="width: ${parent1Percent}%">
                                ${this.formatMoney(data.parent1)}
                            </div>
                        </div>
                    </div>
                    <div class="bar-item">
                        <div class="bar-label">Parent 2</div>
                        <div class="bar-container">
                            <div class="bar parent2" style="width: ${parent2Percent}%">
                                ${this.formatMoney(data.parent2)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Payment Flow -->
            <div class="viz-section">
                <h5>Payment Summary</h5>
                <div class="payment-flow">
                    <div class="flow-item ${data.payingParent === 'Parent 1' ? 'payer' : 'receiver'}">
                        <span class="flow-label">Parent 1</span>
                        <span class="flow-icon">${data.payingParent === 'Parent 1' ? '💸' : '💰'}</span>
                    </div>
                    <div class="flow-arrow">
                        <span class="arrow-amount">${this.formatMoney(data.netPayment)}/mo</span>
                        <svg width="100" height="30" viewBox="0 0 100 30">
                            <path d="M 10 15 L 85 15" stroke="var(--md-accent-fg-color)" stroke-width="3" marker-end="url(#arrowhead)"/>
                            <defs>
                                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="var(--md-accent-fg-color)"/>
                                </marker>
                            </defs>
                        </svg>
                    </div>
                    <div class="flow-item ${data.payingParent === 'Parent 2' ? 'payer' : 'receiver'}">
                        <span class="flow-label">Parent 2</span>
                        <span class="flow-icon">${data.payingParent === 'Parent 2' ? '💸' : '💰'}</span>
                    </div>
                </div>
            </div>
            
            <!-- Share Donut Chart -->
            <div class="viz-section">
                <h5>Income Share Distribution</h5>
                <div class="donut-chart">
                    <svg viewBox="0 0 100 100" width="150" height="150">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#e0e0e0" stroke-width="20"/>
                        <circle cx="50" cy="50" r="40" fill="none" 
                                stroke="var(--md-primary-fg-color)" 
                                stroke-width="20"
                                stroke-dasharray="${parent1Percent * 2.51} 251"
                                transform="rotate(-90 50 50)"/>
                        <text x="50" y="50" text-anchor="middle" dominant-baseline="middle" font-size="14" font-weight="bold">
                            ${parent1Percent.toFixed(0)}% / ${parent2Percent.toFixed(0)}%
                        </text>
                    </svg>
                    <div class="chart-legend">
                        <div class="legend-item">
                            <span class="legend-color parent1"></span>
                            <span>Parent 1: ${parent1Percent.toFixed(1)}%</span>
                        </div>
                        <div class="legend-item">
                            <span class="legend-color parent2"></span>
                            <span>Parent 2: ${parent2Percent.toFixed(1)}%</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Animate the visualization
        setTimeout(() => {
            vizDiv.querySelectorAll('.bar, .flow-item, .donut-chart').forEach((el, i) => {
                el.style.animationDelay = `${i * 0.1}s`;
                el.classList.add('animate-in');
            });
        }, 100);
    },
    
    addSaveLoad(container) {
        const controls = document.createElement('div');
        controls.className = 'calculator-controls';
        controls.innerHTML = `
            <button class="save-calc">💾 Save Calculation</button>
            <button class="load-calc">📂 Load Previous</button>
            <button class="share-calc">📤 Share Results</button>
            <button class="print-calc">🖨️ Print</button>
        `;
        
        container.appendChild(controls);
        
        // Save functionality
        controls.querySelector('.save-calc').addEventListener('click', () => {
            this.saveCalculation(container);
        });
        
        // Load functionality
        controls.querySelector('.load-calc').addEventListener('click', () => {
            this.loadCalculation(container);
        });
        
        // Share functionality
        controls.querySelector('.share-calc').addEventListener('click', () => {
            this.shareCalculation(container);
        });
        
        // Print functionality
        controls.querySelector('.print-calc').addEventListener('click', () => {
            this.printCalculation(container);
        });
    },
    
    saveCalculation(container) {
        const data = {};
        container.querySelectorAll('input, select').forEach(input => {
            data[input.id || input.name] = input.value;
        });
        
        const saved = {
            type: container.dataset.calculator,
            data: data,
            timestamp: new Date().toISOString(),
            results: this.getResults(container)
        };
        
        // Save to localStorage
        const calculations = JSON.parse(localStorage.getItem('azlaw_calculations') || '[]');
        calculations.push(saved);
        localStorage.setItem('azlaw_calculations', JSON.stringify(calculations));
        
        // Show confirmation
        this.showNotification('Calculation saved successfully!');
    },
    
    showTooltip(element, message, type = 'error') {
        // Remove existing tooltip
        this.hideTooltip(element);
        
        const tooltip = document.createElement('div');
        tooltip.className = `input-tooltip ${type}`;
        
        // Add icon based on type
        const icon = type === 'error' ? '❌' : type === 'warning' ? '⚠️' : 'ℹ️';
        tooltip.innerHTML = `<span class="tooltip-icon">${icon}</span><span>${message}</span>`;
        
        element.parentElement.appendChild(tooltip);
        
        // Position tooltip
        const rect = element.getBoundingClientRect();
        tooltip.style.left = '0';
        tooltip.style.top = element.offsetHeight + 'px';
        
        // Add animation
        setTimeout(() => tooltip.classList.add('show'), 10);
    },
    
    hideTooltip(element) {
        const tooltip = element.parentElement.querySelector('.input-tooltip');
        if (tooltip) tooltip.remove();
    },
    
    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        const icons = {
            success: '✅',
            warning: '⚠️',
            error: '❌',
            info: 'ℹ️'
        };
        
        notification.innerHTML = `
            <span class="notification-icon">${icons[type] || icons.info}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.remove()">×</button>
        `;
        
        document.body.appendChild(notification);
        
        // Position at top right
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.right = '20px';
        notification.style.zIndex = '9999';
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // Auto-dismiss after delay (longer for warnings/errors)
        const duration = type === 'error' || type === 'warning' ? 5000 : 3000;
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, duration);
    },
    
    createCalculatorHub() {
        // Create a central hub for all calculators
        const hub = document.createElement('div');
        hub.className = 'calculator-hub';
        hub.innerHTML = `
            <h3>Legal Calculators</h3>
            <div class="calculator-grid">
                <a href="/resources/child-support-calculator/" class="calculator-card">
                    <span class="calc-icon">💰</span>
                    <h4>Child Support</h4>
                    <p>Calculate support obligations</p>
                </a>
                <a href="/resources/spousal-maintenance-calculator/" class="calculator-card">
                    <span class="calc-icon">💵</span>
                    <h4>Spousal Maintenance</h4>
                    <p>Estimate alimony amounts</p>
                </a>
                <a href="/resources/property-division-worksheet/" class="calculator-card">
                    <span class="calc-icon">🏠</span>
                    <h4>Property Division</h4>
                    <p>Divide marital assets</p>
                </a>
                <a href="/resources/parenting-time-calculator/" class="calculator-card">
                    <span class="calc-icon">📅</span>
                    <h4>Parenting Time</h4>
                    <p>Calculate custody percentages</p>
                </a>
            </div>
        `;
        
        // Add to sidebar if space available
        const sidebar = document.querySelector('.md-sidebar--secondary');
        if (sidebar && window.innerWidth > 1220) {
            sidebar.appendChild(hub);
        }
    }
};

// Contextual Help System
const AZLawHelp = {
    helpData: {
        'child-support': {
            title: 'Understanding Child Support',
            content: 'Child support in Arizona is calculated using statewide guidelines...',
            links: [
                {text: 'Official Guidelines', url: '/resources/guidelines/'},
                {text: 'Modification Process', url: '/resources/post-decree-issues/'}
            ]
        },
        'legal-decision-making': {
            title: 'Legal Decision-Making (Custody)',
            content: 'Arizona uses "legal decision-making" instead of custody...',
            links: [
                {text: 'Best Interests Factors', url: '/child-custody/#best-interests'},
                {text: 'Parenting Plans', url: '/resources/parenting-plans/'}
            ]
        }
    },
    
    init() {
        this.scanForHelpTriggers();
        this.createHelpWidget();
        this.setupSmartSuggestions();
    },
    
    scanForHelpTriggers() {
        // Add help icons to complex terms
        const complexTerms = [
            'QDRO', 'spousal maintenance', 'legal decision-making',
            'community property', 'parenting time', 'arrearages'
        ];
        
        complexTerms.forEach(term => {
            document.querySelectorAll('.md-content').forEach(content => {
                content.innerHTML = content.innerHTML.replace(
                    new RegExp(`\\b(${term})\\b`, 'gi'),
                    `$1 <span class="help-icon" data-help="${term.toLowerCase().replace(/\s+/g, '-')}">?</span>`
                );
            });
        });
        
        // Add click handlers
        document.querySelectorAll('.help-icon').forEach(icon => {
            icon.addEventListener('click', (e) => {
                this.showContextualHelp(e.target.dataset.help);
            });
        });
    },
    
    createHelpWidget() {
        const widget = document.createElement('div');
        widget.className = 'help-widget';
        widget.innerHTML = `
            <div class="help-header">
                <h3>Quick Help</h3>
                <button class="help-close">&times;</button>
            </div>
            <div class="help-content">
                <div class="help-search">
                    <input type="text" placeholder="What do you need help with?" class="help-search-input">
                </div>
                <div class="help-suggestions">
                    <h4>Common Questions</h4>
                    <ul>
                        <li><a href="#" data-help="filing-divorce">How do I file for divorce?</a></li>
                        <li><a href="#" data-help="calculate-support">How is child support calculated?</a></li>
                        <li><a href="#" data-help="custody-factors">What determines custody?</a></li>
                        <li><a href="#" data-help="property-division">How is property divided?</a></li>
                    </ul>
                </div>
                <div class="help-resources">
                    <h4>Quick Resources</h4>
                    <a href="/resources/forms/" class="resource-link">📄 Court Forms</a>
                    <a href="/resources/calculators/" class="resource-link">🧮 Calculators</a>
                    <a href="/reference/glossary/" class="resource-link">📖 Legal Terms</a>
                    <a href="/reference/faq/" class="resource-link">❓ FAQ</a>
                </div>
            </div>
            <div class="help-footer">
                <p>Need personalized help? <a href="/legal-representation/">Find an attorney</a></p>
            </div>
        `;
        
        document.body.appendChild(widget);
        
        // Create floating help button
        const helpButton = document.createElement('button');
        helpButton.className = 'floating-help-button';
        helpButton.innerHTML = '<span class="material-icons">help_outline</span>';
        helpButton.addEventListener('click', () => {
            widget.classList.toggle('active');
        });
        
        document.body.appendChild(helpButton);
        
        // Setup help widget events
        widget.querySelector('.help-close').addEventListener('click', () => {
            widget.classList.remove('active');
        });
        
        // Help search
        widget.querySelector('.help-search-input').addEventListener('input', (e) => {
            this.searchHelp(e.target.value);
        });
    },
    
    showContextualHelp(topic) {
        const helpData = this.helpData[topic];
        if (!helpData) return;
        
        const popup = document.createElement('div');
        popup.className = 'help-popup';
        popup.innerHTML = `
            <div class="help-popup-content">
                <h4>${helpData.title}</h4>
                <p>${helpData.content}</p>
                <div class="help-links">
                    ${helpData.links.map(link => 
                        `<a href="${link.url}">${link.text}</a>`
                    ).join('')}
                </div>
                <button class="help-popup-close">Got it</button>
            </div>
        `;
        
        document.body.appendChild(popup);
        
        // Position near cursor
        popup.style.top = `${event.pageY + 10}px`;
        popup.style.left = `${event.pageX + 10}px`;
        
        // Close handler
        popup.querySelector('.help-popup-close').addEventListener('click', () => {
            popup.remove();
        });
        
        // Close on outside click
        setTimeout(() => {
            document.addEventListener('click', function closePopup(e) {
                if (!popup.contains(e.target)) {
                    popup.remove();
                    document.removeEventListener('click', closePopup);
                }
            });
        }, 100);
    },
    
    setupSmartSuggestions() {
        // Monitor user behavior and suggest help
        let inactivityTimer;
        let lastScrollPosition = 0;
        
        document.addEventListener('scroll', () => {
            clearTimeout(inactivityTimer);
            
            // If user is scrolling up and down repeatedly, they might be lost
            const currentScroll = window.pageYOffset;
            if (Math.abs(currentScroll - lastScrollPosition) > 500) {
                inactivityTimer = setTimeout(() => {
                    this.suggestHelp('Looking for something specific?');
                }, 5000);
            }
            
            lastScrollPosition = currentScroll;
        });
    },
    
    suggestHelp(message) {
        const suggestion = document.createElement('div');
        suggestion.className = 'help-suggestion';
        suggestion.innerHTML = `
            <p>${message}</p>
            <button class="open-help">Get Help</button>
            <button class="dismiss-help">No Thanks</button>
        `;
        
        document.body.appendChild(suggestion);
        
        suggestion.querySelector('.open-help').addEventListener('click', () => {
            document.querySelector('.help-widget').classList.add('active');
            suggestion.remove();
        });
        
        suggestion.querySelector('.dismiss-help').addEventListener('click', () => {
            suggestion.remove();
        });
        
        // Auto-hide after 10 seconds
        setTimeout(() => {
            suggestion.classList.add('fade-out');
            setTimeout(() => suggestion.remove(), 300);
        }, 10000);
    }
};

// User Preferences System
const AZLawPreferences = {
    preferences: {
        theme: 'light',
        fontSize: 'medium',
        showTooltips: true,
        autoSave: true,
        notifications: true,
        highlightSearch: true,
        readingProgress: true,
        quickAccess: true,
        language: 'en',
        dateFormat: 'MM/DD/YYYY'
    },
    
    bookmarks: [],
    history: [],
    notes: {},
    
    init() {
        this.loadPreferences();
        this.createPreferencesUI();
        this.applyPreferences();
        this.setupBookmarking();
        this.trackHistory();
        this.createQuickAccessPanel();
    },
    
    loadPreferences() {
        const saved = localStorage.getItem('azlaw_preferences');
        if (saved) {
            this.preferences = { ...this.preferences, ...JSON.parse(saved) };
        }
        
        this.bookmarks = JSON.parse(localStorage.getItem('azlaw_bookmarks') || '[]');
        this.history = JSON.parse(localStorage.getItem('azlaw_history') || '[]');
        this.notes = JSON.parse(localStorage.getItem('azlaw_notes') || '{}');
    },
    
    createPreferencesUI() {
        const prefsButton = document.createElement('button');
        prefsButton.className = 'preferences-button';
        prefsButton.innerHTML = '<span class="material-icons">settings</span>';
        prefsButton.addEventListener('click', () => this.showPreferencesModal());
        
        // Add to header
        const header = document.querySelector('.md-header__inner');
        if (header) {
            header.appendChild(prefsButton);
        }
    },
    
    showPreferencesModal() {
        const modal = document.createElement('div');
        modal.className = 'preferences-modal active';
        modal.innerHTML = `
            <div class="preferences-content">
                <h2>Preferences</h2>
                <div class="preferences-tabs">
                    <button class="tab-button active" data-tab="general">General</button>
                    <button class="tab-button" data-tab="bookmarks">Bookmarks</button>
                    <button class="tab-button" data-tab="history">History</button>
                    <button class="tab-button" data-tab="notes">Notes</button>
                </div>
                <div class="tab-content active" id="general-tab">
                    <div class="preference-group">
                        <label>
                            <span>Theme</span>
                            <select id="pref-theme">
                                <option value="light" ${this.preferences.theme === 'light' ? 'selected' : ''}>Light</option>
                                <option value="dark" ${this.preferences.theme === 'dark' ? 'selected' : ''}>Dark</option>
                                <option value="auto" ${this.preferences.theme === 'auto' ? 'selected' : ''}>Auto</option>
                            </select>
                        </label>
                    </div>
                    <div class="preference-group">
                        <label>
                            <span>Font Size</span>
                            <select id="pref-fontSize">
                                <option value="small" ${this.preferences.fontSize === 'small' ? 'selected' : ''}>Small</option>
                                <option value="medium" ${this.preferences.fontSize === 'medium' ? 'selected' : ''}>Medium</option>
                                <option value="large" ${this.preferences.fontSize === 'large' ? 'selected' : ''}>Large</option>
                            </select>
                        </label>
                    </div>
                    <div class="preference-group">
                        <label>
                            <input type="checkbox" id="pref-tooltips" ${this.preferences.showTooltips ? 'checked' : ''}>
                            <span>Show helpful tooltips</span>
                        </label>
                    </div>
                    <div class="preference-group">
                        <label>
                            <input type="checkbox" id="pref-autosave" ${this.preferences.autoSave ? 'checked' : ''}>
                            <span>Auto-save form progress</span>
                        </label>
                    </div>
                </div>
                <div class="tab-content" id="bookmarks-tab">
                    <div class="bookmarks-list">
                        ${this.renderBookmarks()}
                    </div>
                </div>
                <div class="tab-content" id="history-tab">
                    <div class="history-list">
                        ${this.renderHistory()}
                    </div>
                    <button class="clear-history">Clear History</button>
                </div>
                <div class="tab-content" id="notes-tab">
                    <div class="notes-list">
                        ${this.renderNotes()}
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="save-preferences">Save</button>
                    <button class="export-preferences">Export All Data</button>
                    <button class="import-preferences">Import Data</button>
                    <button class="close-preferences">Cancel</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Tab switching
        modal.querySelectorAll('.tab-button').forEach(tab => {
            tab.addEventListener('click', (e) => {
                modal.querySelectorAll('.tab-button').forEach(t => t.classList.remove('active'));
                modal.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                
                e.target.classList.add('active');
                modal.querySelector(`#${e.target.dataset.tab}-tab`).classList.add('active');
            });
        });
        
        // Save preferences
        modal.querySelector('.save-preferences').addEventListener('click', () => {
            this.savePreferences(modal);
            modal.remove();
        });
        
        // Close modal
        modal.querySelector('.close-preferences').addEventListener('click', () => {
            modal.remove();
        });
        
        // Export data
        modal.querySelector('.export-preferences').addEventListener('click', () => {
            this.exportUserData();
        });
        
        // Import data
        modal.querySelector('.import-preferences').addEventListener('click', () => {
            this.importUserData();
        });
        
        // Clear history
        modal.querySelector('.clear-history')?.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear your browsing history?')) {
                this.history = [];
                localStorage.setItem('azlaw_history', JSON.stringify(this.history));
                modal.querySelector('.history-list').innerHTML = this.renderHistory();
                AZLawCalculators.showNotification('History cleared', 'success');
            }
        });
    },
    
    savePreferences(modal) {
        this.preferences.theme = modal.querySelector('#pref-theme').value;
        this.preferences.fontSize = modal.querySelector('#pref-fontSize').value;
        this.preferences.showTooltips = modal.querySelector('#pref-tooltips').checked;
        this.preferences.autoSave = modal.querySelector('#pref-autosave').checked;
        
        localStorage.setItem('azlaw_preferences', JSON.stringify(this.preferences));
        this.applyPreferences();
        
        AZLawHelp.showNotification('Preferences saved!');
    },
    
    applyPreferences() {
        // Apply theme
        document.documentElement.setAttribute('data-user-theme', this.preferences.theme);
        
        // Apply font size
        document.documentElement.style.setProperty('--user-font-size', {
            small: '14px',
            medium: '16px',
            large: '18px'
        }[this.preferences.fontSize]);
        
        // Apply other preferences
        if (!this.preferences.showTooltips) {
            document.body.classList.add('hide-tooltips');
        }
    },
    
    setupBookmarking() {
        // Add bookmark button to each page
        const bookmarkBtn = document.createElement('button');
        bookmarkBtn.className = 'bookmark-page-button';
        bookmarkBtn.innerHTML = '<span class="material-icons">bookmark_border</span>';
        
        const content = document.querySelector('.md-content__inner');
        if (content) {
            content.appendChild(bookmarkBtn);
        }
        
        // Check if current page is bookmarked
        const currentUrl = window.location.pathname;
        const isBookmarked = this.bookmarks.some(b => b.url === currentUrl);
        if (isBookmarked) {
            bookmarkBtn.innerHTML = '<span class="material-icons">bookmark</span>';
            bookmarkBtn.classList.add('bookmarked');
        }
        
        bookmarkBtn.addEventListener('click', () => {
            this.toggleBookmark();
        });
    },
    
    toggleBookmark() {
        const currentUrl = window.location.pathname;
        const title = document.querySelector('h1').textContent;
        const index = this.bookmarks.findIndex(b => b.url === currentUrl);
        
        if (index > -1) {
            this.bookmarks.splice(index, 1);
            document.querySelector('.bookmark-page-button').innerHTML = 
                '<span class="material-icons">bookmark_border</span>';
            AZLawHelp.showNotification('Bookmark removed');
        } else {
            this.bookmarks.push({
                url: currentUrl,
                title: title,
                timestamp: new Date().toISOString()
            });
            document.querySelector('.bookmark-page-button').innerHTML = 
                '<span class="material-icons">bookmark</span>';
            AZLawHelp.showNotification('Page bookmarked!');
        }
        
        localStorage.setItem('azlaw_bookmarks', JSON.stringify(this.bookmarks));
    },
    
    trackHistory() {
        const currentPage = {
            url: window.location.pathname,
            title: document.querySelector('h1')?.textContent || document.title,
            timestamp: new Date().toISOString()
        };
        
        // Add to history (limit to 50 items)
        this.history = [currentPage, ...this.history.filter(h => h.url !== currentPage.url)].slice(0, 50);
        localStorage.setItem('azlaw_history', JSON.stringify(this.history));
    },
    
    renderBookmarks() {
        if (this.bookmarks.length === 0) {
            return '<p class="empty-message">No bookmarks yet</p>';
        }
        
        return `<ul>${this.bookmarks.map(bookmark => `
            <li class="bookmark-item">
                <a href="${bookmark.url}">${bookmark.title}</a>
                <button class="remove-bookmark" data-url="${bookmark.url}">×</button>
            </li>
        `).join('')}</ul>`;
    },
    
    renderHistory() {
        if (this.history.length === 0) {
            return '<p class="empty-message">No history yet</p>';
        }
        
        return `<ul>${this.history.slice(0, 20).map(item => `
            <li class="history-item">
                <a href="${item.url}">${item.title}</a>
                <span class="history-time">${this.formatTime(item.timestamp)}</span>
            </li>
        `).join('')}</ul>`;
    },
    
    renderNotes() {
        const notesList = Object.entries(this.notes);
        if (notesList.length === 0) {
            return '<p class="empty-message">No notes yet. Add notes while reading articles!</p>';
        }
        
        return `<ul>${notesList.map(([page, note]) => `
            <li class="note-item">
                <h4>${note.title}</h4>
                <p>${note.content}</p>
                <a href="${page}" class="view-note-page">View Page</a>
            </li>
        `).join('')}</ul>`;
    },
    
    formatTime(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now - date;
        
        if (diff < 3600000) {
            return `${Math.floor(diff / 60000)} minutes ago`;
        } else if (diff < 86400000) {
            return `${Math.floor(diff / 3600000)} hours ago`;
        } else {
            return date.toLocaleDateString();
        }
    },
    
    exportUserData() {
        const data = {
            preferences: this.preferences,
            bookmarks: this.bookmarks,
            history: this.history,
            notes: this.notes,
            calculations: JSON.parse(localStorage.getItem('azlaw_calculations') || '[]'),
            exportDate: new Date().toISOString(),
            version: '1.0'
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `azlaw_data_export_${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
        
        AZLawCalculators.showNotification('Data exported successfully!', 'success');
    },
    
    importUserData() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'application/json';
        
        input.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const data = JSON.parse(event.target.result);
                    
                    // Validate data structure
                    if (!data.version || !data.preferences) {
                        throw new Error('Invalid data format');
                    }
                    
                    // Ask for confirmation
                    const message = `Import data from ${new Date(data.exportDate).toLocaleDateString()}? This will replace all current data.`;
                    if (!confirm(message)) return;
                    
                    // Import data
                    this.preferences = { ...this.preferences, ...data.preferences };
                    this.bookmarks = data.bookmarks || [];
                    this.history = data.history || [];
                    this.notes = data.notes || {};
                    
                    // Save to localStorage
                    localStorage.setItem('azlaw_preferences', JSON.stringify(this.preferences));
                    localStorage.setItem('azlaw_bookmarks', JSON.stringify(this.bookmarks));
                    localStorage.setItem('azlaw_history', JSON.stringify(this.history));
                    localStorage.setItem('azlaw_notes', JSON.stringify(this.notes));
                    
                    if (data.calculations) {
                        localStorage.setItem('azlaw_calculations', JSON.stringify(data.calculations));
                    }
                    
                    // Apply preferences
                    this.applyPreferences();
                    
                    // Refresh UI
                    const modal = document.querySelector('.preferences-modal');
                    if (modal) modal.remove();
                    
                    AZLawCalculators.showNotification('Data imported successfully!', 'success');
                    
                    // Reload page to apply all changes
                    setTimeout(() => window.location.reload(), 1500);
                    
                } catch (error) {
                    AZLawCalculators.showNotification('Error importing data: ' + error.message, 'error');
                }
            };
            
            reader.readAsText(file);
        });
        
        input.click();
    },
    
    // Add note functionality
    addNote(content) {
        const currentUrl = window.location.pathname;
        const title = document.querySelector('h1')?.textContent || document.title;
        
        this.notes[currentUrl] = {
            title: title,
            content: content,
            timestamp: new Date().toISOString()
        };
        
        localStorage.setItem('azlaw_notes', JSON.stringify(this.notes));
        AZLawCalculators.showNotification('Note saved!', 'success');
    },
    
    // Quick access panel
    createQuickAccessPanel() {
        if (!this.preferences.quickAccess) return;
        
        const panel = document.createElement('div');
        panel.className = 'quick-access-panel';
        panel.innerHTML = `
            <div class="quick-access-header">
                <h4>Quick Access</h4>
                <button class="toggle-quick-access">−</button>
            </div>
            <div class="quick-access-content">
                <div class="recent-pages">
                    <h5>Recent Pages</h5>
                    ${this.history.slice(0, 5).map(item => `
                        <a href="${item.url}" class="recent-link">${item.title}</a>
                    `).join('')}
                </div>
                <div class="bookmarked-pages">
                    <h5>Bookmarks</h5>
                    ${this.bookmarks.slice(0, 5).map(item => `
                        <a href="${item.url}" class="bookmark-link">${item.title}</a>
                    `).join('')}
                </div>
                <div class="quick-tools">
                    <h5>Tools</h5>
                    <a href="/resources/child-support-calculator/" class="tool-link">Child Support Calculator</a>
                    <a href="/resources/forms-and-documents/" class="tool-link">Court Forms</a>
                    <a href="/reference/glossary/" class="tool-link">Legal Terms</a>
                </div>
            </div>
        `;
        
        document.body.appendChild(panel);
        
        // Toggle functionality
        panel.querySelector('.toggle-quick-access').addEventListener('click', (e) => {
            panel.classList.toggle('collapsed');
            e.target.textContent = panel.classList.contains('collapsed') ? '+' : '−';
        });
    }
};

// Mobile-First Progressive Features
const AZLawMobile = {
    init() {
        this.detectDevice();
        this.setupMobileNav();
        this.addTouchGestures();
        this.setupOfflineMode();
        this.createMobileToolbar();
    },
    
    detectDevice() {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            document.body.classList.add('mobile-device');
        }
        
        // Add viewport classes
        this.updateViewportClass();
        window.addEventListener('resize', () => this.updateViewportClass());
    },
    
    updateViewportClass() {
        const width = window.innerWidth;
        document.body.className = document.body.className.replace(/viewport-\w+/g, '');
        
        if (width < 600) {
            document.body.classList.add('viewport-mobile');
        } else if (width < 1000) {
            document.body.classList.add('viewport-tablet');
        } else {
            document.body.classList.add('viewport-desktop');
        }
    },
    
    setupMobileNav() {
        if (window.innerWidth > 768) return;
        
        // Create mobile menu button
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-button';
        mobileMenuBtn.innerHTML = '<span class="material-icons">menu</span>';
        
        const header = document.querySelector('.md-header');
        if (header) {
            header.appendChild(mobileMenuBtn);
        }
        
        // Create mobile navigation drawer
        const mobileNav = document.createElement('div');
        mobileNav.className = 'mobile-nav-drawer';
        mobileNav.innerHTML = `
            <div class="mobile-nav-header">
                <h3>Navigation</h3>
                <button class="close-mobile-nav">&times;</button>
            </div>
            <div class="mobile-nav-content">
                <div class="mobile-search">
                    <input type="text" placeholder="Search..." class="mobile-search-input">
                </div>
                <div class="mobile-quick-links">
                    <h4>Quick Access</h4>
                    <a href="/core-topics/divorce/">Divorce Guide</a>
                    <a href="/core-topics/child-custody/">Child Custody</a>
                    <a href="/resources/calculators/">Calculators</a>
                    <a href="/resources/forms/">Court Forms</a>
                </div>
                <div class="mobile-nav-menu"></div>
            </div>
        `;
        
        document.body.appendChild(mobileNav);
        
        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        mobileNav.querySelector('.close-mobile-nav').addEventListener('click', () => {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    },
    
    addTouchGestures() {
        let touchStartX = 0;
        let touchEndX = 0;
        
        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });
        
        this.handleSwipe = () => {
            const swipeDistance = touchEndX - touchStartX;
            
            // Swipe right to open menu
            if (swipeDistance > 100 && touchStartX < 50) {
                document.querySelector('.mobile-nav-drawer')?.classList.add('active');
            }
            
            // Swipe left to close menu
            if (swipeDistance < -100) {
                document.querySelector('.mobile-nav-drawer')?.classList.remove('active');
            }
        };
    },
    
    setupOfflineMode() {
        // Check if service workers are supported
        if ('serviceWorker' in navigator) {
            this.registerServiceWorker();
        }
        
        // Monitor online/offline status
        window.addEventListener('online', () => {
            this.updateConnectionStatus(true);
        });
        
        window.addEventListener('offline', () => {
            this.updateConnectionStatus(false);
        });
    },
    
    async registerServiceWorker() {
        try {
            const registration = await navigator.serviceWorker.register('/sw.js');
            console.log('Service Worker registered:', registration);
        } catch (error) {
            console.error('Service Worker registration failed:', error);
        }
    },
    
    updateConnectionStatus(isOnline) {
        const statusBanner = document.createElement('div');
        statusBanner.className = `connection-status ${isOnline ? 'online' : 'offline'}`;
        statusBanner.textContent = isOnline ? 
            '✅ Back online' : 
            '⚠️ You are offline - Some features may be limited';
        
        document.body.appendChild(statusBanner);
        
        setTimeout(() => {
            statusBanner.classList.add('fade-out');
            setTimeout(() => statusBanner.remove(), 300);
        }, 3000);
    },
    
    createMobileToolbar() {
        if (window.innerWidth > 768) return;
        
        const toolbar = document.createElement('div');
        toolbar.className = 'mobile-toolbar';
        toolbar.innerHTML = `
            <button class="mobile-tool" data-action="bookmark">
                <span class="material-icons">bookmark_border</span>
                <span>Save</span>
            </button>
            <button class="mobile-tool" data-action="share">
                <span class="material-icons">share</span>
                <span>Share</span>
            </button>
            <button class="mobile-tool" data-action="print">
                <span class="material-icons">print</span>
                <span>Print</span>
            </button>
            <button class="mobile-tool" data-action="help">
                <span class="material-icons">help_outline</span>
                <span>Help</span>
            </button>
        `;
        
        document.body.appendChild(toolbar);
        
        // Tool actions
        toolbar.querySelectorAll('.mobile-tool').forEach(tool => {
            tool.addEventListener('click', (e) => {
                const action = e.currentTarget.dataset.action;
                this.handleToolAction(action);
            });
        });
    },
    
    handleToolAction(action) {
        switch (action) {
            case 'bookmark':
                AZLawPreferences.toggleBookmark();
                break;
            case 'share':
                this.shareContent();
                break;
            case 'print':
                window.print();
                break;
            case 'help':
                document.querySelector('.help-widget').classList.add('active');
                break;
        }
    },
    
    async shareContent() {
        const shareData = {
            title: document.title,
            text: document.querySelector('h1')?.textContent || '',
            url: window.location.href
        };
        
        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                // Fallback to copy link
                await navigator.clipboard.writeText(window.location.href);
                AZLawHelp.showNotification('Link copied to clipboard!');
            }
        } catch (err) {
            console.error('Error sharing:', err);
        }
    }
};

// Analytics and Improvement System
const AZLawAnalytics = {
    events: [],
    sessionStart: Date.now(),
    
    init() {
        this.trackPageView();
        this.trackUserInteractions();
        this.sendAnalytics();
    },
    
    trackPageView() {
        this.logEvent('page_view', {
            page: window.location.pathname,
            referrer: document.referrer,
            time_on_site: 0
        });
        
        // Track time on page
        window.addEventListener('beforeunload', () => {
            const timeOnPage = Date.now() - this.sessionStart;
            this.logEvent('page_exit', {
                page: window.location.pathname,
                time_on_page: timeOnPage
            });
        });
    },
    
    trackUserInteractions() {
        // Track clicks on important elements
        document.addEventListener('click', (e) => {
            const target = e.target;
            
            if (target.matches('a')) {
                this.logEvent('link_click', {
                    link_text: target.textContent,
                    link_url: target.href,
                    page: window.location.pathname
                });
            }
            
            if (target.matches('.calculator-container button')) {
                this.logEvent('calculator_use', {
                    calculator_type: target.closest('.calculator-container').dataset.calculator,
                    action: target.textContent
                });
            }
        });
        
        // Track search queries
        document.addEventListener('search', (e) => {
            this.logEvent('search', {
                query: e.target.value,
                page: window.location.pathname
            });
        });
    },
    
    logEvent(eventName, data) {
        this.events.push({
            event: eventName,
            data: data,
            timestamp: new Date().toISOString()
        });
        
        // Store locally
        const storedEvents = JSON.parse(localStorage.getItem('azlaw_analytics') || '[]');
        storedEvents.push(this.events[this.events.length - 1]);
        
        // Keep only last 100 events
        if (storedEvents.length > 100) {
            storedEvents.splice(0, storedEvents.length - 100);
        }
        
        localStorage.setItem('azlaw_analytics', JSON.stringify(storedEvents));
    },
    
    sendAnalytics() {
        // Send analytics data periodically (if user consents)
        setInterval(() => {
            if (this.events.length > 0 && AZLawPreferences.preferences.analytics) {
                // In production, this would send to an analytics endpoint
                console.log('Analytics batch:', this.events);
                this.events = [];
            }
        }, 30000); // Every 30 seconds
    }
};

// Add all the CSS for the new features
const enhancedStyles = document.createElement('style');
enhancedStyles.textContent = `
/* Enhanced Search Styles */
.enhanced-search-wrapper {
    position: relative;
}

.search-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    max-height: 400px;
    overflow-y: auto;
    display: none;
    z-index: 1000;
}

.search-dropdown.active {
    display: block;
}

.search-suggestions,
.search-results-preview {
    padding: 1rem;
}

.search-suggestions h4,
.search-results-preview h4 {
    margin: 0 0 0.5rem 0;
    font-size: 0.9rem;
    color: #666;
}

.popular-searches {
    list-style: none;
    padding: 0;
    margin: 0;
}

.popular-searches li {
    padding: 0.25rem 0;
}

.search-suggestion {
    color: var(--md-primary-fg-color);
    text-decoration: none;
}

.search-suggestion:hover {
    text-decoration: underline;
}

.search-preview-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.search-preview-item {
    display: block;
    padding: 0.5rem;
    border-radius: 4px;
    text-decoration: none;
    color: inherit;
}

.search-preview-item:hover {
    background-color: var(--az-law-info);
}

.result-type {
    display: inline-block;
    background-color: var(--md-primary-fg-color);
    color: white;
    padding: 0.1rem 0.4rem;
    border-radius: 3px;
    font-size: 0.7rem;
    margin-right: 0.5rem;
}

/* Workflow System Styles */
.workflow-launcher {
    position: fixed;
    bottom: 80px;
    right: 20px;
    z-index: 100;
}

.workflow-toggle {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    background-color: var(--md-accent-fg-color);
    color: white;
    border: none;
    border-radius: 25px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    cursor: pointer;
    transition: all 0.3s ease;
}

.workflow-toggle:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.25);
}

.workflow-menu {
    position: absolute;
    bottom: 60px;
    right: 0;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    padding: 1rem;
    min-width: 250px;
    display: none;
}

.workflow-launcher.active .workflow-menu {
    display: block;
}

.workflow-menu h3 {
    margin: 0 0 1rem 0;
    color: var(--md-primary-fg-color);
}

.workflow-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.workflow-menu li {
    margin: 0.5rem 0;
}

.workflow-menu a {
    display: block;
    padding: 0.5rem;
    color: #333;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.2s;
}

.workflow-menu a:hover {
    background-color: var(--az-law-info);
}

.workflow-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.workflow-modal.active {
    opacity: 1;
    visibility: visible;
}

.workflow-content {
    background: white;
    border-radius: 12px;
    width: 90%;
    max-width: 800px;
    max-height: 90vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.workflow-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-bottom: 1px solid #e0e0e0;
}

.workflow-header h2 {
    margin: 0;
    color: var(--md-primary-fg-color);
}

.close-workflow {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #999;
}

.workflow-progress {
    padding: 1rem 1.5rem;
    background-color: #f8f9fa;
}

.progress-bar {
    height: 8px;
    background-color: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 1rem;
}

.progress-fill {
    height: 100%;
    background-color: var(--md-accent-fg-color);
    transition: width 0.3s ease;
}

.progress-steps {
    display: flex;
    justify-content: space-between;
}

.progress-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0.5;
    transition: opacity 0.3s;
}

.progress-step.active {
    opacity: 1;
}

.progress-step.completed .step-number {
    background-color: var(--md-primary-fg-color);
    color: white;
}

.step-number {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #e0e0e0;
    color: #666;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.step-title {
    font-size: 0.8rem;
    text-align: center;
}

.workflow-body {
    flex: 1;
    overflow-y: auto;
    padding: 2rem;
}

.workflow-footer {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    border-top: 1px solid #e0e0e0;
}

.workflow-back,
.workflow-next {
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
}

.workflow-back {
    background-color: #e0e0e0;
    color: #666;
}

.workflow-back:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.workflow-next {
    background-color: var(--md-accent-fg-color);
    color: white;
}

.workflow-next:hover {
    background-color: var(--md-accent-fg-color--dark);
}

.workflow-questions {
    margin: 1rem 0;
}

.workflow-question {
    margin: 1.5rem 0;
}

.workflow-question label {
    display: block;
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.radio-group {
    display: flex;
    gap: 1rem;
}

.radio-group label {
    display: flex;
    align-items: center;
    font-weight: normal;
}

.workflow-input,
.workflow-select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}

.question-help {
    font-size: 0.85rem;
    color: #666;
    margin-top: 0.25rem;
}

.workflow-checklist ul {
    list-style: none;
    padding: 0;
}

.workflow-checklist li {
    padding: 0.5rem 0;
}

.workflow-actions {
    margin-top: 1.5rem;
}

.workflow-action-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    margin: 0.25rem;
    background-color: var(--md-primary-fg-color);
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.2s;
}

.workflow-action-link:hover {
    background-color: var(--md-primary-fg-color--dark);
}

.workflow-complete {
    text-align: center;
    padding: 2rem;
}

.complete-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
}

.workflow-summary {
    text-align: left;
    background-color: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    margin: 1.5rem 0;
}

/* Calculator Enhancements */
.calculation-results {
    margin-top: 2rem;
    padding: 1.5rem;
    background-color: #f8f9fa;
    border-radius: 8px;
    opacity: 0;
    animation: fadeIn 0.5s forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

.results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin: 1rem 0;
}

.result-item {
    display: flex;
    flex-direction: column;
}

.result-label {
    font-size: 0.85rem;
    color: #666;
}

.result-value {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--md-primary-fg-color);
}

.results-disclaimer {
    margin-top: 1rem;
    padding: 1rem;
    background-color: var(--az-law-warning);
    border-radius: 4px;
    font-size: 0.9rem;
}

.calculation-viz {
    margin-top: 1.5rem;
}

.viz-bar {
    display: flex;
    height: 40px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
}

.viz-segment {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 500;
    transition: all 0.3s ease;
}

.viz-segment.parent1 {
    background-color: var(--md-primary-fg-color);
}

.viz-segment.parent2 {
    background-color: var(--md-accent-fg-color);
}

.calculator-controls {
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
    flex-wrap: wrap;
}

.calculator-controls button {
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    background-color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
}

.calculator-controls button:hover {
    background-color: var(--az-law-info);
    border-color: var(--md-primary-fg-color);
}

input.error {
    border-color: #d32f2f !important;
}

.input-tooltip {
    position: absolute;
    background-color: #333;
    color: white;
    padding: 0.5rem;
    border-radius: 4px;
    font-size: 0.85rem;
    z-index: 1000;
    white-space: nowrap;
}

.input-tooltip.error {
    background-color: #d32f2f;
}

/* Help System Styles */
.help-widget {
    position: fixed;
    right: 20px;
    bottom: 140px;
    width: 350px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    transform: translateX(400px);
    transition: transform 0.3s ease;
    z-index: 1000;
}

.help-widget.active {
    transform: translateX(0);
}

.help-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #e0e0e0;
}

.help-header h3 {
    margin: 0;
    color: var(--md-primary-fg-color);
}

.help-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #999;
}

.help-content {
    max-height: 400px;
    overflow-y: auto;
}

.help-search {
    padding: 1rem;
    border-bottom: 1px solid #e0e0e0;
}

.help-search-input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.help-suggestions,
.help-resources {
    padding: 1rem;
}

.help-suggestions h4,
.help-resources h4 {
    margin: 0 0 0.5rem 0;
    font-size: 0.9rem;
    color: #666;
}

.help-suggestions ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.help-suggestions li {
    padding: 0.25rem 0;
}

.help-suggestions a {
    color: var(--md-primary-fg-color);
    text-decoration: none;
}

.help-suggestions a:hover {
    text-decoration: underline;
}

.resource-link {
    display: inline-block;
    padding: 0.5rem 1rem;
    margin: 0.25rem;
    background-color: #f0f0f0;
    border-radius: 4px;
    text-decoration: none;
    color: #333;
    transition: all 0.2s;
}

.resource-link:hover {
    background-color: var(--az-law-info);
}

.help-footer {
    padding: 1rem;
    border-top: 1px solid #e0e0e0;
    background-color: #f8f9fa;
    text-align: center;
    font-size: 0.9rem;
}

.floating-help-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: var(--md-primary-fg-color);
    color: white;
    border: none;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 100;
}

.floating-help-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.25);
}

.help-icon {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: var(--md-primary-fg-color);
    color: white;
    text-align: center;
    line-height: 18px;
    font-size: 0.8rem;
    cursor: help;
    margin-left: 0.25rem;
}

.help-popup {
    position: absolute;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 2000;
    max-width: 300px;
}

.help-popup-content {
    padding: 1rem;
}

.help-popup h4 {
    margin: 0 0 0.5rem 0;
    color: var(--md-primary-fg-color);
}

.help-links {
    margin: 1rem 0;
}

.help-links a {
    display: block;
    padding: 0.25rem 0;
    color: var(--md-primary-fg-color);
    text-decoration: none;
}

.help-links a:hover {
    text-decoration: underline;
}

.help-popup-close {
    width: 100%;
    padding: 0.5rem;
    background-color: var(--md-primary-fg-color);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.help-suggestion {
    position: fixed;
    bottom: 100px;
    right: 20px;
    background: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 100;
    animation: slideIn 0.3s ease;
}

@keyframes slideIn {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
}

.help-suggestion.fade-out {
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.3s ease;
}

/* Preferences System Styles */
.preferences-button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.5rem;
}

.preferences-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.preferences-modal.active {
    opacity: 1;
    visibility: visible;
}

.preferences-content {
    background: white;
    border-radius: 12px;
    width: 90%;
    max-width: 600px;
    max-height: 90vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.preferences-content h2 {
    margin: 0;
    padding: 1.5rem;
    border-bottom: 1px solid #e0e0e0;
    color: var(--md-primary-fg-color);
}

.preferences-tabs {
    display: flex;
    border-bottom: 1px solid #e0e0e0;
    background-color: #f8f9fa;
}

.tab-button {
    flex: 1;
    padding: 1rem;
    background: none;
    border: none;
    cursor: pointer;
    font-weight: 500;
    color: #666;
    transition: all 0.2s;
}

.tab-button.active {
    color: var(--md-primary-fg-color);
    border-bottom: 3px solid var(--md-primary-fg-color);
}

.tab-content {
    display: none;
    padding: 1.5rem;
    overflow-y: auto;
    flex: 1;
}

.tab-content.active {
    display: block;
}

.preference-group {
    margin: 1.5rem 0;
}

.preference-group label {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.preference-group select {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.bookmark-page-button {
    position: fixed;
    top: 100px;
    right: 20px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 100;
}

.bookmark-page-button:hover {
    background-color: var(--az-law-info);
}

.bookmark-page-button.bookmarked {
    background-color: var(--md-accent-fg-color);
    color: white;
    border-color: var(--md-accent-fg-color);
}

.bookmarks-list ul,
.history-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.bookmark-item,
.history-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    border-bottom: 1px solid #e0e0e0;
}

.remove-bookmark {
    background: none;
    border: none;
    color: #999;
    font-size: 1.5rem;
    cursor: pointer;
}

.history-time {
    font-size: 0.85rem;
    color: #666;
}

.clear-history {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #e0e0e0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

/* Mobile Styles */
.mobile-menu-button {
    display: none;
    background: none;
    border: none;
    color: white;
    padding: 0.5rem;
    cursor: pointer;
}

.viewport-mobile .mobile-menu-button {
    display: block;
}

.mobile-nav-drawer {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 80%;
    max-width: 300px;
    background: white;
    box-shadow: 2px 0 10px rgba(0,0,0,0.1);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 2000;
    overflow-y: auto;
}

.mobile-nav-drawer.active {
    transform: translateX(0);
}

.mobile-nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #e0e0e0;
}

.mobile-nav-content {
    padding: 1rem;
}

.mobile-search {
    margin-bottom: 1.5rem;
}

.mobile-search-input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}

.mobile-quick-links h4 {
    margin: 0 0 0.5rem 0;
    color: var(--md-primary-fg-color);
}

.mobile-quick-links a {
    display: block;
    padding: 0.5rem;
    color: #333;
    text-decoration: none;
    border-radius: 4px;
    margin: 0.25rem 0;
}

.mobile-quick-links a:hover {
    background-color: var(--az-law-info);
}

.mobile-toolbar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    border-top: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-around;
    padding: 0.5rem;
    z-index: 100;
}

.viewport-mobile .mobile-toolbar {
    display: flex;
}

.viewport-tablet .mobile-toolbar,
.viewport-desktop .mobile-toolbar {
    display: none;
}

.mobile-tool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    color: #666;
    font-size: 0.75rem;
}

.mobile-tool:hover {
    color: var(--md-primary-fg-color);
}

.connection-status {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0.5rem;
    text-align: center;
    z-index: 3000;
    transform: translateY(-100%);
    animation: slideDown 0.3s forwards;
}

@keyframes slideDown {
    to {
        transform: translateY(0);
    }
}

.connection-status.online {
    background-color: #4caf50;
    color: white;
}

.connection-status.offline {
    background-color: #ff9800;
    color: white;
}

.connection-status.fade-out {
    transform: translateY(-100%);
    transition: transform 0.3s ease;
}

/* Notification System */
.notification {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    background: #333;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    z-index: 3000;
    transition: transform 0.3s ease;
}

.notification.show {
    transform: translateX(-50%) translateY(0);
}

.notification.success {
    background-color: #4caf50;
}

.notification.error {
    background-color: #f44336;
}

/* Resume Workflow Banner */
.resume-workflow-banner {
    position: fixed;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 1rem 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.resume-workflow-banner button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
}

.resume-yes {
    background-color: var(--md-accent-fg-color);
    color: white;
}

.resume-no {
    background-color: #e0e0e0;
    color: #666;
}

/* Calculator Hub */
.calculator-hub {
    margin: 2rem 0;
    padding: 1.5rem;
    background-color: #f8f9fa;
    border-radius: 8px;
}

.calculator-hub h3 {
    margin: 0 0 1rem 0;
    color: var(--md-primary-fg-color);
}

.calculator-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
}

.calculator-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
    transition: all 0.2s;
}

.calculator-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    border-color: var(--md-accent-fg-color);
}

.calc-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.calculator-card h4 {
    margin: 0.5rem 0;
    font-size: 0.9rem;
}

.calculator-card p {
    margin: 0;
    font-size: 0.8rem;
    color: #666;
    text-align: center;
}

/* Print Styles Enhancement */
@media print {
    .workflow-launcher,
    .floating-help-button,
    .help-widget,
    .mobile-toolbar,
    .bookmark-page-button,
    .preferences-button,
    .mobile-menu-button {
        display: none !important;
    }
    
    .md-content {
        max-width: 100%;
    }
    
    .workflow-summary,
    .calculation-results {
        break-inside: avoid;
    }
}

/* Accessibility Improvements */
.hide-tooltips .help-icon {
    display: none;
}

html[data-user-theme="dark"] {
    --md-default-bg-color: #1e1e1e;
    --md-default-fg-color: #e0e0e0;
}

html[data-user-theme="auto"] {
    @media (prefers-color-scheme: dark) {
        --md-default-bg-color: #1e1e1e;
        --md-default-fg-color: #e0e0e0;
    }
}

/* Font size adjustments */
.md-typeset {
    font-size: var(--user-font-size, 16px);
}

/* Material Icons */
.material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
}
`;

// Add Material Icons
const materialIcons = document.createElement('link');
materialIcons.rel = 'stylesheet';
materialIcons.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
document.head.appendChild(materialIcons);

// Add enhanced styles
document.head.appendChild(enhancedStyles);