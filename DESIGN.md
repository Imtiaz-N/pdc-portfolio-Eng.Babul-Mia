---
name: Structural Prestige
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daea'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eefe'
  surface-container-high: '#e2e8f8'
  surface-container-highest: '#dce2f3'
  on-surface: '#151c27'
  on-surface-variant: '#44474a'
  inverse-surface: '#2a313d'
  inverse-on-surface: '#ebf1ff'
  outline: '#75777a'
  outline-variant: '#c4c7c9'
  surface-tint: '#5c5f61'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#191c1e'
  on-primary-container: '#828486'
  inverse-primary: '#c5c7c9'
  secondary: '#775a0c'
  on-secondary: '#ffffff'
  secondary-container: '#fed57e'
  on-secondary-container: '#785a0d'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#191c1e'
  on-tertiary-container: '#828486'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e2e5'
  primary-fixed-dim: '#c5c7c9'
  on-primary-fixed: '#191c1e'
  on-primary-fixed-variant: '#444749'
  secondary-fixed: '#ffdf9e'
  secondary-fixed-dim: '#e9c16c'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5b4300'
  tertiary-fixed: '#e1e2e4'
  tertiary-fixed-dim: '#c5c6c8'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f9f9ff'
  on-background: '#151c27'
  surface-variant: '#dce2f3'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  button:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  grid-margin: 5vw
  grid-gutter: 24px
  section-padding-lg: 120px
  section-padding-sm: 64px
  stack-gap: 16px
---

## Brand & Style

The visual identity is anchored in the concepts of **Precision, Structural Integrity, and Legacy**. This design system bridges the gap between traditional engineering authority and modern architectural innovation. It targets high-stakes stakeholders—developers, government bodies, and industrial partners—who prioritize reliability and technical excellence.

The style is **Corporate / Modern** with a strong emphasis on **Architectural Minimalism**. It uses sharp, purposeful lines, generous whitespace to signify clarity of thought, and high-contrast transitions that mirror the interplay of light and shadow on building facades. The aesthetic is intentionally "blueprint-clean," suggesting that every pixel has been engineered for a specific purpose.

## Colors

The palette is rooted in professional gravitas. 
- **Deep Charcoal (#121517):** Used for primary backgrounds in hero sections, footers, and all main headings. It represents the strength of steel and the depth of foundational earth.
- **Premium Gold (#B08D3E):** This is the accent of excellence. It is used sparingly for primary actions, subtle decorative lines, and key metrics. It should feel like a polished brass or gold finish against technical drawings.
- **Crisp White & Off-White (#FFFFFF, #F4F5F7):** The primary canvas. Using slightly tinted off-whites for section backgrounds prevents screen fatigue and adds a layer of sophistication.
- **Supportive Neutrals:** Used for body text and borders to maintain a low-noise environment.

## Typography

The typographic system creates an "Editorial-meets-Technical" hierarchy. 

**Playfair Display** provides the authoritative voice. It should be used for all major headings. Its high-contrast serifs evoke a sense of tradition and high-end consultancy.

**Inter** provides the functional clarity. As a clean, geometric sans-serif, it handles dense engineering data, body copy, and UI labels with maximum legibility. 

Use **Label Caps** for "Eyebrow" text (the small text above headlines) to establish a clear content taxonomy. Headlines should always use a slightly tighter letter-spacing for a more "locked-in" architectural feel.

## Layout & Spacing

This design system utilizes a **12-Column Fluid Grid** with fixed maximum widths for readability on ultra-wide monitors (max-width: 1440px). 

- **Vertical Rhythm:** Sections are separated by generous padding (`section-padding-lg`) to allow the high-quality photography and complex project descriptions room to breathe.
- **Architectural Alignment:** Elements should be strictly aligned to the grid. Inset layouts (where content spans the middle 8 or 10 columns) are preferred for text-heavy sections to emphasize focus.
- **Mobile Reflow:** On mobile, the 12-column grid collapses to 4 columns. Section padding is reduced to `section-padding-sm` to maintain momentum.

## Elevation & Depth

To maintain a "Professional & Modern" aesthetic, depth is created through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.

- **Surface Tiers:** Use subtle background color shifts (White to #F4F5F7) to define different content zones.
- **Ghost Borders:** For cards and input fields, use 1px borders in a soft neutral color (#E5E7EB). This mimics technical drafting lines.
- **Interaction Elevation:** Only primary cards use a very subtle, highly diffused "Ambient Shadow" (0px 10px 30px rgba(0,0,0,0.03)) upon hover to indicate interactivity without breaking the flat, precise style.
- **Image Overlays:** Use a 40-60% Charcoal gradient overlay on hero images to ensure white "Playfair Display" text remains the primary focal point.

## Shapes

The shape language is **Soft (0.25rem)**. 

While the engineering firm represents solid structures, sharp corners can feel overly aggressive in a modern digital interface. A minimal radius (4px) softens the UI just enough to feel modern and accessible, while still appearing disciplined and "square." 

- **Containers:** Default cards use `rounded-sm`. 
- **Buttons:** Use slightly more rounded corners (`rounded-lg`) to differentiate interactive elements from structural containers.
- **Icons:** Use linear, stroke-based icons with consistent 1.5px or 2px weights to match the "line-drawing" architectural vibe.

## Components

### Buttons
- **Primary:** Solid Gold (#B08D3E) with White text. Bold, uppercase, with a small arrow icon (→) for directional momentum.
- **Secondary:** Transparent with a Charcoal 1.5px border. Gold text on hover.
- **Ghost:** No background or border, purely text-based with a subtle underline effect on hover.

### Cards
- **Project Cards:** Full-width imagery with a bottom-aligned overlay. On hover, the image should subtly scale (1.05x) while the text remains static.
- **Service Cards:** White background, thin neutral border, featuring a Gold-tinted icon at the top left.

### Inputs & Forms
- **Fields:** Underline-only or thin-bordered styles are preferred to mimic formal document entry.
- **Focus State:** Transition the bottom border or full border to Gold (#B08D3E) with no glow/outer shadow.

### Decorative Elements
- **Structural Lines:** Use 1px vertical or horizontal gold lines to separate sections or guide the eye toward "Call to Action" areas. This reinforces the "Architectural Lines" theme.
- **Data Visuals:** Statistics (e.g., "27+ Projects") should use large Playfair Display numbers in Gold for maximum impact.