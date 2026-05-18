# csob-integration-examples

Integration examples for Compusoft Online Booking V3 (CSOB).

## What is CSOB?

CSOB is a JavaScript booking framework that embeds into existing websites. It is loaded via a single script tag and controlled through a configuration object. No build tools or server-side setup required.

## Examples

Each folder is a self-contained example, numbered by complexity:

| Folder                                    | Live demo                                                                            | Description                                                                            |
| ----------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| [`010-standard-mode`](010-standard-mode/) | [demo](https://compusoft-a-s.github.io/csob-integration-examples/010-standard-mode/index.html) | Minimal setup — one script, one div, four config lines. CSOB handles all layout.       |
| [`020-custom-layout`](020-custom-layout/) | [demo](https://compusoft-a-s.github.io/csob-integration-examples/020-custom-layout/index.html) | Host page owns layout via flexbox. CSOB controls placed into named wrapper containers. |

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
var CSOB_HOST = 'https://v3.onlinebooking.dk/';
```

A portal key is provided as part of your V3 subscription. Contact CompuSoft to obtain one.

## Requirements

- A modern browser (Chrome, Firefox, Safari, Edge)
- No build step, no npm, no dependencies on the host page
- The CSOB controller loads its own jQuery internally

## License

These examples are provided by CompuSoft A/S for integration reference purposes.
