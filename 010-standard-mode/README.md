# 010 — Standard mode

The simplest way to embed CSOB. The controller builds the entire page layout for you.

## What it demonstrates

- Loading the controller via a single `<script>` tag
- Configuring with `displayMode: 'STANDARD'`
- Letting CSOB handle all layout, styling, calendar, filters, result list, and cart

## How to run

```bash
# From the repository root
python -m http.server 8000
# Open http://localhost:8000/010-standard-mode/
```

## Key configuration

```js
new csob.Controller({
    csobPortalKey: 'YOUR-PORTAL-KEY',
    csobHost: 'https://v3.onlinebooking.dk/',
    displayMode: 'STANDARD',
    mainWrapper: '#csob-app'
});
```

Only four options are needed. CSOB injects its own CSS and builds the complete booking interface inside the `mainWrapper` element.
