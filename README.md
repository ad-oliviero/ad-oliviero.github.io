# Adriano Oliviero - Portfolio Website

A modern, dark-themed portfolio website built with React, Vite, and Aceternity UI components.

## 🚀 Features

- **Modern Design**: Dark theme with smooth animations and modern UI components
- **Internationalization**: Support for English and Italian languages
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Built with Vite for fast loading and optimized bundle sizes
- **GitHub Pages**: Automatically deploys via GitHub Actions

## 🛠️ Technology Stack

- **Frontend**: React 19, JavaScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Internationalization**: React i18next
- **Deployment**: GitHub Pages

## 📂 Project Structure

```
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navigation.jsx
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── SkillsSection.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── ExperienceSection.jsx
│   │   │   └── ContactSection.jsx
│   │   └── ui/
│   │       ├── background-gradient.jsx
│   │       ├── card.jsx
│   │       └── text-effects.jsx
│   ├── i18n/
│   │   └── index.js
│   ├── utils/
│   │   └── index.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   ├── bfli/              # Preserved WebAssembly demo
│   ├── privacy-policy/    # Preserved privacy policies
│   └── icons/             # Favicon and icons
└── dist/                  # Build output
```

## 🎨 Sections

### Hero Section
- Name and title with gradient text effects
- Brief introduction with calculated age
- Call-to-action buttons
- Social media links

### Skills Section
- Programming languages (C, Python, C++, Rust, JavaScript, BrainFuck)
- Technologies & tools (React, WebAssembly, Git, Linux, Node.js, Vite)
- Areas of interest (System Programming, Compilers, Graphics Programming)

### Projects Section
- **Featured Project**: Brainfuck Live Interpreter with WebAssembly
- Unit Converter mobile app
- Simple Raycasting engine
- Finance Tracker with Google integration
- Links to live demos, source code, and privacy policies

### Experience Section
- Education: B.Sc. Computer Engineering at Federico II
- Work: Software Developer at UniNa Corse
- Future Plans: M.Sc. Computer Engineering, Apple Developer Academy

### Contact Section
- Email, GitHub, and website links
- Copy-to-clipboard functionality
- Professional contact information

## 🌐 Preserved Assets

The following assets from the original website have been preserved:

- **Brainfuck Live Interpreter** (`/bfli/`): WebAssembly-powered BrainFuck interpreter
- **Privacy Policies** (`/privacy-policy/`): Privacy policies for mobile apps
- **Icons** (`/icons/`): Favicon and website icons

## 🚀 Development

### Prerequisites
- Node.js 18+
- npm

### Setup
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🌍 Internationalization

The website supports both English and Italian languages. Users can switch between languages using the language toggle in the navigation bar.

## 📱 Responsive Design

The website follows a mobile-first approach and is fully responsive across:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)

## 🎭 Animations & Effects

- Smooth page transitions with Framer Motion
- Text generation effects
- Hover animations on cards and buttons
- Background gradient animations
- Scroll-triggered animations

## 📦 Deployment

The website automatically deploys to GitHub Pages via GitHub Actions when changes are pushed to the main branch.

## 📄 License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.

## 👨‍💻 Author

**Adriano Oliviero**
- Email: adriano.oliviero@studenti.unina.it
- GitHub: [@ad-oliviero](https://github.com/ad-oliviero)
- Website: [ad-oliviero.github.io](https://ad-oliviero.github.io)