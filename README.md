# Tyler's Portfolio Website

A technical showcase of my work and development standards, built with the same focus on performance and type-safety I bring to projects like Lexinari.

## Tech Stack & Architecture

- **Framework:** Next.js 16 (App Router, Client-Side Static Export)
- **Language:** TypeScript
- **Styling & UI:** Tailwind CSS + shadcn/ui
- **Data Architecture:** Centralized JSON Content Schema

## Local Development & Build

Follow these steps to manage and compile the repository locally:

### Prerequisites

- Node.js (Version 20 or higher recommended)
- npm / pnpm / yarn

### Installation

1. Clone the repository and navigate to the root directory.
2. Install the necessary project dependencies:
   ```bash
   npm install
   ```

### Execution

Launch the local development environment:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) inside your browser to view the application.

### Compilation (Static Production Export)

To generate the static distribution build:

```bash
npm run build
```

This command triggers Next.js 16's static export logic, generating a production-ready assets directory named `/out` which can be served out of any static cloud storage tier or CDN bucket.

## Live Application

The production environment is continuously deployed and accessible at [tylerhand.dev](https://tylerhand.dev).

## License

This project is open-source software licensed under the terms of the [MIT License](https://github.com). Feel free to fork, modify, and reference the structural patterns.
