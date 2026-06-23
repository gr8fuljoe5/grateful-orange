# ServicesSection

Services section for the single-page site. Renders service cards from `app/content/skills.json` in a responsive grid.

## Usage

```tsx
import ServicesSection from "@/app/components/ServicesSection";

export default function Page() {
  return (
    <section id="services">
      <ServicesSection />
    </section>
  );
}
```

## Behavior

- Reads service data from `app/content/skills.json`
- Maps JSON icon keys to Font Awesome icons
- Renders reusable `ServiceCard` components in a responsive grid:
  - Mobile: 1 column
  - Tablet (`sm`): 2 columns (3 rows for 6 items)
  - Desktop (`lg`): 3 columns (2 rows for 6 items)

## Tests

```bash
npm run test:run
```
