# 💼 Ghouse - .NET Full Stack Developer Portfolio

A premium, highly responsive personal portfolio website built with **Angular 20+**, designed to showcase my professional journey, skills, and projects as a .NET Full Stack Developer specializing in enterprise insurance applications.

![Portfolio Preview](https://via.placeholder.com/1200x630/0a0a0a/c9ff57?text=Ghouse+Portfolio)

---

## 🚀 Features

- **🎨 Premium Dark Aesthetic:** Inspired by modern Landin/Framer templates with a sleek dark theme and lime-green accents.
- **✨ Smooth Animations:** Powered by GSAP and custom CSS keyframes for a buttery 60fps experience.
- **🖱️ Custom Interactive Cursor:** Magnetic buttons and a custom follower cursor for desktop users.
- ** Fully Responsive:** Mobile-first design ensuring flawless presentation on all devices.
- ** Angular 20+ Standalone:** Built using the latest Angular features, including Signals and Standalone Components.
- **🔍 SEO Optimized:** Dynamic meta tags, JSON-LD schema, and semantic HTML.
- ** Sections Included:** Hero, About, Skills, Projects, Experience, Services, Testimonials, and Contact.

---

## 🛠️ Technologies Used

### Core Framework
- **Angular 20+** (Standalone Components, Signals, SSR)
- **TypeScript 5.8+**
- **SCSS** (Custom design system & mixins)

### UI/UX & Animations
- **GSAP** (GreenSock Animation Platform)
- **Lenis** (Smooth scrolling)
- **CSS3 Glassmorphism & Gradients**

### Tools & Deployment
- **GitHub** (Version Control)
- **Netlify** (Hosting & CI/CD)
- **Web3Forms / Formspree** (Contact form handling)

---

## 📦 Installation & Setup

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v20.x or higher)
- **npm** (v10.x or higher)
- **Angular CLI** (v20.x or higher)

### Steps to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MDGHOUSE18/codebyghouse-portfolio.git
   cd codebyghouse-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   Navigate to `http://localhost:4200/` to view the application. The app will automatically reload if you change any source files.

---

## 🏗️ Build & Production

To generate a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/portfolio/browser` directory.

---

## 🌐 Deployment

This project is configured for easy deployment on **Netlify** or **Vercel**.

### Deploying to Netlify
1. Push your code to a GitHub repository.
2. Log in to [Netlify](https://www.netlify.com/) and click "Add new site" -> "Import an existing project".
3. Select your GitHub repository.
4. Configure the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist/portfolio/browser`
5. Click "Deploy".

*Note: Ensure `NODE_VERSION` is set to `20` in your Netlify Environment Variables.*

---

##  Project Structure

```text
src/
├── app/
│   ├── core/               # Services, Models, Constants, Guards
│   ├── features/           # Lazy-loaded route components (Home, About, Skills, etc.)
│   ├── layout/             # Header, Footer, Main Layout
│   ├── shared/             # Reusable UI components (Buttons, Cards, Cursors)
│   ├── animations/         # Route and scroll animations
│   ├── app.config.ts       # Application providers and configuration
│   └── app.routes.ts       # Routing configuration
├── assets/                 # Images, documents, and static files
├── styles/                 # Global SCSS variables, mixins, and utilities
├── environments/           # Environment-specific configurations
└── index.html              # Main HTML entry point
```

---

## 📝 Customization

### Updating Personal Information
All personal data, skills, projects, and experience are centralized in:
`src/app/core/constants/portfolio.constants.ts`

### Changing Theme Colors
Global design tokens (colors, spacing, typography) are managed in:
`src/styles/_variables.scss`

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Bangar Mahammed Ghouse**
-  Portfolio: [ghouse-dev.netlify.app](https://ghouse-dev.netlify.app)
-  LinkedIn: [mahammed-ghouse](https://www.linkedin.com/in/mahammed-ghouse-05b1a4203/)
- 🐙 GitHub: [MDGHOUSE18](https://github.com/MDGHOUSE18)
- 📧 Email: mahammedghouse@example.com

---

<p align="center">
  <i>Crafted with Angular & Passion. © 2026 Bangar Mahammed Ghouse. All rights reserved.</i>
</p>
