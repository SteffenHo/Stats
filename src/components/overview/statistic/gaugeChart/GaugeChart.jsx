import React, { Component } from 'react';
import { Accordion } from 'chayns-components';
import PropTypes from 'prop-types';
import C3Chart from 'react-c3js';

export default class GaugeChart extends Component {

    constructor() {
        super();
       
    }
    static propTypes = {
        columns: PropTypes.array.isRequired,
        max: PropTypes.number,
        duration:PropTypes.number,
        pattern: PropTypes.array,
        colorValues: PropTypes.array,
        headline: PropTypes.string.isRequired

    }

    static defaultProps = {
        max: 100,
        duration: 1000,
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'],
        colorValues: [30, 60, 90, 100]
    }
    
    render() {
       const {columns, max, duration, pattern, colorValues,headline} = this.props
        const data = {
            columns,
            type : 'gauge'
        }
        const gauge = {
            max
        }
        const transition = {
            duration
        }
        const color ={
            pattern, // the three color levels for the percentage values.
            threshold: {
                max,
                values: colorValues
            }
        }

        return (
                    <C3Chart data={data} transition={transition} gauge={gauge} color={color} size={size}/>
        );
    }
}
