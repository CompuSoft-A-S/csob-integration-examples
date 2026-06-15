(function () {
    function addDays(date, days) {
        var copy = new Date(date.getTime());
        copy.setDate(copy.getDate() + days);
        return copy;
    }

    function formatDate(date) {
        return String(date.getDate()).padStart(2, '0')
            + '-'
            + String(date.getMonth() + 1).padStart(2, '0')
            + '-'
            + date.getFullYear();
    }

    function getSummaryLabel(compuBookProfileId) {
        return compuBookProfileId ? compuBookProfileId : 'All profiles';
    }

    function applyProfileScope(scopeValue) {
        var searchParams = new URLSearchParams(window.location.search);
        var trimmedValue = (scopeValue || '').trim();

        searchParams.delete('cbpid');
        searchParams.delete('cbpids');

        if (trimmedValue) {
            if (trimmedValue.indexOf(',') !== -1) {
                searchParams.set('cbpids', trimmedValue);
            } else {
                searchParams.set('cbpid', trimmedValue);
            }
        }

        window.location.search = searchParams.toString();
    }

    document.addEventListener('DOMContentLoaded', function () {
        var searchParams = new URLSearchParams(window.location.search);
        var defaultFromDate = formatDate(addDays(new Date(), 21));
        var fromDate = searchParams.get('from') || defaultFromDate;
        var currency = searchParams.get('currency') || 'DKK';
        var compuBookProfileId = searchParams.get('cbpid') || '';
        var compuBookProfileIds = searchParams.get('cbpids') || '';
        var profileScopeValue = compuBookProfileIds || compuBookProfileId;
        var searchPeriods = '1:w,2:w,*1:m';
        var selectedFromDate = document.getElementById('SelectedFromDate');
        var selectedPeriods = document.getElementById('SelectedPeriods');
        var selectedProfile = document.getElementById('SelectedProfile');
        var profileScopeForm = document.getElementById('ProfileScopeForm');
        var profileScopeInput = document.getElementById('ProfileScopeInput');
        var initOptions = {
            csobPortalKey: CSOB_PORTAL_KEY,
            csobHost: typeof CSOB_HOST === 'string' ? CSOB_HOST : 'https://v3.onlinebooking.dk/',
            errorPanelWrapper: '#ErrorPanelWrapper',
            profileFilterWrapper: '#ProfileFilterWrapper',
            unitCalendarWrapper: '#UnitCalendarWrapper',
            cartWrapper: '#CartWrapper',
            unitCalendarDisplayMode: 1,
            unitCalendarSearchPeriods: searchPeriods,
            from: fromDate,
            currency: currency
        };

        if (compuBookProfileIds) {
            initOptions.compubookProfileIds = compuBookProfileIds.split(',').map(function (value) {
                return value.trim();
            }).filter(Boolean);
        } else if (compuBookProfileId) {
            initOptions.compubookProfileId = compuBookProfileId;
        }

        if (selectedFromDate) {
            selectedFromDate.textContent = fromDate;
        }

        if (selectedPeriods) {
            selectedPeriods.textContent = searchPeriods;
        }

        if (selectedProfile) {
            selectedProfile.textContent = getSummaryLabel(profileScopeValue);
        }

        if (profileScopeInput) {
            profileScopeInput.value = profileScopeValue;
        }

        if (profileScopeForm) {
            profileScopeForm.addEventListener('submit', function (event) {
                event.preventDefault();
                applyProfileScope(profileScopeInput ? profileScopeInput.value : '');
            });
        }

        new csob.Controller(initOptions);
    });
})();