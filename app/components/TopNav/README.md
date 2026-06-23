# TopNav

Sticky top navigation bar for the single-page layout. Renders the branded text heading and anchor links to each page section. Uses Headless UI `Disclosure` for the mobile menu.

## Usage

```tsx
import TopNav from "@/app/components/TopNav";

export default function Page() {
  return (
    <>
      <TopNav />
      <main>{/* page sections */}</main>
    </>
  );
}
```

## Behavior

- Sticks to the top of the viewport while scrolling.
- Desktop (`md` and up): horizontal nav links.
- Mobile: hamburger toggle opens a collapsible panel with the same links.
- Links target section anchors: `#about`, `#services`, `#work`, `#experience`, `#skills`, `#contact`.

## Brand styling

- Font: Space Grotesk (`font-brand`)
- **Grateful**: red → white → blue gradient with black text outline (`.brand-grateful`)
- **Orange**: bold orange (`text-brand-orange`)

## Dependencies

- `@headlessui/react` — responsive disclosure menu
- `next/font/google` — Space Grotesk loaded in root layout

## Tests

```bash
npm test -- app/components/TopNav
```
