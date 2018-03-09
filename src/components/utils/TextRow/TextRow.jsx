import React, { Component } from 'react';
import {TextWithIcon} from '../textWithIcon/TextWithIcon';
import './text-row.scss';

export const TextRow = (props) => {
    const {text, value, icon, customClassName} = props;
    const classNames = [customClassName];
    return(
        <div className="textRowWrapper">
            <div>{text}</div>
            <TextWithIcon
                text={value}
                icon={icon }
            />
        </div>
    )
};