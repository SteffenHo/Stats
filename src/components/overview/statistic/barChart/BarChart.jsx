import React, { Component } from 'react';
import './bar-chart.scss';
import { Accordion } from 'chayns-components';
import PropTypes from 'prop-types';
import C3Chart from 'react-c3js';

export default class BarChart extends Component {

    constructor() {
        super();
       
    }

    static propTypes = {
        columns: PropTypes.array.isRequired,
        tooltipTitleFormat: PropTypes.func,
        tooltipValueFormat: PropTypes.func,
        xAxisFormat: PropTypes.fun,
        duration:PropTypes.number,
    }

    static defaultProps = {
        duration: 1000,
        tooltipTitleFormat: function (d) { return `Umsatz ${d.getDate()}.${d.getMonth()}.${d.getFullYear()}` },
        tooltipValueFormat: function (value, ratio, id) { return `${value} €`},
        xAxisFormat: function (d) { return `${d.getDate()}.${d.getMonth()}` }
    }
    
    
    render() {
        const {columns, duration, tooltipTitleFormat, tooltipValueFormat,xAxisFormat} = this.props;
        const data = {
            x: 'x',
            columns,
            type: 'bar',
          };
        const axis ={
            x : {
                    type : 'timeseries',
                    tick: {
                        format: xAxisFormat,
                        fit: true
                    }
                }
        }
        const transition = {
            duration
        }
        const tooltip = {
            format: {
                title: tooltipTitleFormat,
                value: tooltipValueFormat
            }
        }
        return (
            <C3Chart data={data} axis={axis} transition={transition} tooltip={tooltip}/>
        );
    }
}
