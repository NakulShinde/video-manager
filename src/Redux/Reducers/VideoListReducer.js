const initialState = {
    movieCategories: {
        allIds: []
    },
    videoList: {
        allIds: []
    }
}

export function VideoListReducer(state = initialState, action) {
    switch (action.type) {
        case 'VIDEO_DATA_LOAD_SUCCESS':
            return action.data;
        case 'VIDEO_DELETE':

            const newVideoList = state
                .videoList
                .allIds
                .reduce((newVideoList, videoId) => {
                    if (videoId !== action.videoId) {
                        newVideoList[videoId] = state.videoList[videoId]
                    }
                    return newVideoList
                }, {});
            newVideoList.allIds = Object.keys(newVideoList);

            return Object.assign({}, state, {videoList: newVideoList});
        default:
            return state
    }
}