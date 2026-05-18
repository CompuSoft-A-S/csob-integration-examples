# 025 — Modal mode

Booking opens as a fullscreen overlay triggered by a button click. The host page stays untouched until the user activates the modal.

## What it demonstrates

- `displayMode: 'MODAL'` configuration
- A trigger button that calls `controller.openModal(this)`
- Fullscreen overlay with built-in close button
- Minimal host page impact — no wrappers needed in the visible page

## How to run

```bash
# From the repository root
python -m http.server 8000
# Open http://localhost:8000/025-modal-mode/
```

## Key configuration

```js
var controller = new csob.Controller({
    csobPortalKey: CSOB_PORTAL_KEY,
    csobHost: CSOB_HOST,
    displayMode: 'MODAL',
    mainWrapper: '#csob-modal-wrapper'
});
```

The modal is opened programmatically:

```js
document.getElementById('openBooking').onclick = function () {
    controller.openModal(this);
};
```

## Use case

Ideal for pages where booking is secondary (landing pages, blog posts, event pages). The user clicks a CTA button and gets the full booking experience without leaving the page.
