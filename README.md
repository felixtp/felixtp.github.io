# 🚀 Modern Jekyll Template for GitHub Pages

A professional, feature-rich Jekyll template designed for GitHub Pages with automatic navigation, dark mode, search functionality, and modern design patterns.

## ✨ Features

- **🎨 Modern Design** - Clean, responsive design with dark/light mode support
- **🔍 Client-Side Search** - Instant search through all content
- **📱 Mobile-First** - Optimized for all screen sizes
- **🚀 Auto Navigation** - Intelligent navigation generation
- **📝 Blog System** - Full-featured blog with RSS feeds
- **⚡ Fast Loading** - Optimized for performance
- **♿ Accessible** - WCAG compliant with screen reader support
- **🔧 Easy Setup** - One-click deployment to GitHub Pages

## 🎯 Perfect For

- **Developers** - Portfolio sites and technical blogs
- **Businesses** - Professional company websites
- **Projects** - Documentation and showcase sites
- **Bloggers** - Personal blogs and content sites

## 🚀 Quick Start

### 1. Use This Template

Click the "Use this template" button above or:

```bash
git clone https://github.com/felixtp/pages.git
cd pages
```

### 2. Configure Your Site

Edit `_config.yml`:

```yaml
title: Your Site Name
description: Your site description
url: "https://yourusername.github.io"
baseurl: "/your-repo-name"
author: Your Name
```

### 3. Enable GitHub Pages

1. Go to **Settings** → **Pages**
2. Select **Deploy from a branch**
3. Choose **main** branch
4. Click **Save**

Your site will be live at `https://yourusername.github.io/your-repo-name`

## 📖 Documentation

- **[Installation Guide](installation.md)** - Detailed setup instructions
- **[Content Guide](content-guide.md)** - How to create pages and posts
- **[Features](features.md)** - Complete feature overview
- **[Demo Site](https://felixtp.github.io)** - See it in action

## 🛠️ Advanced Configuration

### Homepage Modes

**Traditional Mode** (default):
```yaml
blog_as_home: false
```
- Hero section with featured content
- Recent blog posts preview
- Perfect for business sites

**Blog Mode**:
```yaml
blog_as_home: true
```
- Full blog listing as homepage
- Great for personal blogs

### Enable Search

```yaml
search_enabled: true
```

### Custom Domain

1. Add `CNAME` file with your domain
2. Update `_config.yml`:
```yaml
url: "https://yourdomain.com"
baseurl: ""
```

## 🎨 Customization

### Colors & Theming

The template uses CSS variables for easy customization:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-color: #333;
  --bg-color: #f8f9fa;
}
```

### Dark Mode

Dark mode is automatically enabled and persists user preferences.

## 📱 Mobile Optimization

- Responsive design for all screen sizes
- Touch-friendly navigation
- Optimized images and performance
- Progressive Web App ready

## 🔧 Development

### Local Development

```bash
# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Visit http://localhost:4000
```

### Adding Content

**Create a page:**
```markdown
---
layout: default
title: Page Title
nav_order: 2
---

# Your Content Here
```

**Create a blog post:**
```markdown
---
layout: default
title: "Post Title"
date: 2024-07-10 10:00:00 -0000
author: Your Name
categories: [web-development, tutorials]
---

# Your Post Content
```

## 🎯 Use Cases

### Portfolio Sites
- Showcase your projects and skills
- Professional about page
- Contact form integration
- Blog for sharing knowledge

### Business Websites
- Professional landing pages
- Service descriptions
- Company blog
- Contact information

### Documentation Sites
- Project documentation
- API references
- User guides
- Knowledge bases

## 🌟 Why Choose This Template?

- **Zero Configuration** - Works out of the box
- **Professional Design** - Modern, clean aesthetics
- **SEO Optimized** - Built-in meta tags and structured data
- **Accessible** - WCAG compliant design
- **Fast & Secure** - Static site generation
- **Free Hosting** - GitHub Pages included
- **Version Control** - Git-based content management

## 🤝 Contributing

Contributions are welcome! Please feel free to:

- Report bugs
- Suggest features
- Submit pull requests
- Share your sites built with this template

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits

Built with:
- [Jekyll](https://jekyllrb.com/) - Static site generator
- [GitHub Pages](https://pages.github.com/) - Free hosting
- Modern CSS techniques and best practices

## 📞 Support

- **Documentation**: Check the [guides](installation.md) first
- **Issues**: [GitHub Issues](https://github.com/felixtp/pages/issues)
- **Discussions**: [GitHub Discussions](https://github.com/felixtp/pages/discussions)

---

⭐ **Star this repository** if you find it useful!

🔗 **Live Demo**: [https://felixtp.github.io](https://felixtp.github.io)
