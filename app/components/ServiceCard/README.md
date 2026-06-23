# ServiceCard

Reusable card for displaying a service with icon, title, and supporting blurb.

## Usage

```tsx
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import ServiceCard from "@/app/components/ServiceCard";

export default function Example() {
  return (
    <ServiceCard
      title="Full-Stack Product Development"
      blurb="From UX to APIs, full-stack products are built to launch quickly."
      icon={faRocket}
    />
  );
}
```

## Props

- `title` - service heading text
- `blurb` - supporting description
- `icon` - Font Awesome `IconDefinition`

## Tests

```bash
npm run test:run
```
