# TopNav

Sticky top navigation bar for the single-page layout. Renders the site logo and anchor links to each page section. Uses Headless UI `Disclosure` for the mobile menu.

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

## Dependencies

- `@headlessui/react` — responsive disclosure menu
- `next/image` — optimized logo rendering from `/public/logo.png`

## Tests

```bash
npm test -- app/components/TopNav
```
