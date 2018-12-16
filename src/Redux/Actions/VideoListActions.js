import {getDataFromAPI} from './../../Services/APIService'
import {parseDBVideoData} from './../../Utils/VideoDataParser'

export function videoDataLoadSuccess(videoData) {
    return {type: 'VIDEO_DATA_LOAD_SUCCESS', data: videoData};
}

export function deleteVideo(videoId) {
    return {type: 'VIDEO_DELETE', videoId: videoId};
}

export function fetchVideoList() {
    return (dispatch) => {

        Promise.all([getDataFromAPI('/movie-categories'), getDataFromAPI('/movie-authors')]).then(values => {
            let data = {
                "movie-categories": values[0],
                'movie-authors': values[1]
            };
            let parsedData = parseDBVideoData(data);
            Object.assign(parsedData, {originalDbData: data})
            dispatch(videoDataLoadSuccess(parsedData));
        }).catch(error => {
            console.log(error.message)
        });

    };
}