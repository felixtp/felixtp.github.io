---
title: Analytics
permalink: /analytics.html
---

# where visitors wander

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

<!-- Debug Section -->
<div style="margin-top: var(--space-16); padding: var(--space-6); background: var(--bg-accent); border: 1px solid var(--border-light); border-radius: var(--border-radius);">
    <h3 style="font-family: var(--font-mono); color: var(--vintage-rust); margin-bottom: var(--space-4);">Debug Analytics</h3>
    <button id="debug-analytics" style="background: var(--vintage-green); color: white; border: none; padding: var(--space-2) var(--space-4); border-radius: var(--border-radius); font-family: var(--font-mono); cursor: pointer;">Show Raw Data</button>
    <button id="reset-analytics" style="background: var(--vintage-rust); color: white; border: none; padding: var(--space-2) var(--space-4); border-radius: var(--border-radius); font-family: var(--font-mono); cursor: pointer; margin-left: var(--space-2);">Reset All Data</button>
    <button id="force-new-visitor" style="background: var(--vintage-amber); color: black; border: none; padding: var(--space-2) var(--space-4); border-radius: var(--border-radius); font-family: var(--font-mono); cursor: pointer; margin-left: var(--space-2);">Force New Visitor</button>
    <pre id="debug-output" style="margin-top: var(--space-4); font-family: var(--font-mono); font-size: var(--font-size-xs); background: var(--bg-secondary); padding: var(--space-4); border-radius: var(--border-radius); display: none; max-height: 300px; overflow-y: auto;"></pre>
</div>

<style>
/* Analytics Page Styling */
.vintage-title {
    font-family: var(--font-serif);
    font-size: var(--font-size-4xl);
    color: var(--vintage-green);
    text-align: center;
    margin-bottom: var(--space-16);
    font-weight: 600;
    letter-spacing: -0.02em;
}

.vintage-subtitle {
    font-family: var(--font-mono);
    color: var(--text-secondary);
    text-align: center;
    font-size: var(--font-size-sm);
    margin-bottom: var(--space-8);
    text-transform: lowercase;
    letter-spacing: 0.05em;
}

.visitor-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-6);
    margin: var(--space-8) 0;
}

.stat-card {
    background: var(--bg-secondary);
    border: 1px solid var(--border-light);
    border-radius: var(--border-radius);
    padding: var(--space-6);
    text-align: center;
    transition: all 0.2s ease;
}

.stat-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.stat-number {
    display: block;
    font-family: var(--font-mono);
    font-size: var(--font-size-3xl);
    font-weight: 600;
    color: var(--vintage-green);
    margin-bottom: var(--space-2);
}

.stat-label {
    font-family: var(--font-mono);
    font-size: var(--font-size-sm);
    color: var(--text-tertiary);
    text-transform: lowercase;
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
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-4);
    margin-bottom: var(--space-3);
    background: var(--bg-accent);
    border-radius: var(--border-radius);
    border: 1px solid var(--border-light);
    transition: all 0.2s ease;
}

.post-rank:hover {
    background: var(--bg-secondary);
    transform: translateX(4px);
}

.post-rank:last-child {
    margin-bottom: 0;
}

.post-number {
    font-family: var(--font-mono);
    font-weight: 600;
    color: var(--vintage-amber);
    font-size: var(--font-size-lg);
    min-width: 30px;
    text-align: center;
}

.post-title {
    flex: 1;
    font-family: var(--font-serif);
    color: var(--text-primary);
    font-size: var(--font-size-base);
    font-weight: 500;
    line-height: 1.4;
}

.post-views {
    font-family: var(--font-mono);
    color: var(--text-tertiary);
    font-size: var(--font-size-sm);
    font-weight: 500;
    white-space: nowrap;
}

.country-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-4);
    margin: var(--space-8) 0;
}

.country-item {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-4);
    background: var(--bg-accent);
    border-radius: var(--border-radius);
    border: 1px solid var(--border-light);
    transition: all 0.2s ease;
}

.country-item:hover {
    background: var(--bg-secondary);
    transform: translateX(4px);
}

.country-flag {
    font-size: var(--font-size-xl);
    min-width: 40px;
    text-align: center;
}

.country-name {
    flex: 1;
    font-family: var(--font-serif);
    color: var(--text-primary);
    font-size: var(--font-size-base);
    font-weight: 500;
}

