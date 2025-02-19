# Neuron Website

Modern website for Neuron, providing professional audiovisual solutions for events and experiences.

## Features

- Modern and responsive design
- Smooth animations and transitions
- Interactive service cards
- Image/video gallery with lightbox
- Contact form with validation
- Dark mode support

## Tech Stack

- React + TypeScript
- Vite
- TailwindCSS
- shadcn/ui
- Lucide Icons
- Framer Motion

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/av-services.git
cd av-services
\`\`\`

2. Install dependencies:
\`\`\`bash
pnpm install
\`\`\`

3. Start the development server:
\`\`\`bash
pnpm dev
\`\`\`

The site will be available at `http://localhost:5173`

### Building for Production

To create a production build:

\`\`\`bash
pnpm build
\`\`\`

The built files will be in the `dist` directory.

## Project Structure

\`\`\`
av-services/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Experiences.tsx
│   │   │   ├── Services.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
└── package.json
\`\`\`

## Customization

### Colors and Theme

The color scheme can be customized in the `src/index.css` file. The site uses CSS variables for colors, making it easy to change the theme.

### Content

- Update the services list in `src/components/sections/Services.tsx`
- Modify the experiences gallery in `src/components/sections/Experiences.tsx`
- Update contact information in `src/components/sections/Contact.tsx`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
