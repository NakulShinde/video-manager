import React from 'react'
import {Route} from 'react-router-dom';

import './MainContainer.css'

import { AddVideoContainer } from '../AddVideoContainer/AddVideoContainer';
import { VideoListContainer } from '../VideoListContainer/VideoListContainer';

export const MainContainer = (props) => {
    return <main className="app__main__container">
        <Route exact path="/" component={VideoListContainer}/>
        <Route path="/add-video" component={AddVideoContainer}/>
    </main>
}