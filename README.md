# Registry Starter

This is a [Next.js](https://www.nextjs.org) application powered by Tailwind v4 and Shadcn/ui components to help 
accelerate building a design systems implementation using Shadcn Registries.

In order to configure this, all you need to change is the `BRAND TOKENS` section in the
[`globals.css`](./src/styles/globals.css) file.  All the `--ds-*` will be propagated to the necessary Shadcn and 
Tailwind theme classes from there.  So far, it seems more than reasonable to use [`v0.dev`](https://v0.dev) or other 
LLMs to generate CSS for your brand.

## Getting Started

### Development mode

```bash
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Production mode

```bash
pnpm install
pnpm run build
pnpm run start
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)!

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!
