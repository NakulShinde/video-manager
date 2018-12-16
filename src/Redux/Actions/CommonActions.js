export function apiHasErrored(bool) {
    return {type: 'API_HAS_ERRORED', hasError: bool};
}

export function apiIsLoading(bool) {
    return {type: 'API_IS_LOADING', isLoading: bool};
}