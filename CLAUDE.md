# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a GitHub Pages site built with Jekyll that demonstrates automatic navigation generation and configurable home page layouts. The site can function as either a traditional homepage with recent blog posts or as a blog-first site where the full blog listing becomes the homepage.

## Key Configuration

### Blog vs Homepage Toggle
The site behavior is controlled by the `blog_as_home` boolean in `_config.yml`:
- `blog_as_home: false` - Traditional homepage with recent blog posts section
- `blog_as_home: true` - Full blog listing becomes homepage, `/blog/` route hidden from navigation

### URL Configuration
- `url`: Base domain (e.g., "https://massyn.github.io")
- `baseurl`: Repository path (e.g., "/pages")

## Architecture

### Navigation System
Automatic navigation generation using Liquid templating in `_layouts/default.html`:
- Scans all pages with `title` in front matter
- Excludes pages with `nav: false`
- Sorts by `nav_order` parameter
- Conditionally shows/hides blog based on `blog_as_home` setting
- Automatically includes "Home" link when `blog_as_home: false`
- Smart routing: Blog link points to root when `blog_as_home: true`

### Layout Structure
- Single layout file: `_layouts/default.html` with embedded CSS
- Responsive design with gradient header (#667eea to #764ba2)
- Container-based layout with card-style content sections

### Blog System
- Posts in `_posts/` directory following Jekyll convention: `YYYY-MM-DD-title.md`
- Blog index at `/blog/index.md` with full post listings
- Homepage integration shows recent 3 posts when `blog_as_home: false`
- Automatic excerpt generation and metadata display
- RSS feed generation via `jekyll-feed` plugin (`/feed.xml`)
- RSS link in footer with custom styling

### Content Pages
All content pages use consistent front matter:
```yaml
---
layout: default
title: Page Title
nav_order: number
---
```

## GitHub Pages Deployment

Site is configured for GitHub Pages with:
- Jekyll processing enabled
- `jekyll-feed` and `jekyll-sitemap` plugins
- Exclusion of README.md and CLAUDE.md from build
- Custom domain support via url/baseurl configuration

## Development Workflow

When adding new pages:
1. Create `.md` file with proper front matter
2. Set `nav_order` to control menu position
3. Use `nav: false` to exclude from navigation
4. Follow existing content structure and styling

When adding blog posts:
1. Create file in `_posts/` with format: `YYYY-MM-DD-title.md`
2. Include front matter with layout, title, date, author, categories
3. Posts automatically appear in blog listings and navigation
