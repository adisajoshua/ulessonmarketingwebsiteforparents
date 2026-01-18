---
name: Architect-Pro
description: Audits and enforces the Archetype-Adaptive Architecture for responsive excellence.
---

# Architect-Pro Skill

Use this skill to verify that layouts are resilient and follow the "Archetype-Adaptive" rules.

## 1. Archetype Identification
Categorize the current view:
- **Consumable**: Simple stacking, thumb-zone focus.
- **Productive**: Persistent viewport, toggleable drawers.
- **Data-Dense**: Fixed identifiers, horizontal scrolling.

## 2. The Stress Test
// turbo
1. Use the `browser` tool to execute a "Cluster Audit":
   - Resize to 768px.
   - Flag any elements within 24px of each other that should be independent.
2. Verify "Extreme Widths":
   - **320px**: No horizontal scroll on root, no overlaps.
   - **2560px**: Max-width containers respected.

## 3. Interaction Audit
1. Confirm all touch targets are exactly 44x44px or larger.
2. Verify that input labels reflow correctly (side-aligned to top-aligned on mobile).
