module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
      extend: {
          "colors": {
              "on-tertiary-fixed-variant": "#92002a",
              "on-primary-fixed": "#001e2c",
              "on-secondary-container": "#00311f",
              "surface-variant": "#2d3449",
              "on-secondary-fixed": "#002113",
              "on-error": "#690005",
              "secondary-fixed-dim": "#4edea3",
              "primary": "#8ed5ff",
              "secondary": "#4edea3",
              "surface-dim": "#0b1326",
              "tertiary": "#ffbcbf",
              "tertiary-fixed-dim": "#ffb2b7",
              "on-surface": "#dae2fd",
              "error-container": "#93000a",
              "surface-container-low": "#131b2e",
              "surface-container": "#171f33",
              "on-tertiary-fixed": "#40000d",
              "primary-fixed-dim": "#7bd0ff",
              "surface-bright": "#31394d",
              "inverse-on-surface": "#283044",
              "primary-container": "#38bdf8",
              "tertiary-fixed": "#ffdadb",
              "outline-variant": "#3e484f",
              "surface-container-highest": "#2d3449",
              "on-secondary-fixed-variant": "#005236",
              "on-background": "#dae2fd",
              "error": "#ffb4ab",
              "on-primary-container": "#004965",
              "surface": "#0b1326",
              "on-error-container": "#ffdad6",
              "on-secondary": "#003824",
              "primary-fixed": "#c4e7ff",
              "surface-tint": "#7bd0ff",
              "background": "#0f172a", /* Dark slate background */
              "on-primary": "#00354a",
              "inverse-surface": "#dae2fd",
              "on-tertiary-container": "#8c0028",
              "on-surface-variant": "#94a3b8", /* Lighter variant for contrast */
              "surface-container-high": "#1e293b",
              "on-primary-fixed-variant": "#004c69",
              "on-tertiary": "#67001b",
              "tertiary-container": "#ff929a",
              "surface-container-lowest": "#020617",
              "secondary-fixed": "#6ffbbe",
              "outline": "#475569", /* Adjusted outline */
              "inverse-primary": "#00668a",
              "secondary-container": "#00a572",
              /* Tech Accent Colors */
              "tech-orange": "#FF4D00",
              "tech-blue": "#FF4D00"
          },
          "borderRadius": {
              "DEFAULT": "0.125rem",
              "lg": "0.25rem",
              "xl": "0.5rem",
              "full": "0.75rem"
          },
          "spacing": {
              "xs": "4px",
              "lg": "24px",
              "sm": "8px",
              "base": "4px",
              "margin-mobile": "16px",
              "gutter": "24px",
              "margin-desktop": "48px",
              "xl": "40px",
              "md": "16px"
          },
          "fontFamily": {
              "headline-lg": ["Inter"],
              "label-md": ["JetBrains Mono"],
              "headline-md": ["Inter"],
              "display-lg": ["Inter"],
              "label-sm": ["JetBrains Mono"],
              "body-md": ["Inter"],
              "headline-lg-mobile": ["Inter"],
              "body-sm": ["Inter"],
              "body-lg": ["Inter"]
          },
          "fontSize": {
              "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600" }],
              "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.02em", "fontWeight": "500" }],
              "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
              "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
              "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "500" }],
              "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
              "headline-lg-mobile": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
              "body-sm": ["14px", { "lineHeight": "20px", "fontWeight": "400" }],
              "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }]
          }
      }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
