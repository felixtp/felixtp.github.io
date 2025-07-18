---
layout: default
title: {% if site.blog_as_home %}Blog{% else %}Home{% endif %}
nav_order: 1
---

{% if site.blog_as_home %}
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

{% else %}

<div class="hero-section">
  <div class="hero-content">
    <h1 class="hero-title">Hi, I'm Felix 👋</h1>
    <p class="hero-subtitle">Full-Stack Developer & Infrastructure Enthusiast</p>
    <p class="hero-description">
      I build scalable web applications and robust infrastructure solutions. 
      Passionate about modern technologies, clean code, and solving complex problems.
    </p>
    <div class="hero-buttons">
      <a href="#projects" class="btn btn-primary">View My Work</a>
      <a href="{{ '/contact/' | relative_url }}" class="btn btn-secondary">Get In Touch</a>
    </div>
  </div>
  <div class="hero-stats">
    <div class="stat">
      <span class="stat-number">5+</span>
      <span class="stat-label">Years Experience</span>
    </div>
    <div class="stat">
      <span class="stat-number">{{ site.posts.size }}</span>
      <span class="stat-label">Blog Posts</span>
    </div>
    <div class="stat">
      <span class="stat-number">10+</span>
      <span class="stat-label">Projects</span>
    </div>
  </div>
</div>

<section class="skills-section">
  <h2>Technologies & Skills</h2>
  <div class="skills-grid">
    <div class="skill-category">
      <h3>Frontend</h3>
      <div class="skill-tags">
        <span class="skill-tag">HTML5</span>
        <span class="skill-tag">CSS3</span>
        <span class="skill-tag">JavaScript</span>
        <span class="skill-tag">React</span>
        <span class="skill-tag">Vue.js</span>
        <span class="skill-tag">TypeScript</span>
      </div>
    </div>
    <div class="skill-category">
      <h3>Backend</h3>
      <div class="skill-tags">
        <span class="skill-tag">Node.js</span>
        <span class="skill-tag">Python</span>
        <span class="skill-tag">Django</span>
        <span class="skill-tag">Express.js</span>
        <span class="skill-tag">PostgreSQL</span>
        <span class="skill-tag">MongoDB</span>
      </div>
    </div>
    <div class="skill-category">
      <h3>DevOps & Cloud</h3>
      <div class="skill-tags">
        <span class="skill-tag">Docker</span>
        <span class="skill-tag">Kubernetes</span>
        <span class="skill-tag">AWS</span>
        <span class="skill-tag">GitHub Actions</span>
        <span class="skill-tag">Terraform</span>
        <span class="skill-tag">Jenkins</span>
      </div>
    </div>
    <div class="skill-category">
      <h3>Tools & Others</h3>
      <div class="skill-tags">
        <span class="skill-tag">Git</span>
        <span class="skill-tag">VS Code</span>
        <span class="skill-tag">Figma</span>
        <span class="skill-tag">Jekyll</span>
        <span class="skill-tag">Ansible</span>
        <span class="skill-tag">Linux</span>
      </div>
    </div>
  </div>
</section>

