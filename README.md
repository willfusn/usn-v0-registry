# Registry Starter

This is a [Next.js](https://www.nextjs.org) application powered by Tailwind v4 and [`shadcn/ui`](https://ui.shadcn.com/)
components to help accelerate building a design system implementation using Shadcn components while exposing said
components via a [`shadcn/ui registry`](https://ui.shadcn.com/docs/registry).

## Custom Theme 

To use a custom theme for all the components, all you need to do is modify the CSS tokens in
[`globals.css`](./src/app/globals.css). More information on these practices can be found
on [ui.shadcn.com/docs](https://ui.shadcn.com/docs).

## Open in v0

This registry application also exposes `Open in v0` buttons for each component. Once this application is deployed, the
`Open in v0` button redirects to [`v0.dev`](https://v0.dev) with a prepopulated prompt and a URL pointing back to this
registry's `/r/${component_name}.json` endpoint. This endpoint will provide v0 the necessary file information, content,
and metadata to start your v0 chat with your component, theme, and other related code.

These `/r/${component_name}.json` files are generated using `shadcn/ui` during the `build` and `dev` based on the
repository's [`registry.json`](./registry.json). For more information, refer to the
[documentation](https://ui.shadcn.com/docs/registry/registry-json).

## File Structure

`app/(design)` routes contains the registry pages.

`app/starter` routes contains both `store` and `dashboard` full starter pages


`@/components` contains all compound components

`@/components/ui` contains all base `shadcn/ui` components


`@/hooks` contains all React hooks

`@/lib` contains all business logic & utils

## Getting Started

### Development mode

```bash
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production mode

```bash
pnpm install
pnpm run build
pnpm run start
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)!

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) — learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) — an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) — your feedback and contributions
are welcome!
