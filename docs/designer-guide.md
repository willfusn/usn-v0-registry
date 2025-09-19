# Designer Guide: Using v0 with the Org MUI Registry

## What this gives you
- On-brand MUI v5 components driven by our canonical theme.
- A consistent starting point for v0 to generate production-ready React code.

## How to start
1. Open v0 and set the custom registry URL to your deployed registry (or `http://localhost:3000/registry.json` while running locally).
2. Add the "Org MUI v5 Theme". This ensures generated components use our palette, typography, spacing.
3. Add components, starting with "MUI Button" to validate.

## Working with prompts
- Be explicit about MUI: "Use Material-UI v5, sx for styling, use our theme."
- Describe layout, states, and interactions: loading, disabled, error.
- Ask v0 to keep props minimal and accessible (aria-labels, roles).

## What to expect in generated files
- Imports from `@mui/material` and `@emotion/*`.
- Theme assumed from `src/lib/theme.ts`; no Tailwind classes.
- Styling via `sx` prop and component props, not class names.

## Sharing with engineering
- Use "Copy Code" in v0 and paste into your feature branch.
- If a component needs theme changes, coordinate with engineering to update `src/lib/theme.ts`.

## Troubleshooting
- If v0 can’t load the registry, verify the URL works in a browser.
- If styling looks off, confirm the app wraps with `ThemeProvider` and `CssBaseline`.
- Ensure you’re on MUI v5 in package.json.

## Next steps
- We’ll add more MUI components to the registry over time (cards, inputs, dialogs).
- Provide feedback on naming, props, and look & feel so we can refine the base components.
