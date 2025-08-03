// Arizona Family Law Wiki - Custom JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add copy button to code blocks
    document.querySelectorAll('pre code').forEach((block) => {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.innerHTML = '📋 Copy';
        button.addEventListener('click', () => {
            navigator.clipboard.writeText(block.textContent);
            button.innerHTML = '✅ Copied!';
            setTimeout(() => {
                button.innerHTML = '📋 Copy';
            }, 2000);
        });
        
        const pre = block.parentNode;
        pre.style.position = 'relative';
        pre.appendChild(button);
    });

    // Add search highlighting
    const searchParams = new URLSearchParams(window.location.search);
    const searchQuery = searchParams.get('q');
    if (searchQuery) {
        highlightSearchTerms(searchQuery);
    }

    // Create table of contents for long pages
    createFloatingToc();

    // Add print button to articles
    addPrintButton();

    // Initialize tooltips for legal terms
    initializeLegalTooltips();

    // Add reading time estimate
    addReadingTime();

    // Create breadcrumb navigation
    createBreadcrumbs();
});

// Function to highlight search terms in content
function highlightSearchTerms(query) {
    const content = document.querySelector('.md-content');
    if (!content) return;

    const terms = query.split(' ').filter(term => term.length > 2);
    terms.forEach(term => {
        const regex = new RegExp(`(${term})`, 'gi');
        walkTextNodes(content, (node) => {
            const span = document.createElement('span');
            span.innerHTML = node.textContent.replace(regex, '<mark class="search-highlight">$1</mark>');
            node.parentNode.replaceChild(span, node);
        });
    });
}

// Helper function to walk through text nodes
function walkTextNodes(node, callback) {
    if (node.nodeType === 3) {
        callback(node);
    } else {
        for (let i = 0; i < node.childNodes.length; i++) {
            walkTextNodes(node.childNodes[i], callback);
        }
    }
}

// Create floating table of contents for long pages
function createFloatingToc() {
    const headers = document.querySelectorAll('.md-content h2, .md-content h3');
    if (headers.length < 3) return;

    const toc = document.createElement('div');
    toc.className = 'floating-toc';
    toc.innerHTML = '<h4>On This Page</h4><ul></ul>';
    
    const tocList = toc.querySelector('ul');
    headers.forEach((header, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#' + (header.id || 'section-' + index);
        a.textContent = header.textContent;
        a.className = header.tagName.toLowerCase();
        
        if (!header.id) {
            header.id = 'section-' + index;
        }
        
        li.appendChild(a);
        tocList.appendChild(li);
    });

    document.querySelector('.md-content').appendChild(toc);

    // Update active section on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        headers.forEach(header => {
            const rect = header.getBoundingClientRect();
            if (rect.top < 100) {
                current = header.id;
            }
        });

        tocList.querySelectorAll('a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Add print button to articles
function addPrintButton() {
    const content = document.querySelector('.md-content__inner');
    if (!content) return;

    const printBtn = document.createElement('button');
    printBtn.className = 'print-button';
    printBtn.innerHTML = '🖨️ Print Article';
    printBtn.addEventListener('click', () => {
        window.print();
    });

    content.insertBefore(printBtn, content.firstChild);
}

// Initialize tooltips for legal terms
function initializeLegalTooltips() {
    const legalTerms = {
        'A.R.S.': 'Arizona Revised Statutes - The official laws of Arizona',
        'petitioner': 'The person who files a court case',
        'respondent': 'The person who responds to a court case',
        'dissolution': 'Legal term for divorce in Arizona',
        'QDRO': 'Qualified Domestic Relations Order - Used to divide retirement accounts',
        'parenting time': 'The schedule of when each parent has the children',
        'legal decision-making': 'The right to make major decisions for children (formerly custody)',
        'spousal maintenance': 'Financial support paid by one spouse to the other (alimony)',
        'community property': 'Property acquired during marriage that belongs to both spouses',
        'separate property': 'Property that belongs to only one spouse'
    };

    const content = document.querySelector('.md-content');
    if (!content) return;

    Object.keys(legalTerms).forEach(term => {
        const regex = new RegExp(`\\b(${term})\\b`, 'gi');
        const elements = content.querySelectorAll('p, li');
        
        elements.forEach(el => {
            if (el.innerHTML.match(regex)) {
                el.innerHTML = el.innerHTML.replace(regex, 
                    `<span class="legal-term" title="${legalTerms[term]}">$1</span>`
                );
            }
        });
    });
}

// Add reading time estimate
function addReadingTime() {
    const content = document.querySelector('.md-content__inner');
    if (!content) return;

    const text = content.textContent;
    const wordsPerMinute = 200;
    const wordCount = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);

    const readingTimeDiv = document.createElement('div');
    readingTimeDiv.className = 'reading-time';
    readingTimeDiv.innerHTML = `⏱️ Estimated reading time: ${readingTime} minute${readingTime > 1 ? 's' : ''}`;
    
    const firstH1 = content.querySelector('h1');
    if (firstH1) {
        firstH1.parentNode.insertBefore(readingTimeDiv, firstH1.nextSibling);
    }
}

