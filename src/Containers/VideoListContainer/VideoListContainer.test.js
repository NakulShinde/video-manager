import React from 'react';
import renderer from "react-test-renderer";
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import {MemoryRouter} from "react-router-dom";
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);

import VideoListContainer from './VideoListContainer'
import {initialStoreState} from './../../Utils/UnitTestsData'

let wrapper;
let store;
beforeEach(() => {
    //creates the store with any initial state or middleware needed
    store = mockStore(initialStoreState)
    wrapper = shallow(
        <Provider store={store}>
            <MemoryRouter>
                <VideoListContainer/>
            </MemoryRouter>
        </Provider>
    )
})

it("renders VideoListContainer snapshot correctly", () => {
    const tree = renderer
        .create(wrapper)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
