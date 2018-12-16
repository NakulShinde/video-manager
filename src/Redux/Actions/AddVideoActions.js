
import {apiHasErrored, apiIsLoading, updateAuthorAPI} from './CommonActions'

export function addVideoData(videoData) {
    return (dispatch, getState) => {
        dispatch(apiIsLoading(true));
        
        const {originalDbData} = getState().appData;

        updateAuthorAPI(videoData, originalDbData, "add-mode").then((response) => {
            dispatch(apiIsLoading(false));
            dispatch(apiHasErrored(false));
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }).then((response) => response.json()).then((items) => {
            dispatch(apiIsLoading(false));

        }).catch(() => {
            dispatch(apiIsLoading(false))
            dispatch(apiHasErrored(true))
        });
    }
}