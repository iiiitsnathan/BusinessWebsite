## 2024-05-15 - [Accessible Mobile Navigation]
**Learning:** Implementing accessible mobile menus in React requires dynamic ARIA attributes linked to state, and crucially, unique IDs for  generated via `useId()` to maintain robust screen reader support across re-renders.
**Action:** Always pair  toggles with generated IDs and  for any expanding UI component.
## 2024-05-15 - Accessible Mobile Navigation
**Learning:** Implementing accessible mobile menus in React requires dynamic ARIA attributes linked to state, and crucially, unique IDs for aria-controls generated via useId() to maintain robust screen reader support across re-renders.
**Action:** Always pair aria-expanded toggles with generated IDs and aria-controls for any expanding UI component.
