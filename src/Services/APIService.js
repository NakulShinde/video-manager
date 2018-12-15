const BASE_URL = 'http://localhost:3004';

export function getDataFromAPI(API_ENDPOINT) {
    const URL = BASE_URL + API_ENDPOINT;
    return fetch(URL).then((res) => res.json())
}