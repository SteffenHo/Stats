import React, { Component } from 'react';
import ArticleIntro from './articleIntro/ArticleIntro.jsx'
import BarChart from './statistic/barChart/BarChart';
import DonutChart from './statistic/donutChart/DonutChart'
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
            </div>
        );
    }
}
