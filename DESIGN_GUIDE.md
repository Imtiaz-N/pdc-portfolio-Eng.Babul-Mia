# PDC Engineers & Associates — Design & Color/Font Guide

> **Design System:** "Structural Prestige"
> This document defines the technical specifications for implementing the PDC Engineers & Associates design system in the React application.

---

## 1. Design Tokens (Tailwind CSS Configuration)

### Typography

| Role | Font Family | Weights | Usage |
|------|-------------|---------|-------|
| **Headlines & Display** | Playfair Display (Serif) | Medium (500), Bold (700) | Hero titles, section headers, and authoritative page titles. |
| **Body & Technical** | Inter (Sans-serif) | Regular (400), Medium (500), Semi-bold (600) | Paragraphs, technical data, tables, form labels, and UI elements. |

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--gold` | `#B08D3E` | Primary accent — buttons, icons, highlights. |
| `--ink` | `#121517` | Primary text and dark surfaces. |
| `--surface` | `#FFFFFF` | Page/card background. |
| `--border` | `#D3DAEA` | Card borders and dividers. |

> Extend additional neutral/structural tokens as required by the layout (e.g. `bg-surface/90` for the nav bar).

---

## 2. Component Specifications

### Page Grid & Layout

- **Container:** Max-width `1440px`.
- **Columns:** 12-column grid.
- **Margins:** `px-grid-margin` (~`64px` on desktop, ~`24px` on mobile).
- **Gutters:** `gap-grid-gutter` (~`32px`).

### Card Dimensions & Styles

#### Generic Cards (Expertise / Projects)

- **Border Radius:** `4px` (`rounded-sm`).
- **Border:** `1px solid #D3DAEA`.
- **Shadow:** `shadow-sm` (low elevation, soft blur).
- **Padding:** `p-6` or `p-8` for generous whitespace.

#### Team Leader Card

- **Image Aspect Ratio:** `4:5` or `1:1`.
- **Layout:** Horizontal (Flex/Grid) on desktop, stacked on mobile.

#### Project Card (Grid)

- **Height:** Fixed `400px – 450px` for uniform grid alignment.
- **Image Overlay:** Gradient fade from transparent to `#121517/80` for text legibility.

### Global Elements

#### Top Navigation Bar

- **Height:** `80px`.
- **Background:** Blur effect — `backdrop-blur-md bg-surface/90`.

#### Primary Button

- **Background:** `#B08D3E`.
- **Text:** White (`#FFFFFF`), `font-semibold`, `uppercase`, `tracking-wide`.
- **Hover:** Slightly darker shade or `scale-105` transition.

---

## 3. Implementation Checklist for React

- [ ] **Font Setup:** Import Playfair Display and Inter via Google Fonts or locally.
- [ ] **Tailwind Config:** Map the colors above to `tailwind.config.js` under `theme.extend.colors`.
- [ ] **Component Architecture:**
  - `Layout.jsx` — includes `<TopNavBar />` and `<Footer />`.
  - `SectionHeader.jsx` — common component for "Title" and "Subtitle" with consistent spacing.
  - `EngineeringCard.jsx` — reusable card component for the "Expertise" page.
- [ ] **Icons:** Use consistent stroke weights for icons. Gold (`#B08D3E`) should be used for the primary icon color.

---

## 4. Navigation Flow

The React Router (or equivalent) should follow this logical progression:

```
Homepage  ->  Our Expertise  ->  Project Portfolio  ->  Project Detail  ->  Leadership & Team  ->  Contact Us
```

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/expertise` | Our Expertise |
| `/portfolio` | Project Portfolio |
| `/portfolio/:id` | Project Detail |
| `/team` | Leadership & Team |
| `/contact` | Contact Us |
