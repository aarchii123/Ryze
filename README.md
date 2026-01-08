# Ryze Website Redesign

A modern, responsive redesign of the Get-Ryze.ai website built with React, TypeScript, and Vite.

## 🚀 Features

- **Modern Design**: Clean, professional UI with modern gradients and animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **Modular Architecture**: Reusable components for easy maintenance
- **TypeScript**: Type-safe code for better developer experience
- **Accessible**: Built with accessibility best practices
- **Fast Performance**: Optimized with Vite for lightning-fast builds

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header/         # Navigation header
│   ├── Hero/           # Hero section
│   ├── Features/       # Features showcase
│   ├── Testimonials/   # Customer testimonials
│   ├── Pricing/        # Pricing plans
│   ├── CTA/            # Call-to-action section
│   └── Footer/         # Site footer
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── Features.tsx    # Features page
│   └── About.tsx       # About page
├── App.tsx             # Main app component with routing
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS3** - Styling with CSS variables

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ryze-website-redesign
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## 🚢 Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Vite and configure the build settings
4. Deploy!

### Netlify

1. Push your code to GitHub
2. In Netlify, create a new site from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

## 🎨 Design Decisions

### Color Scheme
- **Primary Color**: Indigo (#6366f1) - Represents trust, professionalism, and technology
- **Secondary Color**: Green (#10b981) - Represents growth and success
- **Neutral Colors**: Gray scale for text and backgrounds

### Typography
- System font stack for optimal performance and cross-platform consistency
- Clear hierarchy with varying font sizes and weights

### Layout
- Grid-based layouts for responsive design
- Consistent spacing using CSS variables
- Mobile-first approach with progressive enhancement

### Components
- Modular component structure for reusability
- Each component is self-contained with its own styles
- Props-based configuration for flexibility

### Accessibility
- Semantic HTML elements
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast compliance
- Focus states for interactive elements

## 📱 Pages

1. **Homepage** (`/`) - Main landing page with all sections
2. **Features** (`/features`) - Detailed features page
3. **About** (`/about`) - Company information and values

## 🔧 Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #10b981;
  /* ... */
}
```

### Content
- Update component content in respective `.tsx` files
- Modify data arrays in components (features, testimonials, pricing)

## 📄 License

This project is created for the Ryze internship assignment.

## 👤 Author

Created as part of the Ryze internship application process.

---

**Note**: This is a redesign project. All content and branding are for demonstration purposes.

