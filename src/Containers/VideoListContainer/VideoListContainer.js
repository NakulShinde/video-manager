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
        const {apiIsLoading, apiHadError, videoList, authorList, movieCategories} = this.props;
        if (apiIsLoading || apiHadError) {
            return <div>
                <h2>Video List</h2>
                {apiIsLoading && <div>Loading...</div>}
                {apiHadError && <div>Error. Please try again later.</div>}
            </div>
        }
        return (
            <React.Fragment>
                <h2>Video List</h2>
                <VideoList
                    videoList={videoList}
                    movieCategories={movieCategories}
                    authorList={authorList}
                    onDeleteVideoClick={this.onDeleteVideoClick}></VideoList>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        movieCategories: state.appData.movieCategories, 
        videoList: state.appData.videoList,
        authorList: state.appData.authorList,
        apiIsLoading : state.apiIsLoading,
        apiHadError: state.apiHadError
    };
};
const matchDispatchToProps = dispatch => {
    return {
        fetchVideoList: () => dispatch(fetchVideoList()),
        deleteVideo: (videoId) => dispatch(deleteVideo(videoId))
    };
};
export default connect(mapStateToProps, matchDispatchToProps)(VideoListContainer);
