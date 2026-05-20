# 040 — Custom styling

Theming CSOB with CSS variables and targeted selectors. Override colors, border-radius, shadows, and individual component styles without modifying the controller.

## What it demonstrates

- Custom CSS variables (`--brand-primary`, `--brand-secondary`, `--csob-radius`, `--csob-shadow`) applied to CSOB internals
- Targeting CSOB classes: `.csob-content`, `.csob-cal-*`, `.profile-filter-*`, `.btn`, `.cartLineItem`
- Targeting CSOB containers by attribute: `div[name="CalendarContainer"]`, etc.
- An info panel explaining the approach

## Files

| File         | Purpose                                                      |
| ------------ | ------------------------------------------------------------ |
| `index.html` | Page structure and CSOB wrapper divs                         |
| `theme.css`  | CSS variable definitions + targeted CSOB component overrides |
| `styles.css` | Host page layout styles                                      |
| `app.js`     | Controller initialization                                    |

## Approach

CSOB does not expose a theming API. Instead, you override its internal styles using CSS specificity:

```css
:root {
    --brand-primary: #e9168c;
    --brand-secondary: #8ec449;
}

.csob-content .btn {
    background-color: var(--brand-primary);
    border-radius: var(--csob-radius);
}
```

## CSOB official CSS variables

CSOB also supports a few built-in variables (set on `:root`):

- `--csob-template-main-color` (RGB values, e.g. `113, 138, 178`)
- `--csob-border-radius-large` (default: `4px`)
- `--csob-border-radius-medium` (default: `3px`)
- `--csob-border-radius-small` (default: `2px`)

## Use case

Brands that need CSOB to match their visual identity — custom colors, rounded corners, shadows, button styles — without forking the controller CSS.
