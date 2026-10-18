# Anshik Gandhi — Personal Founder Portfolio Website

A personal portfolio website for **Anshik Gandhi**, a first-year BBA student at **JECRC University, Jaipur**, passionate about entrepreneurship, startups, business strategy, and building new ideas.

Built with a professional founder's mindset: minimalist, editorial, high-performance, and designed with **true OLED black aesthetics**, solid color discipline (zero gradients), and a signature **3D Kinetic Building-Block visual** in Three.js.

---

## ✨ Key Features & Architecture

- **Visual Identity & Design Language**:
  - **Dark Mode**: True OLED black (`#000000`), supported by charcoal surfaces (`#0A0A0A` and `#111111`) and subtle translucent morphism.
  - **Light Mode**: Crisp white (`#FFFFFF`) with soft neutral surfaces and dark typography.
  - **Zero Gradients**: Strict adherence to solid colors, thin borders, and refined shadows.
  - **Accent**: Solid electric blue (`#2563EB`) and muted silver.
  - **Typography**: Modern sans-serif (Inter) with editorial hierarchy.
- **Signature 3D Kinetic Building-Block Animation**:
  - Built with **Three.js** on a high-DPI canvas.
  - Animated cubes arrive one by one and assemble into an architectural venture structure.
  - Upper cubes gently oscillate to represent ongoing experimentation.
  - Interactive mouse parallax, raycast hover inspection (lifts and highlights individual cubes).
  - Reassemble and Pause/Float controls.
  - Automatic reduced-motion preference detection with static fallback.
- **Structured Sections**:
  - **Navbar**: Sticky slim bar with AG monogram, active section indicator, smooth scrolling, theme toggle, and mobile menu.
  - **Hero**: Two-column layout with founder headline, availability indicator, and 3D kinetic blocks.
  - **About Me**: Narrative and exactly three core cards (Business Mindset, Startup Curiosity, Continuous Learning).
  - **Areas of Interest**: 6 cards in a 3-column desktop grid with monochrome icons and focus areas.
  - **Projects & Experiments**: 3-column grid featuring realistic sample concepts, interactive detail modal with problem-solution breakdowns, and a "More projects coming soon" notice.
  - **My Journey**: Minimalist vertical timeline highlighting 2026 at JECRC University, ongoing discovery, and aspirational goals.
  - **Skills I'm Exploring**: Compact cards reflecting honest exploration without artificial percentage bars.
  - **Contact**: "Say Hello" button, copy-to-clipboard email with instant feedback, social links, and an accessible contact form with full client validation.
  - **Footer**: Dynamic year, AG monogram, navigation links, and back-to-top button.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Tooling**: Vite 8
- **Styling**: Tailwind CSS
- **3D Graphics & Motion**: Three.js
- **Icons**: Lucide React + custom SVG brand icons

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
The optimized static build will be generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ✏️ Customization & Updating Content

All personal data, links, projects, and timeline entries are centralized in a single file for easy maintenance:

📍 **[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)**

- **Update Email / Socials**: Change `PERSONAL_INFO.email`, `PERSONAL_INFO.socials.linkedin`, etc.
- **Add / Edit Projects**: Modify or expand `PROJECTS_DATA` array.
- **Update Journey Milestones**: Modify `TIMELINE_DATA`.
- **Update Skills & Interests**: Modify `SKILLS_DATA` and `INTERESTS_DATA`.

---

## 🚢 Deployment

This site can be deployed to any static host in seconds:

- **Vercel**: Run `npx vercel` or import the GitHub repository into Vercel.
- **Netlify**: Connect repository and set build command to `npm run build` with publish directory `dist`.
- **GitHub Pages**: Build with `npm run build` and deploy the `dist` folder.
