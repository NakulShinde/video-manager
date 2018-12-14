import React from 'react'

import css_styles from './../VideoList.module.scss'

const VideoHeader = (props) => {

    return <div className={[css_styles.listRow, css_styles.listHeader].join(' ')}>
        <div data-label={props.title} className={css_styles.listCol}>{props.title}</div>
        <div data-label={props.description} className={css_styles.listCol}>{props.description}</div>
        <div data-label={props.status} className={css_styles.listCol}>{props.status}</div>
        <div data-label={props.priority} className={css_styles.listCol}>{props.priority}</div>
        <div
            data-label={props.actions}
            className={[css_styles.listCol, css_styles.listAction].join(' ')}>Actions</div>
    </div>
}
export default VideoHeader