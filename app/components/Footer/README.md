# Footer

Generic site footer for the single-page layout.

## Usage

```tsx
import Footer from "@/app/components/Footer";

export default function Page() {
  return (
    <>
      <main>{/* page content */}</main>
      <Footer />
    </>
  );
}
```

## Behavior

- Renders a simple copyright line
- Includes GitHub and LinkedIn icon links with accessible labels
- Uses placeholder links (`#`) so URLs can be added later

## Tests

```bash
npm run test:run app/components/Footer/index.test.tsx
```
