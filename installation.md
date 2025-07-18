---
layout: default
title: Installation
nav_order: 2
---

# Installation Guide

This template provides a flexible Jekyll theme for GitHub Pages with automatic navigation and configurable homepage layouts.

## Quick Start

### 1. Fork or Download the Template

- **Fork**: Click the "Fork" button on GitHub to create your own copy
- **Download**: Download as ZIP and extract to your local machine
- **Use as Template**: Click "Use this template" to create a new repository

### 2. Configure Your Site

Edit `_config.yml` to customize your site:

```yaml
title: Your Site Title
description: A brief description of your site
url: "https://yourusername.github.io"
baseurl: "/your-repo-name"
blog_as_home: false
```

### 3. Enable GitHub Pages

1. Go to your repository **Settings**
2. Scroll to **Pages** section
3. Under **Source**, select "Deploy from a branch"
4. Choose **main** branch and **/ (root)** folder
5. Click **Save**

Your site will be available at `https://yourusername.github.io/your-repo-name`

## Configuration Options

### Basic Settings

| Parameter | Description | Example |
|-----------|-------------|---------|
| `title` | Site title displayed in header | `"My Awesome Site"` |
| `description` | Site description for SEO | `"A blog about web development"` |
| `url` | Your GitHub Pages domain | `"https://yourusername.github.io"` |
| `baseurl` | Repository name (if not custom domain) | `"/my-site"` |

### Homepage Layout

| Parameter | Values | Description |
|-----------|--------|-------------|
| `blog_as_home` | `true`/`false` | Controls homepage layout |

**When `blog_as_home: false`** (Default):
- Homepage shows welcome content + recent blog posts
- Navigation includes "Home" link + Blog link to `/blog/`
- Traditional website structure with clear homepage

**When `blog_as_home: true`**:
- Homepage shows full blog listing
- Blog link in navigation goes to root (`/`)
- No separate "Home" link (Blog becomes home)
- Blog-first structure

### Jekyll Settings

The template includes these pre-configured Jekyll settings:

```yaml
markdown: kramdown
highlighter: rouge

plugins:
  - jekyll-feed      # RSS feed generation (/feed.xml)
  - jekyll-sitemap   # XML sitemap generation (/sitemap.xml)

exclude:
  - README.md
  - CLAUDE.md
```

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to your repository root with your domain
2. Update `url` in `_config.yml` to your custom domain
3. Set `baseurl` to `""` (empty string)
4. Configure your DNS settings to point to GitHub Pages

## Local Development

To run the site locally:

1. Install Ruby and Jekyll
2. Run `bundle install` in your repository directory
3. Run `bundle exec jekyll serve`
4. Visit `http://localhost:4000`

## Troubleshooting

### Site Not Updating
- Check GitHub Actions tab for build errors
- Ensure `_config.yml` syntax is valid YAML
- Wait a few minutes after pushing changes

### Navigation Issues
- Verify pages have `title` in front matter
- Check `nav_order` values are unique numbers
- Use `nav: false` to exclude pages from navigation
- "Home" link appears automatically when `blog_as_home: false`

### URL Problems
- Ensure `url` and `baseurl` are correctly configured
- For repository sites: `baseurl: "/repo-name"`
- For custom domains: `baseurl: ""`

### RSS Feed
- RSS feed automatically available at `/feed.xml`
- Feed link appears in site footer
- Includes all blog posts with metadata