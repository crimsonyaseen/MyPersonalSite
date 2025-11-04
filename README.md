# MyPersonalSite

My Site

## GitHub Pages Deployment

This site is configured to be hosted on GitHub Pages using GitHub Actions for automated deployment.

### Initial Setup (One-time configuration)

1. Go to your repository on GitHub: https://github.com/crimsonyaseen/MyPersonalSite
2. Click on **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select:
   - **Source**: GitHub Actions
4. That's it! No need to select a branch or folder.

### Automatic Deployment

The site automatically deploys to GitHub Pages whenever you push to the `main` branch. The deployment process:

1. Installs dependencies (`npm ci`)
2. Builds the site (`npm run build`)
3. Deploys the `dist/public/` folder to GitHub Pages

**Your site will be available at:** **https://crimsonyaseen.github.io/MyPersonalSite/**

You can monitor deployment progress and check for any errors in the **Actions** tab of your repository. Each push will show a new workflow run with detailed logs.

### Making Changes

After making changes to your code:

```bash
git add .
git commit -m "Your commit message"
git push
```

GitHub Actions will automatically build and deploy your changes. You can monitor the deployment progress in the **Actions** tab of your repository.

### Manual Deployment

You can also trigger a manual deployment:

1. Go to the **Actions** tab in your repository
2. Click on **Deploy to GitHub Pages** workflow
3. Click **Run workflow**
4. Select the branch and click **Run workflow**

### Local Development

To run the site locally:

```bash
npm install
npm run dev
```

To build locally:

```bash
npm run build
```

### Important Notes

- The site is built with Vite and configured with `base: "/MyPersonalSite/"` in `vite.config.ts`
- The `dist/` folder is git-ignored and built automatically by GitHub Actions
- The GitHub Actions workflow is defined in `.github/workflows/deploy.yml`
