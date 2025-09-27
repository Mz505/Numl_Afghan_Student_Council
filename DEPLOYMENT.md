# 🚀 NUML Afghan Student Council - Deployment Guide

This guide provides multiple ways to deploy your website to the internet.

## 📦 Prerequisites

Make sure you have built the project first:
```bash
npm run build
```
This creates a `dist` folder with all the production files.

## 🌟 Deployment Options

### 1. Netlify (Recommended - Easiest)

**Drag & Drop Method:**
1. Visit [netlify.com](https://netlify.com)
2. Sign up for free account
3. Drag your `dist` folder to the deployment area
4. Get instant live URL (e.g., `https://numl-council.netlify.app`)

**Features:**
- ✅ Free hosting
- ✅ Custom domain support
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Form handling

### 2. Vercel

**Drag & Drop Method:**
1. Visit [vercel.com](https://vercel.com)
2. Sign up and click "Add New Project"
3. Drag your `dist` folder
4. Get instant `.vercel.app` URL

**Features:**
- ✅ Lightning fast
- ✅ Free tier
- ✅ Automatic deployments
- ✅ Edge functions

### 3. GitHub Pages

**Automatic Deployment:**
1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Deploy website"
   git push origin main
   ```

2. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"
   - Your site will be live at `https://yourusername.github.io/repository-name`

**Features:**
- ✅ Free forever
- ✅ Automatic deployments
- ✅ Custom domain support
- ✅ Version control integration

### 4. Firebase Hosting

```bash
# Install Firebase CLI (if you have admin rights)
npm install -g firebase-tools

# Initialize and deploy
firebase init hosting
firebase deploy
```

### 5. Manual Upload (Any Web Host)

Upload the contents of the `dist` folder to your web hosting provider:
- **cPanel**: Upload to `public_html` folder
- **FTP**: Upload to web root directory
- **File Manager**: Upload via hosting control panel

## 🎯 Quick Start (Recommended)

For the fastest deployment:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag `dist` folder to deploy
   - Share your live URL!

## 🔧 Troubleshooting

**Build Issues:**
- Make sure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run build`

**Deployment Issues:**
- Ensure `dist` folder exists and contains files
- Check file permissions if using manual upload
- Verify all image paths are correct

## 📱 Custom Domain

After deployment, you can add a custom domain:
- **Netlify**: Domain settings → Add custom domain
- **Vercel**: Project settings → Domains
- **GitHub Pages**: Repository settings → Pages → Custom domain

## 🌐 Environment Variables

If you need environment variables for production:
- Create `.env.production` file
- Add variables to your hosting platform
- Update build commands if necessary

---

**Your NUML Afghan Student Council website is ready to go live! 🎉**

Choose any method above and share your website with the world!