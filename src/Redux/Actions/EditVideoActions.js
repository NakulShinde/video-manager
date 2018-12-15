export function selectVideo(video) {
    return {type: 'VIDEO_SELECT_SUCCESS', data: video};
}

export function getVideoFromId(videoId) {

    return (dispatch, getState) => {
        const {videoList} = getState().appData;
        if(videoList.hasOwnProperty(videoId)){
            dispatch(selectVideo(videoList[videoId]));
        }
    }
}