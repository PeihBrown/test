## Description
Arent Test: The healthcare application helps users track their fitness progress by monitoring achievement rates, body fat percentage, meal history, exercise records, and diaries.

## Problem
- Aim to create a simple yet feature-rich tracking app with clear charts for users to monitor their progress, along with a user-friendly interface that is intuitive and easy to navigate.
- For the development aspect, the code should be clean and maintain a clear distinction between the user interface (UI) and the logic. The project structure must adhere to best practices, ensuring that it is easy to read, maintain, and scale. Additionally, the libraries used should be straightforward, easy to integrate, and secure.

## Solution
- **Design Specifications:** Ensure all UI elements, like buttons and cards, have basic states (hover, active, disabled) for a user-friendly experience.

- **Separation of Logic and UI:** Organize UI in components and business logic in hooks (under features/components and features/hooks) for better maintainability and scalability.

- **Break Down Large UI Components:** Decompose large UI components into smaller, reusable ones (under features/components) to enhance readability and maintainability.

- **Organize Project Structure by Features:** Structure the project by features instead of file types to improve code readability and scalability.

- **Create Shared UI Components:** Develop common UI components (buttons, text elements, tables, charts) in /components to reduce development time and boost maintainability.

- **Establish a Design System:** Implement a design system with shared styles (in design-system.ts and index.css) for consistent app design and improved maintainability.

- **Optimize Images:** Use WebP format for images to enhance performance and loading times.

## 🚀 Technologies

- [React](https://reactjs.org/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Programming Language
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS Framework
- [Recharts](https://recharts.org/) - Charting Library
- [SVGR](https://react-svgr.com/) - SVG to React Component Converter

## 📁 Project Structure

```
src/
├── app/                    # Application layer
│   ├── routes/            # Application routes
│   ├── app.tsx            # Main application component
│   ├── provider.tsx       # Global providers
│   └── router.tsx         # Router configuration
├── assets/                # Static files (images, fonts)
├── components/            # Shared components
├── config/               # Global configurations
├── features/             # Feature-based modules
├── hooks/                # Shared hooks
├── lib/                  # Reusable libraries
├── stores/               # Global state stores
├── types/                # Shared types
└── utils/                # Utility functions
```

### Feature Module Structure

Each feature module under `src/features/` follows this structure:

```
feature-name/
├── assets/              # Feature-specific assets
├── components/          # Feature-specific components
├── hooks/               # Feature-specific hooks
├── types/               # Feature-specific types
└── index.ts            # Feature entry point
```

## 🛠️ Setup & Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

## 🎨 Working with SVGs

1. Add SVG files to `public/icons/` directory
2. Run SVGR command to generate React components:
```bash
npm run generate-icons
```
3. Generated components will be available in `components/icons/`

## 📦 Building for Production

```bash
npm run build
```

## 🔧 ESLint Configuration

For production applications, enable type-aware lint rules:

1. Configure `parserOptions` in your ESLint config:
```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

2. Install and configure React ESLint plugin as needed.

## 📝 License

[MIT](LICENSE)
