---
layout: default
title: Blog
permalink: /blog/
---

<div class="home-intro">
    <h1 class="home-title">Blog</h1>
    <p class="home-subtitle">Thoughts, ideas, and occasional rants about technology and life.</p>
</div>

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
            {{ post.excerpt | strip_html | truncatewords: 50 }}
        </div>
    </article>
    {% endfor %}
    
    {% if site.posts.size == 0 %}
    <div class="blog-post">
        <h2 class="blog-post-title">Coming Soon</h2>
        <div class="blog-post-excerpt">
            I'm working on some posts. Check back soon for thoughts on technology, life, and everything in between.
        </div>
    </div>
    {% endif %}
</div>
{% endif %}

<style>
.blog-posts {
  margin-top: 2rem;
}

.blog-post {
  border-bottom: 1px solid #eee;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
}

.blog-post:last-child {
  border-bottom: none;
}

.blog-post h2 {
  margin-bottom: 0.5rem;
}

.blog-post h2 a {
  text-decoration: none;
  color: #2c3e50;
}

.blog-post h2 a:hover {
  color: #667eea;
}

.post-meta {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.post-excerpt {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.read-more {
  color: #667eea;
  font-weight: 500;
  text-decoration: none;
}

.read-more:hover {
  text-decoration: underline;
}

.no-posts {
  text-align: center;
  padding: 3rem 0;
  color: #666;
}
</style>