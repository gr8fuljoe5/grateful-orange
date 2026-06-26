# WorkSection

Work-focused section for the single-page site. It highlights featured roles, core impact, and a
condensed career timeline in reverse chronological order.

## Usage

```tsx
import WorkSection from "@/app/components/WorkSection";

export default function Page() {
  return (
    <section id="work">
      <WorkSection />
    </section>
  );
}
```

## Behavior

- Renders a section-level heading and intro copy in first-person voice
- Displays a `Featured Experience` list with role summaries and impact highlights
- Displays MLB-focused `Selected Achievements` cards styled like the featured experience cards
- Displays a `Career Timeline` list for earlier roles
- Sources structured content from `app/content/work.json`

## Tests

```bash
npm run test:run
```
