# myprivly-hub

The public home page of **myprivly.com**: logo, a short pitch, a card for each app, and a few privacy principles. English and Spanish.

- Next.js 16 (App Router), React 19, Tailwind 4, same conventions as the Family app.
- Colors, logo and the list of apps come from [`@myprivly/brand`](https://github.com/chy-29/myprivly-brand). Add an app there (see its `CHECKLIST.md`) and it appears here.
- `lib/apps.ts` holds the one hub-only override: where Money is reachable today, until it moves to `money.myprivly.com`.

```
npm install
npm run dev     # http://localhost:3000
npm test
npm run lint
```

Deploy: a Vercel project on this repo, with `myprivly.com` as its domain.
