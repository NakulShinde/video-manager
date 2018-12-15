import {combineReducers} from 'redux';
import {videoListReducer} from './VideoListReducer';
/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

export default combineReducers({
    appData : videoListReducer
});