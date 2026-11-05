## 2023-11-05 - Mobile Menu Accessibility
**Learning:** React state-driven mobile menus often lack dynamic `aria-expanded` and programmatic linkage between the toggle button and the navigation container via `aria-controls`, preventing screen readers from understanding the menu's state and structure.
**Action:** Always add `aria-expanded={isOpen}`, `aria-controls="menu-id"`, and `aria-label="Toggle menu"` to mobile menu toggles, ensuring the target container has a matching `id`.
