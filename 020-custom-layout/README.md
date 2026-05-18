# 020 — Custom layout (wrapper mode)

The host page owns the layout. Each CSOB control is placed into a specific container you define.

## What it demonstrates

- Three-column flexbox layout with CSOB controls mapped to named wrappers
- Host content areas (header, footer, sidebars) coexisting with CSOB controls
- Visual labels showing which areas belong to the host vs. CSOB
- All available wrapper options: `cartWrapper`, `errorPanelWrapper`, `initialCalendarWrapper`, `secondaryCalendarWrapper`, `profileFilterWrapper`, `profileListWrapper`, `dealsCarouselWrapper`

## How to run

```bash
# From the repository root
python -m http.server 8000
# Open http://localhost:8000/020-custom-layout/
```

## Key configuration

```js
new csob.Controller({
    csobPortalKey: 'YOUR-PORTAL-KEY',
    csobHost: 'https://v3.onlinebooking.dk/',
    errorPanelWrapper: '#ErrorPanelWrapper',
    initialCalendarWrapper: '#CalendarWrapper',
    secondaryCalendarWrapper: '#CalendarSmallWrapper',
    profileFilterWrapper: '#ProfileFilterWrapper',
    profileListWrapper: '#ProfileResultListWrapper',
    dealsCarouselWrapper: '#DealsCarouselWrapper',
    cartWrapper: '#CartWrapper'
});
```

## Layout concept

```
┌─────────────────────────────────────────────────┐
│  Host header / navigation                       │
├────────┬────────────────────────────┬───────────┤
│ Filter │  Cart · Calendar · Results │  Deals    │
│        │                            │  (host)   │
│ (host) │                            │           │
├────────┴────────────────────────────┴───────────┤
│  Host footer                                    │
└─────────────────────────────────────────────────┘
```

Each wrapper selector (e.g. `#CalendarWrapper`) points to a `<div>` in your HTML. CSOB renders its controls inside those divs — everything else is yours to style.
