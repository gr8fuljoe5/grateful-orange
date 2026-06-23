# AboutSection

Profile-focused About section for the single-page site. It renders a circular portrait, headline,
and first-person bio copy including location.

## Usage

```tsx
import AboutSection from "@/app/components/AboutSection";

export default function Page() {
  return (
    <section id="about">
      <AboutSection />
    </section>
  );
}
```

## Behavior

- Uses `next/image` with local asset `/about-profile.jpg`
- Displays profile image as a full circle (`rounded-full`) with `object-cover`
- Renders first-person headline and bio content
- Includes explicit location text: Brooklyn, NY

## Tests

```bash
npm run test:run
```
