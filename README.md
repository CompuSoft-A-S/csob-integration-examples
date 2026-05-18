# csob-integration-examples

Integration examples for Compusoft Online Booking V3 (CSOB).

## What is CSOB?

CSOB is a JavaScript booking framework that embeds into existing websites. It is loaded via a single script tag and controlled through a configuration object. No build tools or server-side setup required.

## Examples

| File | Description |
|------|-------------|
| `demo1-quick-start.html` | Minimal setup using `displayMode: 'STANDARD'`. One script, one div, four config lines. CSOB handles all layout and styling. |
| `demo2-custom-layout.html` | Wrapper-based integration where the host page owns the layout. Each CSOB control is placed into a specific container via CSS flexbox. Includes visual labels showing host vs. CSOB areas. |

## Getting started

1. Clone or download this repository.
2. Open any `.html` file directly in a browser, or serve them with any static file server.
3. Replace `YOUR-PORTAL-KEY` (or the demo key) with your own portal key from CompuSoft.

## Portal key

A portal key is required to use CSOB. It is provided as part of your V3 subscription. Contact CompuSoft to obtain one.

## Documentation

See `intro.md` in this repository for a full developer introduction covering:

- Standard mode vs. wrapper mode
- Layout ownership model
- Controller API (methods and watches)
- Communication flow with the CSOB WebAPI

## Requirements

- A modern browser (Chrome, Firefox, Safari, Edge)
- No build step, no npm, no dependencies on the host page
- The CSOB controller loads its own jQuery internally

## License

These examples are provided by CompuSoft A/S for integration reference purposes.
