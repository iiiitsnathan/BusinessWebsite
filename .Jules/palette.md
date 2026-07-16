

## 2024-07-16 - Add ARIA attributes and focus styles to Mobile Menu
**Learning:** Mobile hamburger menus often lack proper ARIA states (`aria-expanded`, `aria-controls`, `aria-label`) and visible focus indicators, making them difficult to use for screen reader users and keyboard navigators.
**Action:** When implementing custom toggleable UI elements like mobile navigation, explicitly manage `aria-expanded` based on the open state, set `aria-controls` to the ID of the collapsible content, and ensure focus rings are visible and match the design system.
