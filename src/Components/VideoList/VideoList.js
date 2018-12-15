import React from 'react'

import VideoRow from './VideoRow/VideoRow'
import VideoHeader from './VideoListHeader/VideoListHeader'

import css_styles from './VideoList.module.scss'

const VideoList = (props) => {
    const {movieCategories, videoList} = props;
    return <div className={css_styles.video__list}>

        <h2>Video List</h2>
        <VideoHeader></VideoHeader>
        {videoList
            .allIds
            .map((video, index) => <VideoRow
                key={index}
                video={videoList[video]}
                movieCategories={movieCategories}></VideoRow>)}
    </div>
}

export default VideoList;