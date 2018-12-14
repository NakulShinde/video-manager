import React from 'react'

import VideoRow from './VideoRow/VideoRow'
import VideoHeader from './VideoListHeader/VideoListHeader'

import css_styles from './VideoList.module.scss'

const VideoList = (props) => {

    return <div className={css_styles.video__list}>

        <h2>Video List</h2>
        <VideoHeader {...props.task}></VideoHeader>
        <VideoRow {...props.task}></VideoRow>
        <VideoRow {...props.task}></VideoRow>
        <VideoRow {...props.task}></VideoRow>
        <VideoRow {...props.task}></VideoRow>
        <VideoRow {...props.task}></VideoRow>
    </div>
}

export default VideoList;