const initialState = {
    movieCategories: {},
    videos: {}
}

export function videoListReducer(state = initialState, action) {
    switch (action.type) {
        case 'VIDEO_DATA_LOAD_SUCCESS':
            return action.data;     
        default:
            return state
    }
}