.country-count {
    font-family: var(--font-mono);
    color: var(--vintage-green);
    font-size: var(--font-size-sm);
    font-weight: 600;
    white-space: nowrap;
}

/* Mobile Responsive Design */
@media (max-width: 768px) {
    .visitor-grid {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: var(--space-4);
    }
    
    .stat-card {
        padding: var(--space-4);
    }
    
    .stat-number {
        font-size: var(--font-size-2xl);
    }
    
    .country-list {
        grid-template-columns: 1fr;
    }
    
    .post-rank {
        flex-direction: column;
        text-align: center;
        gap: var(--space-2);
    }
}

@media (max-width: 480px) {
    .visitor-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-3);
    }
    
    .stat-card {
        padding: var(--space-3);
    }
    
    .stat-number {
        font-size: var(--font-size-xl);
    }
}
</style>

<script>
// Vintage Analytics Display - Reads from Global Tracking
class VintageAnalytics {
    constructor() {
        this.storageKey = 'vintage-blog-analytics';
        this.data = this.loadData();
        this.updateDisplays();
        
        // Refresh data every 5 seconds to show real-time updates
        setInterval(() => {
            this.data = this.loadData();
            this.updateDisplays();
        }, 5000);
    }

    loadData() {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : {
            visitors: {},
            posts: {},
            countries: {},
            totalViews: 0,
            totalVisitors: 0
        };
    }

    updateDisplays() {
        // Update basic stats
        document.getElementById('total-visitors').textContent = this.data.totalVisitors || 0;
        document.getElementById('total-views').textContent = this.data.totalViews || 0;
        document.getElementById('countries-count').textContent = Object.keys(this.data.countries || {}).length || 0;
        
        // Calculate average visits per visitor
        const totalVisits = Object.values(this.data.visitors || {}).reduce((sum, visitor) => sum + (visitor.visits || 0), 0);
        const avgVisits = this.data.totalVisitors > 0 ? (totalVisits / this.data.totalVisitors).toFixed(1) : '0';
        document.getElementById('avg-session').textContent = avgVisits + ' visits';

        // Update displays
        this.updateTopPosts();
        this.updateCountryList();
        this.initWorldMap();
    }

    updateTopPosts() {
        const container = document.getElementById('top-posts');
        const posts = Object.entries(this.data.posts || {})
            .sort(([,a], [,b]) => b.views - a.views)
            .slice(0, 5);

        if (posts.length === 0) {
            container.innerHTML = '<p class="vintage-subtitle">No post data yet - keep writing!</p>';
            return;
        }

        container.innerHTML = posts.map(([path, data], index) => `
            <div class="post-rank">
                <span class="post-number">${index + 1}.</span>
                <span class="post-title">${data.title || path}</span>
                <span class="post-views">${data.views} views</span>
            </div>
        `).join('');
    }

    updateCountryList() {
        const container = document.getElementById('country-list');
        const countries = Object.entries(this.data.countries || {})
            .sort(([,a], [,b]) => b.visitors - a.visitors);

        if (countries.length === 0) {
            container.innerHTML = '<p class="vintage-subtitle">No geographic data yet - visitors loading...</p>';
            return;
        }

        container.innerHTML = countries.map(([code, data]) => `
            <div class="country-item">
                <span class="country-flag">${data.flag}</span>
                <span class="country-name">${data.name}</span>
                <span class="country-count">${data.visitors} ${data.visitors === 1 ? 'visitor' : 'visitors'}</span>
            </div>
        `).join('');
    }

