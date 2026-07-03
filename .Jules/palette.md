## 2024-05-15 - Mobile Menu A11y
**Learning:** When implementing a mobile menu with an expanding/collapsing state, it's critical to use an explicit focus ring for keyboard users, tie `aria-controls` to a `useId()` linked container, keep `aria-expanded` in sync with the state, and use `aria-hidden='true'` for purely decorative toggle icons to ensure a clean screen reader experience.
**Action:** Consistently apply `useId()`, `aria-controls`, `aria-expanded`, explicit `aria-label`, and explicit focus styles on interactive menu toggles.
