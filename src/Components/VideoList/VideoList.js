import React from 'react'

import VideoRow from './VideoRow/VideoRow'
import VideoHeader from './VideoListHeader/VideoListHeader'

import css_styles from './VideoList.module.scss'

const VideoList = (props) => {
    const {authorList, movieCategories, onDeleteVideoClick, videoList} = props;
    return <div className={css_styles.video__list}>

        <VideoHeader></VideoHeader>
        {videoList
            .allIds
            .map((video, index) => <VideoRow
                key={index}
                authorList={authorList}
                video={videoList[video]}
                movieCategories={movieCategories}
                onDeleteVideoClick={onDeleteVideoClick}></VideoRow>)}
        {videoList.allIds.length === 0 && <div className={css_styles.listRow}>
            <div data-label="Video" className={css_styles.listCol}>Empty Video List</div>
        </div>}
    </div>
}

export default VideoList;