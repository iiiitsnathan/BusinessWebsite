
## 2024-05-24 - Accessible Mobile Menus
**Learning:** For mobile menu toggles to be fully accessible, they require a dynamically bound `aria-expanded` state, an `aria-controls` attribute pointing to a unique `id` (generated via `useId()`) on the target container, explicit focus states (`focus-visible`), and `aria-hidden="true"` on decorative toggle icons.
**Action:** Consistently apply `useId()` and ARIA bindings to all expanding/collapsing interactive components to ensure robust screen reader support and keyboard navigation feedback.
