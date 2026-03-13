
## 2025-03-13 - Added ARIA attributes to mobile menu button
**Learning:** Found an accessibility issue pattern in the `Navigation.tsx` component. The mobile menu toggle button lacked proper `aria-expanded`, `aria-controls`, and `aria-label` attributes, making it difficult for screen reader users to understand the state and purpose of the button.
**Action:** Always ensure icon-only toggle buttons include dynamic `aria-expanded` and `aria-label` attributes to properly convey their state and purpose to screen readers.