    initWorldMap() {
        const mapContainer = document.getElementById('world-map');
        const countries = this.data.countries || {};
        const countriesCount = Object.keys(countries).length;
        
        // Creative vintage ASCII world map
        mapContainer.innerHTML = `
            <div style="font-family: var(--font-mono); line-height: 1.2; text-align: center;">
<pre style="margin: 0; line-height: 1.1;">
    ╔════════════════════════════════════════════════════════════╗
    ║                      VISITOR ATLAS                        ║
    ╚════════════════════════════════════════════════════════════╝
    
        🌎 A M E R I C A S     🌍 E U R O P E     🌏 A S I A
        
        
        🗺️ TRACKING STATION OPERATIONAL 🗺️
        
    ┌──────────────┬──────────────┬──────────────┬──────────────┐
    │  CONTINENT   │   VISITORS   │   STATUS     │   COVERAGE   │
    ├──────────────┼──────────────┼──────────────┼──────────────┤
    │   GLOBAL     │      ${countriesCount}       │   ACTIVE     │   COUNTRY    │
    │   TRACKING   │   NATIONS    │   SECURE     │   LEVEL      │
    └──────────────┴──────────────┴──────────────┴──────────────┘
</pre>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-4); text-align: left; margin: var(--space-6) 0;">
                <div style="background: var(--bg-accent); padding: var(--space-4); border-radius: var(--border-radius); border: 1px solid var(--border-light); position: relative;">
                    <div style="position: absolute; top: var(--space-2); right: var(--space-2); font-size: 1.5rem;">🌐</div>
                    <h4 style="margin: 0 0 var(--space-2) 0; color: var(--vintage-green); font-family: var(--font-mono);">Global Reach</h4>
                    <p style="margin: 0; font-size: var(--font-size-sm); color: var(--text-secondary);">Tracking visitors from ${countriesCount} countries worldwide</p>
                </div>
                
                <div style="background: var(--bg-accent); padding: var(--space-4); border-radius: var(--border-radius); border: 1px solid var(--border-light); position: relative;">
                    <div style="position: absolute; top: var(--space-2); right: var(--space-2); font-size: 1.5rem;">🔒</div>
                    <h4 style="margin: 0 0 var(--space-2) 0; color: var(--vintage-amber); font-family: var(--font-mono);">Privacy First</h4>
                    <p style="margin: 0; font-size: var(--font-size-sm); color: var(--text-secondary);">No cookies, no tracking across sites</p>
                </div>
                
                <div style="background: var(--bg-accent); padding: var(--space-4); border-radius: var(--border-radius); border: 1px solid var(--border-light); position: relative;">
                    <div style="position: absolute; top: var(--space-2); right: var(--space-2); font-size: 1.5rem;">🧭</div>
                    <h4 style="margin: 0 0 var(--space-2) 0; color: var(--vintage-rust); font-family: var(--font-mono);">Real-time</h4>
                    <p style="margin: 0; font-size: var(--font-size-sm); color: var(--text-secondary);">Live visitor tracking and analytics</p>
                </div>
            </div>

            <div style="margin-top: var(--space-8); padding: var(--space-4); background: var(--bg-secondary); border-radius: var(--border-radius); border: 1px solid var(--border-light);">
                <div style="font-family: var(--font-mono); font-size: var(--font-size-xs); color: var(--text-tertiary); text-align: center;">
                    🕰️ Last updated: ${new Date().toLocaleTimeString()} • Data refreshes every 5 seconds
                </div>
            </div>
        `;
    }
}

// Initialize analytics display
document.addEventListener('DOMContentLoaded', function() {
    const analytics = new VintageAnalytics();
    
    // Debug functions
    document.getElementById('debug-analytics').addEventListener('click', function() {
        const debugOutput = document.getElementById('debug-output');
        const rawData = localStorage.getItem('vintage-blog-analytics');
        const visitorId = localStorage.getItem('vintage-visitor-id');
        
        const debugInfo = {
            currentVisitorId: visitorId,
            analyticsData: rawData ? JSON.parse(rawData) : null,
            localStorage: {
                'vintage-blog-analytics': rawData,
                'vintage-visitor-id': visitorId
            },
            browserInfo: {
                userAgent: navigator.userAgent,
                language: navigator.language,
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
            }
        };
        
        debugOutput.textContent = JSON.stringify(debugInfo, null, 2);
        debugOutput.style.display = debugOutput.style.display === 'block' ? 'none' : 'block';
        
        console.log('🔍 Debug Info:', debugInfo);
    });
    
    document.getElementById('reset-analytics').addEventListener('click', function() {
        if (confirm('Are you sure you want to reset all analytics data? This cannot be undone.')) {
            localStorage.removeItem('vintage-blog-analytics');
            localStorage.removeItem('vintage-visitor-id');
            location.reload();
        }
    });
    
    document.getElementById('force-new-visitor').addEventListener('click', function() {
        if (confirm('Force create a new visitor? This will trigger country detection.')) {
            localStorage.removeItem('vintage-visitor-id');
            location.reload();
        }
    });
});
</script>
