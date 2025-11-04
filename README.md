# MyPersonalSite

My Site

## GitHub Pages Deployment

This site is configured to be hosted on GitHub Pages. To deploy:

### 1. Configure GitHub Pages Settings

1. Go to your repository on GitHub: https://github.com/crimsonyaseen/MyPersonalSite
2. Click on **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select:
   - **Source**: Deploy from a branch
   - **Branch**: Select your main branch (e.g., `main` or `master`)
   - **Folder**: Select `/dist/public`
4. Click **Save**

### 2. Build the Site

After making changes to your code, rebuild the site:

```bash
npm install
npm run build
```

This will:
- Build the frontend assets with the correct base path (`/MyPersonalSite/`)
- Output the files to `dist/public/`

### 3. Commit and Push

Commit the built files and push to GitHub:

```bash
git add .
git commit -m "Update build"
git push
```

GitHub Pages will automatically deploy your site to: **https://crimsonyaseen.github.io/MyPersonalSite/**

### Important Notes

- The site is built with Vite and configured with `base: "/MyPersonalSite/"` in `vite.config.ts`
- The `.nojekyll` file in `dist/public/` prevents GitHub Pages from processing files with Jekyll
- The `dist/public/` folder contains the built static files and must be committed to git
- Always rebuild before committing changes to ensure the latest version is deployed
