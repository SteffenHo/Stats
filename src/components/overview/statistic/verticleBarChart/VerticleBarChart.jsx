import React, { Component } from 'react';
import './verticle-bar-chart.scss';
import { Accordion } from 'chayns-components';
import PropTypes from 'prop-types';
import C3Chart from 'react-c3js';
import { chaynsColor100, chaynsColor70 } from '../../../utils/const'
import { statsColor } from '../../../utils/colorHelper'

export default class VerticleBarChart extends Component {

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
        tooltipNameFormat: (name, ratio, id, index) => {console.log('name, ratio, id, index',name, ratio, id, index); return name},
        tooltipTitleFormat: function (d) { console.log('data', d ); },
        tooltipValueFormat: function (value, ratio, id, index) { console.log('value, ratio, id', value, ratio, id, index); return `${value}`},
        yAxisFormat: (d)=>{console.log(d); return d.toFixed(0)}
    }
    
    
    render() {
        const {columns, duration, tooltipTitleFormat, tooltipValueFormat,xAxisFormat, width, height, yAxisFormat, tooltipNameFormat} = this.props;
        const data = {
            x: 'x',
            columns,
            type: 'bar',
            color: statsColor
          };
        const axis ={
            rotated: true,
            x : {
                    type : 'category',
                },
            y: {
                tick: {
                        count: 3,
                        format: yAxisFormat,
                        outer: false
                    }
                }
        }
        const transition = {
            duration
        }
        const tooltip = {
            format: {
                name: tooltipNameFormat,
                title: tooltipTitleFormat,
                value: tooltipValueFormat
            }
        }
        const size = {
            width,
            height
        }
        const padding = {
            right: 20
        }
        return (
            <C3Chart data={data} axis={axis} transition={transition} tooltip={tooltip} size={size} padding={padding}/>
        );
    }
}
