
# Portfolio — Mohammad Syaoqi Ramadhan

Live site: https://syaoqi24.github.io/portofolio/

This is portofolio site for resume and project to improving skills and practicizing CI/CD with GitHub Actions. Trying to expand and get familiar with some dev tools.

## Stack

- Vite, Tailwind CSS v3, vanilla JavaScript (ES modules)
- Content lives in `src/data.js` (English and Indonesian) and is rendered by `src/render.js`
- Tests: Playwright. Lint: ESLint. Quality gate: Lighthouse CI
- CI/CD: GitHub Actions, deployed to GitHub Pages
- Visitor analytics: Umami Cloud

## Run locally

Requires Node.js 20 (the same version CI uses).

```bash
npm ci
npm run dev
```

| Script              | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run build`   | Production build into`dist/`                |
| `npm run preview` | Serves`dist/` locally                       |
| `npm run lint`    | ESLint on`src/`                             |
| `npm test`        | Playwright tests (run`npm run build` first) |
| `npm run lhci`    | Lighthouse CI against the preview server      |

Playwright uses Microsoft Edge locally and Chromium in CI (see `playwright.config.js`).

## How changes get to production

1. Work happens on a branch and goes through a pull request.
2. CI runs lint, build, tests and Lighthouse.
3. `main` is protected by a ruleset: no direct pushes, and the `build` check must pass.
4. Merging to `main` deploys to GitHub Pages automatically.

## What I learned

This step acts as a safeguard for your main code; code that fails testing will not pass and will be automatically rejected. For instance, try intentionally introducing an error to see the code get rejected.
I learned to separate the directories that needed to be created into different branches—though I didn't get it right on the first try. I should have pushed to a new or different branch, but instead, I pushed directly to the same branch, which caused a bit of confusion.
