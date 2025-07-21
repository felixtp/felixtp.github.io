---
title: Felix's Digital Garden
description: Thoughts, code, and everything in between
---

<div class="home-intro">
    <h1 class="home-title">Felix's Digital Garden</h1>
    <p class="home-subtitle">where ideas grow slowly and bugs are features</p>
    
    <div class="home-stats">
        <div class="stat-item">
            <div class="stat-number mono" id="totalPosts">{{ site.posts.size }}</div>
            <div>posts written</div>
        </div>
        <div class="stat-item">
            <div class="stat-number mono" id="totalViews">0</div>
            <div>total views</div>
        </div>
        <div class="stat-item">
            <div class="stat-number mono" id="typoCount">∞</div>
            <div>typos fixed</div>
        </div>
        <div class="stat-item">
            <div class="stat-number mono">{{ 'now' | date: '%Y' | minus: 1995 }}</div>
            <div>years debugging</div>
        </div>
    </div>
</div>

<section class="blog-posts">
    {% for post in site.posts %}
    <article class="blog-post">
        <header>
            <h2 class="blog-post-title">
                <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
            </h2>
            <div class="blog-post-meta">
                <time datetime="{{ post.date | date_to_xmlschema }}">
                    {{ post.date | date: '%B %d, %Y' }}
                </time>
                {% if post.tags and post.tags.size > 0 %}
                <span class="tags">
                    {% for tag in post.tags %}
                        <span class="tag">#{{ tag }}</span>
                    {% endfor %}
                </span>
                {% endif %}
            </div>
        </header>
        
        <div class="blog-post-excerpt">
            {% if post.excerpt %}
                {{ post.excerpt | strip_html | truncatewords: 25 }}
            {% else %}
                A brief meditation on the art of {{ post.title | downcase }}...
            {% endif %}
        </div>
        
        <footer class="blog-post-footer">
            <div class="post-stats-mini">
                <span class="views" data-post="{{ post.url | slugify }}">— views</span>
                <span class="reading-time">{{ post.content | number_of_words | divided_by: 200 | plus: 1 }} min read</span>
            </div>
            <a href="{{ post.url | relative_url }}" class="read-more">continue reading →</a>
        </footer>
    </article>
    {% endfor %}
    
    {% if site.posts.size == 0 %}
    <div class="empty-state">
        <h3>The garden is being prepared...</h3>
        <p>No posts yet, but the soil is fertile and the ideas are germinating. Check back soon!</p>
    </div>
    {% endif %}
</section>

<style>
/* Page-specific styles */
.mono { font-family: var(--font-mono); }

.tags {
    margin-left: var(--space-3);
}

.tag {
    color: var(--accent-color);
    margin-right: var(--space-2);
    font-size: var(--font-size-xs);
}

.views {
    color: var(--vintage-green);
}

.reading-time {
    color: var(--text-tertiary);
}

.empty-state {
    text-align: center;
    padding: var(--space-24) var(--space-8);
    color: var(--text-secondary);
}

.empty-state h3 {
    font-family: var(--font-serif);
    color: var(--text-primary);
    margin-bottom: var(--space-4);
}

/* Responsive design */
@media (max-width: 640px) {
    .home-stats {
        flex-direction: column;
        gap: var(--space-4);
    }
    
    .blog-post-footer {
        flex-direction: column;
        gap: var(--space-3);
        text-align: center;
    }
    
    .post-stats-mini {
        justify-content: center;
    }
}
</style>

<script>
// Load view counts for posts
document.addEventListener('DOMContentLoaded', function() {
    // Update total views counter
    const analytics = JSON.parse(localStorage.getItem('blog-analytics') || '{}');
    const totalViews = Object.values(analytics.posts || {}).reduce((sum, post) => sum + (post.views || 0), 0);
    
    const totalViewsEl = document.getElementById('totalViews');
    if (totalViewsEl && totalViews > 0) {
        totalViewsEl.textContent = totalViews.toLocaleString();
    }
    
    // Update individual post view counts
    document.querySelectorAll('.views[data-post]').forEach(el => {
        const postSlug = el.getAttribute('data-post');
        const views = analytics.posts?.[postSlug]?.views || 0;
        el.textContent = views > 0 ? `${views} views` : '— views';
    });
    
    // Typo counter animation (because we all make them!)
    const typoEl = document.getElementById('typoCount');
    if (typoEl) {
        let count = Math.floor(Math.random() * 500) + 200;
        typoEl.textContent = count.toLocaleString();
        
        // Increment occasionally for humor
        setInterval(() => {
            if (Math.random() < 0.08) { // 8% chance every interval
                count++;
                typoEl.textContent = count.toLocaleString();
            }
        }, 45000); // Every 45 seconds
    }
});
</script>