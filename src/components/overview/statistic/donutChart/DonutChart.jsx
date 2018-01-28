import React, { Component } from 'react';
import { Accordion } from 'chayns-components';
import C3Chart from 'react-c3js';

export default class DonutChart extends Component {

    constructor() {
        super();
       
    }

    
    render() {
       
        const data = {
            columns:[
                ['online', 30],
                ['bar', 50],
                ['terminal', 10],
                ['sonstiges', 10]
            ],
            type : 'donut'
        }
        const donut = {
            title: 'Bestellungen'
        }
        const transition = {
            duration: 5000
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
