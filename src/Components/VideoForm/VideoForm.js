import React, {Component} from 'react'
import {Link} from "react-router-dom";

import css_styles from './VideoForm.module.scss'
import buttonStyles from './../Buttons/Buttons.module.scss'

import {FormFieldTextInput, FormFieldSelect, FormFieldSelectMultiple} from '../FormFields/FormFields'
import {FORM_FIELDS, AUTHORS_LIST, VIDEO_CATEGORIES_LIST} from './../../Utils/Constants'
import {CustomButton} from './../Buttons/Buttons'

class VideoForm extends Component {
    constructor(props) {
        super(props);
        this.deafultState = {
            name: '',
            author: '',
            category: []
        }
        this.state = {
            ...this.deafultState
        };
        this.handleUserInput = this
            .handleUserInput
            .bind(this);
        this.onSubmitHandler = this
            .onSubmitHandler
            .bind(this)
    }
    componentWillReceiveProps(newProps) {
        if (this.props !== newProps) {
            let {video, movieCategories} = newProps;
            let category = [];
            for (const index in video.catIds) {
                let key = video.catIds[index];
                category.push(movieCategories[key].name.toLowerCase())
            }
            video.category = category;
            video.author = video
                .author
                .split(' ')
                .join('_')
                .toLowerCase()
            this.setState({
                ...video
            });
        }
    }
    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        if (name !== 'category') {
            this.setState({[name]: value});
        } else {
            this.setState((prev, next) => {
                let newCategory = [];
                if (prev[name].indexOf(value) === -1) {
                    newCategory = Array.from(prev[name]);
                    newCategory.push(value);
                } else {
                    newCategory = prev[name];
                }
                return {[name]: newCategory}
            })
        }
    }
    onSubmitHandler() {
        if (this.isValidForm()) {
            this
                .props
                .updateVideoDetails(this.state);
        }
    }
    isValidForm() {
        let errors = {};
        const fieldsToValidate = Object.keys(FORM_FIELDS);

        for (let index = 0; index < fieldsToValidate.length; index++) {
            let field = fieldsToValidate[index];
            let value = this.state[field];
            if (typeof value === "string" && value.trim() === "") {
                errors[field] = true;
            } else if (Array.isArray(value) && value.length === 0) {
                errors[field] = true;
            }
        }

        this.setState({
            error: {
                ...errors
            }
        });
        return !Object
            .keys(errors)
            .length;
    }

    render() {
        const error = this.state.error || {};
        return (
            <div className={css_styles.formContainer}>
                <form action="#" id="task_form">
                    <FormFieldTextInput
                        label={FORM_FIELDS.name}
                        elementId="name"
                        elementName="name"
                        customClass={error["name"]
                        ? css_styles.errorField
                        : ""}
                        onChangeHandler={this.handleUserInput}
                        value={this.state["name"]}></FormFieldTextInput>
                    <FormFieldSelect
                        label={FORM_FIELDS.author}
                        elementId="author"
                        elementName="author"
                        customClass={error["author"]
                        ? css_styles.errorField
                        : ""}
                        onChangeHandler={this.handleUserInput}
                        value={this.state["author"]}
                        options={AUTHORS_LIST}></FormFieldSelect>
                    <FormFieldSelectMultiple
                        label={FORM_FIELDS.category}
                        elementId="category"
                        elementName="category"
                        customClass={error["category"]
                        ? css_styles.errorField
                        : ""}
                        onChangeHandler={this.handleUserInput}
                        value={this.state["category"]}
                        options={VIDEO_CATEGORIES_LIST}></FormFieldSelectMultiple>
                    <div className={css_styles.formRowFooter}>
                        <CustomButton
                            id="submit"
                            customClass={[buttonStyles.button, buttonStyles.bigButton]}
                            onClickHandler={(e) => {
                            e.preventDefault();
                            this.onSubmitHandler();
                        }}
                            type="submit"
                            text="Save"></CustomButton>

                        <Link to={`/`}>
                            <button
                                id="cancel"
                                className={`${buttonStyles.button} ${buttonStyles.buttonBlueHollow} ${buttonStyles.bigButton}`}>
                                Cancel
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default VideoForm;