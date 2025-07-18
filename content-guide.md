---
layout: default
title: Content Guide
nav_order: 3
---

# Content Creation Guide

Learn how to create and manage content for your Jekyll site using this template.

## Creating Static Pages

Static pages are perfect for About, Services, Contact, or any permanent content.

### 1. Create a New Page File

Create a new `.md` file in the root directory:

```
your-page-name.md
```

### 2. Add Front Matter

Every page needs front matter at the top:

```yaml
---
layout: default
title: Your Page Title
nav_order: 4
---
```

### 3. Front Matter Options

| Parameter | Required | Description | Example |
|-----------|----------|-------------|---------|
| `layout` | ✓ | Always use `default` | `default` |
| `title` | ✓ | Page title (appears in navigation) | `"About Us"` |
| `nav_order` | ✓ | Navigation menu position | `3` |
| `nav` | ✗ | Hide from navigation | `false` |

### 4. Write Your Content

After the front matter, write your content in Markdown:

```markdown
---
layout: default
title: About
nav_order: 4
---

# About Our Company

We are a **leading provider** of amazing services.

## Our Mission

To make the web a better place through great design.

- Quality first
- Customer focused
- Innovation driven
```

### 5. Navigation Control

**To show in navigation** (default):
```yaml
nav_order: 4
```

**To hide from navigation**:
```yaml
nav: false
```

**To control position**: Use `nav_order` numbers. Lower numbers appear first.

## Creating Blog Posts

Blog posts are date-based content that appears in chronological order.

### 1. File Naming Convention

Blog posts must be named with this exact format:

```
_posts/YYYY-MM-DD-post-title.md
```

Examples:
- `_posts/2024-07-10-my-first-post.md`
- `_posts/2024-12-25-holiday-announcement.md`

### 2. Blog Post Front Matter

```yaml
---
layout: default
title: "Your Post Title"
date: 2024-07-10 14:30:00 -0000
author: Your Name
categories: [web-design, tutorials]
---
```

### 3. Front Matter Explained

| Parameter | Required | Description | Example |
|-----------|----------|-------------|---------|
| `layout` | ✓ | Always use `default` | `default` |
| `title` | ✓ | Post title (use quotes) | `"How to Build Websites"` |
| `date` | ✓ | Publication date and time | `2024-07-10 14:30:00 -0000` |
| `author` | ✗ | Author name | `"John Smith"` |
| `categories` | ✗ | Post categories (array) | `[tutorials, beginner]` |

### 4. Date Format

Use this exact format for dates:
```
YYYY-MM-DD HH:MM:SS -0000
```

- `YYYY`: 4-digit year
- `MM`: 2-digit month
- `DD`: 2-digit day
- `HH:MM:SS`: 24-hour time
- `-0000`: UTC timezone

### 5. Example Blog Post

```markdown
---
layout: default
title: "Getting Started with Jekyll"
date: 2024-07-10 09:00:00 -0000
author: "Web Developer"
categories: [jekyll, tutorials, beginners]
---

# Getting Started with Jekyll

Jekyll is a fantastic static site generator that makes creating websites easy.

## What You'll Learn

In this tutorial, we'll cover:
- Setting up Jekyll
- Creating your first post
- Customizing your site

## Installation

First, install Jekyll...
```

## Content Organization

### Navigation Order

Plan your navigation structure based on your homepage mode:

**Traditional Mode** (`blog_as_home: false`):
1. **Home** - Automatically generated link
2. **Blog** (`nav_order: 2`) - Separate blog page
3. **Installation** (`nav_order: 3`) - Setup guide
4. **Content Guide** (`nav_order: 4`) - This page
5. **Other pages** (`nav_order: 5+`) - Additional content

**Blog Mode** (`blog_as_home: true`):
1. **Blog** - Becomes homepage (no separate link)
2. **Installation** (`nav_order: 2`) - Setup guide
3. **Content Guide** (`nav_order: 3`) - This page
4. **Other pages** (`nav_order: 4+`) - Additional content

### Categories and Organization

Use categories to organize blog posts:

```yaml
categories: [tutorials, web-design, beginner]
```

Common category ideas:
- `tutorials`, `guides`, `how-to`
- `announcements`, `news`, `updates`
- `reviews`, `tips`, `resources`
- `beginner`, `intermediate`, `advanced`

## Content Best Practices

### Writing Tips

1. **Use descriptive titles** - Both for SEO and user clarity
2. **Write clear headings** - Use `#`, `##`, `###` hierarchy
3. **Include excerpts** - First paragraph becomes automatic excerpt
4. **Add author info** - Helps build authority and trust

### Markdown Features

This template supports standard Markdown:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*
`Code snippets`

- Bullet lists
- Second item

1. Numbered lists
2. Second item

[Link text](https://example.com)

> Blockquotes for important notes
```

### Images

Add images to your content:

```markdown
![Alt text](/path/to/image.jpg)
```

Store images in an `assets` or `images` folder in your repository.

## Blog vs Homepage Mode

### Traditional Mode (`blog_as_home: false`)

- Homepage shows welcome content + recent 3 posts
- "Home" link automatically appears in navigation
- Blog page at `/blog/` shows all posts
- Good for business sites with mixed content

### Blog Mode (`blog_as_home: true`)

- Homepage shows full blog listing
- Blog navigation link points to homepage
- No separate "Home" link (Blog becomes home)
- Good for personal blogs or news sites

### RSS Feed Integration

Both modes include automatic RSS feed generation:
- Feed available at `/feed.xml`
- RSS link appears in site footer
- Includes all blog posts with full metadata
- Compatible with feed readers and aggregators

Choose the mode that best fits your content strategy.