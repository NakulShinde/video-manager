import React, {Component} from 'react'
import {connect} from "react-redux";

import VideoForm from '../../Components/VideoForm/VideoForm';
import {getVideoFromId} from './../../Redux/Actions/EditVideoActions'

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
    }
    render() {
        return (
            <div>
                <h2>Edit Video</h2>
                <VideoForm
                    updateVideoDetails={this.updateVideoDetails}
                    video={this.props.videoToEdit}
                    movieCategories={this.props.movieCategories}></VideoForm>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {videoToEdit: state.videoToEdit, movieCategories: state.appData.movieCategories};
};
const matchDispatchToProps = dispatch => {
    return {
        getVideoFromId: (videoId) => dispatch(getVideoFromId(videoId))
    };
};
export default connect(mapStateToProps, matchDispatchToProps)(EditVideoContainer);
