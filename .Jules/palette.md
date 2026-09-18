## 2026-09-18 - Accessible Mobile Menus
**Learning:** Interactive toggle elements like mobile menus often lack crucial ARIA attributes, making them inaccessible to screen readers.
**Action:** Always ensure toggle buttons include `aria-expanded` bound to state, an explicit `aria-label`, `aria-controls` pointing to the content ID, distinct `focus-visible` styles, and hide decorative icons with `aria-hidden="true"`.
