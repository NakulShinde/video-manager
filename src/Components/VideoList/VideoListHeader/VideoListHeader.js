import React from 'react'

import css_styles from './../VideoList.module.scss'
import {VIDEO_CONTENT} from './../../../Utils/Constants'

const VideoHeader = (props) => {

    return <div className={`${css_styles.listRow} ${css_styles.listHeader}`}>
        <div data-label={VIDEO_CONTENT.name} className={css_styles.listCol}>{VIDEO_CONTENT.name}</div>
        <div data-label={VIDEO_CONTENT.author} className={css_styles.listCol}>{VIDEO_CONTENT.author}</div>
        <div data-label={VIDEO_CONTENT.categoryName} className={css_styles.listCol}>{VIDEO_CONTENT.categoryName}</div>
        <div data-label={VIDEO_CONTENT.highQuality} className={css_styles.listCol}>{VIDEO_CONTENT.highQuality}</div>
        <div data-label={VIDEO_CONTENT.releaseDate} className={css_styles.listCol}>{VIDEO_CONTENT.releaseDate}</div>
        <div
            data-label={VIDEO_CONTENT.options}
            className={`${css_styles.listCol} ${css_styles.listAction}`}>{VIDEO_CONTENT.options}</div>
    </div>
}
export default VideoHeader