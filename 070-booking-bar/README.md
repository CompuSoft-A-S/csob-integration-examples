# 070 — Booking Bar

A compact search widget (the built-in CSOB Booking Bar) placed on a landing page. When the user selects dates and clicks "Search", it redirects to a results page using deep link query parameters.

## What it demonstrates

- **`bookingBarWrapper`** — renders the booking bar in a specified container
- **`bookingBarSettings`** — JSON object configuring the bar's elements and layout
- **`searchButton.searchUrl`** — URL the bar redirects to with query params appended
- Two "pages" in one file: landing page (bar only) → results page (full booking flow)
- The bar automatically appends `?from=dd-mm-yyyy&to=dd-mm-yyyy` to the `searchUrl`

1. The landing page shows only the booking bar (date pickers + search button)
2. Select dates and click "Search"
3. The page reloads with `?from=...&to=...` → switches to results view

## Key configuration

```js
new csob.Controller({
    csobPortalKey: CSOB_PORTAL_KEY,
    bookingBarWrapper: '#BookingBarWrapper',
    bookingBarSettings: {
        layout: 'horizontal',  // or 'vertical'
        elements: {
            datePickerFrom: {
                label: { text: 'Check-in' },
                placeholder: { text: 'Select date' }
            },
            datePickerTo: {
                label: { text: 'Check-out' },
                placeholder: { text: 'Select date' }
            },
            searchButton: {
                label: { text: 'Search' },
                searchUrl: '/booking/'  // URL to redirect to
            }
        }
    }
});
```

## Available booking bar elements

| Element key       | Description                                   |
| ----------------- | --------------------------------------------- |
| `datePickerFrom`  | Check-in date picker                          |
| `datePickerTo`    | Check-out date picker                         |
| `profileSelector` | Dropdown to select accommodation type/profile |
| `siteSelector`    | Dropdown to select site (multi-site portals)  |
| `typeSelector`    | Dropdown to select type                       |
| `filterSelector`  | Dropdown to select metadata filter            |
| `searchButton`    | Search button with redirect URL               |

## Related options

| Option                              | Description                           |
| ----------------------------------- | ------------------------------------- |
| `bookingBarOpenCsobHostInNewWindow` | If true, search opens in a new window |
| `bookingBarOnSearch`                | Event: fires when search is executed  |
| `bookingBarOnShow`                  | Event: fires when bar becomes visible |
| `bookingBarOnHide`                  | Event: fires when bar is hidden       |

## Use case

The booking bar lives on the homepage or in a hero section. It's a compact "call to action" that funnels users into the full booking flow on a separate (or same) page. The bar handles date validation and availability display, then redirects with the selected dates as query parameters.

## Production pattern

```
Homepage (booking bar)          Booking page (full CSOB)
┌────────────────────────┐      ┌──────────────────────────────┐
│  [Check-in] [Out] [Go] │ ───→ │  Calendar · Filter · Results │
│                        │      │  Cart · Checkout             │
└────────────────────────┘      └──────────────────────────────┘
         searchUrl = "/booking/"
```
