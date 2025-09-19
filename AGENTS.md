
# Project Overview: Material-UI Registry Proof of Concept

This project's primary goal is to transform the standard Vercel `registry-starter` kit, which is built on Shadcn and Tailwind CSS, into a functional registry for our company's Material-UI (MUI) v5 design system.

## Tech Stack
- **From:** Next.js, Shadcn/ui, Tailwind CSS.
- **To:** Next.js, Material-UI (MUI v5), Emotion.

## Core Architectural Principle
The core principle for all code generation in this project is to use a **pure Material-UI** approach. This means:
- All styling must be done using MUI's theming system (`createTheme`) and the `sx` prop, not Tailwind CSS.[3]
- All Tailwind CSS dependencies, including the `tailwind.config.ts`, `globals.css` modifications, and utility classes, should be entirely removed or replaced.[3]
- There is an existing MUI theme as well as components that our organization has in place already that must pull into this repo.

## Task Breakdown

### Primary Objective: Designer Empowerment
The core purpose of this project is to create a seamless, AI-powered workflow for our design team. The MUI-Native Registry is the architectural foundation that makes this possible. The AI must constantly keep in mind that its output needs to serve this goal.

**AI Directive:** The generated code should not be an end in itself. It is a means to validate and build the registry so that designers can use the "Open in v0" button to generate MUI components that are on-brand and production-ready.

**AI Task:** At the conclusion (or at points BEFORE conclusion) of this proof-of-concept, you are to generate a comprehensive, designer-friendly guide. This guide will be a Markdown document that explains:
- The purpose and benefits of the MUI registry.
- The step-by-step process for a designer to use v0 with our custom registry.
- How designers can use prompts to refine and customize components, and what kinds of visual elements they can expect to see.
- How they can access and share the generated code with our development team.

To complete this project, you will use your knowledge of v0's registry features and best practices for collaborating with design teams.

My main objective of this project is for us to follow a step-by-step plan to convert this repository into a working MUI registry. Please use the following checklist to guide your suggestions and ensure we stay on track.

#### Important Note

THE FOLLOWING LIST IS JUST A SUGGESTION OF POSSILE STEPS AND HAS NOT BEEN VETTED FOR ACCURACY. THEY ARE HERE TO GIVE YOU AN IDEA OF WHAT TASKS WE MAY NEED TO PERFORM. YOU NEED TO PLAN EVERY TASK AND UPDATE THIS FILE REGULARLY!

1.  **Surgically remove all Tailwind CSS and Shadcn dependencies.**
    - Delete the `tailwind.config.ts` and `src/app/tokens.css` files.[4]
    - Clean up `src/app/globals.css` by removing all `@tailwind` directives.[5]
    - Remove `@shadcn/ui` component and library code from the codebase.
2.  **Install Material-UI.**
    - Help me install the necessary `npm` packages, specifically `@mui/material`, `@emotion/react`, and `@emotion/styled`.[6]
3.  **Create our custom MUI theme file.**
    - Help me create a new file at `src/lib/theme.ts` that exports our company's existing `createTheme` object.[3]
4.  **Update `registry.json` to reference the MUI theme.**
    - Open `registry.json` and locate the `registry:theme` item.[4]
    - Change the `files` path to point to the new `src/lib/theme.ts` file.[7]
    - Ensure the AI understands that this is the canonical source for our color palette, typography, and spacing.[8]
5.  **Create a sample MUI component.**
    - Help me create a simple component, like `src/components/button.tsx`, that uses MUI components and inherits styles from our new theme.[9]
6.  **Add the new component to the registry.**
    - Update the `registry.json` file to include a new `registry:ui` item that points to the `src/components/button.tsx` file and lists `@mui/material` as a dependency.[10]

## How to interact with me
- **Be prescriptive, not just descriptive.** I need code and implementation suggestions to complete the steps above.
- **Reference files by name** using the `@` symbol, e.g., `@registry.json` or `@src/lib/theme.ts`.
- **Do not use Tailwind CSS** in any generated code. All styling should use the MUI system.[3]
- **Focus on one step at a time** from the checklist.
- **Assume I am an experienced developer** who needs a technical partner, not a general guide.
- **IMPORTANT:** Proceed slowly, and pause regularly when it makes sense to explain what you are doing and ask for feedback. After each session I may ask you to update the content in this file for the next agentic session.

### Working Rules
- Make frequent, small commits at logical breakpoints (dependency changes, theme updates, registry updates). This is mandatory to keep history clear and enable easy rollbacks.
- This project must target Material-UI v5 specifically. Avoid v6/v7 APIs.
- The canonical theme is maintained by our organization. For now we keep a local mirror at `@src/lib/theme.ts`. In a later step we will replace this with an import from the org package/repo.
- Before each commit, update this document with any new rules, decisions, or deviations so future sessions have the latest context.
 - We added a simple validation page at `@src/app/mui/page.tsx` to verify the org theme and `BrandButton`. Keep it minimal and MUI-only.
 - Migrating Shadcn components to MUI will be done via thin adapters to preserve call sites initially. First migrated: `@src/components/ui/button.tsx` now wraps `@mui/material/Button`. First consumer migrated: `@src/components/ui/pagination.tsx` now uses the adapter for links.
 - The registry JSON is served at `/registry` and `/registry.json` for local v0 testing.
 - A designer-friendly guide lives at `@docs/designer-guide.md`.
