# Meropi Apostolaki — Personal Portfolio

A responsive personal portfolio built with React. It presents my background, technical skills, selected projects, languages, and contact information through a clean, motion-focused interface.

## Open online

No download or installation is required:

### [Open the portfolio →](https://merapost.github.io)

## Features

- Full-screen photographic hero section
- Responsive layouts for desktop, tablet, and mobile
- Scroll-triggered text and card animations
- About, education, skills, projects, languages, and contact sections
- Optional experience and certification sections
- Accessible links, focus states, and reduced-motion support
- Centralized portfolio content for straightforward updates
- Automatic deployment to GitHub Pages

## Built with

- React 18
- JavaScript
- CSS3
- Intersection Observer API
- GitHub Actions
- GitHub Pages

## Run locally

Requirements: Node.js 20 or a compatible recent LTS release.

If the project is already available on your computer, open a terminal inside its folder and run:

```bash
npm install
npm start
```

The development server runs at [http://localhost:3000](http://localhost:3000).

To download the project from GitHub for the first time:

```bash
git clone https://github.com/MerApost/merapost.github.io.git
cd merapost.github.io
```

## Available scripts

```bash
npm start       # Start the development server
npm run build   # Create an optimized production build
npm test        # Run the test runner
```

## Project structure

```text
src/
├── Components/          # Section components and their styles
├── data/
│   └── portfolioData.js # Portfolio text, projects, links, and skills
├── App.js               # Page composition and scroll animations
├── App.css              # Shared styles and design tokens
└── index.js             # React entry point

public/
├── portfolio.jpg        # Hero and page background image
├── portfolio2.ico       # Site icon
├── index.html
└── manifest.json
```
