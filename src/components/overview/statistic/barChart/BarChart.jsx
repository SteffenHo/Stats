import React, { Component } from 'react';
import './bar-chart.scss';
import { Accordion } from 'chayns-components';
import C3Chart from 'react-c3js';

export default class BarChart extends Component {

    constructor() {
        super();
       
    }

    
    
    render() {
        const data = {
            x: 'x',
            columns: [
              ['Aktuelle Woche', 900, 30, 200, 100, 400, 150, 200],
              ['Vorwoche', 798, 500, 200, 100, 240, 115, 325],
              ['x','2018-01-21', '2018-01-22','2018-01-23','2018-01-24','2018-01-25','2018-01-26', '2018-01-27' ]
              
            ],
            type: 'bar',
          };
        const axis ={
            x : {
                    type : 'timeseries',
                    tick: {
                        format: '%m-%d',
                        fit: true
                    }
                }
        }
        const transition = {
            duration: 5000
        }
        const tooltip = {
            format: {
                title: function (d) { return `Umsatz ${d.getDate()}.${d.getMonth()}.${d.getFullYear()}` },
                value: function (value, ratio, id) {
                    
                    return `${value} €`
                }
            }
        }
        return (
            <Accordion head="Umastz" className="accordion--open">
                <div className='accordion__content'>
                <C3Chart data={data} axis={axis} transition={transition} tooltip={tooltip}/>
                </div>
            </Accordion>
        );
    }
}
