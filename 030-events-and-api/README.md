# 030 — Events and API

Interacting with the CSOB controller API after initialization — reacting to events, reading cart data, switching language, and injecting custom UI elements.

## What it demonstrates

- **Cart watch**: `cartWatch` callback fires when items are added/removed — used to show a cart badge count
- **Language switcher**: Five buttons (DA/EN/DE/SE/NO) calling `controller.setLanguage()`
- **Callouts**: Permanent custom UI elements injected into the booking flow (payment icons, legal links, event info)
- **onReady callback**: Fires when the controller is fully loaded
- **Reload button**: Re-initializes the controller without page reload

## How to run

```bash
# From the repository root
python -m http.server 8000
# Open http://localhost:8000/030-events-and-api/
```

## Key API methods shown

```js
// Switch language
controller.setLanguage('en');

// Cart data in cartWatch callback
cartWatch: function (cartData) {
    // cartData.lines — array of cart items
    // cartData.totalPrice — formatted price string
}

// onReady fires when CSOB is fully loaded
onReady: function () {
    // Safe to interact with CSOB DOM
}
```

## Layout

- Top bar: language buttons + cart badge
- Center: CSOB booking interface
- Bottom corners: payment icon callout (left) + legal links callout (right)
- Center callout: event/info message

## Use case

Sites that need to react to booking state changes (update external cart widgets, track analytics events) or inject custom branded elements alongside the booking flow.
