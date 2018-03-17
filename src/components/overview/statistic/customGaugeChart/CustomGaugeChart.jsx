import React, { Component } from 'react';
import { Accordion } from 'chayns-components';
import PropTypes from 'prop-types';
import {PieChart, Pie, Legend, Tooltip, ResponsiveContainer, LabelList} from 'recharts'
import { LAYOUT_VERTICAL } from '../../../utils/const';

export default class CustomGaugeChart extends Component {

    constructor() {
        super();
       
    }

    static propTypes = {
        data: PropTypes.any,
    }

    static defaultProps = {
    }
    
    
    render() {
        const {data, endAngle} = this.props
        return (
            <ResponsiveContainer width="100%" height={400}>
                <PieChart >
                    <Pie
                        data={data}
                        cx="50%" 
                        cy="50%"
                        innerRadius="50%"
                        outerRadius="80%"
                        endAngle={180}
                        fill="#82ca9d"
                        dataKey="value"
                        nameKey="name"
                        textAnchor="middle"
                        stroke="none"
                        label={(info)=>{console.log('info', info); return info.name === 'Erfolg' ? ( <text x={info.cx} y={info.cy} textAnchor="middle" fill={info.fill}>{info.value + '%'}</text>): ''}}
                    >
                    
                    </Pie>
                    <Tooltip/>
                </PieChart>
            </ResponsiveContainer>
        );
    }
}
