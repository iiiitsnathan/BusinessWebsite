## 2026-07-14 - Binding ARIA Controls for Dynamic Interactive Components
**Learning:** For interactive UI components that hide/show content (like mobile hamburger menus or accordions), using static IDs can lead to conflicts if the component is reused, or bugs if IDs are changed manually but not updated in ARIA tags.
**Action:** Always use React's `useId()` to generate unique IDs, bind the generated ID to the content container's `id` attribute, and link the toggling button via `aria-controls={generatedId}`. This ensures robust accessibility for screen readers and avoids DOM ID collisions.
