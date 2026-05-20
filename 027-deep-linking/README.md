# 027 — Deep linking

Pre-set dates, filters, profiles, and language via URL query parameters. The page parses the URL and passes values as `initOptions` to the controller.

## What it demonstrates

- Reading query params (`from`, `to`, `profileIds`, `profileItemId`, `siteId`, `lang`, `filter`) from the URL
- Passing them as `initOptions` to pre-configure the booking state
- A form to build and apply deep links (reloads the page with new params)
- Dynamic example links that always point to future dates
- Three-column layout: query builder | profile filter | booking results
- How `?filter=Name` affects the visible filter checkboxes vs. `profileIds` which only filters results

## Supported query parameters

| Param           | Init option      | Description                              |
| --------------- | ---------------- | ---------------------------------------- |
| `from`          | `from`           | Start date (dd-mm-yyyy)                  |
| `to`            | `to`             | End date (dd-mm-yyyy)                    |
| `profileIds`    | `profileIds`     | Comma-separated profile IDs              |
| `profileItemId` | `profileItemId`  | Deep-link to specific shop item          |
| `siteId`        | `siteId`         | Limit to site (multi-site portals)       |
| `lang`          | `language`       | UI language (en, da, de, se, no)         |
| `filter`        | _(read by CSOB)_ | Metadata filter name(s), comma-separated |

## Important notes

- **`filter`** is the only param that visually checks boxes in the filter panel.
- **`profileIds`** and **`profileItemId`** filter the result list but are NOT reflected in the filter checkboxes.
- The CSOB controller also reads `?filter=` directly from the URL — no need to pass it as an initOption.

## Use case

Email campaigns, ads, or partner pages that link directly to a specific date range and accommodation type. The user lands on a pre-filtered booking page ready to book.
