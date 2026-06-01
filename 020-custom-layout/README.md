# 020 — Custom layout (wrapper mode)

The host page owns the layout. Each CSOB control is placed into a specific container you define.

## What it demonstrates

- Three-column flexbox layout with CSOB controls mapped to named wrappers
- Host content areas (header, footer, sidebars) coexisting with CSOB controls
- Visual labels showing which areas belong to the host vs. CSOB
- All available wrapper options: `cartWrapper`, `errorPanelWrapper`, `initialCalendarWrapper`, `secondaryCalendarWrapper`, `profileFilterWrapper`, `profileListWrapper`, `dealsCarouselWrapper`

## Key configuration

```js
new csob.Controller({
    csobPortalKey: CSOB_PORTAL_KEY,
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
