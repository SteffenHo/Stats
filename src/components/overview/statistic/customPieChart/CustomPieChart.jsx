import React, { Component } from 'react';
import { Accordion } from 'chayns-components';
import PropTypes from 'prop-types';
import {PieChart, Pie, Legend, Tooltip, ResponsiveContainer, LabelList} from 'recharts'
import { LAYOUT_VERTICAL } from '../../../utils/const';

export default class CustomPieChart extends Component {

    constructor() {
        super();
       
    }

    static propTypes = {
        data: PropTypes.any,
        endAngle: PropTypes.number
    }

    static defaultProps = {
        endAngle: 360
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
                        endAngle={endAngle}
                        fill="#82ca9d"
                        dataKey="value"
                        nameKey="name"
                        label={(info)=>{console.log('cartInfor', info); return `${info.name} ${info.value}`}}
                    >
                    
                    </Pie>
                    <Tooltip/>
                </PieChart>
            </ResponsiveContainer>
        );
    }
}
