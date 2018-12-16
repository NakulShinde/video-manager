export function ApiHasError(state = false, action) {
    switch (action.type) {
        case 'API_HAS_ERRORED':
            return action.hasError;
        default:
            return state;
    }
}

export function ApiIsLoading(state = false, action) {
    switch (action.type) {
        case 'API_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}