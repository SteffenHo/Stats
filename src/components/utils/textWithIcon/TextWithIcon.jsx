import React, { Component } from 'react';
import './text-with-icon.scss';

export const TextWithIcon = (props) => {
    const {text, icon, customClassName} = props;
    const classNames = [customClassName];
    return(
        <div className="wrapper">
            <div  className="text">{text}</div>
            <i className={`fa fa-${icon} icon`}/>
        </div>
    )
};