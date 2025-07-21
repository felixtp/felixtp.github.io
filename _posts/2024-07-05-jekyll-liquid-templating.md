---
layout: post
title: "Understanding Jekyll and Liquid Templating"
date: 2024-07-05 09:15:00 -0000
author: Jekyll Expert
categories: [jekyll, liquid, templating]
---

# Understanding Jekyll and Liquid Templating

Jekyll uses the Liquid templating language to process your site. Understanding Liquid is key to creating dynamic, maintainable Jekyll sites.

## What is Liquid?

Liquid is a template language created by Shopify. It's safe, customer-facing, and designed to run on any platform.

### Basic Output

You can output variables using double curly braces:

```liquid
page.title
site.name
```

## Conditional Logic

Liquid supports if statements for conditional content:

```liquid
if user
  Hello user.name!
endif
```

## Filters

Apply filters to modify output:

```liquid
"hello world" | capitalize
page.date | date: "%B %d, %Y"
```

## Loops

Iterate through collections:

```liquid
for page in site.pages
  if page.title
    <a href="page.url">page.title</a>
  endif
endfor
```

Display recent posts:

```liquid
for post in site.posts limit:5
  <h2>post.title</h2>
  <p>post.excerpt</p>
endfor
```

## Common Jekyll Use Cases

### Navigation Generation
```liquid
{% for page in site.pages %}
  {% if page.title %}
    <a href="{{ page.url }}">{{ page.title }}</a>
  {% endif %}
{% endfor %}
```

### Blog Post Listing
```liquid
{% for post in site.posts limit:5 %}
  <h2>{{ post.title }}</h2>
  <p>{{ post.excerpt }}</p>
{% endfor %}
```

### Conditional Content
```liquid
{% if page.layout == "post" %}
  <div class="post-navigation">
    <!-- navigation code -->
  </div>
{% endif %}
```

## Best Practices

1. **Keep Logic Simple** - Complex logic belongs in plugins or data files
2. **Use Includes** - Break templates into reusable components
3. **Leverage Filters** - Use built-in filters for common transformations
4. **Cache Expensive Operations** - Use `assign` to store complex calculations

## Conclusion

Liquid templating makes Jekyll incredibly flexible. Master these basics to create dynamic, maintainable static sites!