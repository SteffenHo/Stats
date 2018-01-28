import React, { Component } from 'react';
import { Accordion } from 'chayns-components';
import PropTypes from 'prop-types';
import C3Chart from 'react-c3js';

export default class DonutChart extends Component {

    constructor() {
        super();
       
    }

    static propTypes = {
        columns: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired,
        duration:PropTypes.number,
    }

    static defaultProps = {
        duration: 1000,
    }
    
    render() {
        const {columns, title, duration} = this.props;
       
        const data = {
            columns,
            type : 'donut'
        }
        const donut = {
            title
        }
        const transition = {
            duration
        }

        return (
            <Accordion head="Bestellarten" className="accordion--open">
                <div className='accordion__content'>
                <C3Chart data={data} transition={transition} donut={donut}/>
                </div>
            </Accordion>
        );
    }
}
