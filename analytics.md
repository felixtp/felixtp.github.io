---
title: Analytics
permalink: /analytics.html
---

# Blog Analytics

<div id="analytics-dashboard">
    <div class="metric-card">
        <h3>Page Views</h3>
        <span id="page-views">-</span>
    </div>
    <div class="metric-card">
        <h3>Unique Visitors</h3>
        <span id="unique-visitors">-</span>
    </div>
    <div class="metric-card">
        <h3>Most Popular Post</h3>
        <span id="popular-post">-</span>
    </div>
</div>

<script>
// Simple privacy-first analytics using localStorage
function updateAnalytics() {
    const views = localStorage.getItem('blog-views') || 0;
    const visitors = localStorage.getItem('blog-visitors') || 0;
    
    document.getElementById('page-views').textContent = views;
    document.getElementById('unique-visitors').textContent = visitors;
}

updateAnalytics();
</script>

<style>
#analytics-dashboard {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
}

.metric-card {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
    border: 1px solid #e9ecef;
}

.metric-card h3 {
    margin: 0 0 0.5rem 0;
    color: #6c757d;
    font-size: 0.9rem;
    text-transform: uppercase;
}

.metric-card span {
    font-size: 2rem;
    font-weight: bold;
    color: #2c3e50;
}
</style>
