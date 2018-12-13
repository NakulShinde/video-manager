import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

import css_styles from './App.module.scss';

import {Header} from './Components/Header/Header';
import {MainContainer} from './Containers/MainContainer/MainContainer';
import {Footer} from './Components/Footer/Footer';

class App extends Component {
    render() {
        return (
            <div className={css_styles.app}>
                <BrowserRouter>
                    <React.Fragment>
                        <Header></Header>
                        <MainContainer></MainContainer>
                        <Footer></Footer>
                    </React.Fragment>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
