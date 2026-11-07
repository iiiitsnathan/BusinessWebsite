## 2024-05-14 - Playwright Keyboard Navigation vs Focus Methods
**Learning:** When writing Playwright scripts to visually verify `focus-visible` styles for accessibility enhancements (e.g., keyboard-navigable buttons), using `element.focus()` programmatically does not always reliably trigger the CSS focus states expected from genuine user keyboard navigation.
**Action:** Always use `page.keyboard.press('Tab')` (or `Shift+Tab`) in verification scripts to mimic authentic keyboard interaction when verifying focus rings and other accessibility states.
