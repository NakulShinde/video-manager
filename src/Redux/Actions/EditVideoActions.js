import {updateVideoAPI} from './../../Services/APIService'
import {apiHasErrored, apiIsLoading} from './CommonActions'
import {parseVideoDataToDBData} from './../../Utils/VideoDataParser'

export function selectVideo(video) {
    return {type: 'VIDEO_SELECT_SUCCESS', data: video};
}

export function getVideoFromId(videoId) {

    return (dispatch, getState) => {
        const {videoList} = getState().appData;
        if (videoList.hasOwnProperty(videoId)) {
            dispatch(selectVideo(videoList[videoId]));
        }
    }
}

export function updateVideoData(videoData) {
    return (dispatch, getState) => {
        dispatch(apiIsLoading(true));

        const {originalDbData} = getState().appData;
        let authorDataToUpdate = parseVideoDataToDBData(videoData, originalDbData);
        if (Object.keys(authorDataToUpdate).length === 0) {
            dispatch(apiHasErrored(false))
            dispatch(apiHasErrored(true))
            return;
        }
        updateVideoAPI('/movie-authors', authorDataToUpdate).then((response) => {
            dispatch(apiHasErrored(false));
            dispatch(apiIsLoading(false));
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }).then((response) => response.json()).then((items) => {
            console.log('success', items)
            for(let index in items.videos){
                if(items.videos[index].id === videoData.id){
                    dispatch(selectVideo(items.videos[index]));
                    break;
                }
            }
        }).catch(() => {
            dispatch(apiHasErrored(false))
            dispatch(apiHasErrored(true))
        });
    }
}