# petomis.com

Giuseppe Tomis’s personal portfolio, built with Next.js, React, TypeScript, and Tailwind CSS.
Features a responsive project grid, work experience details, and an animated terminal interface.
Available in English and Italian, with a Formspree contact form and links to professional profiles.

## Features

- **Introduction and background:** a hero with an animated terminal, a short professional introduction, and an About section with summary statistics.
- **Selected work:** a responsive grid of project cards with descriptions, technology tags, collaborators, and website or GitHub links where available. The current selection includes Binderly, Pienissimo, Metch, and Anubi Digital.
- **Work experience details:** employment cards open a modal with the role, period, responsibilities, and technology stack. The dialog supports keyboard navigation, Escape to close, and focus restoration.
- **English and Italian:** translated page content and project descriptions, a language switch, localized routes, and a language preference saved in the browser.
- **Contact:** a Formspree form with name, email, and message validation, a spam honeypot, and submission feedback, alongside email, GitHub, and LinkedIn links.
- **Visual design:** a dark interface with glass effects, blue accents, a canvas particle background, animated terminal typing, text effects, and scroll reveals. The terminal, particle field, and scrambled text account for reduced-motion preferences.
- **Search and sharing metadata:** localized titles and descriptions, canonical and alternate language links, Open Graph and Twitter cards, and Person/WebSite structured data.

The homepage renders Hero, About, Projects, and Contact sections. Certification components and placeholder data exist in the repository but are not currently rendered on the homepage.

## Stack

- Next.js (Pages Router), React, and TypeScript
- Tailwind CSS
- i18next and react-i18next for translations
- Formspree for contact form submissions

## Development

```bash
yarn install
yarn dev
```

Available checks: `yarn type-check`, `yarn lint`, `yarn test`, and `yarn ts-prune`. `yarn ci` runs them in sequence.

For production, use `yarn build` followed by `yarn start`.

Browser regression tests for the project details dialog run with
`yarn test:browser` after a production build. Install the test browser once with
`yarn playwright install chromium`. The tests start their own server on port 3100
and cover keyboard focus, background isolation, dismissal and scroll restoration
at desktop and mobile viewport sizes.

## Content and configuration

- `src/containers/home/index.tsx`: homepage sections and their order.
- `src/data/projects.tsx`: projects, technologies, collaborators, and translation keys.
- `src/data/about.ts`: About section statistics.
- `public/locales/en-US/` and `public/locales/it-IT/`: translated interface text and project descriptions.
- `src/config/site.ts`: contact address, profile links, and project URLs.
- `src/components/contact/index.tsx`: contact form and Formspree integration.
- `src/pages/index.tsx`: homepage metadata and static translation loading.

## Contact form spam protection

The form forwards its hidden `_gotcha` field to Formspree, which silently ignores
submissions when this field is filled. Browser validation and length limits are
usability checks; direct requests can bypass them, and a honeypot alone does not
stop bots that omit the field.

Before deployment, verify the settings for form `xbjvjwln` in the Formspree
dashboard: keep server-verified CAPTCHA/spam protection enabled and configure
the allowed production domain. These account settings cannot be verified from
this repository. Domain restrictions are an additional filter, not authentication.
See the [Formspree honeypot documentation](https://help.formspree.io/articles/building-your-form/honeypot-spam-filtering/).

## Security headers

`customHttp.yml` applies security headers at the Amplify CDN; `next.config.mjs`
applies the same production values when running Next.js directly. Keep them aligned.
The CSP permits same-origin scripts, Google Fonts and AJAX requests to Formspree.
Inline styles are allowed for animations, but inline executable scripts and framing
are blocked. If an embedded CAPTCHA is added, explicitly allow its required
script, frame and connection origins before enabling it.

HSTS applies for one year to this host only (no `includeSubDomains` or preload).
Development omits HSTS/HTTPS upgrades and permits the tooling's eval and WebSocket
connections. After deployment, verify response headers on `/`, `/it-IT`, a 404
and static assets, and check the browser console and contact form for CSP errors.
