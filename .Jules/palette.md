## 2024-03-24 - Initial Memory
## 2024-03-24 - Accessibility improvements for Mobile Menu
**Learning:** In Next.js with Tailwind, mobile navigation menus (`<button>`) that expand/collapse need proper ARIA attributes to communicate state and functionality to screen reader users. Specifically, an `aria-expanded` and an `aria-controls` or an `aria-label` like "Toggle mobile menu" are required. The mobile menu button in `Navigation.tsx` lacks these attributes. Additionally, the expanded menu doesn't have an ID that could be referenced by `aria-controls`.
**Action:** When adding expanding mobile menus, bind `aria-expanded={isOpen}` to the state boolean and use `aria-label="Toggle mobile menu"`. Hide the icon itself using `aria-hidden="true"` if not already handled by the icon component.
