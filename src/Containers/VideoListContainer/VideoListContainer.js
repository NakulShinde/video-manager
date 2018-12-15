import React, {Component} from 'react'
import {connect} from "react-redux";

import VideoList from './../../Components/VideoList/VideoList'

import {fetchVideoList, deleteVideo} from './../../Redux/Actions/VideoListActions'

class VideoListContainer extends Component {

    constructor() {
        super();
        this.onDeleteVideoClick = this
            .onDeleteVideoClick
            .bind(this)
    }

    componentDidMount() {
        this
            .props
            .fetchVideoList();
    }

    onDeleteVideoClick(videoId) {
        let result = window.confirm("Are you sure you want to delete the video?");
        if (result === true) {
            this
            .props
            .deleteVideo(videoId);
        }
    }

    render() {
        return (
            <VideoList
                videoList={this.props.videoList}
                movieCategories={this.props.movieCategories}
                authorList={this.props.authorList}
                onDeleteVideoClick={this.onDeleteVideoClick}></VideoList>
        )
    }
}

const mapStateToProps = state => {
    return {
        movieCategories: state.appData.movieCategories, 
        videoList: state.appData.videoList,
        authorList: state.appData.authorList
    };
};
const matchDispatchToProps = dispatch => {
    return {
        fetchVideoList: () => dispatch(fetchVideoList()),
        deleteVideo: (videoId) => dispatch(deleteVideo(videoId))
    };
};
export default connect(mapStateToProps, matchDispatchToProps)(VideoListContainer);
