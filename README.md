# Salah Khadir — Portfolio

A modern, responsive developer portfolio built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. The site presents Salah Khadir's experience, capabilities, technical skills, architectures, services, and contact information in a polished, accessible interface.

## Live Demo

[View the portfolio](https://myportfolio-ten-lemon-61.vercel.app)

## Features

- Responsive portfolio experience for desktop, tablet, and mobile devices
- Dedicated pages for:
  - About
  - Experience
  - Capabilities
  - Architectures
  - Contact
- Reusable React components for the hero section, navigation, services, FAQ, technical skills, and contact form
- Light and dark theme support
- Language toggle and shared language context
- Smooth entrance animations powered by Framer Motion
- SEO and sharing metadata, including sitemap, robots configuration, and Open Graph image generation
- CV download from the public assets directory
- Unit/component testing with Jest and Testing Library
- End-to-end testing with Playwright
- Vercel Analytics and Speed Insights integration

## Tech Stack

- [Next.js](https://nextjs.org/) 16 with the App Router
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Framer Motion](https://motion.dev/) for animations
- [Lucide React](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/) for icons
- [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/) for tests
- [Playwright](https://playwright.dev/) for end-to-end testing
- [Vercel](https://vercel.com/) for deployment and performance monitoring

## Getting Started

### Prerequisites

- Node.js 20 or later recommended
- npm, or another compatible package manager

### Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/SalahKhadir/myportfolio.git
cd myportfolio
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The app uses Next.js Fast Refresh, so most changes appear automatically while developing.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server after building |
| `npm run lint` | Run ESLint checks |
| `npm test` | Run the Jest test suite |
| `npm run test:ci` | Run Jest in CI mode with coverage and JUnit output |
| `npm run test:e2e` | Run Playwright end-to-end tests |
| `npm run test:e2e:ui` | Open the Playwright interactive test runner |

## Project Structure

```text
.
├── app/                  # Next.js routes, layouts, metadata, and global styles
│   ├── about/            # About page
│   ├── architectures/    # Architecture-focused page
│   ├── capabilities/     # Capabilities page
│   ├── contact/          # Contact page
│   └── experience/       # Experience page
├── components/           # Reusable UI and feature components
├── __tests__/            # Unit and component tests
├── e2e/                  # Playwright end-to-end tests
├── public/               # Static assets, icons, and CV
├── resources/            # Project resources and supporting content
├── next.config.ts        # Next.js configuration
├── jest.config.ts        # Jest configuration
├── playwright.config.ts  # Playwright configuration
└── package.json          # Scripts and dependencies
```

## Testing and Quality Checks

Run the main checks locally before submitting changes:

```bash
npm run lint
npm test
npm run build
npm run test:e2e
```

For CI-oriented test output and coverage:

```bash
npm run test:ci
```

## Deployment

This project is configured for deployment on Vercel:

1. Import the repository into Vercel.
2. Keep the default Next.js build settings.
3. Deploy the `main` branch.
4. Add any environment variables required by future integrations in the Vercel project settings.

A production build can also be run locally with:

```bash
npm run build
npm run start
```

## Customization

To adapt this portfolio for your own use:

1. Update the personal content in the relevant components and route pages.
2. Replace or add static assets in `public/`.
3. Update metadata in `app/layout.tsx` and the sitemap configuration.
4. Adjust global styling in `app/globals.css`.
5. Run linting, tests, and a production build before deploying.

## Contributing

This repository is primarily a personal portfolio, but suggestions and improvements are welcome. Please open an issue to discuss a substantial change before submitting a pull request.

## License

No license has been specified for this repository. Unless a license is added, the source code should not be reused, redistributed, or modified outside the permissions granted by the repository owner.

## Contact

For professional inquiries, use the contact form on the [live portfolio](https://myportfolio-ten-lemon-61.vercel.app).
