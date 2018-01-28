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
        return (
           <div>
               <ArticleIntro/>
               <BarChart/>
               <DonutChart/>
               <GaugeChart/>
            </div>
        );
    }
}
