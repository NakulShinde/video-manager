import React from 'react'
import { Link } from "react-router-dom";

import css_styles from './../VideoList.module.scss'
import {CustomButton} from '../../Buttons/Buttons';
import {VIDEO_CONTENT} from './../../../Utils/Constants'
import {getCategories, getHighQualityFormat} from './../../../Utils/Utils'
import buttonStyles from './../../Buttons/Buttons.module.scss'

const VideoRow = (props) => {
    const {authorList, video, onDeleteVideoClick, movieCategories} = props;
    const authorName = authorList[video.author].name;

    return <div className={css_styles.listRow}>
        <div data-label={VIDEO_CONTENT.name} className={css_styles.listCol}>{video.name}</div>
        <div data-label={VIDEO_CONTENT.author} className={css_styles.listCol}>{authorName}</div>
        <div data-label={VIDEO_CONTENT.categoryName} className={css_styles.listCol}>{getCategories(video.catIds, movieCategories)}</div>
        <div data-label={VIDEO_CONTENT.highQuality} className={css_styles.listCol}>{getHighQualityFormat(video.formats)}</div>
        <div data-label={VIDEO_CONTENT.releaseDate} className={css_styles.listCol}>{video.releaseDate}</div>
        <div
            data-label={VIDEO_CONTENT.options}
            className={`${css_styles.listCol} ${css_styles.listAction}`}>

            <Link to={`/edit-video/${video.id}`}>
                <CustomButton
                    text='Edit'
                    customClass={[buttonStyles.button]}
                    onClickHandler={() => {}}></CustomButton>
            </Link>
            <CustomButton
                text="Delete"
                customClass={[buttonStyles.button, buttonStyles.buttonDanger]}
                onClickHandler={(e)=> onDeleteVideoClick(video.id)}></CustomButton>
        </div>
    </div>
}
export default VideoRow