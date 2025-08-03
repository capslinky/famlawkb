# Deploying to Vercel with Password Protection

This guide will help you deploy your Arizona Family Law Knowledge Base to Vercel with password protection.

## Prerequisites

1. A Vercel account (free at vercel.com)
2. Git installed on your computer
3. Optional: Vercel CLI (`npm i -g vercel`)

## Setup Instructions

### Step 1: Prepare Your Repository

1. Initialize git repository (if not already done):
```bash
cd "/Users/anthonyparadise/Family Law Knowledge Base"
git init
git add .
git commit -m "Initial commit"
```

2. Create a GitHub/GitLab/Bitbucket repository (private recommended)
3. Push your code:
```bash
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

### Step 2: Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your git repository
4. Configure build settings:
   - Framework Preset: Other
   - Build Command: `pip install mkdocs-material && mkdocs build`
   - Output Directory: `site`
   - Install Command: `pip install mkdocs-material`
5. Add environment variable:
   - Name: `SITE_PASSWORD`
   - Value: Your desired password (replace the default)
6. Click "Deploy"

#### Option B: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and use these settings:
   - Set up and deploy: Yes
   - Which scope: Your account
   - Link to existing project: No
   - Project name: arizona-family-law-kb (or your choice)
   - Directory: ./
   - Build Command: `pip install mkdocs-material && mkdocs build`
   - Output Directory: `site`
   - Development Command: (leave blank)

4. Set environment variable:
```bash
vercel env add SITE_PASSWORD
```

### Step 3: Access Your Site

1. Your site will be available at: `https://your-project-name.vercel.app`
2. When you visit, you'll be prompted for credentials:
   - Username: `admin`
   - Password: The password you set in `SITE_PASSWORD` (default: `AzFamilyLaw2024!`)

## Security Notes

1. **Change the default password** by setting the `SITE_PASSWORD` environment variable in Vercel
2. The site uses HTTP Basic Authentication
3. All traffic is encrypted with HTTPS
4. Consider using a strong, unique password

## Customizing Authentication

To change the username or authentication method, edit `api/auth.js`:

```javascript
const validUsername = 'admin'; // Change this
const validPassword = process.env.SITE_PASSWORD || 'AzFamilyLaw2024!';
```

## Updating Content

1. Make changes to your Markdown files
2. Commit and push to your repository:
```bash
git add .
git commit -m "Update content"
git push
```
3. Vercel will automatically rebuild and deploy

## Custom Domain Setup for azfamilylaw.wiki

### In Vercel Dashboard:

1. Go to your project settings in Vercel
2. Navigate to "Domains" section
3. Add `azfamilylaw.wiki` as your custom domain
4. Also add `www.azfamilylaw.wiki` if you want www support

### DNS Configuration:

Configure your DNS provider with these records:

**For apex domain (azfamilylaw.wiki):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain (optional):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Alternative (if your DNS provider supports ALIAS/ANAME):**
```
Type: ALIAS (or ANAME)
Name: @
Value: cname.vercel-dns.com
```

### SSL Certificate:

Vercel will automatically provision an SSL certificate once DNS propagates (usually within minutes).

### Verify Domain:

1. Wait for DNS propagation (5-30 minutes typically)
2. Visit https://azfamilylaw.wiki
3. You should see the authentication prompt
4. Enter credentials to access your private wiki

## Troubleshooting

### Build Fails
- Check Vercel build logs
- Ensure Python is available (Vercel provides it)
- Verify mkdocs.yml is properly configured

### Authentication Not Working
- Check environment variable is set correctly
- Clear browser cache/cookies
- Try incognito/private browsing mode

### 404 Errors
- Verify site built successfully
- Check file paths in mkdocs.yml
- Ensure outputDirectory is set to "site"

## Local Testing

Before deploying, test locally:

```bash
# Install dependencies
pip install mkdocs-material

# Build site
mkdocs build

# Serve locally
mkdocs serve
```

Visit http://localhost:8000 to preview (note: no auth locally)

## Support

For issues with:
- MkDocs: Check mkdocs-material documentation
- Vercel: Visit vercel.com/docs
- This setup: Review api/auth.js and vercel.json