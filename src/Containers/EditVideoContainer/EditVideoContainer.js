import React, {Component} from 'react'
import {connect} from "react-redux";

import VideoForm from '../../Components/VideoForm/VideoForm';
import {getVideoFromId} from './../../Redux/Actions/EditVideoActions'
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
    }
    render() {
        const authorList = getValuesArrayExceptAllIdsValue(this.props.authorList);
        const categoryList = getValuesArrayExceptAllIdsValue(this.props.movieCategories);
        return (
            <div>
                <h2>Edit Video</h2>
                <VideoForm
                    updateVideoDetails={this.updateVideoDetails}
                    video={this.props.videoToEdit}
                    authorList={authorList}
                    categoryList={categoryList}
                    movieCategories={this.props.movieCategories}></VideoForm>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        videoToEdit: state.videoToEdit, 
        movieCategories: state.appData.movieCategories, 
        authorList: state.appData.authorList,
    };
};
const matchDispatchToProps = dispatch => {
    return {
        getVideoFromId: (videoId) => dispatch(getVideoFromId(videoId))
    };
};
export default connect(mapStateToProps, matchDispatchToProps)(EditVideoContainer);
