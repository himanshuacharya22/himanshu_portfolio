# Deploy to GitHub Pages

This guide will help you deploy your portfolio website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Your project uploaded to a GitHub repository

## Step 1: Create GitHub Repository

1. Go to GitHub and create a new repository
2. Name it `ProfessionalPortfolio` (or any name you prefer)
3. Make it public (required for free GitHub Pages)
4. Upload your project files to this repository

## Step 2: Configure GitHub Pages

1. Go to your repository settings
2. Scroll down to "Pages" section
3. Under "Source", select "GitHub Actions"
4. The workflow file is already included in your project

## Step 3: Build and Deploy

### Option A: Automatic Deployment (Recommended)
Once you push your code to the main branch, GitHub Actions will automatically build and deploy your site.

### Option B: Manual Build
If you want to build locally and deploy manually:

```bash
# Install dependencies
npm install

# Build the static site
node build-static.js

# The built files will be in ./dist/public/
```

## Step 4: Access Your Website

After deployment, your website will be available at:
`https://[your-username].github.io/[repository-name]/`

For example: `https://himanshuracharya.github.io/ProfessionalPortfolio/`

## Important Notes

1. **Root index.html**: The `index.html` file in the root directory is required for GitHub Pages
2. **GitHub Actions**: The `.github/workflows/deploy.yml` file handles automatic deployment
3. **Build script**: The `build-static.js` file creates a static build optimized for GitHub Pages
4. **SPA Routing**: The build script creates a `404.html` file for single-page application routing

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to your repository root with your domain name
2. Configure DNS settings with your domain provider
3. Update the GitHub Pages settings to use your custom domain

## Troubleshooting

- **404 Error**: Make sure your repository is public and GitHub Pages is enabled
- **Build Fails**: Check the Actions tab in your repository for build logs
- **Routing Issues**: The 404.html file handles client-side routing for React apps

## Files Created for GitHub Pages

- `index.html` - Entry point for GitHub Pages
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `build-static.js` - Static build script
- `deploy-to-github-pages.md` - This deployment guide