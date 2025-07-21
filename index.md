---
title: Felix
---

<style>
body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    max-width: 680px;
    margin: 0 auto;
    padding: 2rem;
    line-height: 1.6;
    color: #2c3e50;
    background: #fafafa;
}

.hero {
    text-align: center;
    margin: 3rem 0 4rem 0;
    padding: 3rem 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 16px;
    margin-left: -2rem;
    margin-right: -2rem;
    padding-left: 2rem;
    padding-right: 2rem;
}

.hero h1 {
    font-size: 3rem;
    margin: 0 0 1rem 0;
    font-weight: 700;
}

.hero p {
    font-size: 1.2rem;
    opacity: 0.9;
    margin: 0;
}

.blog-stats {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 2rem 0;
    font-size: 0.9rem;
    color: #6c757d;
}

.stat {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
    color: #667eea;
}

.blog-posts {
    display: grid;
    gap: 1.5rem;
}

.blog-post {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    border: 1px solid #e9ecef;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.blog-post:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.blog-post-title a {
    color: #2c3e50;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.3rem;
}

.blog-post-title a:hover {
    color: #667eea;
}

.blog-post-meta {
    color: #6c757d;
    font-size: 0.9rem;
    margin: 0.5rem 0 1rem 0;
}

.blog-post-excerpt {
    color: #495057;
    line-height: 1.6;
}

.coming-soon {
    text-align: center;
    padding: 3rem;
    color: #6c757d;
}

nav {
    margin: 2rem 0;
    text-align: center;
}

nav a {
    margin: 0 1rem;
    color: #667eea;
    text-decoration: none;
    font-weight: 500;
}

nav a:hover {
    text-decoration: underline;
}
</style>

<div class="hero">
    <h1>Hi, I'm Felix 👋</h1>
    <p>Welcome to my corner of the internet. I write about things I find interesting.</p>
</div>

<div class="blog-stats">
    <div class="stat">
        <span class="stat-number" id="total-posts">{{ site.posts.size }}</span>
        <span>Posts</span>
    </div>
    <div class="stat">
        <span class="stat-number" id="total-views">-</span>
        <span>Views</span>
    </div>
    <div class="stat">
        <span class="stat-number">2025</span>
        <span>Year Started</span>
    </div>
</div>

<nav>
    <a href="/">Home</a>
    <a href="/about/">About</a>
    <a href="/analytics.html">Stats</a>
</nav>

<div class="blog-posts">
    {% for post in site.posts %}
    <article class="blog-post">
        <h2 class="blog-post-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h2>
        <div class="blog-post-meta">
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
            {% if post.author %} • by {{ post.author }}{% endif %}
        </div>
        <div class="blog-post-excerpt">
            {{ post.excerpt | strip_html | truncatewords: 30 }}
        </div>
    </article>
    {% endfor %}
    
    {% if site.posts.size == 0 %}
    <div class="coming-soon">
        <h2>Coming Soon</h2>
        <p>I'm working on some posts. Check back soon for thoughts on technology, life, and everything in between.</p>
    </div>
    {% endif %}
</div>

<script>
// Display total blog views
const totalViews = localStorage.getItem('blog-views') || '0';
document.getElementById('total-views').textContent = totalViews;
</script>