import React, {Component} from 'react'
import {connect} from "react-redux";

import VideoList from './../../Components/VideoList/VideoList'

import {fetchVideoList} from './../../Redux/Actions/VideoListActions'

class VideoListContainer extends Component {

    componentDidMount() {
        this
            .props
            .fetchVideoList();
    }

    render() {
        const task = {
            title: 'asdasd',
            description: 'ADASDASDAD',
            status: 'ERTYUI',
            priority: 'HIGH',
            actions: 'Actions'
        };
        return (
            <VideoList
                videoList={this.props.videoList}
                movieCategories={this.props.movieCategories}
                task={task}></VideoList>
        )
    }
}

const mapStateToProps = state => {
    return {movieCategories: state.appData.movieCategories, videoList: state.appData.videoList};
};
const matchDispatchToProps = dispatch => {
    return {
        fetchVideoList: () => dispatch(fetchVideoList())
    };
};
export default connect(mapStateToProps, matchDispatchToProps)(VideoListContainer);
