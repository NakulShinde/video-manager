import {updateVideoAPI} from './../../Services/APIService'
import {parseVideoDataToDBData} from './../../Utils/VideoDataParser'

export function apiHasErrored(bool) {
    return {type: 'API_HAS_ERRORED', hasError: bool};
}

export function apiIsLoading(bool) {
    return {type: 'API_IS_LOADING', isLoading: bool};
}

export function updateAuthorAPI(videoData, originalDbData, mode) {

    let authorDataToUpdate = parseVideoDataToDBData(videoData, originalDbData, mode);
    if (Object.keys(authorDataToUpdate).length === 0) {
        throw Error("Error! authorDataToUpdate is empty");
    }
    return updateVideoAPI('/movie-authors', authorDataToUpdate)
}