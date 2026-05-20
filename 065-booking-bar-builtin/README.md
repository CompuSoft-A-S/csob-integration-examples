# 065 — Built-in Booking Bar

Comprehensive showcase of CSOB's built-in booking bar widget — a compact search component rendered by the controller itself. Demonstrates all available layouts, display modes, element types, and styling possibilities.

## What it demonstrates

- **`bookingBarWrapper`** — renders the booking bar in a specified container
- **`bookingBarSettings`** — full configuration of layout and elements
- All `layout` values: `'horizontal'` and `'vertical'`
- All `displayMode` values for date pickers: `'calendar'` (popup) and `'select'` (dropdown)
- All element types: `datePickerFrom`, `datePickerTo`, `varsSelector`, `typeSelector`, `searchButton`
- **`searchUrl`** — redirect to another page with query parameters instead of searching in-page
- **`profileListWrapper`** — render search results on the same page
- **`calendarShowAvailability`** — show availability data in the calendar
- **`calendarAutoSelectPeriod`** — auto-select N nights when arrival is picked
- **`allowSameDayBooking`** — control whether same-day bookings are allowed
- **Custom CSS theming** — fully restyled "fancy" bar with dark gradient, including the Pikaday calendar popup

## How to run

```bash
# From the repository root
python -m http.server 8000
# Open http://localhost:8000/065-booking-bar-builtin/
```

The page shows six bars side by side:

1. **Horizontal – calendar (with results)** — full bar with calendar pickers and on-page results
2. **Vertical – calendar** — same elements stacked vertically
3. **Horizontal – select** — date pickers rendered as `<select>` dropdowns
4. **Vertical – select** — same, stacked vertically
5. **With searchUrl** — search button redirects to a URL with `?from=…&to=…&vars=…` query params
6. **Custom styled bar** — fully restyled via CSS to demonstrate theming flexibility

## Requirements

The portal must have `bookingBarAllowed: true` in its server settings. This is **not** something you can set via init options — it must be enabled on the portal in the CompuSoft backend.

## Key configuration

```js
new csob.Controller({
    csobPortalKey: CSOB_PORTAL_KEY,
    csobHost: CSOB_HOST,
    bookingBarWrapper: '#BookingBar',
    profileListWrapper: '#Results',        // optional — for on-page results
    calendarShowAvailability: true,         // show availability in calendar
    calendarAutoSelectPeriod: 7,            // auto-select 7 nights on arrival pick
    bookingBarSettings: {
        layout: 'horizontal',               // or 'vertical'
        elements: {
            datePickerFrom: {
                displayMode: 'calendar',    // or 'select'
                label: { csprogId: 0, languages: [{ language: 'DA', text: 'Ankomst' }] }
            },
            datePickerTo: {
                displayMode: 'calendar',
                label: { csprogId: 0, languages: [{ language: 'DA', text: 'Afrejse' }] }
            },
            varsSelector: {
                vars: [
                    { var: 'AV', minValue: 0, maxValue: 6, label: { csprogId: 0, languages: [{ language: 'DA', text: 'Voksne' }] } },
                    { var: 'AB', minValue: 0, maxValue: 4, label: { csprogId: 0, languages: [{ language: 'DA', text: 'Børn' }] } }
                ],
                label: { csprogId: 0, languages: [{ language: 'DA', text: 'Gæster' }] },
                placeholder: { csprogId: 0, languages: [{ language: 'DA', text: 'Vælg antal' }] },
                placeholderSelected: { csprogId: 0, languages: [{ language: 'DA', text: '{0} person(er)' }] }
            },
            typeSelector: {
                types: [
                    { type: 'hytte', label: { csprogId: 0, languages: [{ language: 'DA', text: 'Hytte' }] } },
                    { type: 'lejlighed', label: { csprogId: 0, languages: [{ language: 'DA', text: 'Lejlighed' }] } }
                ],
                label: { csprogId: 0, languages: [{ language: 'DA', text: 'Type' }] }
            },
            searchButton: {
                searchUrl: '/booking/',     // optional — omit for on-page search
                label: { csprogId: 0, languages: [{ language: 'DA', text: 'Søg' }] }
            }
        }
    }
});
```

## Available elements

| Element key       | Description                                                                                          |
| ----------------- | ---------------------------------------------------------------------------------------------------- |
| `datePickerFrom`  | Check-in date picker (`displayMode`: `'calendar'` \| `'select'` \| `'selectWithRangeTextInYears'`)   |
| `datePickerTo`    | Check-out date picker (same `displayMode` values)                                                    |
| `varsSelector`    | Guest counter with one or more variables (e.g. `AV` adults, `AB` children) — popup with +/− steppers |
| `typeSelector`    | Dropdown to select accommodation type                                                                |
| `profileSelector` | Dropdown to select a specific profile (cabin model)                                                  |
| `siteSelector`    | Dropdown to select site (multi-site portals)                                                         |
| `filterSelector`  | Dropdown to select a metadata filter                                                                 |
| `searchButton`    | Search button — searches in-page, or redirects if `searchUrl` is set                                 |

## Display modes for date pickers

| Mode                           | Result                                           |
| ------------------------------ | ------------------------------------------------ |
| `'calendar'`                   | Input field + Pikaday popup calendar             |
| `'select'`                     | HTML `<select>` dropdown with available dates    |
| `'selectWithRangeTextInYears'` | Same as `select`, with date range shown in years |

## Search behavior

- **No `searchUrl`** — searches in-page; requires `profileListWrapper` to show results
- **With `searchUrl`** — redirects to the URL with query params appended (`?from=dd-mm-yyyy&to=dd-mm-yyyy&AV=2&AB=0&type=hytte`)
- **`useStandardShopUrl: true`** on `searchButton` — redirects to the standard shop URL configured on the portal

## Styling

CSOB renders the bar with these key classes (use these to target with CSS):

- `.csobBookingBarWrapper` — outer container (gets `.horizontal` or `.vertical` modifier)
- `.csob-item` — each field wrapper
- `.csob-field__input` — the actual input element
- `.csob-label` — the label above each field
- `.number__picker` — +/− stepper inside the `varsSelector` popup
- `.dropdown` — the popup container for `varsSelector`
- `.pika-single` — the Pikaday calendar popup (rendered on `<body>`, **not** inside the bar)

> **Pikaday gotcha:** the calendar popup is appended to `<body>`, so parent selectors like
> `.my-bar .pika-single` will not match. Use a JS-added marker class (see `index.html`'s
> `focusin` listener that tags the active calendar with `.pika-fancy`).

## Notes

- Using multiple controllers on the same page is **not recommended in production** — this example only does so to showcase all variants side by side.
- The bar without a `placeholder` falls back to showing the label text inside the input.
