# LitElement Website

A prototype website built with LitElement, TypeScript, and Vaadin Router.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm start
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

## Deployment

This site is configured to deploy to GitHub Pages automatically when pushing to the main branch.

To deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

The GitHub Action will automatically build and deploy the site to GitHub Pages.

## Configuration

1. Update the `<base>` tag in `index.html` with your repository name
2. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Select the gh-pages branch as the source
   - Save the changes

## Note

Make sure to update the repository name in the `<base>` tag in index.html to match your GitHub repository name.