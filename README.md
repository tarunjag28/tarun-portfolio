# Tarun Jagadish Portfolio Web App

A multi-file React portfolio built from the resume.

## Features
- Responsive single-page web app
- Separate files for content, layout, and styling
- GitHub Pages friendly build setup
- Resume-based sections: Hero, About, Experience, Projects, Education, Activities, Contact

## File structure
- `src/data/resumeData.js` - all resume content
- `src/components/` - reusable UI components
- `src/App.jsx` - page composition
- `src/styles.css` - all styling
- `vite.config.js` - Vite configuration for deployment

## Run locally
```bash
npm install
npm run dev
```

## Build for GitHub Pages
```bash
npm run build
```

Then publish the `dist` folder to GitHub Pages.

## What to edit first
Open `src/data/resumeData.js` and replace:
- `email`
- `linkedin`
- `github`
- any wording you want to personalize
