# Little Learners Academy

Ce projet est le site web de l'académie, développé avec **Next.js** et **Tailwind CSS**.

## Installation

```bash
npm install
npm run dev
```

## Structure
- `/src/app` : Les pages du site.
- `/src/components` : Les éléments réutilisables (Navbar, Footer, sections).
- `next.config.ts` : Configuration Next.js (domaines d'images autorisés).

## Design
Le site utilise un style **Neo-brutaliste** :
- Bordures : `border-2 border-[#1A1A1A]`
- Ombres : `shadow-[6px_6px_0px_#1A1A1A]`
- Couleurs : Beige (`#FFF5F0`) et Orange (`#FFB085`).

## Formulaire
Le formulaire de contact utilise **Web3Forms**. La clé d'accès se trouve directement dans le composant `StudentForm.tsx`.
