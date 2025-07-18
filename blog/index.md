---
layout: default
title: Blog
nav_order: 2
---

# Blog

Welcome to our blog! Here you'll find the latest posts and updates.

<div class="blog-posts">
  {% for post in site.posts %}
    <article class="blog-post">
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <div class="post-meta">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
        {% if post.author %} • by {{ post.author }}{% endif %}
      </div>
      <div class="post-excerpt">
        {{ post.excerpt | strip_html | truncatewords: 50 }}
      </div>
      <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
    </article>
  {% endfor %}
</div>

{% if site.posts.size == 0 %}
<div class="no-posts">
  <p>No blog posts yet. Check back soon!</p>
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