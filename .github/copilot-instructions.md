# PHP Usergroup Dresden Website - AI Coding Instructions

## Project Overview
This is an Astro-based website for PHP USERGROUP DRESDEN e.V., built as version 2.0. The project uses a minimal Astro setup with TypeScript support and follows a component-based architecture.

## Architecture & Structure

### Core Layout Pattern
- **BaseLayout.astro**: Central layout component that wraps all pages
  - Imports: Header, Footer, Sidebar components
  - Language set to German (`lang="de-DE"`)
  - Fixed title: "Home | PHP USERGROUP DRESDEN e.V."
  - Organization: "PHP USERGROUP DRESDEN e.V. [VR 9725]"
  - Uses `pageTitle` prop (currently unused but available)

### File Structure Conventions
```
src/
├── components/     # Reusable Astro components
├── layouts/        # Page layout templates  
├── pages/         # File-based routing (index.astro, events.astro)
└── styles/        # Global CSS (currently empty)
```

### Current Implementation Status
- **Incomplete**: Most components (Header, Footer, events.astro) are empty stubs
- **Working**: Clean BaseLayout with proper component imports and German localization
- **Ready**: Basic page structure with index.astro using BaseLayout

## Development Workflow

### Essential Commands
```bash
npm run dev     # Development server on localhost:4321
npm run build   # Production build to ./dist/
npm run preview # Preview production build locally
```

### TypeScript Configuration
- Uses Astro's strict TypeScript config
- Type checking enabled for all files in project

## Project-Specific Patterns

### Component Import Convention
```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import Component from "../components/Component.astro";
---
```

### Page Structure Template
```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
---
<BaseLayout title="PageTitle">
    <!-- Page content here -->
</BaseLayout>
```

### External Dependencies
- No external CSS frameworks - clean minimal setup
- Uses favicon.svg with proper SVG type declaration

## Development Areas to Address
1. **Empty Components**: Header, Footer, and events page need implementation
2. **Unused Props**: BaseLayout accepts `pageTitle` prop but uses hardcoded title
3. **Styling**: Global CSS file exists but is empty

## German Localization
- Set `lang="de-DE"` for German language
- Organization name: "PHP USERGROUP DRESDEN e.V."
- VR registration: "[VR 9725]"

## When Making Changes
- Always test with `npm run dev` after component modifications
- New pages go in `src/pages/` for automatic routing
- Reusable UI elements belong in `src/components/`