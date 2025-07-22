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
<div style="margin-top: var(--space-16); padding: var(--space-4); background: var(--bg-accent); border: 1px solid var(--border-light); border-radius: var(--border-radius);">
    <h3 style="font-family: var(--font-mono); font-size: var(--font-size-sm); color: var(--text-secondary); margin-bottom: var(--space-4);">🔧 Debug Tools</h3>
    <button onclick="debugAnalytics()" style="background: var(--vintage-green); color: white; border: none; padding: var(--space-2) var(--space-4); border-radius: var(--border-radius); font-family: var(--font-mono); font-size: var(--font-size-sm); cursor: pointer; margin-right: var(--space-2);">Show Debug Info</button>
    <button onclick="clearAnalytics()" style="background: var(--vintage-rust); color: white; border: none; padding: var(--space-2) var(--space-4); border-radius: var(--border-radius); font-family: var(--font-mono); font-size: var(--font-size-sm); cursor: pointer; margin-right: var(--space-2);">Clear All Data</button>
    <button onclick="simulateVisitor()" style="background: var(--vintage-amber); color: white; border: none; padding: var(--space-2) var(--space-4); border-radius: var(--border-radius); font-family: var(--font-mono); font-size: var(--font-size-sm); cursor: pointer;">Simulate New Visitor</button>
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

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-8);
    margin-bottom: var(--space-24);
}

.stat-box {
    background: var(--bg-secondary);
    padding: var(--space-8);
    border-radius: var(--border-radius);
    border: 1px solid var(--border-light);
    text-align: center;
    transition: all 0.2s ease;
    min-height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.stat-box:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    border-color: var(--vintage-green);
}

.stat-number {
    font-family: var(--font-mono);
    font-size: var(--font-size-4xl);
    font-weight: 600;
    color: var(--vintage-green);
    display: block;
    margin-bottom: var(--space-3);
    line-height: 1;
}

.stat-label {
    font-family: var(--font-mono);
    font-size: var(--font-size-sm);
    color: var(--text-tertiary);
    text-transform: lowercase;
    letter-spacing: 0.05em;
    font-weight: 400;
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

.country-item {
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

.section-title {
    font-family: var(--font-serif);
    font-size: var(--font-size-3xl);
    color: var(--text-primary);
    margin-bottom: var(--space-8);
    margin-top: var(--space-24);
    font-weight: 600;
    letter-spacing: -0.02em;
}

.section-container {
    background: var(--bg-secondary);
    padding: var(--space-8);
    border-radius: var(--border-radius);
    border: 1px solid var(--border-light);
    margin-bottom: var(--space-16);
}

/* Mobile Responsive Design */
@media (max-width: 768px) {
    .stats-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: var(--space-6);
    }
    
    .stat-box {
        min-height: 120px;
        padding: var(--space-6);
    }
    
    .stat-number {
        font-size: var(--font-size-3xl);
    }
    
    .vintage-title {
        font-size: var(--font-size-3xl);
    }
    
    .section-title {
        font-size: var(--font-size-2xl);
        margin-top: var(--space-16);
    }
    
    .post-rank, .country-item {
        flex-direction: column;
        text-align: center;
        gap: var(--space-2);
    }
    
    .post-number, .country-flag {
        min-width: auto;
    }
}

@media (max-width: 480px) {
    .stats-grid {
        grid-template-columns: 1fr;
        gap: var(--space-4);
    }
    
    .stat-box {
        min-height: 100px;
        padding: var(--space-4);
    }
    
    .stat-number {
        font-size: var(--font-size-2xl);
    }
    
    .vintage-title {
        font-size: var(--font-size-2xl);
    }
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

// Debug functions
function debugAnalytics() {
    const data = JSON.parse(localStorage.getItem('vintage-blog-analytics') || '{}');
    console.log('🔧 Complete Analytics Data:', data);
    
    alert(`Debug Info:
📊 Total Visitors: ${data.totalVisitors || 0}
📈 Total Views: ${data.totalViews || 0}
🌍 Countries: ${Object.keys(data.countries || {}).length}
👥 Visitor Records: ${Object.keys(data.visitors || {}).length}

Countries detected:
${Object.entries(data.countries || {}).map(([code, country]) => 
    `${country.flag} ${country.name} (${code}): ${country.visitors} visitors`
).join('\n')}

Check browser console for full details.`);
}

function clearAnalytics() {
    if (confirm('⚠️ This will clear all analytics data. Are you sure?')) {
        localStorage.removeItem('vintage-blog-analytics');
        localStorage.removeItem('vintage-visitor-id');
        alert('🗑️ Analytics data cleared. Refresh the page to start fresh.');
        location.reload();
    }
}

function simulateVisitor() {
    // Create a fake visitor from a different country for testing
    const testCountries = [
        { code: 'CA', name: 'Canada', flag: '🇨🇦' },
        { code: 'DE', name: 'Germany', flag: '🇩🇪' },
        { code: 'US', name: 'United States', flag: '🇺🇸' },
        { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' }
    ];
    
    const randomCountry = testCountries[Math.floor(Math.random() * testCountries.length)];
    const fakeVisitorId = 'test_visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    
    const data = JSON.parse(localStorage.getItem('vintage-blog-analytics') || '{}');
    if (!data.visitors) data.visitors = {};
    if (!data.countries) data.countries = {};
    if (!data.totalVisitors) data.totalVisitors = 0;
    
    // Add fake visitor
    data.totalVisitors++;
    data.visitors[fakeVisitorId] = {
        firstVisit: new Date().toISOString(),
        visits: 1,
        country: randomCountry
    };
    
    // Update country stats
    if (!data.countries[randomCountry.code]) {
        data.countries[randomCountry.code] = {
            name: randomCountry.name,
            flag: randomCountry.flag,
            visitors: 0
        };
    }
    
    const countryVisitors = Object.values(data.visitors).filter(v => 
        v.country && v.country.code === randomCountry.code
    ).length;
    data.countries[randomCountry.code].visitors = countryVisitors;
    
    localStorage.setItem('vintage-blog-analytics', JSON.stringify(data));
    
    alert(`🎭 Simulated visitor from ${randomCountry.flag} ${randomCountry.name}!\nRefresh to see updated stats.`);
    location.reload();
}
</script>
