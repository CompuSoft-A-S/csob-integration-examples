# 015 — Shop mode

CSOB's built-in e-commerce style layout. Instead of the calendar-first `STANDARD` template, `SHOP` renders the booking flow as a product shop — top navigation bar, a scrollable product list with image cards, and a footer with payment icons.

## What it demonstrates

- Loading the controller via a single `<script>` tag
- Configuring with `displayMode: 'SHOP'`
- Letting CSOB build the entire shop UI (nav, product cards, cart, checkout) inside one container

## Key configuration

```js
new csob.Controller({
    csobPortalKey: CSOB_PORTAL_KEY,
    csobHost: CSOB_HOST,
    displayMode: 'SHOP',
    mainWrapper: '#csob-app'
});
```

`CSOB_PORTAL_KEY` and `CSOB_HOST` come from `../config.js` (see the [root README](../README.md)). CSOB injects its own CSS and builds the complete shop interface inside the `mainWrapper` element.

## Container height

`SHOP` mode sizes its inner scroll area (the product list) in pixels based on the wrapper's `offsetHeight`, minus the height of its own nav and footer bars. If the wrapper has no explicit height the scroll area collapses and no products are visible.

Give `#csob-app` a real height in CSS — full viewport, a fixed pixel value, or `min-height` matching your layout:

```css
#csob-app { height: 100vh; }
```

## Use case

Ideal when the booking offering is the main purpose of the page and you want a ready-made shop look without building your own layout. Pair with a single `compubookProfileId` to scope the shop to one area/site, or leave it out to show the full portal.
