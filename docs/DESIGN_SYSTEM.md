# BuildWithSaranya — Portfolio Design System

This document is the source of truth for all new portfolio pages, routes, experiments, and future project showcases. Maintain visual continuity. Do not introduce a new unrelated palette unless deliberately redesigning the entire site.

## Approved palette (from `app/globals.css`)
| Token | Hex | Usage |
| --- | --- | --- |
| Cream | `#FAF9F5` | Primary page background |
| Ink | `#292F2A` | Main headings and body |
| Sage | `#829884` | Primary accent, emphasis, action buttons |
| Sage light | `#E6EEE4` | Section backgrounds and soft accents |
| Peach | `#E8AD94` | Small details, ornamental highlights |
| Peach light | `#F9E9DF` | Restrained secondary accent |
| Border | `#E8E7E0` | Thin borders and dividers |
| Muted | `#69736D` | Supporting text |

## Typography
- Headings: **DM Serif Display**, regular weight; expressive italic for occasional highlighted words.
- Body, buttons, navigation: **DM Sans**.
- Small section labels: uppercase, narrow and widely letter-spaced.
- Keep generous whitespace and readable contrast.

## Visual rules
- Clean, minimal, elegant editorial aesthetic: warm ivory, restrained sage and peach.
- Custom abstract radial/segmented circle motifs are welcome but only as sparse supporting details, not repeating clutter or literal fruit.
- Soft borders, limited shadow, rounded buttons/cards, subtle transitions and optional gentle motion.
- Responsive mobile-first layouts; respect `prefers-reduced-motion`.
- No terminal aesthetic; avoid busy gradients, neon, excessive colours or overdecorating.
- Keep content concise; avoid duplicate introductions or repeated career summaries.

## Information architecture
- Homepage introduces Saranya, current AI focus, engineering approach, **current Woods role only**, and a contact CTA.
- Internal `/experience` route displays company-by-company history.
- Career started **September 2018**: show **8+ years** as of November 2026; update when appropriate.
- Do not publish confidential company project details; GeoTrack is not a personal portfolio project.
- Do not add a featured-project gallery, generic tech-stack grid, or Medium posts by default.
- Future personal projects may get new internal routes, using these same design tokens and layout primitives.

## Implementation note
Design tokens are defined in `app/globals.css` as CSS custom properties. Prefer referencing them instead of hardcoding unrelated colours. Reuse existing shared layout and navigation components. Check both desktop and mobile before merging.
