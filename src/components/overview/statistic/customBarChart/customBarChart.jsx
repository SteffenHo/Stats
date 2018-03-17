import React, { Component } from 'react';
import './custom-bar-chart.scss';
import { Accordion } from 'chayns-components';
import PropTypes from 'prop-types';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'

export default class CustomBarChart extends Component {

    constructor() {
        super();
       
    }

    static propTypes = {
        data: PropTypes.any,
    }

    static defaultProps = {
    }
    
    
    render() {
        const {data, layout} = this.props
        return (
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={data}
                >
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
