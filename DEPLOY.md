# GitHub Pages Deployment Guide

This guide provides step-by-step instructions for deploying the Personal Website to GitHub Pages.

## Prerequisites

- Node.js and npm installed
- Git configured with your GitHub credentials
- Access to the repository: `https://github.com/JamesHuang22/Personal_Web`

## Deployment Steps

### 1. Build the Project

First, build the React application for production:

```bash
npm run build
```

This command will:
- Create an optimized production build
- Generate static files in the `build/` directory
- Compress and optimize assets for web deployment

### 2. Deploy to GitHub Pages

Use the `gh-pages` package to deploy the built files to the `gh-pages` branch:

```bash
npx gh-pages -d build
```

This command will:
- Push the contents of the `build/` directory to the `gh-pages` branch
- Automatically trigger GitHub Pages deployment
- Make your website live at `https://jameshuang22.github.io/Personal_Web/`

### 3. Verify Deployment

1. **Wait 2-5 minutes** for GitHub Pages to process the deployment
2. **Visit your live website**: `https://jameshuang22.github.io/Personal_Web/`
3. **Test all features**:
   - Navigation between pages
   - Social media links
   - Mamba mentality YouTube link
   - Timeline functionality
   - Responsive design on mobile

## Alternative Deployment Methods

### Method 1: Manual Git Push (if gh-pages package is not available)

```bash
# Build the project
npm run build

# Add and commit changes to main branch
git add .
git commit -m "Update website with latest changes"

# Switch to gh-pages branch
git checkout gh-pages

# Copy build files to root
cp -r build/* .

# Add and commit to gh-pages
git add .
git commit -m "Deploy updated website"

# Push to GitHub
git push origin gh-pages

# Switch back to main branch
git checkout version-3.0
```

### Method 2: Using GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ version-3.0 ]
  pull_request:
    branches: [ version-3.0 ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
```

## Troubleshooting

### Common Issues

1. **Build fails with errors**
   - Check for syntax errors in your code
   - Ensure all dependencies are installed: `npm install`
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`

2. **Deployment fails**
   - Verify you have push access to the repository
   - Check if the `gh-pages` branch exists
   - Ensure GitHub Pages is enabled in repository settings

3. **Website not updating**
   - Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
   - Check GitHub Pages deployment status in repository Actions tab
   - Verify the correct branch is set as source in GitHub Pages settings

4. **Images not loading**
   - Ensure image paths are correct in the `public/` directory
   - Check that images are included in the build process
   - Verify file names match exactly (case-sensitive)

### GitHub Pages Settings

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Ensure **Source** is set to **Deploy from a branch**
5. Select **gh-pages** branch and **/ (root)** folder
6. Click **Save**

## Current Website Features

The deployed website includes:

- **Homepage**: Mountain background with personal introduction and Mamba mentality link
- **Path Page**: Professional timeline with dark theme and current position highlighting
- **Navigation**: Clean black navigation bar with professional styling
- **Social Links**: GitHub, LinkedIn, and Email links with gradient hover effects
- **Responsive Design**: Mobile-friendly layout across all pages

## Repository Structure

```
Personal_Web/
├── src/                    # Source code
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── data/              # Resume data
│   └── ...
├── public/                # Static assets
├── build/                 # Production build (generated)
├── package.json           # Dependencies and scripts
└── DEPLOY.md             # This deployment guide
```

## Quick Deploy Command

For future deployments, you can use this single command:

```bash
npm run build && npx gh-pages -d build
```

This will build and deploy your website in one step.

---

**Last Updated**: January 2025  
**Website URL**: https://jameshuang22.github.io/Personal_Web/  
**Repository**: https://github.com/JamesHuang22/Personal_Web
