const BASE_URL = 'http://localhost:3004';

export function getDataFromAPI(API_ENDPOINT) {
    const URL = BASE_URL + API_ENDPOINT;
    return fetch(URL).then((res) => res.json())
}

export function updateVideoAPI(API_ENDPOINT, authorDataToUpdate) {
    const URL = `${BASE_URL}${API_ENDPOINT}/${authorDataToUpdate.id}`;
    return fetch(URL, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(authorDataToUpdate)
    })
}