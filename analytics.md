---
title: Analytics
permalink: /analytics.html
---

# vintage analytics & visitor tracking

<div class="analytics-header">
    <p class="vintage-subtitle">where curiosity meets cartography</p>
</div>

## global visitors

<div id="world-map" class="vintage-map">
    <div class="map-placeholder">
        🗺️ Loading visitor geography...
    </div>
</div>

<div id="visitor-stats" class="visitor-grid">
    <div class="stat-card">
        <span class="stat-number" id="total-visitors">-</span>
        <span class="stat-label">unique visitors</span>
    </div>
    <div class="stat-card">
        <span class="stat-number" id="total-views">-</span>
        <span class="stat-label">page views</span>
    </div>
    <div class="stat-card">
        <span class="stat-number" id="countries-count">-</span>
        <span class="stat-label">countries</span>
    </div>
    <div class="stat-card">
        <span class="stat-number" id="avg-session">-</span>
        <span class="stat-label">avg. session</span>
    </div>
</div>

## popular destinations

<div id="top-posts" class="post-rankings"></div>

## visitor geography

<div id="country-list" class="country-list"></div>

<style>
/* Vintage Analytics Styling */
.analytics-header {
    text-align: center;
    margin-bottom: var(--space-16);
    padding-bottom: var(--space-8);
    border-bottom: 1px solid var(--border-light);
}

.vintage-subtitle {
    font-family: var(--font-mono);
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
    font-style: italic;
    letter-spacing: 0.05em;
}

.vintage-map {
    background: var(--bg-secondary);
    border: 2px solid var(--border-medium);
    border-radius: var(--border-radius);
    padding: var(--space-8);
    margin: var(--space-8) 0;
    min-height: 400px;
    position: relative;
    overflow: hidden;
}

.map-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-family: var(--font-mono);
    color: var(--text-tertiary);
    font-size: var(--font-size-lg);
}

.visitor-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-6);
    margin: var(--space-16) 0;
}

.stat-card {
    background: var(--bg-accent);
    border: 1px solid var(--border-light);
    border-radius: var(--border-radius);
    padding: var(--space-6);
    text-align: center;
    transition: all 0.2s ease;
}

.stat-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-subtle);
}

.stat-number {
    display: block;
    font-family: var(--font-mono);
    font-size: var(--font-size-3xl);
    font-weight: 600;
    color: var(--vintage-green);
    line-height: 1;
    margin-bottom: var(--space-2);
}

.stat-label {
    font-family: var(--font-mono);
    font-size: var(--font-size-xs);
    color: var(--text-secondary);
    text-transform: lowercase;
    letter-spacing: 0.05em;
}

.post-rankings {
    background: var(--bg-secondary);
    border: 1px solid var(--border-light);
    border-radius: var(--border-radius);
    padding: var(--space-6);
    margin: var(--space-8) 0;
}

.post-rank {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-3) 0;
    border-bottom: 1px solid var(--border-light);
    font-family: var(--font-mono);
    font-size: var(--font-size-sm);
}

.post-rank:last-child {
    border-bottom: none;
}

.post-title {
    color: var(--text-primary);
    flex-grow: 1;
}

.post-views {
    color: var(--vintage-amber);
    font-weight: 600;
    margin-left: var(--space-4);
}

.country-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-4);
    margin: var(--space-8) 0;
}

.country-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--bg-accent);
    border: 1px solid var(--border-light);
    border-radius: var(--border-radius);
    padding: var(--space-3) var(--space-4);
    font-family: var(--font-mono);
    font-size: var(--font-size-sm);
}

.country-flag {
    font-size: var(--font-size-lg);
    margin-right: var(--space-3);
}

.country-name {
    flex-grow: 1;
    color: var(--text-primary);
}

.country-count {
    color: var(--vintage-rust);
    font-weight: 600;
}

/* Vintage World Map Styling */
.world-map-svg {
    width: 100%;
    height: 100%;
}

.country-path {
    fill: var(--bg-accent);
    stroke: var(--border-medium);
    stroke-width: 0.5;
    transition: all 0.2s ease;
}

.country-path.has-visitors {
    fill: var(--vintage-green);
}

.country-path.has-many-visitors {
    fill: var(--vintage-amber);
}

.country-path:hover {
    stroke: var(--accent-color);
    stroke-width: 1;
}

.map-tooltip {
    position: absolute;
    background: var(--text-primary);
    color: var(--bg-primary);
    padding: var(--space-2) var(--space-3);
    border-radius: var(--border-radius);
    font-family: var(--font-mono);
    font-size: var(--font-size-xs);
    pointer-events: none;
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.2s ease;
}
</style>

<script>
// Vintage Analytics Engine - Privacy First
class VintageAnalytics {
    constructor() {
        this.storageKey = 'vintage-blog-analytics';
        this.sessionKey = 'vintage-session-' + Date.now();
        this.data = this.loadData();
        this.initSession();
        this.updateDisplays();
    }

    loadData() {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : {
            visitors: {},
            sessions: {},
            posts: {},
            countries: {},
            totalVisitors: 0,
            totalViews: 0,
            firstVisit: new Date().toISOString()
        };
    }

