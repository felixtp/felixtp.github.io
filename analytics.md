---
title: Analytics
layout: default
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
// Initialize analytics display
document.addEventListener('DOMContentLoaded', function() {
    const analytics = new VintageAnalytics();
});
</script>
