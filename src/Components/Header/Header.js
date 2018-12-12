import React from 'react';
import {Link} from "react-router-dom";

import './Header.css';

export const Header = (props) => {
    return <header className="app__header">
        <div className="title">
            <Link to={'/'}>
                VManager
            </Link>
        </div>
        <div className="link">
            <Link to={'/'}>
                Home
            </Link>
        </div>
        <div className="link">
            <Link to={'/add-video'}>
                Add Video
            </Link>
        </div>
    </header>

}