// Create breadcrumb navigation
function createBreadcrumbs() {
    const path = window.location.pathname.split('/').filter(p => p);
    if (path.length <= 1) return;

    const breadcrumb = document.createElement('nav');
    breadcrumb.className = 'breadcrumb';
    breadcrumb.innerHTML = '<ol></ol>';
    
    const ol = breadcrumb.querySelector('ol');
    
    // Home link
    const homeLi = document.createElement('li');
    homeLi.innerHTML = '<a href="/">Home</a>';
    ol.appendChild(homeLi);
    
    // Build path
    let currentPath = '';
    path.forEach((segment, index) => {
        currentPath += '/' + segment;
        const li = document.createElement('li');
        
        if (index === path.length - 1) {
            // Current page
            li.textContent = segment.replace(/-/g, ' ').replace('.html', '');
            li.className = 'current';
        } else {
            // Link to parent
            li.innerHTML = `<a href="${currentPath}/">${segment.replace(/-/g, ' ')}</a>`;
        }
        
        ol.appendChild(li);
    });

    const content = document.querySelector('.md-content__inner');
    if (content && content.firstChild) {
        content.insertBefore(breadcrumb, content.firstChild);
    }
}

// Add CSS for custom elements
const style = document.createElement('style');
style.textContent = `
    .copy-button {
        position: absolute;
        top: 5px;
        right: 5px;
        padding: 5px 10px;
        background: #f0f0f0;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 12px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    pre:hover .copy-button {
        opacity: 1;
    }
    
    .search-highlight {
        background-color: yellow;
        padding: 2px;
        border-radius: 2px;
    }
    
    .floating-toc {
        position: fixed;
        right: 20px;
        top: 100px;
        width: 250px;
        background: white;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 1rem;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        max-height: 70vh;
        overflow-y: auto;
        z-index: 100;
    }
    
    @media (max-width: 1400px) {
        .floating-toc {
            display: none;
        }
    }
    
    .floating-toc h4 {
        margin-top: 0;
        color: var(--md-primary-fg-color);
    }
    
    .floating-toc ul {
        list-style: none;
        padding-left: 0;
    }
    
    .floating-toc li {
        margin: 0.5rem 0;
    }
    
    .floating-toc a {
        color: #666;
        text-decoration: none;
        display: block;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
    }
    
    .floating-toc a.h3 {
        padding-left: 1.5rem;
        font-size: 0.9rem;
    }
    
    .floating-toc a:hover {
        background-color: var(--az-law-info);
        color: var(--md-primary-fg-color);
    }
    
    .floating-toc a.active {
        background-color: var(--md-accent-fg-color);
        color: white;
    }
    
    .print-button {
        float: right;
        padding: 0.5rem 1rem;
        background-color: var(--md-primary-fg-color);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-bottom: 1rem;
    }
    
    .print-button:hover {
        background-color: var(--md-primary-fg-color--dark);
    }
    
    .legal-term {
        border-bottom: 2px dotted var(--md-primary-fg-color);
        cursor: help;
    }
    
    .reading-time {
        color: #666;
        font-size: 0.9rem;
        margin: 1rem 0;
        font-style: italic;
    }
    
    .breadcrumb {
        margin-bottom: 1rem;
        padding: 0.5rem 0;
        border-bottom: 1px solid #e0e0e0;
    }
    
    .breadcrumb ol {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
    }
    
    .breadcrumb li {
        display: inline;
        font-size: 0.9rem;
    }
    
    .breadcrumb li + li::before {
        content: " › ";
        padding: 0 0.5rem;
        color: #666;
    }
    
    .breadcrumb li.current {
        color: #666;
        font-weight: 500;
    }
    
    .breadcrumb a {
        color: var(--md-primary-fg-color);
        text-decoration: none;
    }
    
    .breadcrumb a:hover {
        text-decoration: underline;
    }
`;
document.head.appendChild(style);