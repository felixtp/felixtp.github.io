---
layout: default
title: Contact
nav_order: 5
description: Get in touch with us for questions, feedback, or collaboration opportunities.
---

# Contact Us

We'd love to hear from you! Whether you have questions, feedback, or collaboration ideas, don't hesitate to reach out.

## Get in Touch

<div class="contact-methods">
    <div class="contact-method">
        <h3>📧 Email</h3>
        <p>For general inquiries and support</p>
        <a href="mailto:hello@example.com">hello@example.com</a>
    </div>
    
    <div class="contact-method">
        <h3>💬 GitHub</h3>
        <p>For technical questions and issues</p>
        <a href="https://github.com/felixtp" target="_blank" rel="noopener">@felixtp</a>
    </div>
    
    <div class="contact-method">
        <h3>📝 Feedback</h3>
        <p>Help us improve the site</p>
        <a href="#contact-form">Use the form below</a>
    </div>
</div>

## Send us a Message

<form id="contact-form" class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
    <div class="form-group">
        <label for="name">Name *</label>
        <input type="text" id="name" name="name" required>
    </div>
    
    <div class="form-group">
        <label for="email">Email *</label>
        <input type="email" id="email" name="email" required>
    </div>
    
    <div class="form-group">
        <label for="subject">Subject *</label>
        <select id="subject" name="subject" required>
            <option value="">Select a topic...</option>
            <option value="general">General Inquiry</option>
            <option value="technical">Technical Support</option>
            <option value="feedback">Feedback</option>
            <option value="collaboration">Collaboration</option>
            <option value="other">Other</option>
        </select>
    </div>
    
    <div class="form-group">
        <label for="message">Message *</label>
        <textarea id="message" name="message" rows="6" required></textarea>
    </div>
    
    <div class="form-group">
        <button type="submit">Send Message</button>
    </div>
</form>

## FAQ

### How quickly will you respond?
We typically respond within 1-2 business days. For urgent technical issues, we aim to respond within 24 hours.

### What should I include in my message?
Please be as specific as possible about your question or issue. Include relevant details like:
- What you were trying to do
- What happened instead
- Any error messages you received
- Your browser and operating system (for technical issues)

### Can I contribute to the project?
Absolutely! We welcome contributions of all kinds. Check out our [GitHub repository](https://github.com/felixtp/pages) for more information.

<style>
.contact-methods {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

.contact-method {
    background: var(--bg-color);
    padding: 1.5rem;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    text-align: center;
}

.contact-method h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.contact-method p {
    color: #666;
    margin-bottom: 1rem;
}

.contact-method a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
}

.contact-method a:hover {
    text-decoration: underline;
}

.contact-form {
    max-width: 600px;
    margin: 2rem 0;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--text-color);
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    font-size: 1rem;
    background: var(--card-bg);
    color: var(--text-color);
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
}

.form-group button {
    background: var(--primary-color);
    color: white;
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

.form-group button:hover {
    background: var(--secondary-color);
    transform: translateY(-1px);
}

.form-group button:active {
    transform: translateY(0);
}

@media (max-width: 768px) {
    .contact-methods {
        grid-template-columns: 1fr;
    }
}
</style>

<script>
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const button = this.querySelector('button');
    const originalText = button.textContent;
    
    button.textContent = 'Sending...';
    button.disabled = true;
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        alert('Thank you for your message! We\'ll get back to you soon.');
        this.reset();
        button.textContent = originalText;
        button.disabled = false;
    }, 1000);
});
</script>
