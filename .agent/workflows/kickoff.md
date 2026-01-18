---
description: Start a new project or page with a deep dive into design intent, brand soul, and visual direction.
---

# Project Kickoff Workflow

Follow these steps to initialize a new project or significant feature.

## 1. The Questionnaire
Ask the user the following questions:

**Design Intent & Goals**
1. What is the primary goal of this interface?
2. What is the single most important piece of information to show?
3. What is the primary "North Star" action for the user?
4. What "Soul" should the design evoke? (e.g., Boutique Academic, Industrial Brutalist, Digital Solarpunk)

**Visual & Brand Direction**
5. Do we have an existing color palette/font, or should I generate a "Visual Anchor"?
6. Any specific design system (Shadcn UI, Radix, Custom)?
7. What is the "Design Intensity Level"? (L1: Utility, L2: Brand, L3: Experience)

## 2. Visual Anchor & Moodboard
// turbo
Once the "Soul" is defined, perform the following:
1. Use `generate_image` to create a "Visual Anchor" - a high-fidelity moodboard or hero mockup that captures the aesthetic soul.
2. Present this to the user for approval.
3. Extract the HSL tokens and typography choices from this anchor to create the project's `index.css` variables.

## 3. Tech Strategy
1. Define the framework (React/Vite default).
2. Establish the repo structure.
3. Map out the core API and Security requirements based on the global Knowledge Base standards.

## 4. Initialization
1. Create the base project structure.
2. Create `PIPELINE.md` in the project root to track progress.
3. Establish the `index.css` with the "Soulful" tokens.
