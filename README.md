# Enrines Web

![Project Logo](public/logo.png)

[![Astro Badge](https://img.shields.io/badge/Built%20with-Astro-0C1222?style=for-the-badge&logo=astro)](https://astro.build)
[![TypeScript Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[English](README.md) | [Español](README.es.md)

## Description
Enrines Web is a modern web application built with Astro.js, focusing on delivering high-performance web experiences. The project is designed to provide a fast, efficient, and user-friendly interface while maintaining optimal performance and SEO capabilities.

## Purpose
This web application serves as a platform for creating and delivering content-driven websites with excellent performance metrics. It leverages the power of Astro.js to provide static site generation capabilities while maintaining a dynamic user experience.

## 📋 Table of Contents
- [Quick Start](#quick-start)
- [Installation Guide](#installation-guide)
- [Technologies Used](#technologies-used)
- [Usage Instructions](#usage-instructions)
- [Feature List](#feature-list)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Performance](#performance)
- [Testing](#testing)
- [Deployment](#deployment)
- [How to Contribute](#how-to-contribute)
- [Troubleshooting](#troubleshooting)
- [Creator](#creator)
- [License](#license)

## ⚡ Quick Start
```bash
git clone https://github.com/your-username/enrines-web.git
cd enrines-web
npm install
npm run dev
```

## Installation Guide

### Prerequisites
- Node.js (16.x or higher)
- npm (Node Package Manager)
- Git
- A code editor (VS Code recommended)
- Terminal/Command Prompt

### Step by Step Installation
1. Clone the repository
```bash
git clone https://github.com/your-username/enrines-web.git
```

2. Navigate to the project directory
```bash
cd enrines-web
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:4321`

## 🛠️ Technologies Used
- **Frontend Framework:**
  - Astro.js - Main web framework
  - TypeScript - Programming language
  - React (Optional) - For interactive components
  
- **Development Tools:**
  - Node.js - Runtime environment
  - npm - Package manager
  - Git - Version control
  
- **Styling:**
  - HTML5/CSS3 - Frontend structure and styling
  - Tailwind CSS (Optional) - Utility-first CSS framework
  
- **Testing:**
  - Jest - Unit testing
  - Cypress - E2E testing

## Usage Instructions
### Development Mode
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production
```bash
npm run preview
```

### Running Tests
```bash
npm run test        # Run unit tests
npm run test:e2e    # Run end-to-end tests
```

## ✨ Feature List
- Fast page loading and navigation
- SEO-friendly structure
- Component-based architecture
- Static site generation
- TypeScript integration
- Modern and responsive design
- Easy content management
- Built-in optimization features
- Cross-browser compatibility
- Mobile-first approach
- Accessibility compliance
- Performance optimization
- Development hot-reloading

## 📁 Project Structure
```
enrines-web/
├── public/              # Static assets
│   ├── images/
│   └── fonts/
├── src/
│   ├── components/      # Reusable UI components
│   ├── layouts/         # Page layouts
│   ├── pages/          # Application pages
│   ├── styles/         # Global styles
│   └── utils/          # Utility functions
├── tests/              # Test files
├── astro.config.mjs    # Astro configuration
├── tailwind.config.js  # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## ⚙️ Configuration
### Environment Variables
Create a `.env` file in the root directory:
```env
PUBLIC_API_URL=your_api_url
NODE_ENV=development
```

### Astro Configuration
Modify `astro.config.mjs` for custom settings:
```javascript
export default defineConfig({
  // Your custom configuration
});
```

## 📈 Performance
- Lighthouse Score: 90+ on all metrics
- First Contentful Paint (FCP): < 1.5s
- Time to Interactive (TTI): < 3.8s
- Core Web Vitals compliant

## 🚀 Deployment
1. Build your project:
```bash
npm run build
```

2. Deploy to your preferred platform:
- Vercel
- Netlify
- GitHub Pages
- Custom server

## How to Contribute
We welcome contributions from the community! Here's how you can help:

1. Fork the repository
2. Create a new branch for your feature
```bash
git checkout -b feature/YourFeatureName
```
3. Make your changes
4. Commit your changes (following [Conventional Commits](https://www.conventionalcommits.org/))
```bash
git commit -m "feat: add new feature"
```
5. Push to your branch
```bash
git push origin feature/YourFeatureName
```
6. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Update documentation as needed
- Add tests for new features
- Ensure all tests pass before submitting PR

## 🔧 Troubleshooting
Common issues and solutions:

1. **Installation Issues**
   ```bash
   npm cache clean --force
   rm -rf node_modules
   npm install
   ```

2. **Build Errors**
   - Ensure Node.js version is compatible
   - Check for missing dependencies
   - Verify configuration files

## Creator
**Esteban Villada**
- Email: villadaesteban064@gmail.com
- GitHub: https://github.com/Evillada
- LinkedIn: https://www.linkedin.com/in/esteban-villada-a81910239/

## Support
If you find this project helpful, please consider:
- Giving it a ⭐ on GitHub
- Sharing it with others
- Contributing to its improvement

## 📄 License
This project is open source and available under the MIT License.

## Acknowledgments
- Astro.js team for the amazing framework
- All contributors who have helped improve this project
- The open-source community for their invaluable resources
