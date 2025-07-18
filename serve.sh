#!/bin/bash
echo "🌐 Starting Jekyll development server..."
echo "📍 Blog will be available at: http://localhost:4000"
echo "🔄 Auto-reload enabled - changes will be reflected automatically"
echo "🛑 Press Ctrl+C to stop the server"
echo ""
bundle exec jekyll serve --livereload --incremental
