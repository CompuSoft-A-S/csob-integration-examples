(function () {
    'use strict';

    var controller = null;

    // ─── Cart watch callback ───────────────────────────────────────────
    // Called by the controller whenever the cart changes.
    // Use it to update your own UI (badge, mini-cart, etc.).
    function cartWatch(cart) {
        console.log('⚡ cartWatch', cart);
        var badge = document.getElementById('CartBadge');
        var button = document.getElementById('CartButton');
        if (cart && cart.cartTotalBookingCount > 0) {
            badge.textContent = '(' + cart.cartTotalBookingCount + ')';
            badge.classList.add('has-items');
            button.classList.add('clickable');
            showCallout('cartWatch fired — cart has ' + cart.cartTotalBookingCount + ' item(s)', button);
        } else {
            badge.textContent = 'Empty';
            badge.classList.remove('has-items');
            button.classList.remove('clickable');
        }
    }

    // ─── Finished callback ─────────────────────────────────────────────
    // Called once after the controller has fully initialized.
    // A good place to fetch supporting data from the API.
    function onReady() {
        console.log('⚡ onFinishedCallback');
        // Example: show supported payment method logos
        controller.getCardImageUrls(function (urls) {
            var container = document.getElementById('PaymentMethods');
            container.innerHTML = '';
            urls.forEach(function (url) {
                var img = document.createElement('img');
                img.src = url;
                img.alt = 'payment method';
                container.appendChild(img);
            });
        });
    }

    // ─── Controller API calls from your own UI ─────────────────────────

    // Show cart when badge is clicked (only if cart has items)
    document.getElementById('CartButton').addEventListener('click', function () {
        if (controller && document.getElementById('CartBadge').classList.contains('has-items')) {
            controller.showCart();
        }
    });

    // Language switcher
    document.getElementById('LanguageSelector').addEventListener('click', function (e) {
        var lang = e.target.getAttribute('data-lang');
        if (lang && controller) {
            // Valid values: da, se, no, en, de
            controller.setLanguage(lang);
        }
    });

    // Terms and conditions
    document.getElementById('TermsLink').addEventListener('click', function (e) {
        e.preventDefault();
        if (controller) {
            controller.showTermsAndConditions();
        }
    });

    // Privacy policy
    document.getElementById('PrivacyLink').addEventListener('click', function (e) {
        e.preventDefault();
        if (controller) {
            controller.showPrivacyPolicy();
        }
    });

    // ─── Initialize ────────────────────────────────────────────────────
    // Pass wrapper selectors as strings — the controller resolves them
    // internally once jQuery is available.
    var initOptions = {
        csobPortalKey: CSOB_PORTAL_KEY,

        // Wrappers (string selectors)
        errorPanelWrapper: '#ErrorPanelWrapper',
        initialCalendarWrapper: '#CalendarWrapper',
        secondaryCalendarWrapper: '#CalendarSmallWrapper',
        profileFilterWrapper: '#ProfileFilterWrapper',
        profileListWrapper: '#ProfileResultListWrapper',
        dealsCarouselWrapper: '#DealsCarouselWrapper',
        cartWrapper: '#CartWrapper',

        // Callbacks
        cartWatch: cartWatch,
        onFinishedCallback: onReady
    };

    // ─── Visual callout (demo helper) ────────────────────────────────
    // Shows a permanent tooltip with an arrow pointing at a target element.
    // Multiple callouts can coexist on the page.
    var calloutCounter = 0;
    var bottomCalloutOffset = 0; // stack bottom callouts vertically
    function showCallout(message, targetEl) {
        var callout = document.createElement('div');
        callout.className = 'demo-callout';
        callout.id = 'demo-callout-' + (++calloutCounter);
        callout.textContent = message;
        document.body.appendChild(callout);

        var rect = targetEl.getBoundingClientRect();
        var aboveHalf = rect.top < window.innerHeight / 2;

        if (aboveHalf) {
            // Arrow points up, callout below target
            callout.style.top = (rect.bottom + 12) + 'px';
            callout.style.right = (window.innerWidth - rect.right) + 'px';
            callout.classList.add('arrow-up');
        } else {
            // Arrow points down, callout above target — stack multiple
            var baseOffset = window.innerHeight - rect.top + 12;
            callout.style.bottom = (baseOffset + bottomCalloutOffset) + 'px';
            callout.style.left = rect.left + 'px';
            callout.classList.add('arrow-down');
            // Only first gets the arrow, stack rest above
            bottomCalloutOffset += callout.offsetHeight + 8;
        }
    }

    // Show permanent callouts immediately
    showCallout(
        'setLanguage(lang) — available languages depend on portal configuration',
        document.getElementById('LanguageSelector')
    );
    showCallout(
        'showCart() — opens the cart overlay (only when cart has items)',
        document.getElementById('CartButton')
    );

    setTimeout(function () {
        controller = new csob.Controller(initOptions);
    });
})();
