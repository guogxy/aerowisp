# AeroWisp website

This directory is the website-only repository for [AeroWisp](https://guogxy.github.io/aerowisp/). It is a bilingual, static Next.js site for the product overview, privacy policy, terms of use, support, and data/license notices.

## Local development

```sh
pnpm install
pnpm dev
```

## Verification

```sh
pnpm lint
pnpm build
```

GitHub Pages builds the `out/` directory with the workflow in `.github/workflows/deploy-pages.yml`. The site is intentionally self-contained: critical content and visual UI do not depend on a remote CDN.
