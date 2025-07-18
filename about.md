---
layout: default
title: About
nav_order: 6
description: Learn more about Felix, a passionate developer and infrastructure enthusiast with expertise in full-stack development and DevOps.
---

---
layout: default
title: About
permalink: /about/
---

<div class="home-intro">
    <h1 class="home-title">About</h1>
    <p class="home-subtitle">A little bit about me and this blog.</p>
</div>

<div class="post-content">
    <p>Hi, I'm Felix. This is my blog where I share thoughts, ideas, and occasional rants about technology, life, and everything in between.</p>
    
    <p>I believe in clear thinking and honest writing. Sometimes I'll write short, punchy posts about things that are bugging me. Other times I'll dive deep into complex topics that require more nuanced exploration.</p>
    
    <p>Thanks for reading.</p>
</div>

<style>
.about-hero {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  border-radius: 12px;
}

.about-avatar {
  flex-shrink: 0;
}

.avatar-placeholder {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
}

.about-intro h2 {
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.about-intro p {
  color: #666;
  font-size: 1.1rem;
  margin: 0;
}

.tech-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.tech-category {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.tech-category h4 {
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.tech-category ul {
  list-style: none;
  padding: 0;
}

.tech-category li {
  padding: 0.3rem 0;
  color: #666;
  border-bottom: 1px solid var(--border-color);
}

.tech-category li:last-child {
  border-bottom: none;
}

@media (max-width: 768px) {
  .about-hero {
    flex-direction: column;
    text-align: center;
  }
  
  .avatar-placeholder {
    width: 100px;
    height: 100px;
    font-size: 2.5rem;
  }
  
  .tech-categories {
    grid-template-columns: 1fr;
  }
}
</style>
