# 015 — Shop mode

CSOB renders the **webshop** instead of the accommodation booking flow. Use this to sell items, gift cards, vouchers and add-ons.

## What it demonstrates

- Configuring with `displayMode: 'SHOP'`
- Letting CSOB build the complete shop interface inside a single wrapper
- Taking control of the container height with `disableHeightCalc`

## Key configuration

```js
new csob.Controller({
    csobPortalKey: CSOB_PORTAL_KEY,
    displayMode: 'SHOP',
    mainWrapper: '#csob-app',
    disableHeightCalc: true   // let the host page own the height (see below)
});
```

`CSOB_PORTAL_KEY` comes from `../config.js` (see the [root README](../README.md)). CSOB injects its own CSS and builds the complete shop interface inside the `mainWrapper` element.

## Requires a webshop reg key

SHOP mode needs a webshop reg key on your portal (`CSPRODONLINESHOP` or `CSPRODONLINEV3PREM`). Without it CSOB shows an alert instead of the shop. Contact CompuSoft to enable it.

## Container height

In `SHOP` mode CSOB tries to auto-calculate the container height based on its content. The recommended approach is to take control of the height yourself:

1. Set `disableHeightCalc: true` in the init options.
2. Give `#csob-app` an explicit height in CSS — e.g. `height: 100vh`, a fixed pixel value, or `min-height` matching your layout.

```css
#csob-app { height: 100vh; }
```

Leave `disableHeightCalc` off only if you specifically want CSOB's automatic height behaviour.
