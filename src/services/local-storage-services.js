const RECENT_SEARCH_LOCAL_KEY = 'recentSearches';

export function getSavedResults() {
    let data = localStorage.getItem(RECENT_SEARCH_LOCAL_KEY);
    if (!data) {
        return [
            // Totally didnt go through your linkedIn's :P
            { city: 'Moscow', state: 'Russia', country: 'RU' },
            { city: 'Oakville', state: 'ON', country: 'Canada' },
            { city: 'Athabasca', state: 'AB', country: 'Canada' },
        ];
    } else {
        return JSON.parse(data);
    }
}

export function saveSearchResults(data) {
    if (data.length >= 10) {
        alert(
            'love that you like using me so much but imma go ahead and slice your searches',
        );
        data.splice(0, 5);
    }
    localStorage.setItem(RECENT_SEARCH_LOCAL_KEY, JSON.stringify(data));
}
