---
description: Perform a comprehensive audit of a component or page before finalization to ensure it meets all standards.
---

# Design & Quality Audit Workflow

Run this workflow when a component or page is "feature complete" but needs final polish.

## 1. Visual Verification
// turbo
1. Use the `browser` tool to take screenshots of the component at 320px, 768px, and 1280px.
2. Verify "Soulful" details:
   - Is optical alignment correct?
   - Are micro-animations snappy (< 300ms)?
   - Is it using the defined HSL tokens?

## 2. Technical Scrutiny
1. **Accessibility**:
   - Tab through all elements.
   - Check contrast ratios (WCAG AA).
   - Verify ARIA labels for icon-only buttons.
2. **Security**:
   - Check for hardcoded secrets.
   - Verify input sanitization for user-generated content.
3. **Responsive**:
   - Check "Thumb Zone" reachability on mobile.
   - Ensure "Contextual Priority" (hidden meta-info on small screens).

## 3. Performance Check
1. Verify image formats (WebP/AVIF).
2. Check for layout shifts (CLS).
3. Ensure named exports are used for tree-shaking.

## 4. Final Approval
Present the "Proof of Craft" (screenshots/summary) to the user for final sign-off.
