import React, { Component } from 'react';
import ArticleIntro from './articleIntro/ArticleIntro.jsx'
import BarChart from './statistic/barChart/BarChart';
import DonutChart from './statistic/donutChart/DonutChart'
import GaugeChart from './statistic/gaugeChart/GaugeChart'
import './overview.scss';


export default class Overview extends Component {

    constructor() {
        super();
       
    }
    
    render() {
        const gaugeColumns = [
            ['Umsatz', 91.4]
        ];

        const donutColumns = [
            ['online', 30],
            ['bar', 50],
            ['terminal', 10],
            ['sonstiges', 10]
        ];

        const barColumns = [
            ['Aktuelle Woche', 900, 30, 200, 100, 400, 150, 200],
            ['Vorwoche', 798, 500, 200, 100, 240, 115, 325],
            ['x','2018-01-21', '2018-01-22','2018-01-23','2018-01-24','2018-01-25','2018-01-26', '2018-01-27' ]
          ];
        return (
           <div>
               <ArticleIntro/>
               <BarChart columns={barColumns}/>
               <DonutChart columns={donutColumns} title="Bestellungen"/>
               <GaugeChart columns={gaugeColumns}/>
            </div>
        );
    }
}
