---
name: Vulktek Core
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#ffbcbf'
  on-tertiary: '#67001b'
  tertiary-container: '#ff929a'
  on-tertiary-container: '#8c0028'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdadb'
  tertiary-fixed-dim: '#ffb2b7'
  on-tertiary-fixed: '#40000d'
  on-tertiary-fixed-variant: '#92002a'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
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
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The design system for this product is built on the pillars of **Precision, Authority, and Resilience**. It targets security engineers and C-suite executives who require a high-density information environment that feels both cutting-edge and dependable.

The aesthetic follows a **High-Tech Minimalism** approach. It leverages a dark-mode-first interface to reduce eye strain during long monitoring sessions. The visual language utilizes subtle grid patterns and micro-textures reminiscent of data processing and circuit traces. Large amounts of negative space are used not just for aesthetics, but to create "breathing room" between dense data clusters, ensuring the user feels in control rather than overwhelmed.

## Colors
The palette is anchored by **Deep Slate (#0F172A)**, providing a sophisticated, low-light foundation that evokes the feeling of a secure command center. 

**Cyber Blue (#38BDF8)** serves as the primary action color, used for interactive elements, focus states, and primary navigation. **Emerald Green (#10B981)** is utilized for "Safe" statuses, successful connections, and uptime metrics. A tertiary **Rose Red (#F43F5E)** is reserved strictly for high-severity alerts, vulnerabilities, and destructive actions. Background surfaces should use subtle shifts in slate values (shifting toward #1E293B) to differentiate between navigation and content areas.

## Typography
This design system utilizes **Inter** for all primary UI text to ensure maximum legibility and a systematic, neutral feel. To lean into the technical nature of cybersecurity, **JetBrains Mono** is introduced for labels, status indicators, and code snippets, providing a distinct "data-driven" texture.

Headlines should be kept concise and use tighter letter spacing for a modern, assertive look. Body text maintains standard spacing for readability. Small labels and data points should always be in uppercase when using the monospaced font to emphasize their role as metadata.

## Layout & Spacing
The layout follows a **Strict Fluid Grid** model based on a 4px baseline. On desktop, a 12-column grid is used with generous 48px outer margins to create a focused "dashboard" feel. 

Spacing is used to group related security metrics. Smaller increments (4px, 8px) are reserved for internal component spacing, while larger increments (24px, 40px) define the boundaries between different functional modules. Grid lines (1px width, low opacity) can be used as visual dividers to reinforce the "structured data" theme. On mobile, the grid collapses to 4 columns with 16px margins, prioritizing vertical stack order for critical alerts.

## Elevation & Depth
In this design system, depth is communicated through **Tonal Layering and Low-Contrast Outlines** rather than heavy shadows. 

1.  **Level 0 (Base):** Deep Slate (#0F172A) - The background canvas.
2.  **Level 1 (Cards/Panels):** A slightly lighter slate (#1E293B) with a subtle 1px border (#334155).
3.  **Level 2 (Popovers/Modals):** Lighter still (#1E293B) with a faint Cyber Blue tinted outer glow (0px 4px 20px rgba(56, 189, 248, 0.15)).

Avoid traditional drop shadows. Instead, use "inner glows" or thin borders to define edges, maintaining a crisp, architectural feel.

## Shapes
The shape language is **Technical and Precise**. We use a "Soft" roundedness profile (4px) for most components to balance modern UI trends with the rigidity expected of a security tool. 

- **Standard Buttons & Inputs:** 4px radius.
- **Large Container/Cards:** 8px radius.
- **Status Tags:** 2px radius (near-sharp) to differentiate them from interactive buttons.
- **Icons:** Should use consistent 2px stroke weights and sharp joins where possible to match the technical aesthetic.

## Components
- **Buttons:** Primary buttons are solid Cyber Blue with white or dark slate text. Secondary buttons are outlined with a 1px border. All buttons use a subtle "glow" transition on hover.
- **Input Fields:** Darker than the card background with a 1px border that turns Cyber Blue on focus. Use monospaced font for technical inputs (IP addresses, hashes).
- **Cards:** Use a 1px border (#334155). Header areas of cards should have a subtle background tint or a faint grid-pattern watermark.
- **Chips/Status:** Use the monospaced label-sm font. Emerald for "Secure," Rose for "Threat," and Amber for "Warning."
- **Data Tables:** High density with no vertical grid lines—only horizontal dividers. Row hovering should trigger a subtle Cyber Blue highlight on the left edge.
- **Threat Indicator:** A specialized component using a radial gradient and Cyber Blue/Rose Red accents to visualize real-time attack vectors.