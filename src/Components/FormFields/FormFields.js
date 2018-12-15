import React from 'react'
import styles from "./FormFields.module.scss"


export const FormLabel = props => {
  return (
    <div className={styles.formLabel}>
      <label>{props.label}</label>
    </div>
  );
};

export const FormFieldCustomData = props => {
    return (
        <div className={styles.formRow}>
            <FormLabel label={props.label}/>
            <div className={styles.formField}>{props.customField}</div>
        </div>
    );
};

export const FormFieldTextInput = props => {
    return (
      <FormFieldCustomData
        label={props.label}
        customField={
          <input
            id={props.elementId}
            name={props.elementName}
            className={props.customClass}
            onChange={props.onChangeHandler}
            value={props.value}
            type="text"
          />
        }
      />
    );
  };

export const FormFieldSelect = props => {
    return (
      	<FormFieldCustomData
        	label={props.label}
        	customField={
			<select
				id={props.elementId}
				name={props.elementName}
				className={props.customClass}
				onChange={props.onChangeHandler}
				value={props.value}
			>
				<option value="select_value">Select Author</option>
				{props.options.map((option, index)=>{
					return <option key={index} value={option.id}>{option.name}</option>
				})}
          	</select>
        	}
      	/>
    );
  };
export const FormFieldSelectMultiple = props => {
    return (
      	<FormFieldCustomData
        	label={props.label}
        	customField={
			<select
				id={props.elementId}
				name={props.elementName}
				className={props.customClass}
				onChange={props.onChangeHandler}
				value={props.value}
			multiple>
				{props.options.map((option, index)=>{
					return <option key={index} value={option.id}>{option.name}</option>
				})}
          	</select>
        	}
      	/>
    );
  };