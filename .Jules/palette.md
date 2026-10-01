
## 2024-10-01 - Mobile Menu Accessibility Enhancements
**Learning:** Expanding or interactive components like mobile menus require a dynamic combination of `aria-expanded` and `aria-controls` bindings (using a unique React ID generated via `useId`) to communicate accurate state and relationships to assistive technologies, especially when the controlled container is not rendered at all when closed.
**Action:** When implementing or fixing interactive toggles (like mobile hamburger menus or accordions), always ensure they are paired with a dynamic `aria-expanded` reflecting the current state, an explanatory `aria-label`, a matching `aria-controls` referencing a dynamically generated `id` for the container, and explicit keyboard focus states (`focus-visible`).
