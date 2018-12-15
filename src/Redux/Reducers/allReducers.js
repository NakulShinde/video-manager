import {combineReducers} from 'redux';
import {VideoListReducer} from './VideoListReducer';
import {EditVideoReducer} from './EditVideoReducer'
/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

export default combineReducers({
    appData : VideoListReducer,
    videoToEdit : EditVideoReducer
});