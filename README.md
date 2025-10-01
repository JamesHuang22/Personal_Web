# Personal Website - James Huang

A modern, responsive personal portfolio website built with React and deployed on GitHub Pages.

## 🌐 Live Website

Visit the live site: **[https://jameshuang22.github.io/Personal_Web/](https://jameshuang22.github.io/Personal_Web/)**

## 🚀 Tech Stack

- **Frontend**: React 18
- **Styling**: Bulma CSS Framework
- **Build Tool**: Create React App (react-scripts v5)
- **Deployment**: GitHub Pages
- **Node.js**: v24+ (with OpenSSL legacy provider support)

## 📁 Project Structure

```
Personal_Web/
├── public/
│   ├── css/
│   │   ├── bulma-timeline.min.css
│   │   └── styles.css
│   ├── images/
│   │   ├── jameshuang2025.jpg
│   │   ├── mountainview1.jpg
│   │   └── favicon/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── elements/
│   │   │   ├── Hero.js
│   │   │   ├── NavBar.js
│   │   │   ├── Timeline.js
│   │   │   ├── TimelineHeader.js
│   │   │   └── TimelineItem.js
│   │   ├── sections/
│   │   │   ├── AboutMe.js
│   │   │   └── Experience.js
│   │   └── structure/
│   │       ├── Content.js
│   │       └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── resume.json
├── package.json
└── README.md
```

## 🛠️ Development Setup

### Prerequisites

- Node.js v24+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JamesHuang22/Personal_Web.git
cd Personal_Web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## 🚀 Deployment Process

### Overview

This project uses GitHub Pages for hosting. The deployment process involves:

1. **Source Branch**: `version2.8.0` (or your feature branch)
2. **Deployment Branch**: `gh-pages` (automatically managed)
3. **Build Process**: Creates optimized production files
4. **Live Site**: Served from `gh-pages` branch

### Step-by-Step Deployment

1. **Make your changes** in the source code
2. **Commit your changes**:
```bash
git add .
git commit -m "Your commit message"
git push origin version2.8.0
```

3. **Deploy to GitHub Pages**:
```bash
npm run deploy
```

This command will:
- Run `npm run build` to create production build
- Use `gh-pages` package to push `/build` contents to `gh-pages` branch
- GitHub Pages automatically serves the new content

4. **Wait for deployment** (2-5 minutes)
5. **Visit your site**: [https://jameshuang22.github.io/Personal_Web/](https://jameshuang22.github.io/Personal_Web/)

### Deployment Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Create production build |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm test` | Run tests |

### Troubleshooting Deployment

**If deployment fails:**

1. **Check Node.js compatibility**:
   - Ensure you're using Node.js v24+
   - The project uses `NODE_OPTIONS=--openssl-legacy-provider` for compatibility

2. **Clean build**:
```bash
rm -rf build node_modules/.cache
npm run deploy
```

3. **Force deployment**:
```bash
npx gh-pages -d build -f
```

4. **Check gh-pages branch**:
```bash
git checkout gh-pages
git log --oneline -3
git push origin gh-pages
```

## 📝 Content Management

### Updating Personal Information

Edit `src/resume.json` to update:
- Personal details
- Work experience
- Skills
- Contact information
- Profile picture path

### Styling Changes

- **Main styles**: `public/css/styles.css`
- **Timeline styles**: `public/css/bulma-timeline.min.css`
- **Component styles**: Individual `.js` files

### Adding New Sections

1. Create component in `src/components/sections/`
2. Import and add to `src/components/structure/Content.js`
3. Add navigation item in `src/components/elements/NavBar.js`

## 🎨 Recent Updates (2025)

- ✅ Upgraded to React 18
- ✅ Updated to react-scripts v5
- ✅ Changed background to mountain view
- ✅ Updated profile picture to 2025 version
- ✅ Changed color scheme (blue → black)
- ✅ Removed Skills section
- ✅ Renamed "Experience" to "Path"
- ✅ Enhanced "Mamba Mentality" styling

## 🔧 Configuration

### Package.json Scripts

```json
{
  "scripts": {
    "start": "NODE_OPTIONS=--openssl-legacy-provider react-scripts start",
    "build": "NODE_OPTIONS=--openssl-legacy-provider react-scripts build",
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
  }
}
```

### GitHub Pages Settings

- **Source**: Deploy from a branch
- **Branch**: `gh-pages`
- **Folder**: `/ (root)`

## 📱 Features

- **Responsive Design**: Works on all devices
- **Modern UI**: Clean, professional layout
- **Fast Loading**: Optimized production build
- **SEO Friendly**: Proper meta tags and structure
- **Accessibility**: WCAG compliant components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**James Huang**
- Website: [https://jameshuang22.github.io/Personal_Web/](https://jameshuang22.github.io/Personal_Web/)
- GitHub: [@JamesHuang22](https://github.com/JamesHuang22)

---

*Built with ❤️ using React and deployed on GitHub Pages*
