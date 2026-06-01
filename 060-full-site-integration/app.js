(function () {
    'use strict';

    var controller = null;

    // ─── Cart watch ────────────────────────────────────────────────────
    function cartWatch(cart) {
        var badge = document.getElementById('CartBadge');
        var button = document.getElementById('CartButton');
        if (cart && cart.cartTotalBookingCount > 0) {
            badge.textContent = '(' + cart.cartTotalBookingCount + ')';
            badge.classList.add('has-items');
            button.classList.add('has-items');
        } else {
            badge.textContent = 'Empty';
            badge.classList.remove('has-items');
            button.classList.remove('has-items');
        }
    }

    // ─── Finished callback ─────────────────────────────────────────────
    function onReady() {
        // Load payment method icons into footer
        controller.getCardImageUrls(function (urls) {
            var container = document.getElementById('PaymentMethods');
            container.innerHTML = '';
            urls.forEach(function (url) {
                var img = document.createElement('img');
                img.src = url;
                img.alt = 'payment method';
                img.style.height = '22px';
                img.style.marginRight = '4px';
                container.appendChild(img);
            });
        });
    }

    // ─── Cart toggle ───────────────────────────────────────────────────
    document.getElementById('CartButton').addEventListener('click', function () {
        if (!controller) return;
        if (document.getElementById('CartBadge').classList.contains('has-items')) {
            if (!controller.isCartVisible()) {
                controller.showCart();
            } else {
                controller.hideCart();
            }
        }
    });

    // ─── Language switcher ─────────────────────────────────────────────
    document.getElementById('LanguageSelector').addEventListener('click', function (e) {
        var lang = e.target.getAttribute('data-lang');
        if (lang && controller) {
            controller.setLanguage(lang);
        }
    });

    // ─── Terms & Privacy ───────────────────────────────────────────────
    document.getElementById('TermsLink').addEventListener('click', function (e) {
        e.preventDefault();
        if (controller) controller.showTermsAndConditions();
    });

    document.getElementById('PrivacyLink').addEventListener('click', function (e) {
        e.preventDefault();
        if (controller) controller.showPrivacyPolicy();
    });

    // ─── Initialize ────────────────────────────────────────────────────
    var initOptions = {
        csobPortalKey: CSOB_PORTAL_KEY,

        errorPanelWrapper: '#ErrorPanelWrapper',
        initialCalendarWrapper: '#CalendarWrapper',
        secondaryCalendarWrapper: '#CalendarSmallWrapper',
        profileFilterWrapper: '#ProfileFilterWrapper',
        profileListWrapper: '#ProfileResultListWrapper',
        dealsCarouselWrapper: '#DealsCarouselWrapper',
        cartWrapper: '#CartWrapper',

        cartWatch: cartWatch,
        onFinishedCallback: onReady
    };

    setTimeout(function () {
        controller = new csob.Controller(initOptions);
    });
})();
