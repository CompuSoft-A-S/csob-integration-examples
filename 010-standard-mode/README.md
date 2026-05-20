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
    mainWrapper: '#csob-app'
});
```

Only four options are needed. CSOB injects its own CSS and builds the complete booking interface inside the `mainWrapper` element. `CSOB_PORTAL_KEY` and `CSOB_HOST` come from `../config.js` (see the [root README](../README.md)).