<section id="projects" class="projects-section">
  <h2>Featured Projects</h2>
  <div class="projects-grid">
    <div class="project-card">
      <div class="project-image">
        <div class="project-placeholder">🚀</div>
      </div>
      <div class="project-content">
        <h3>Infrastructure as Code Demo</h3>
        <p>A comprehensive demonstration of modern IaC practices using Terraform, Ansible, and GitHub Actions for automated deployment pipelines.</p>
        <div class="project-tech">
          <span class="tech-tag">Terraform</span>
          <span class="tech-tag">Ansible</span>
          <span class="tech-tag">AWS</span>
        </div>
        <div class="project-links">
          <a href="https://github.com/felixtp/iaac-demo" class="project-link">View Code</a>
          <a href="#" class="project-link">Live Demo</a>
        </div>
      </div>
    </div>
    
    <div class="project-card">
      <div class="project-image">
        <div class="project-placeholder">📝</div>
      </div>
      <div class="project-content">
        <h3>GitHub Pages Template</h3>
        <p>A flexible Jekyll template for GitHub Pages with automatic navigation, dark mode, search functionality, and responsive design.</p>
        <div class="project-tech">
          <span class="tech-tag">Jekyll</span>
          <span class="tech-tag">JavaScript</span>
          <span class="tech-tag">CSS3</span>
        </div>
        <div class="project-links">
          <a href="https://github.com/felixtp/pages" class="project-link">View Code</a>
          <a href="https://felixtp.github.io" class="project-link">Live Demo</a>
        </div>
      </div>
    </div>
    
    <div class="project-card">
      <div class="project-image">
        <div class="project-placeholder">🔧</div>
      </div>
      <div class="project-content">
        <h3>DevOps Automation Suite</h3>
        <p>Collection of automation scripts and tools for streamlining development workflows, CI/CD pipelines, and infrastructure management.</p>
        <div class="project-tech">
          <span class="tech-tag">Python</span>
          <span class="tech-tag">Docker</span>
          <span class="tech-tag">Kubernetes</span>
        </div>
        <div class="project-links">
          <a href="#" class="project-link">View Code</a>
          <a href="#" class="project-link">Documentation</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="about-section">
  <h2>About Me</h2>
  <div class="about-content">
    <div class="about-text">
      <p>
        I'm a passionate developer with a strong background in full-stack development and infrastructure automation. 
        I love building scalable applications and creating efficient development workflows.
      </p>
      <p>
        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
        or writing about my experiences in software development and DevOps.
      </p>
      <div class="about-highlights">
        <div class="highlight">
          <h4>🎯 Focus Areas</h4>
          <p>Full-stack development, Infrastructure as Code, DevOps automation</p>
        </div>
        <div class="highlight">
          <h4>🌱 Currently Learning</h4>
          <p>Cloud-native technologies, Microservices architecture, AI/ML integration</p>
        </div>
        <div class="highlight">
          <h4>💼 Work Style</h4>
          <p>Agile methodologies, Test-driven development, Continuous learning</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="blog-preview">
  <h2>Latest Blog Posts</h2>
  <div class="recent-posts">
    {% for post in site.posts limit:3 %}
      <article class="recent-post">
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <div class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
          {% if post.author %} • by {{ post.author }}{% endif %}
        </div>
        <p>{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
        <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
      </article>
    {% endfor %}
  </div>
  
  {% if site.posts.size > 3 %}
  <div class="view-all-posts">
    <a href="{{ '/blog/' | relative_url }}" class="btn btn-outline">View All Posts</a>
  </div>
  {% endif %}
</section>

<style>
/* Hero Section */
.hero-section {
  text-align: center;
  padding: 4rem 0;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  border-radius: 16px;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.hero-description {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
  color: white;
}

.btn-secondary {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.btn-secondary:hover {
  background: var(--primary-color);
  color: white;
}

.btn-outline {
  background: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.btn-outline:hover {
  background: var(--primary-color);
  color: white;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

.stat-label {
  font-size: 0.9rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Skills Section */
.skills-section {
  margin-bottom: 4rem;
  padding: 3rem 0;
}

.skills-section h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow);
}

.skill-category h3 {
  margin-bottom: 1rem;
  color: var(--primary-color);
  font-size: 1.3rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: var(--bg-color);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: var(--text-color);
  border: 1px solid var(--border-color);
}

/* Projects Section */
.projects-section {
  margin-bottom: 4rem;
  padding: 3rem 0;
}

.projects-section h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
  border: 1px solid var(--border-color);
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  height: 150px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-placeholder {
  font-size: 3rem;
  color: white;
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  margin-bottom: 1rem;
  color: var(--text-color);
}

.project-content p {
  margin-bottom: 1rem;
  color: #666;
  line-height: 1.6;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: var(--primary-color);
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
}

.project-link:hover {
  text-decoration: underline;
}

/* About Section */
.about-section {
  margin-bottom: 4rem;
  padding: 3rem 0;
}

.about-section h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: #666;
}

.about-highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.highlight {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.highlight h4 {
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}

.highlight p {
  margin: 0;
  color: #666;
}

/* Blog Preview Section */
.blog-preview {
  margin-bottom: 4rem;
  padding: 3rem 0;
}

.blog-preview h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
}

.recent-posts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.recent-post {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s ease;
}

.recent-post:hover {
  transform: translateY(-3px);
}

.recent-post h3 {
  margin-bottom: 0.5rem;
}

.recent-post h3 a {
  text-decoration: none;
  color: var(--text-color);
}

.recent-post h3 a:hover {
  color: var(--primary-color);
}

.recent-post .post-meta {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.recent-post p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #666;
}

.read-more {
  color: var(--primary-color);
  font-weight: 500;
  text-decoration: none;
}

.read-more:hover {
  text-decoration: underline;
}

.view-all-posts {
  text-align: center;
  margin-top: 2rem;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-stats {
    gap: 1.5rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .about-highlights {
    grid-template-columns: 1fr;
  }
  
  .recent-posts {
    grid-template-columns: 1fr;
  }
}
</style>

{% endif %}