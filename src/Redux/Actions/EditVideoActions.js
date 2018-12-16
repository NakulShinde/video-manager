import {apiHasErrored, apiIsLoading, updateAuthorAPI} from './CommonActions'
import {fetchVideoList} from './VideoListActions'

export function selectVideo(video) {
    return {type: 'VIDEO_SELECT_SUCCESS', data: video};
}

export function getVideoFromId(videoId) {

    return (dispatch, getState) => {
        dispatch(apiIsLoading(true));

        const {videoList} = getState().appData;
        if (videoList.hasOwnProperty(videoId)) {
            dispatch(apiIsLoading(false));
            dispatch(selectVideo(videoList[videoId]));
        } else if (Object.keys(videoList).length === 1) {
            //videoList has 'allIds' as default key
            dispatch(fetchVideoList());
            // dispatch same action after 500ms. Till that time store must update with
            // videoList
            setTimeout(() => {
                dispatch(getVideoFromId(videoId));
            }, 500);
        } else {
            dispatch(apiIsLoading(false))
            dispatch(apiHasErrored(true))
        }
    }
}

export function updateVideoData(videoData) {
    return (dispatch, getState) => {
        dispatch(apiIsLoading(true));

        const {originalDbData} = getState().appData;

        updateAuthorAPI(videoData, originalDbData, "update-mode").then((response) => {
            dispatch(apiIsLoading(false));
            dispatch(apiHasErrored(false));
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }).then((response) => response.json()).then((items) => {
            dispatch(apiIsLoading(false));
            for (let index in items.videos) {
                if (items.videos[index].id === videoData.id) {
                    dispatch(selectVideo(items.videos[index]));
                    break;
                }
            }
        }).catch(() => {
            dispatch(apiIsLoading(false))
            dispatch(apiHasErrored(true))
        });
    }
}