---
title: Felix
---

# Hi 👋

Welcome to my corner of the internet. I write about things I find interesting.

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