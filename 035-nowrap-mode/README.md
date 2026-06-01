# 035 — No-wrap mode

`STANDARDNOWRAP` is the "no wrap" / base-component variant of `STANDARD`. CSOB renders the bare booking component **without its own outer wrapper/chrome**, so it drops straight into your own page layout as just another block-level element.

## What it demonstrates

- Configuring with `displayMode: 'STANDARDNOWRAP'`
- Embedding the booking component inside a host-owned page frame (header, max-width, card)
- Letting your own layout provide the surrounding chrome and height

## Key configuration

```js
new csob.Controller({
    csobPortalKey: CSOB_PORTAL_KEY,
    displayMode: 'STANDARDNOWRAP',
    mainWrapper: '#csob-app'
});
```

`CSOB_PORTAL_KEY` comes from `../config.js` (see the [root README](../README.md)). CSOB renders the booking UI inside `mainWrapper` without adding its own outer wrapper.

## STANDARD vs STANDARDNOWRAP

- **`STANDARD`** (see [010-standard-mode](../010-standard-mode/)) — CSOB owns the full container and renders its own outer wrapper/chrome.
- **`STANDARDNOWRAP`** — CSOB renders only the bare component. Your site provides the page frame (header, padding, max-width, background, card).

A matching shop variant exists too: `SHOPNOWRAP`.

## Container height

In no-wrap mode the host page owns the height. Give your container (or the surrounding card) a sensible height in CSS — `disableHeightCalc` is not needed here.

```css
.booking-card { min-height: 600px; }
```

## Use case

Ideal when your site already has its own layout system and you only want the booking UI itself — no CSOB wrapper around it.
