import React, {Component} from 'react'
import {connect} from "react-redux";

import VideoList from './../../Components/VideoList/VideoList'
import {fetchVideoList, deleteVideo} from './../../Redux/Actions/VideoListActions'
import SearchField from '../../Components/SearchField/SearchField';

class VideoListContainer extends Component {

    constructor() {
        super();
        this.state = {
            searchText: ''
        }
        this.onDeleteVideoClick = this
            .onDeleteVideoClick
            .bind(this)
        this.onInputChange = this
            .onInputChange
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
    onInputChange(e) {
        this.setState({
            searchText: e
                .target
                .value
                .trim()
        })
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
        let {searchText} = this.state
        let filterdVideoList = {}
        if (searchText !== "") {

            videoList
                .allIds
                .reduce((list, index) => {

                    let video = videoList[index]
                    if (video.name.toLowerCase().indexOf(searchText) !== -1 || video.releaseDate.indexOf(searchText) !== -1) {
                        filterdVideoList[index] = video;
                    }
                    return list;
                }, {})

            filterdVideoList.allIds = Object.keys(filterdVideoList);
        } else {
            Object.assign(filterdVideoList, videoList);
        }
        return (
            <React.Fragment>
                <h2>Video List</h2>
                <SearchField
                    searchText={this.state.searchText}
                    onInputChange={this.onInputChange}></SearchField>
                <VideoList
                    videoList={filterdVideoList}
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
