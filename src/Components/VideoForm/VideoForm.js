import React, {Component} from 'react'
import {Link} from "react-router-dom";

import css_styles from './VideoForm.module.scss'
import buttonStyles from './../Buttons/Buttons.module.scss'

import {FormFieldTextInput, FormFieldSelect, FormFieldSelectMultiple} from '../FormFields/FormFields'
import {FORM_FIELDS} from './../../Utils/Constants'
import {CustomButton} from './../Buttons/Buttons'

class VideoForm extends Component {
    constructor(props) {
        super(props);
        this.deafultState = {
            name: '',
            author: '',
            catIds: []
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
            this.setState({
                ...newProps.video
            });
        }
    }
    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        if (name !== 'catIds') {
            this.setState({[name]: value});
        } else {
            this.setState((prev, next) => {
                let newCategory = [];
                if (prev[name].indexOf(value) === -1) {
                    newCategory = Array.from(prev[name]);
                    newCategory.push(value);
                } else {
                    newCategory = prev[name].filter(val => val !== value);
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
        const {authorList, categoryList} = this.props;
        return (
            <div className={css_styles.formContainer}>
                <form id="video_form">
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
                        options={authorList}></FormFieldSelect>
                    <FormFieldSelectMultiple
                        label={FORM_FIELDS.category}
                        elementId="catIds"
                        elementName="catIds"
                        customClass={error["catIds"]
                        ? css_styles.errorField
                        : ""}
                        onChangeHandler={this.handleUserInput}
                        value={this.state["catIds"]}
                        options={categoryList}></FormFieldSelectMultiple>
                    <div className={css_styles.formRowFooter}>
                        <CustomButton
                            id="submit"
                            customClass={[buttonStyles.button, buttonStyles.bigButton]}
                            onClickHandler={(e) => {
                            e.preventDefault();
                            this.onSubmitHandler();
                        }}
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