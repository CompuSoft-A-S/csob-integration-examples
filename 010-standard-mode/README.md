# 010 — Standard mode

The simplest way to embed CSOB. The controller builds the entire page layout for you.

## What it demonstrates

- Loading the controller via a single `<script>` tag
- Configuring with `displayMode: 'STANDARD'`
- Letting CSOB handle all layout, styling, calendar, filters, result list, and cart

## Key configuration

```js
new csob.Controller({
    csobPortalKey: CSOB_PORTAL_KEY,
    csobHost: CSOB_HOST,
    displayMode: 'STANDARD',
    mainWrapper: '#csob-app',
    disableHeightCalc: true   // let the host page own the height (see below)
});
```

`CSOB_PORTAL_KEY` and `CSOB_HOST` come from `../config.js` (see the [root README](../README.md)). CSOB injects its own CSS and builds the complete booking interface inside the `mainWrapper` element.

## Container height

In `STANDARD` mode CSOB tries to auto-calculate the container height based on its content. In many embeddings this produces an awkward result (the container collapses or grows in unexpected ways). The recommended approach is to take control of the height yourself:

1. Set `disableHeightCalc: true` in the init options.
2. Give `#csob-app` an explicit height in CSS — e.g. `height: 100vh`, a fixed pixel value, or `min-height` matching your layout.

```css
#csob-app { height: 100vh; }
```

Leave `disableHeightCalc` off only if you specifically want CSOB's automatic height behaviour.
