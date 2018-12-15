import React from 'react'

import css_styles from './../VideoList.module.scss'
import {CustomButton} from '../../Buttons/Buttons';
import {VIDEO_CONTENT} from './../../../Utils/Constants'
import {getCategories, getHighQualityFormat} from './../../../Utils/Utils'


const VideoRow = (props) => {
    const {video, movieCategories} = props;

    return <div className={css_styles.listRow}>
        <div data-label={VIDEO_CONTENT.name} className={css_styles.listCol}>{video.name}</div>
        <div data-label={VIDEO_CONTENT.author} className={css_styles.listCol}>{video.author}</div>
        <div data-label={VIDEO_CONTENT.categoryName} className={css_styles.listCol}>{getCategories(video.catIds, movieCategories)}</div>
        <div data-label={VIDEO_CONTENT.highQuality} className={css_styles.listCol}>{getHighQualityFormat(video.formats)}</div>
        <div data-label={VIDEO_CONTENT.releaseDate} className={css_styles.listCol}>{video.releaseDate}</div>
        <div
            data-label={VIDEO_CONTENT.options}
            className={`${css_styles.listCol} ${css_styles.listAction}`}>
            <CustomButton text='Edit'></CustomButton>
            <CustomButton text='Delete'></CustomButton>
        </div>
    </div>
}
export default VideoRow