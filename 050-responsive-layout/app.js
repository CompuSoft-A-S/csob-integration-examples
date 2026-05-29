(function () {
    'use strict';

    // ─── Initialize ────────────────────────────────────────────────────
    // Minimal setup — this demo focuses on layout and CSS, not API calls.
    var initOptions = {
        csobPortalKey: CSOB_PORTAL_KEY,

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
