# csob-integration-examples

Integration examples for Compusoft Online Booking V3 (CSOB).

## What is CSOB?

CSOB is a JavaScript booking framework that embeds into existing websites. It is loaded via a single script tag and controlled through a configuration object. No build tools or server-side setup required.

## Examples

Each folder is a self-contained example, numbered by complexity:

| Folder                                                    | Description                                                                                                                                                  |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`010-standard-mode`](010-standard-mode/)                 | Minimal setup — one script, one div, four config lines. CSOB handles all layout.                                                                             |
| [`015-shop-mode`](015-shop-mode/)                         | Shop display mode — CSOB renders the webshop (items, gift cards, vouchers) instead of the accommodation flow. Requires a webshop reg key.                     |
| [`020-custom-layout`](020-custom-layout/)                 | Host page owns layout via flexbox. CSOB controls placed into named wrapper containers.                                                                       |
| [`025-modal-mode`](025-modal-mode/)                       | Modal display mode — booking opens as a fullscreen overlay from a button click.                                                                              |
| [`027-deep-linking`](027-deep-linking/)                   | Deep linking — pre-set dates and filters via URL query parameters at init time.                                                                              |
| [`030-events-and-api`](030-events-and-api/)               | Interacting with the controller API — cart badge, language switcher, payment icons, legal links.                                                             |
| [`035-nowrap-mode`](035-nowrap-mode/)                     | No-wrap (base component) mode — `STANDARDNOWRAP` renders the bare booking component without CSOB's outer wrapper, dropped into your own page layout.          |
| [`040-custom-styling`](040-custom-styling/)               | Theming CSOB controls with CSS variables and targeted selectors.                                                                                             |
| [`045-profile-card-grid`](045-profile-card-grid/)         | Restyle the default profile result list into a responsive card grid — pure CSS, no JS.                                                                       |
| [`050-responsive-layout`](050-responsive-layout/)         | Responsive grid with Bootstrap (or any framework) + custom CSS overrides.                                                                                    |
| [`060-full-site-integration`](060-full-site-integration/) | Complete campsite website with CSOB embedded — navbar, hero, content, footer.                                                                                |
| [`065-booking-bar-builtin`](065-booking-bar-builtin/)     | Comprehensive showcase of CSOB's built-in booking bar — all layouts, display modes, elements, searchUrl redirect, and a fully custom-styled "fancy" variant. |
| [`070-booking-bar`](070-booking-bar/)                     | Custom HTML booking bar that redirects to a results page via deep link query params.                                                                         |

## Getting started

1. Clone or download this repository.
2. Copy `config.example.js` to `config.js` and add your portal key.
3. Serve the files through a local web server (do not open via `file://` — the controller loads external scripts that require HTTP/HTTPS).

### Serving locally

**Python** (built-in, no install needed):

```bash
cd csob-integration-examples
python -m http.server 8000
# Open http://localhost:8000/010-standard-mode/
```

**Node.js** (via npx, no global install needed):

```bash
cd csob-integration-examples
npx serve .
# Open the URL shown in the terminal
```

## Portal key

All examples load `config.js` from the repository root. This file is **gitignored** so your key is never committed.

Setup:

```bash
cp config.example.js config.js
```

Then edit `config.js` with your portal key:

```js
var CSOB_PORTAL_KEY = 'your-key-here';
```

A portal key is provided as part of your V3 subscription. Contact CompuSoft to obtain one.

## Requirements

- A modern browser (Chrome, Firefox, Safari, Edge)
- No build step, no npm, no dependencies on the host page
- The CSOB controller loads its own jQuery internally

## License

These examples are provided by CompuSoft A/S for integration reference purposes.
