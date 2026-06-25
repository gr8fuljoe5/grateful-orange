# SkillsSection

Skills section for the single-page site. Renders an organized set of skill categories from `app/content/skills.json`.

## Usage

```tsx
import SkillsSection from "@/app/components/SkillsSection";

export default function Page() {
  return (
    <section id="skills">
      <SkillsSection />
    </section>
  );
}
```

## Behavior

- Reads grouped skill data from `organizedSkills` in `app/content/skills.json`
- Renders each category as a card with an accessible heading
- Displays each category's skills as a bulleted list

## Tests

```bash
npm run test:run
```
