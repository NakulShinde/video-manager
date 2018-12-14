import React from 'react'

import VideoList from './../../Components/VideoList/VideoList'

export const VideoListContainer = (props) => {
    const task = {
        title: 'asdasd',
        description: 'ADASDASDAD',
        status: 'ERTYUI',
        priority: 'HIGH',
        actions: 'Actions'
    };

    return <VideoList task={task}></VideoList>
}