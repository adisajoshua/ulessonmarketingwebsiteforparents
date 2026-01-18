---
name: Brand-Engine
description: Automates the creation of a unique brand identity using Visual Anchors and HSL extraction.
---

# Brand Engine Skill

Use this skill whenever a new project or significant brand refresh is requested.

## 1. Visual Anchor Generation
// turbo
1. Listen for the "Brand Soul" (e.g., "Industrial Brutalist," "High-end watch brand").
2. Use `generate_image` with a prompt like: *"A high-fidelity moodboard for a premium web application with a [Brand Soul] aesthetic. Include UI elements, a sophisticated color palette, and high-quality lifestyle imagery that captures the brand's essence. 8k, ultra-realistic, professional design."*
3. Save the image as `brand_anchor.png`.

## 2. Token Extraction
1. Analyze the generated anchor.
2. Define a set of HSL variables:
   - `--bg-soul`: The dominant background color.
   - `--accent-soul`: The most vibrant highlight color.
   - `--text-soul`: The high-contrast text color.
   - `--surface-soul`: A secondary background/card color.
3. Choose a typography pairing:
   - **Headings**: A font that matches the "Soul" (e.g., Serif for Boutique, Sans for Modern).
   - **Body**: Clean, high-legibility Sans-Serif (default to Inter or Outfit).

## 3. Atmospheric Injection
1. Apply the tokens to `index.css`.
2. Implement one "Signature Interaction" from the Anchor (e.g., a specific shadow depth, a grain overlay, or a unique spring animation curve).

## 4. Continuity
Keep the `brand_anchor.png` in the project root as the "Source of Truth" for all future UI additions.
