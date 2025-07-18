#!/bin/bash

# Modern Blog Setup Script
# This script helps set up the development environment for the blog

echo "🚀 Setting up Modern Blog Development Environment..."

# Check if Ruby is installed
if ! command -v ruby &> /dev/null; then
    echo "❌ Ruby is not installed. Please install Ruby first."
    echo "Visit: https://www.ruby-lang.org/en/downloads/"
    exit 1
fi

# Check if Bundler is installed
if ! command -v bundle &> /dev/null; then
    echo "📦 Installing Bundler..."
    gem install bundler
fi

# Create Gemfile if it doesn't exist
if [ ! -f "Gemfile" ]; then
    echo "📄 Creating Gemfile..."
    cat > Gemfile << EOF
source 'https://rubygems.org'

gem 'jekyll', '~> 4.3.0'
gem 'jekyll-feed', '~> 0.12'
gem 'jekyll-sitemap', '~> 1.4'
gem 'jekyll-paginate', '~> 1.1'
gem 'jekyll-seo-tag', '~> 2.8'
gem 'minima', '~> 2.5'

group :jekyll_plugins do
  gem 'jekyll-feed'
  gem 'jekyll-sitemap'
  gem 'jekyll-paginate'
  gem 'jekyll-seo-tag'
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
EOF
fi

# Install dependencies
echo "📦 Installing dependencies..."
bundle install

# Create development server script
echo "📝 Creating development server script..."
cat > serve.sh << 'EOF'
#!/bin/bash
echo "🌐 Starting Jekyll development server..."
echo "📍 Blog will be available at: http://localhost:4000"
echo "🔄 Auto-reload enabled - changes will be reflected automatically"
echo "🛑 Press Ctrl+C to stop the server"
echo ""
bundle exec jekyll serve --livereload --incremental
EOF
chmod +x serve.sh

# Create build script
echo "📝 Creating build script..."
cat > build.sh << 'EOF'
#!/bin/bash
echo "🏗️ Building Jekyll site..."
bundle exec jekyll build
echo "✅ Build complete! Check _site directory."
EOF
chmod +x build.sh

# Create cleanup script
echo "📝 Creating cleanup script..."
cat > clean.sh << 'EOF'
#!/bin/bash
echo "🧹 Cleaning Jekyll site..."
bundle exec jekyll clean
echo "✅ Cleanup complete!"
EOF
chmod +x clean.sh

echo ""
echo "✅ Setup complete! Your modern blog is ready for development."
echo ""
echo "🎉 Next steps:"
echo "   1. Run './serve.sh' to start the development server"
echo "   2. Visit http://localhost:4000 to see your blog"
echo "   3. Edit files and see changes automatically"
echo ""
echo "📚 Available commands:"
echo "   ./serve.sh  - Start development server"
echo "   ./build.sh  - Build the site"
echo "   ./clean.sh  - Clean generated files"
echo ""
echo "🔧 Development workflow:"
echo "   - Edit _config.yml and restart server to see changes"
echo "   - Add new posts to _posts/ directory"
echo "   - Customize styles in assets/css/"
echo "   - Add functionality in assets/js/"
echo ""
echo "Happy blogging! 🚀"
