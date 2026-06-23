<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Grateful Orange Working Rules

These are the project patterns currently in use and should be treated as default behavior for new work.

## 1) App Router boundaries (Next.js 16)

- Default to Server Components in `app/`.
- Add `'use client'` only when browser-only behavior is required (state hooks, effects, DOM APIs, Headless UI, etc.).
- Keep client boundaries small by moving interactivity into leaf components.
- Prefer data fetching in Server Components.
- Do not pass non-serializable props from Server Components to Client Components.

Quick check:
- If it can render without JavaScript, keep it server.
- If it needs interaction state, isolate that part as client.

## 2) Component structure pattern

Every new component should live in its own directory under `app/components/`.

Required layout:

```text
app/components/ComponentName/
  index.tsx
  README.md
  index.test.tsx
```

Rules:
- Directory name is PascalCase and matches the component name.
- Component implementation goes in `index.tsx`.
- Import via directory path (example: `@/app/components/TopNav`).
- `README.md` should include purpose, usage example, and test command.
- `index.test.tsx` should cover key render and interaction behavior.

## 3) Testing standards (Vitest + Testing Library)

- Write tests around user-observable behavior.
- Prefer queries by role/label/text over implementation-detail selectors.
- Include at least one interaction test for interactive components.
- Assert behavior/accessibility state rather than Tailwind class names.
- Mock framework components only when needed (for example `next/image`).
- Run `npm run test:run` before finishing related work.

Avoid:
- Snapshot-only tests as the main test strategy.
- Brittle selectors tightly coupled to DOM structure.

## 4) Accessibility baseline

- Use semantic landmarks where applicable (`header`, `nav`, `main`, `section`, `footer`).
- Ensure icon-only controls have an accessible name.
- Keep heading hierarchy logical.
- Ensure keyboard operability for interactive elements.
- Keep visible focus styles.
- Prefer role-based Testing Library queries to reinforce accessible markup.

Navigation/anchors:
- Every `href="#section-id"` must map to an existing `id="section-id"`.
- For sticky headers, use section scroll offsets (`scroll-mt-*`) so headings are not clipped.

## 5) Styling conventions (Tailwind-first)

- Use Tailwind utilities as the primary styling approach.
- Reuse shared tokens/variables from `app/globals.css` (`background`, `foreground`, fonts).
- Keep custom CSS in `app/globals.css` minimal and cross-cutting.
- Avoid one-off inline styles unless truly needed for dynamic values.
- Preserve reduced-motion behavior where scroll/animation effects are used.
- Maintain consistent spacing and typography scales across sections.

Images:
- Use `next/image` for static assets from `public/`.
- Provide meaningful `alt` text for informative images.

## 6) Metadata and SEO

- Add meaningful `metadata` (`title`, `description`) for new routes/layouts.
- Keep titles specific and avoid placeholders.
- Keep descriptions concise and user-focused.
- Update metadata when page purpose changes.
- Keep navigation labels and section headings aligned with metadata intent.
- Preserve project branding as "Grateful Orange".
