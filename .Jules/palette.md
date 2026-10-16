## 2023-10-16 - Add dynamic ARIA attributes to mobile menu toggle
**Learning:** This Next.js app uses responsive Tailwind CSS (`md:hidden`) for the mobile menu. However, the toggle button was lacking an `aria-label`, explicit state communication (`aria-expanded`/`aria-controls`), and keyboard focus rings.
**Action:** Used `useId` to link the button and menu container, added stateful `aria-expanded` attributes, and added clear `focus-visible` styles to ensure it remains fully accessible for screen readers and keyboard users.
