import React, {Component} from 'react'
import {connect} from "react-redux";

import VideoForm from '../../Components/VideoForm/VideoForm';
import {fetchVideoList} from './../../Redux/Actions/VideoListActions'
import {addVideoData} from './../../Redux/Actions/AddVideoActions'
import {getValuesArrayExceptAllIdsValue} from './../../Utils/Utils'

class AddVideoContainer extends Component {

    constructor() {
        super();

        this.addVideoDetails = this
            .addVideoDetails
            .bind(this);
    }
    componentDidMount() {
        this
            .props
            .fetchVideoList();
    }
    addVideoDetails(newVideoData) {
        //add hardcoded format data for new video
        //and random generated string as Id
        Object.assign(newVideoData, {
            id: Math.random().toString(36).substr(2, 12),
            formats: {
                one: {
                    res: '1080p',
                    size: 1000
                }
            },
            releaseDate: new Date()
                .toISOString()
                .substring(0, 10)
        })
        delete newVideoData.error;
        this
            .props
            .addVideoData(newVideoData)
    }
    render() {
        const {apiIsLoading, apiHadError, authorList, movieCategories} = this.props;
        if (apiHadError) {
            return <div>
                <h2>Add Video</h2>
                Error. Please try again later.</div>
        }

        const authorListOptions = getValuesArrayExceptAllIdsValue(authorList);
        const categoryListOptions = getValuesArrayExceptAllIdsValue(movieCategories);
        return (
            <div>
                <h2>Add Video</h2>
                {apiIsLoading && <div>Loading...</div>}
                <VideoForm
                    updateVideoDetails={this.addVideoDetails}
                    authorList={authorListOptions}
                    categoryList={categoryListOptions}
                    movieCategories={movieCategories}></VideoForm>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movieCategories: state.appData.movieCategories, 
        authorList: state.appData.authorList, 
        apiIsLoading: state.apiIsLoading, 
        apiHadError: state.apiHadError
    };
};
const matchDispatchToProps = dispatch => {
    return {
        fetchVideoList: () => dispatch(fetchVideoList()),
        addVideoData: (videoData) => dispatch(addVideoData(videoData))
    };
};
export default connect(mapStateToProps, matchDispatchToProps)(AddVideoContainer);
