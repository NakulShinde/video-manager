import React from 'react';
import {Link} from "react-router-dom";

import css_styles from './Header.module.scss';

export const Header = (props) => {
    return <header className={css_styles.app__header}>
        <div className={css_styles.title}>
            <Link to={'/'}>
                VManager
            </Link>
        </div>
        <div className={css_styles.link}>
            <Link to={'/'}>
                Home
            </Link>
        </div>
        <div className={css_styles.link}>
            <Link to={'/add-video'}>
                Add Video
            </Link>
        </div>
    </header>

}