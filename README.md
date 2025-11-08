# Global Relocate Hub 🌍

Your trusted partner for seamless international relocations between the UK, Germany, and Switzerland.

## 🚀 Vercel Deployment Guide

### Prerequisites
- Vercel account created ✅
- Git repository (GitHub, GitLab, or Bitbucket)

### Files to Upload/Deploy

**Required Files for Vercel:**
```
├── package.json ----------------------- Build configuration
├── vercel.json ----------------------- Deployment settings
├── index.html ------------------------ Main entry point
├── tailwind.config.js ---------------- Tailwind configuration
├── css/
│   ├── main.css --------------------- Generated CSS (auto-built)
│   └── tailwind.css ----------------- Source CSS
├── pages/ --------------------------- All HTML pages
├── assets/ -------------------------- Images and static files
└── public/ -------------------------- Manifest and favicon
```

### Deployment Methods

#### Method 1: GitHub Integration (Recommended)
1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial Global Relocate Hub deployment"
   git branch -M main
   git remote add origin https://github.com/yourusername/global-relocate-hub.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import from GitHub repository
   - Select your `global-relocate-hub` repo

3. **Configure Build Settings:**
   - **Framework Preset:** Other
   - **Build Command:** `npm run vercel-build`
   - **Output Directory:** `.` (root)
   - **Install Command:** `npm install`

#### Method 2: Vercel CLI (Alternative)
1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy from project directory:**
   ```bash
   vercel --prod
   ```

#### Method 3: Drag & Drop (Quick Test)
1. **Build CSS locally:**
   ```bash
   npm install
   npm run build
   ```

2. **Zip entire project folder**
3. **Drag zip to Vercel dashboard**

### Domain Configuration

**After deployment, configure your custom domain:**

1. **In Vercel Dashboard:**
   - Go to your project → Settings → Domains
   - Add custom domain: `globalrelocatehub.com`
   - Add www redirect: `www.globalrelocatehub.com`

2. **DNS Configuration (at your domain registrar):**
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   
   Type: CNAME  
   Name: www
   Value: cname.vercel-dns.com
   ```

### Subdomain Strategy

**Your Architecture:**
- **Main Site:** `globalrelocatehub.com` (Vercel)
- **Tools:** `tools.globalrelocatehub.com` (Bluehost)
- **API:** `api.globalrelocatehub.com` (Bluehost)  
- **Partners:** `partner.globalrelocatehub.com` (Bluehost)

**DNS Setup for Subdomains (at domain registrar):**
```
# Main site (Vercel)
@ CNAME cname.vercel-dns.com
www CNAME cname.vercel-dns.com

# Subdomains (Bluehost) - point to your Bluehost server IP
tools CNAME your-bluehost-server.com
api CNAME your-bluehost-server.com  
partner CNAME your-bluehost-server.com
```

### Environment Variables (if needed)
```bash
# In Vercel Dashboard → Settings → Environment Variables
NODE_ENV=production
```

### Build Process
The build automatically:
1. Runs component tagger
2. Compiles Tailwind CSS
3. Generates optimized `main.css`
4. Serves static HTML files

### Performance Optimizations
- ✅ Static file caching (1 year)
- ✅ Security headers configured
- ✅ Clean URL routing
- ✅ Optimized CSS generation

### Troubleshooting

**Build Fails:**
- Check `npm install` runs locally
- Verify `npm run build` works locally
- Check Vercel build logs

**404 Errors:**
- Verify `vercel.json` rewrites
- Check file paths in `pages/` directory

**CSS Not Loading:**
- Ensure `main.css` is generated
- Check Tailwind build process
- Verify CSS file paths

### Support
For deployment issues, check:
1. Vercel build logs
2. Browser developer console
3. Network tab for failed requests

---

**Ready for launch! 🚀**