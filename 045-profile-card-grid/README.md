# 045 — Profile result list as card grid

Pure-CSS transformation of the default CSOB profile result list (one horizontal row per item) into a responsive **card grid** (image on top, content below). No init options, no controller customization — only CSS overrides on top of CSOB's existing class names.

## What it demonstrates

- Turning the auto-layout result list into a responsive CSS Grid (`auto-fill, minmax(280px, 1fr)`)
- Restacking each `.csob-profile-container` (image / info / footer) **vertically** instead of horizontally
- Hiding CSOB's `.csob-profilelist-profile-splitter` so the grid stays dense
- Moving the price out of the footer and floating it as a **badge** in the top-right corner of the card image
- Promoting CSOB's "Se detaljer" description-toggle into a secondary **outlined button** in the footer, next to the primary **Book** button
- Showing that you can change the visual model of CSOB controls without writing any JavaScript

## Files

| File            | Purpose                                                 |
| --------------- | ------------------------------------------------------- |
| `index.html`    | Page layout (sidebar with filter + main result area)    |
| `card-grid.css` | The CSS rules that transform the result list into cards |

## How it works

The default result list has this structure:

```
#ProfileResultListWrapper
 └─ div (unclassed list container)
     ├─ .csob-profile-container             ← one result
     │   └─ .csob-profile-main-area
     │       ├─ .csob-profile-area-image    (image — left in default)
     │       ├─ .csob-profile-area-info     (title / description / metadata — middle)
     │       └─ .csob-profile-area-button   (dates / price / book button — right)
     ├─ .csob-profilelist-profile-splitter  ← visual separator between rows
     ├─ .csob-profile-container
     ├─ .csob-profilelist-profile-splitter
     └─ ...
```

Three CSS rules do the heavy lifting:

1. **Grid the list container** (selected via `:has()` so we don't need a CSOB-supplied class):

    ```css
    #ProfileResultListWrapper div:has(> .csob-profile-container) {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
    }
    ```

2. **Hide the splitter** so each row is a single grid cell:

    ```css
    .csob-profilelist-profile-splitter { display: none !important; }
    ```

3. **Stack the card contents vertically:**

    ```css
    .csob-profile-main-area { display: flex !important; flex-direction: column !important; }
    .csob-profile-area-image { width: 100% !important; aspect-ratio: 16 / 10; }
    .csob-profile-area-button { flex-direction: column !important; border-top: 1px solid #eee !important; }
    ```

Everything else is cosmetic polish (shadows, hover lift, button color, description line-clamp).

## Browser support

`:has()` is required for the grid-container selector. It works in all current Chromium, Firefox, and Safari versions (since 2023). For older browsers you can give the list container its own ID or class via a small JS shim and target that instead.

## See also

- [`040-custom-styling`](../040-custom-styling/) — the broader theming approach using CSS variables + targeted class overrides.
- [`060-full-site-integration`](../060-full-site-integration/) — example of integrating CSOB into a complete site layout.
