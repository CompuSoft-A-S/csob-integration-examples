# 055 - Unit Calendar

Dedicated example of CSOB's standalone **Unit Calendar** component. This is the per-unit availability view that renders its own date bar, period buttons, navigation, and unit rows inside a dedicated wrapper.

## What it demonstrates

- `unitCalendarWrapper` - container where the Unit Calendar renders
- `unitCalendarDisplayMode: 1` - switches from the standard profile-list result view to the Unit Calendar view
- `unitCalendarSearchPeriods` - configures the quick period buttons shown in the Unit Calendar picker area
- `profileFilterWrapper` - optional filters that can work alongside the Unit Calendar
- `cartWrapper` - selected stay/unit flows into the regular CSOB cart
- Optional public deep-link filtering via `?cbpid=...`, `?cbpids=...`, `?from=...`, and `?currency=...`

## Files

| File         | Purpose                                            |
| ------------ | -------------------------------------------------- |
| `index.html` | Host page layout with wrapper containers           |
| `styles.css` | Host page styling around the embedded calendar     |
| `app.js`     | Public CSOB init options and query-string handling |

## Key configuration

```js
new csob.Controller({
    csobPortalKey: CSOB_PORTAL_KEY,
    csobHost: CSOB_HOST,
    errorPanelWrapper: '#ErrorPanelWrapper',
    profileFilterWrapper: '#ProfileFilterWrapper',
    unitCalendarWrapper: '#UnitCalendarWrapper',
    cartWrapper: '#CartWrapper',
    unitCalendarDisplayMode: 1,
    unitCalendarSearchPeriods: '1:w,2:w,*1:m',
    from: '15-06-2026',
    currency: 'DKK'
});
```

## Styling approach

This example styles the host page around the component, but not the internal Unit Calendar classes themselves.

- The included stylesheet adds page layout, spacing, panels, and the small profile-scope form.
- It does not override internal CSOB Unit Calendar selectors such as `.csob-unit-calendar`, `.csob-unit-calendar-picker-area`, `.csob-unit-calendar-period-btns`, or `.csob-unit-calendar-profile-unit-area`.
- The calendar itself still renders with standard CSOB styling.

## `unitCalendarSearchPeriods`

The format is a comma-separated string of `<number>:<type>` values.

- `d` = day
- `w` = week
- `m` = month
- Prefix one value with `*` to make that period the default selection

Example:

```text
1:w,2:w,*1:m
```

That gives the user buttons for 1 week, 2 weeks, and 1 month, with 1 month preselected.

## Unit Calendar vs. `calendarShowAvailability`

These are not the same feature.

- **Unit Calendar / enhedskalender** is a dedicated component with its own wrapper, its own picker area, and a per-unit availability grid.
- **`calendarShowAvailability`** only augments the booking bar's date-picker popup with availability coloring. It does not render a standalone per-unit calendar component.

If the goal is a page like "show me each unit and its availability across a period", you want **Unit Calendar**, not booking bar availability.

## External profile selector pattern

This example includes a small host-page form that writes either `cbpid` or `cbpids` to the URL and reloads the page. That is the safe, public pattern to mimic a custom accommodation selector around the Unit Calendar.

- One profile: `?cbpid=123`
- Multiple profiles: `?cbpids=123,456,789`

The host-page selector is custom UI. The Unit Calendar component remains standard CSOB.

## Standard component vs. host-page customization

The Unit Calendar itself is a standard CSOB component.

- The rendered CSOB DOM uses Unit Calendar classes such as `.csob-unit-calendar`, `.csob-unit-calendar-picker-area`, `.csob-unit-calendar-period-btns`, and `.csob-unit-calendar-profile-unit-area`.
- The component is embedded in a dedicated wrapper container and renders its own picker area, navigation, and per-unit rows.

The surrounding page can still be customized by the integrator:

- The outer wrapper classes and page layout can be fully host-controlled.
- An accommodation selector can be implemented as host-page UI that decides which public profile filter values are passed into the calendar.
- That selector behavior is separate from the Unit Calendar component itself.

In other words: the calendar widget is standard CSOB Unit Calendar; the page framing around it can be custom integration work.

## Notes

- This example keeps to public CSOB options and query parameters only.
- If you want an external accommodation selector, let the host page change public inputs such as `cbpid`, `cbpids`, `compubookProfileId`, or `compubookProfileIds`, then reload or reinitialize the page with the new value.
- `unitCalendarWrapper` only becomes relevant when `unitCalendarDisplayMode` is enabled.