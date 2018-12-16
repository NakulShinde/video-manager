import React, {Component} from 'react'
import {connect} from "react-redux";

import VideoForm from '../../Components/VideoForm/VideoForm';
import {getVideoFromId, updateVideoData} from './../../Redux/Actions/EditVideoActions'
import {getValuesArrayExceptAllIdsValue} from './../../Utils/Utils'

class EditVideoContainer extends Component {

    constructor() {
        super();

        this.updateVideoDetails = this
            .updateVideoDetails
            .bind(this);
    }
    componentDidMount() {
        let videoId = this.props.match.params["id"];
        this
            .props
            .getVideoFromId(videoId);
    }
    updateVideoDetails(newVideoData) {
        console.log("updateVideoDetails", newVideoData);
        this
            .props
            .updateVideoData(newVideoData)
    }
    render() {
        const {apiIsLoading, apiHadError, videoToEdit, authorList, movieCategories} = this.props;
        if (apiHadError) {
            return <div>
                <h2>Edit Video</h2>
                Error. Please try again later.</div>
        }

        const authorListOptions = getValuesArrayExceptAllIdsValue(authorList);
        const categoryListOptions = getValuesArrayExceptAllIdsValue(movieCategories);
        return (
            <div>
                <h2>Edit Video</h2>
                {apiIsLoading && <div>Loading...</div>}
                <VideoForm
                    updateVideoDetails={this.updateVideoDetails}
                    video={videoToEdit}
                    authorList={authorListOptions}
                    categoryList={categoryListOptions}
                    movieCategories={movieCategories}></VideoForm>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        videoToEdit: state.videoToEdit, 
        movieCategories: state.appData.movieCategories, 
        authorList: state.appData.authorList,
        apiIsLoading : state.apiIsLoading,
        apiHadError: state.apiHadError
    };
};
const matchDispatchToProps = dispatch => {
    return {
        getVideoFromId: (videoId) => dispatch(getVideoFromId(videoId)),
        updateVideoData: (videoData) => dispatch(updateVideoData(videoData))
    };
};
export default connect(mapStateToProps, matchDispatchToProps)(EditVideoContainer);
