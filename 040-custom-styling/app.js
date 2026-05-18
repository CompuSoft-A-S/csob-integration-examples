(function () {
    'use strict';

    // ─── Initialize ────────────────────────────────────────────────────
    // Minimal setup — this demo focuses on CSS theming, not API interaction.
    var initOptions = {
        csobPortalKey: CSOB_PORTAL_KEY,
        csobHost: CSOB_HOST,

        // Wrappers (string selectors)
        errorPanelWrapper: '#ErrorPanelWrapper',
        initialCalendarWrapper: '#CalendarWrapper',
        secondaryCalendarWrapper: '#CalendarSmallWrapper',
        profileFilterWrapper: '#ProfileFilterWrapper',
        profileListWrapper: '#ProfileResultListWrapper',
        dealsCarouselWrapper: '#DealsCarouselWrapper',
        cartWrapper: '#CartWrapper'
    };

    setTimeout(function () {
        new csob.Controller(initOptions);
    });
})();
