## 2023-10-28 - Mobile Menu Button Accessibility
**Learning:** React `useId()` is crucial for generating unique, stable IDs for dynamically rendered ARIA targets (like `aria-controls` for mobile menus) without risking SSR/hydration mismatches. Ensure `aria-hidden="true"` is applied directly to SVG icons (`lucide-react`) within icon-only buttons.
**Action:** Apply `useId()` to generate IDs for all expanding/toggling containers to properly link `aria-controls` with interactive triggers. Always add explicit `focus-visible` styles to trigger elements in Tailwind environments.
