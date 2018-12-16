import React from 'react'

export const CustomButton = (props) => {
    return <button
        id={props.id}
        disabled={props.isDisable
        ? true
        : false}
        className={props
        .customClass
        .join(' ')}
        onClick={props.onClickHandler}>
        {props.text}
    </button>
}