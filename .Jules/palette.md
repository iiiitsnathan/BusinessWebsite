## 2024-03-24 - Dynamic ARIA attributes for mobile menu toggles
**Learning:** Icon-only toggle buttons in React/Next.js (like hamburger menus) must have dynamic `aria-expanded` and `aria-label` attributes to properly convey their state and purpose to screen readers. Static labels are insufficient because the button's function changes (open vs close) based on state.
**Action:** Always ensure toggle buttons that reveal content use `aria-expanded={state}`, `aria-controls="id-of-content"`, and dynamic `aria-label={state ? "Close" : "Open"}`.
