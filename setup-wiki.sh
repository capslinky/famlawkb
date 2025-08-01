#!/bin/bash

# Arizona Family Law Wiki Setup Script
# This script helps set up your wiki for publishing

echo "Arizona Family Law Wiki Setup"
echo "============================"

# Function to display menu
show_menu() {
    echo ""
    echo "Choose your publishing platform:"
    echo "1) Obsidian Publish (Paid, easiest)"
    echo "2) MkDocs Material (Free, GitHub Pages)"
    echo "3) Quartz (Free, beautiful design)"
    echo "4) Digital Garden (Free, Netlify)"
    echo "5) Exit"
    echo ""
}

# MkDocs setup
setup_mkdocs() {
    echo "Setting up MkDocs Material..."
    
    # Check if Python is installed
    if ! command -v python3 &> /dev/null; then
        echo "Python 3 is required. Please install Python first."
        return
    fi
    
    # Install MkDocs and theme
    pip install mkdocs-material
    pip install mkdocs-minify-plugin
    pip install mkdocs-git-revision-date-localized-plugin
    
    echo "Creating docs directory..."
    mkdir -p docs
    
    # Copy all markdown files to docs directory
    cp *.md docs/
    
    # Create GitHub workflow
    mkdir -p .github/workflows
    cat > .github/workflows/mkdocs.yml << 'EOF'
name: Deploy MkDocs
on:
  push:
    branches: [main]
permissions:
  contents: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-python@v4
        with:
          python-version: 3.x
      - run: pip install mkdocs-material
      - run: mkdocs gh-deploy --force
EOF
    
    echo "MkDocs setup complete!"
    echo "Next steps:"
    echo "1. Run 'mkdocs serve' to preview locally"
    echo "2. Push to GitHub to auto-deploy"
    echo "3. Enable GitHub Pages in repository settings"
}

# Quartz setup
setup_quartz() {
    echo "Setting up Quartz..."
    
    # Check if Node.js is installed
    if ! command -v node &> /dev/null; then
        echo "Node.js is required. Please install Node.js first."
        return
    fi
    
    # Clone Quartz
    git clone https://github.com/jackyzha0/quartz.git .quartz
    cd .quartz
    npm install
    
    # Create content directory and copy files
    mkdir -p content
    cp ../*.md content/
    
    # Create config
    cat > data/config.yaml << 'EOF'
name: Arizona Family Law Wiki
description: Comprehensive guide to family law in Arizona
baseURL: https://azfamilylaw.wiki
lang: en-US
theme:
  typography:
    header: Lexend
    body: Source Sans Pro
    code: JetBrains Mono
  colors:
    lightMode:
      light: '#faf8f8'
      lightgray: '#e5e5e5'
      gray: '#b8b8b8'
      darkgray: '#4e4e4e'
      dark: '#2b2b2b'
      secondary: '#284b63'
      tertiary: '#84a59d'
      highlight: 'rgba(143, 159, 169, 0.15)'
    darkMode:
      light: '#161618'
      lightgray: '#393639'
      gray: '#646464'
      darkgray: '#d4d4d4'
      dark: '#ebebec'
      secondary: '#7b97aa'
      tertiary: '#84a59d'
      highlight: 'rgba(143, 159, 169, 0.15)'
EOF
    
    echo "Quartz setup complete!"
    echo "Next steps:"
    echo "1. Run 'npx quartz build --serve' to preview"
    echo "2. Deploy to Netlify or Vercel"
}

# Digital Garden setup
setup_digital_garden() {
    echo "Setting up Digital Garden..."
    echo ""
    echo "1. Install the Digital Garden plugin in Obsidian"
    echo "2. Go to: https://github.com/oleeskild/obsidian-digital-garden"
    echo "3. Follow the setup instructions"
    echo "4. Create a Netlify account"
    echo "5. Configure the plugin with your Netlify site"
    echo ""
    echo "The plugin will handle all the publishing for you!"
}

# Main menu loop
while true; do
    show_menu
    read -p "Enter your choice: " choice
    
    case $choice in
        1)
            echo ""
            echo "Obsidian Publish Setup:"
            echo "1. Open Obsidian"
            echo "2. Go to Settings > Core Plugins > Publish"
            echo "3. Purchase subscription ($8/month)"
            echo "4. Select this vault"
            echo "5. Choose files to publish"
            echo "6. Configure custom domain"
            ;;
        2)
            setup_mkdocs
            ;;
        3)
            setup_quartz
            ;;
        4)
            setup_digital_garden
            ;;
        5)
            echo "Exiting..."
            exit 0
            ;;
        *)
            echo "Invalid option. Please try again."
            ;;
    esac
    
    echo ""
    read -p "Press Enter to continue..."
done