const initialState = {}
export function EditVideoReducer(state = initialState, action) {
    switch (action.type) {
        case 'VIDEO_SELECT_SUCCESS':
            return {...action.data};
        default:
            return state
    }
}