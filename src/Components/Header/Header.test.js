import React from 'react';
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import {shallow} from 'enzyme';

import {Header} from './Header';

let wrapper;
beforeEach(() => {
    wrapper = shallow(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    )
})

it("renders Header snapshot correctly", () => {
    const tree = renderer
        .create(wrapper)
        .toJSON();
    expect(tree).toMatchSnapshot();
});