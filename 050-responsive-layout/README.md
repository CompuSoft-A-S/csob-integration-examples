# 050 — Responsive layout

Responsive grid using Bootstrap 5 with CSOB controls mapped to grid cells. Shows that CSOB works inside any CSS framework.

## What it demonstrates

- Bootstrap 5 responsive grid (`col-md-*`) with CSOB wrappers in each cell
- Custom CSS overrides on top of Bootstrap for CSOB-specific adjustments
- Responsive breakpoints — layout reflows on mobile/tablet/desktop
- Info panel explaining that Bootstrap is optional (any grid framework works)

## Files

| File              | Purpose                                         |
| ----------------- | ----------------------------------------------- |
| `index.html`      | Bootstrap grid structure with CSOB wrapper divs |
| `custom-csob.css` | CSOB-specific overrides within the grid         |
| `styles.css`      | Additional host page styles                     |
| `app.js`          | Controller initialization with wrapper mappings |

## Layout

```
Desktop (≥992px):
┌──────────┬──────────────────────────┬──────────┐
│ Calendar │  Results                 │  Cart    │
│ Filter   │                          │          │
└──────────┴──────────────────────────┴──────────┘

Tablet (768–991px):
┌──────────────────┬─────────────────────────────┐
│ Calendar/Filter  │  Results + Cart             │
└──────────────────┴─────────────────────────────┘

Mobile (<768px):
┌─────────────────────────────────────────────────┐
│ Calendar → Filter → Results → Cart (stacked)    │
└─────────────────────────────────────────────────┘
```

## Use case

Sites already using Bootstrap, Tailwind, or another CSS framework that want to embed CSOB within their existing responsive grid system.
