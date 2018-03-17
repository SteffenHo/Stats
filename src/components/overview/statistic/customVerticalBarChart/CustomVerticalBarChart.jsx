import React, { Component } from 'react';
import { Accordion } from 'chayns-components';
import PropTypes from 'prop-types';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'
import { LAYOUT_VERTICAL } from '../../../utils/const';

export default class CustomVerticalBarChart extends Component {

    constructor() {
        super();
       
    }

    static propTypes = {
        data: PropTypes.any,
        height: PropTypes.number,
        showReferenceBar: PropTypes.bool
    }

    static defaultProps = {
        height: 400,
        showReferenceBar: false
    }
    
    
    render() {
        const {data, height, showReferenceBar} = this.props
        return (
            <ResponsiveContainer width="100%" height={height}>
                <BarChart
                    data={data}
                    layout={LAYOUT_VERTICAL}
                >
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category"/>
                    <Tooltip/>
                    {showReferenceBar ? <Bar dataKey="pv" fill="#8884d8" />: false}
                   <Bar dataKey="uv" fill="#82ca9d" /> 
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
