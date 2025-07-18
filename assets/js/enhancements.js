// Enhanced JavaScript for modern blog experience

document.addEventListener('DOMContentLoaded', function() {
    // Reading progress indicator
    createReadingProgress();
    
    // Scroll animations
    initScrollAnimations();
    
    // Enhanced search functionality
    enhanceSearch();
    
    // Social sharing
    initSocialSharing();
    
    // Newsletter signup
    initNewsletterSignup();
    
    // Smooth scrolling for anchor links
    initSmoothScrolling();
    
    // Copy code button
    addCopyCodeButtons();
});

// Reading progress indicator
function createReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const article = document.querySelector('article.content');
        if (!article) return;
        
        const articleTop = article.offsetTop;
        const articleHeight = article.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset;
        
        const progress = Math.min(
            Math.max((scrollTop - articleTop + windowHeight * 0.1) / articleHeight, 0),
            1
        );
        
        progressBar.style.width = `${progress * 100}%`;
    });
}

// Scroll animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Add scroll reveal class to elements
    document.querySelectorAll('h2, h3, p, .card, .cta-box').forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });
}

// Enhanced search functionality
function enhanceSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (!searchInput || !searchResults) return;
    
    let searchData = [];
    let searchTimeout;
    
    // Load search data
    fetch('/search.json')
        .then(response => response.json())
        .then(data => {
            searchData = data;
        })
        .catch(error => console.error('Error loading search data:', error));
    
    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        
        searchTimeout = setTimeout(() => {
            const query = e.target.value.toLowerCase().trim();
            
            if (query.length < 2) {
                searchResults.style.display = 'none';
                return;
            }
            
            const results = searchData.filter(item => {
                return item.title.toLowerCase().includes(query) ||
                       item.content.toLowerCase().includes(query) ||
                       item.categories.join(' ').toLowerCase().includes(query) ||
                       item.tags.join(' ').toLowerCase().includes(query);
            }).slice(0, 6);
            
            displaySearchResults(results, query);
        }, 300);
    });
    
    // Close search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            searchResults.style.display = 'none';
        }
    });
}

function displaySearchResults(results, query) {
    const searchResults = document.getElementById('search-results');
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-result">No results found</div>';
        searchResults.style.display = 'block';
        return;
    }
    
    searchResults.innerHTML = results.map(item => `
        <div class="search-result">
            <a href="${item.url}">
                <div class="search-result-title">${highlightText(item.title, query)}</div>
                <div class="search-result-excerpt">${highlightText(item.excerpt, query)}</div>
                <div class="search-result-meta">
                    <span class="search-result-date">${item.date}</span>
                    ${item.categories.length > 0 ? `<span class="search-result-category">${item.categories[0]}</span>` : ''}
                </div>
            </a>
        </div>
    `).join('');
    
    searchResults.style.display = 'block';
}

function highlightText(text, query) {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Social sharing
function initSocialSharing() {
    const shareButtons = document.querySelectorAll('.share-button');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const platform = this.dataset.platform;
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);
            
            let shareUrl = '';
            
            switch(platform) {
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                    break;
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'email':
                    shareUrl = `mailto:?subject=${title}&body=${url}`;
                    break;
            }
            
            if (shareUrl) {
                if (platform === 'email') {
                    window.location.href = shareUrl;
                } else {
                    window.open(shareUrl, '_blank', 'width=600,height=400');
                }
            }
        });
    });
}

// Newsletter signup
function initNewsletterSignup() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        const button = this.querySelector('button');
        
        if (!email) return;
        
        // Simulate newsletter signup
        button.textContent = 'Subscribing...';
        button.disabled = true;
        
        setTimeout(() => {
            button.textContent = 'Subscribed!';
            button.style.background = '#10b981';
            
            setTimeout(() => {
                button.textContent = 'Subscribe';
                button.disabled = false;
                button.style.background = '';
                this.reset();
            }, 2000);
        }, 1000);
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// Copy code button
function addCopyCodeButtons() {
    document.querySelectorAll('pre').forEach(pre => {
        const button = document.createElement('button');
        button.className = 'copy-code-btn';
        button.textContent = 'Copy';
        button.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: var(--primary-color);
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.8rem;
            transition: background-color 0.3s ease;
        `;
        
        pre.style.position = 'relative';
        pre.appendChild(button);
        
        button.addEventListener('click', function() {
            const code = pre.querySelector('code') || pre;
            const text = code.textContent;
            
            navigator.clipboard.writeText(text).then(() => {
                button.textContent = 'Copied!';
                button.style.background = '#10b981';
                
                setTimeout(() => {
                    button.textContent = 'Copy';
                    button.style.background = 'var(--primary-color)';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
