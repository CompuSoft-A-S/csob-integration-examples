# 060 — Full site integration

A complete "CompuSoft Camping" website with CSOB fully embedded — navbar, hero carousel, sidebar navigation, booking results, news section, and footer.

## What it demonstrates

- Full website layout with CSOB as part of a larger page (not the only content)
- **Navbar**: Logo, navigation links, language switcher (DA/EN/DE), cart button
- **Sidebar**: Menu links, compact calendar, profile filter
- **Main content**: Image carousel, CSOB results, news cards
- **Footer**: Payment icons, terms/privacy links
- Cart toggle (show/hide)
- Language switching via `controller.setLanguage()`
- `cartWatch` for real-time cart badge updates
- CSS to hide MonthTracker and force compact calendar in sidebar
- `onReady` callback to get card image URLs

## How to run

```bash
# From the repository root
python -m http.server 8000
# Open http://localhost:8000/060-full-site-integration/
```

## Files

| File         | Purpose                                                    |
| ------------ | ---------------------------------------------------------- |
| `index.html` | Complete page structure — navbar, sidebar, main, footer    |
| `styles.css` | All layout styles + CSOB overrides (compact cal, etc.)     |
| `app.js`     | Controller init, cart toggle, language switcher, callbacks  |

## Layout

```
┌─────────────────────────────────────────────────────────┐
│  Navbar: Logo │ Menu │ Lang buttons │ Cart badge        │
├─────────┬───────────────────────────────────────────────┤
│ Sidebar │  Hero carousel                                │
│ - Menu  │  ───────────────────────────────              │
│ - Cal   │  CSOB Results (profile list)                  │
│ - Filter│  ───────────────────────────────              │
│         │  News cards                                   │
├─────────┴───────────────────────────────────────────────┤
│  Footer: Payment icons │ Terms │ Privacy                │
└─────────────────────────────────────────────────────────┘
```

## Use case

The "production-ready" reference. Shows how a real campsite or hotel website would integrate CSOB alongside marketing content, navigation, and branding — all in one seamless page.
