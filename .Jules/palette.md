## 2025-04-21 - Accessible Mobile Navigation Menu
**Learning:** Expanding/collapsing interactive components like mobile menus require a combination of `aria-expanded` (bound to state), `aria-controls` (pointing to the content's ID), and a descriptive `aria-label` to be fully accessible to screen readers. Focus styles (`focus-visible`) are essential for keyboard navigation, and decorative icons must be hidden with `aria-hidden="true"`.
**Action:** Consistently pair `aria-expanded` and `aria-controls` with `useId()` when building toggleable content patterns in React.
