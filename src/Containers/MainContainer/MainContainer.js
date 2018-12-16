import React from 'react'
import {Route} from 'react-router-dom';

import css_styles from './MainContainer.module.scss'

import AddVideoContainer from '../AddVideoContainer/AddVideoContainer';
import VideoListContainer from '../VideoListContainer/VideoListContainer';
import EditVideoContainer from '../EditVideoContainer/EditVideoContainer';

export const MainContainer = (props) => {
    return <main className={css_styles.app__main__container}>
        <Route exact path="/" component={VideoListContainer}/>
        <Route path="/add-video" component={AddVideoContainer}/>
        <Route path="/edit-video/:id" component={EditVideoContainer}/>
    </main>
}