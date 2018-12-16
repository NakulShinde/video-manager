import React from 'react';
import renderer from "react-test-renderer";
import {shallow, mount} from 'enzyme';
import {MemoryRouter} from "react-router-dom";

import VideoForm from './VideoForm';
import {authorList, movieCategories} from './../../Utils/UnitTestsData'
import {getValuesArrayExceptAllIdsValue} from './../../Utils/Utils'
import {CustomButton} from '../Buttons/Buttons';
import {FormFieldTextInput, FormFieldSelect, FormFieldSelectMultiple} from '../FormFields/FormFields';
// create props to initialize
const props = {
    updateVideoDetails: jest.fn(),
    authorList: getValuesArrayExceptAllIdsValue(authorList),
    categoryList: getValuesArrayExceptAllIdsValue(movieCategories)
}
const fakeEvent = {
    preventDefault: () => console.log('preventDefault')
};
let myWrapper;
beforeEach(() => {
    myWrapper = mount(
        <MemoryRouter>
            <VideoForm {...props}/>
        </MemoryRouter>
    )
})

it("renders VideoForm snapshot correctly", () => {
    const tree = renderer
        .create(myWrapper)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("VideoForm components & elements checks", () => {

    const inputComp = myWrapper.find(FormFieldTextInput);
    expect(inputComp.length).toBe(1);
    const selectComp = myWrapper.find(FormFieldSelect);
    expect(selectComp.length).toBe(1);
    const mselectComp = myWrapper.find(FormFieldSelectMultiple);
    expect(mselectComp.length).toBe(1);
    const cbutton = myWrapper.find(CustomButton);
    expect(cbutton.length).toBe(1);

    const input = myWrapper.find('input');
    expect(input.length).toBe(1);
    const select = myWrapper.find('select');
    expect(select.length).toBe(2);
    const button = myWrapper.find('button');
    expect(button.length).toBe(2);
});

it("VideoForm onchage called on onSubmitHandler", () => {

    const videoForm = myWrapper.find(VideoForm);
    expect(videoForm.length).toBe(1);

    const submit = videoForm.find('button#submit');
    expect(submit.length).toBe(1);

    submit.simulate('click', fakeEvent)
    expect(props.updateVideoDetails)
        .not
        .toHaveBeenCalled();

    videoForm.setState({name: 'hello', author: '11', catIds: ['22']})
    
    submit.simulate('click', fakeEvent)
    expect(props.updateVideoDetails).toHaveBeenCalled();

});