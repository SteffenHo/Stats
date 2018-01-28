import React, { Component } from 'react';
import { Accordion } from 'chayns-components';
import C3Chart from 'react-c3js';

export default class GaugeChart extends Component {

    constructor() {
        super();
       
    }
    
    
    render() {
       
        const data = {
            columns:[
                ['Umasatz', 100]
            ],
            type : 'gauge'
        }
        const gauge = {
            max: 100
        }
        const transition = {
            duration: 5000
        }
        const color ={
            pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
            threshold: {
                max:100,
                values: [30, 60, 90, 100]
            }
        }

        return (
            <Accordion head="Umsatz" className="accordion--open">
                <div className='accordion__content'>
                <C3Chart data={data} transition={transition} gauge={gauge} color={color}/>
                </div>
            </Accordion>
        );
    }
}
