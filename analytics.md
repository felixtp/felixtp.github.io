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
            totalVisitors: 0,
            totalViews: 0
        };
    }

    updateDisplays() {
        // Update basic stats
        document.getElementById('total-visitors').textContent = this.data.totalVisitors || 0;
        document.getElementById('total-views').textContent = this.data.totalViews || 0;
        document.getElementById('countries-count').textContent = Object.keys(this.data.countries).length || 0;
        
        // Calculate average visits per visitor
        const totalVisits = Object.values(this.data.visitors).reduce((sum, visitor) => sum + (visitor.visits || 0), 0);
        const avgVisits = this.data.totalVisitors > 0 ? (totalVisits / this.data.totalVisitors).toFixed(1) : '0';
        document.getElementById('avg-session').textContent = avgVisits + ' visits/visitor';

        // Update displays
        this.updateTopPosts();
        this.updateCountryList();
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
        const countries = this.data.countries;
        const countriesCount = Object.keys(countries).length;
        
        // Creative vintage ASCII world map
        mapContainer.innerHTML = `
            <div style="font-family: var(--font-mono); line-height: 1.2; text-align: center;">
                <div style="color: var(--text-secondary); margin-bottom: var(--space-4); font-size: var(--font-size-sm); text-transform: uppercase; letter-spacing: 0.1em;">
                    Global Wanderings • Privacy-First Cartography
                </div>
                
                <div style="font-size: var(--font-size-xs); color: var(--vintage-green); margin-bottom: var(--space-6);">
<pre style="margin: 0; line-height: 1.1;">
    ╔════════════════════════════════════════════════════════════╗
    ║                      VISITOR ATLAS                        ║
    ╚════════════════════════════════════════════════════════════╝
    
        🌎 A M E R I C A S     🌍 E U R O P E     🌏 A S I A
        
           .-.   .-.   .-.         ╭─╮     ╭───╮         ╭─╮
          (   )_(   )_(   )        │ │     │   │        ╱   ╲
           '-'   '-'   '-'         ╰─╯     ╰───╯       ╱     ╲
        
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
                        <div style="color: var(--vintage-amber); font-weight: 600; margin-bottom: var(--space-2); font-family: var(--font-mono);">
                            TERRITORIAL REACH
                        </div>
                        <div style="color: var(--text-primary); font-family: var(--font-mono); font-size: var(--font-size-sm);">
                            📍 ${countriesCount} ${countriesCount === 1 ? 'territory' : 'territories'} charted
                        </div>
                        <div style="color: var(--text-tertiary); font-size: var(--font-size-xs); margin-top: var(--space-2);">
                            Geographic footprint expanding
                        </div>
                    </div>
                    
                    <div style="background: var(--bg-accent); padding: var(--space-4); border-radius: var(--border-radius); border: 1px solid var(--border-light); position: relative;">
                        <div style="position: absolute; top: var(--space-2); right: var(--space-2); font-size: 1.5rem;">🔒</div>
                        <div style="color: var(--vintage-rust); font-weight: 600; margin-bottom: var(--space-2); font-family: var(--font-mono);">
                            PRIVACY PROTOCOL
                        </div>
                        <div style="color: var(--text-primary); font-family: var(--font-mono); font-size: var(--font-size-sm);">
                            ✓ Zero personal data stored
                        </div>
                        <div style="color: var(--text-tertiary); font-size: var(--font-size-xs); margin-top: var(--space-2);">
                            Anonymous wanderer tracking
                        </div>
                    </div>
                    
                    <div style="background: var(--bg-accent); padding: var(--space-4); border-radius: var(--border-radius); border: 1px solid var(--border-light); position: relative;">
                        <div style="position: absolute; top: var(--space-2); right: var(--space-2); font-size: 1.5rem;">🧭</div>
                        <div style="color: var(--vintage-green); font-weight: 600; margin-bottom: var(--space-2); font-family: var(--font-mono);">
                            NAVIGATION METHOD
                        </div>
                        <div style="color: var(--text-primary); font-family: var(--font-mono); font-size: var(--font-size-sm);">
                            📡 IP geolocation approximation
                        </div>
                        <div style="color: var(--text-tertiary); font-size: var(--font-size-xs); margin-top: var(--space-2);">
                            Country-level precision only
                        </div>
                    </div>
                </div>

                <div style="margin-top: var(--space-8); padding: var(--space-4); background: var(--bg-secondary); border-radius: var(--border-radius); border: 1px solid var(--border-light);">
                    <div style="font-family: var(--font-mono); font-size: var(--font-size-xs); color: var(--text-tertiary); text-align: center;">
                        <div style="margin-bottom: var(--space-2);">📜 CARTOGRAPHER'S NOTE 📜</div>
                        <div>This digital atlas respects wanderer privacy whilst charting the curious souls</div>
                        <div>who find their way to this corner of the internet's vast territories.</div>
                        <div style="margin-top: var(--space-2); color: var(--vintage-green);">Live tracking: Updates every 5 seconds</div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Initialize analytics display
document.addEventListener('DOMContentLoaded', function() {
    new VintageAnalytics();
});
</script>