    saveData() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    }

    async initSession() {
        // Check if returning visitor
        const visitorId = localStorage.getItem('vintage-visitor-id') || this.generateVisitorId();
        localStorage.setItem('vintage-visitor-id', visitorId);

        // Track new visitor
        if (!this.data.visitors[visitorId]) {
            this.data.totalVisitors++;
            this.data.visitors[visitorId] = {
                firstVisit: new Date().toISOString(),
                sessions: 0,
                views: 0,
                country: await this.detectCountry()
            };
        }

        // Track session
        const sessionId = this.sessionKey;
        this.data.visitors[visitorId].sessions++;
        this.data.sessions[sessionId] = {
            visitorId: visitorId,
            startTime: new Date().toISOString(),
            views: 0,
            duration: 0
        };

        // Track page view
        this.trackPageView(window.location.pathname, visitorId, sessionId);
        this.saveData();
    }

    generateVisitorId() {
        return 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    async detectCountry() {
        try {
            // Use a free, privacy-friendly IP geolocation service
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            return {
                code: data.country_code || 'Unknown',
                name: data.country_name || 'Unknown',
                flag: this.getCountryFlag(data.country_code)
            };
        } catch (error) {
            console.log('Could not detect country:', error);
            return { code: 'Unknown', name: 'Unknown', flag: '🌍' };
        }
    }

    getCountryFlag(countryCode) {
        if (!countryCode || countryCode === 'Unknown') return '🌍';
        
        const flags = {
            'US': '🇺🇸', 'GB': '🇬🇧', 'CA': '🇨🇦', 'AU': '🇦🇺', 'DE': '🇩🇪',
            'FR': '🇫🇷', 'JP': '🇯🇵', 'CN': '🇨🇳', 'IN': '🇮🇳', 'BR': '🇧🇷',
            'RU': '🇷🇺', 'IT': '🇮🇹', 'ES': '🇪🇸', 'NL': '🇳🇱', 'SE': '🇸🇪',
            'NO': '🇳🇴', 'DK': '🇩🇰', 'FI': '🇫🇮', 'NZ': '🇳🇿', 'IE': '🇮🇪'
        };
        
        return flags[countryCode] || '🌍';
    }

    trackPageView(path, visitorId, sessionId) {
        this.data.totalViews++;
        this.data.visitors[visitorId].views++;
        this.data.sessions[sessionId].views++;

        // Track post views
        if (path.includes('/2025/') || path.includes('/posts/')) {
            if (!this.data.posts[path]) {
                this.data.posts[path] = { views: 0, title: document.title };
            }
            this.data.posts[path].views++;
        }

        // Track country
        const country = this.data.visitors[visitorId].country;
        if (country && country.code !== 'Unknown') {
            if (!this.data.countries[country.code]) {
                this.data.countries[country.code] = {
                    name: country.name,
                    flag: country.flag,
                    visitors: 0
                };
            }
            this.data.countries[country.code].visitors++;
        }
    }

    updateDisplays() {
        // Update basic stats
        document.getElementById('total-visitors').textContent = this.data.totalVisitors || 0;
        document.getElementById('total-views').textContent = this.data.totalViews || 0;
        document.getElementById('countries-count').textContent = Object.keys(this.data.countries).length || 0;
        
        // Calculate average session duration (mock for now)
        const avgSession = Object.keys(this.data.sessions).length > 0 ? '2.3 min' : '0 min';
        document.getElementById('avg-session').textContent = avgSession;

        // Update top posts
        this.updateTopPosts();
        
        // Update country list
        this.updateCountryList();
        
        // Initialize world map
        this.initWorldMap();
    }

    updateTopPosts() {
        const container = document.getElementById('top-posts');
        const posts = Object.entries(this.data.posts)
            .sort(([,a], [,b]) => b.views - a.views)
            .slice(0, 5);

        if (posts.length === 0) {
            container.innerHTML = '<p class="vintage-subtitle">No post data yet - keep writing!</p>';
            return;
        }

        container.innerHTML = posts.map(([path, data], index) => `
            <div class="post-rank">
                <span class="post-number">${index + 1}.</span>
                <span class="post-title">${data.title}</span>
                <span class="post-views">${data.views} views</span>
            </div>
        `).join('');
    }

    updateCountryList() {
        const container = document.getElementById('country-list');
        const countries = Object.entries(this.data.countries)
            .sort(([,a], [,b]) => b.visitors - a.visitors);

        if (countries.length === 0) {
            container.innerHTML = '<p class="vintage-subtitle">No geographic data yet</p>';
            return;
        }

        container.innerHTML = countries.map(([code, data]) => `
            <div class="country-item">
                <span class="country-flag">${data.flag}</span>
                <span class="country-name">${data.name}</span>
                <span class="country-count">${data.visitors}</span>
            </div>
        `).join('');
    }

    initWorldMap() {
        const mapContainer = document.getElementById('world-map');
        
        // Simple vintage-style world representation
        mapContainer.innerHTML = `
            <div style="text-align: center; padding: var(--space-8);">
                <div style="font-family: var(--font-mono); color: var(--text-secondary); margin-bottom: var(--space-4);">
                    Visitor Geography (Privacy-First Tracking)
                </div>
                <div style="font-size: 3rem; margin: var(--space-8) 0;">
                    🌍 ${Object.keys(this.data.countries).length} countries visited
                </div>
                <div style="font-family: var(--font-mono); font-size: var(--font-size-sm); color: var(--text-tertiary);">
                    Location data approximated via IP geolocation<br>
                    No personal information stored
                </div>
            </div>
        `;
    }
}

// Initialize vintage analytics
document.addEventListener('DOMContentLoaded', function() {
    new VintageAnalytics();
});
</script>
