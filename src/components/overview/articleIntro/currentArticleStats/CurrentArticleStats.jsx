import React, { Component } from 'react';
import BarChart from '../../statistic/barChart/BarChart';
import DonutChart from '../../statistic/donutChart/DonutChart'
import GaugeChart from '../../statistic/gaugeChart/GaugeChart'
import ChartAccordion from '../../statistic/chartAccordion/ChartAccordion';
import VerticleBarChart from '../../statistic/verticleBarChart/VerticleBarChart'
import CustomBarChart from '../../statistic/customBarChart/customBarChart';
import CustomVerticalBarChart from '../../statistic/customVerticalBarChart/CustomVerticalBarChart'
import CustomPieChart from '../../statistic/customPieChart/CustomPieChart'
import CustomGaugeChart from '../../statistic/customGaugeChart/CustomGaugeChart'
import { Accordion } from 'chayns-components';
import { LAYOUT_VERTICAL } from '../../../utils/const'

import './current-article-stats.scss'


export default class CurrentArticleStats extends Component {

    constructor() {
        super();

    }

    render() {
        const turnOverColumnsdata = [
            {name: 'Heute', uv: 500},
            {name: 'Gestern', uv: 632, fill: '#ff0000'}
        ]
        const salesColumnsdata = [
            {name: 'Heute', uv: 50000},
            {name: 'Gestern', uv: 63200, fill: '#ff0000'}
        ]
        const donutColumnsData = [
            {name:'App', value: 50, fill:"#1B5E20"},
            {name:'Bar', value: 30, fill:"#2E7D32"},
            {name:'Terminal', value: 10, fill:"#388E3C"},
            {name:'sonstiges', value: 10, fill:"#43A047"}
        ];

        const data = [
            {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
            {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
            {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
            {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
            {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
            {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
      ];
      const gaugeChartData = [
        {name:'Misserfolg', value: 10, fill:"#9E9E9E"},
        {name:'Erfolg', value: 90, fill:"#1B5E20" }
        
    ];
      const pieChartData = [{name: 'Group A', value: 2400}, {name: 'Group B', value: 4567},
      {name: 'Group C', value: 1398}, {name: 'Group D', value: 9800},
      {name: 'Group E', value: 3908}, {name: 'Group F', value: 4800}];
        return (
            <div>
                <Accordion head="Täglicher erfolg">
                <div className='accordion__content'>

                    <div className="stats-wrapper">
                        <div className="stats-description">
                            <div> Hier wird dein Tagesumsatz mit den des Vortags verglichen, bisher hast du <span className="bold">91,4%</span> des Vortagsumsatzes gemacht.</div>
                            <CustomVerticalBarChart data={salesColumnsdata} height={150} />
                        </div>
                        <div className="stats-description">
                            <div> Heute hast du schon <span className="bold">500 Big BBQ Burger</span> verkauft, dir fehlen noch <span className='bold'>6,8%</span>, um das Ziel von gestern zu erreichen</div>
                            <CustomVerticalBarChart data={turnOverColumnsdata} height={150} />
                        </div>

                    </div>
                    <div className="stats-wrapper">
                        <div className="stats-description">
                            <div> Heute bestellen deine Kunden <span className="bold">den Big BBQ Burger</span> besonders gerne mit <span className="bold">der App</span>. Gestern war <spam className="bold">der Barverkauf</spam> beliebter.</div>
                            <CustomPieChart data={donutColumnsData} />
                        </div>
                    </div>
                    </div>
                </Accordion>
                <CustomBarChart data={data}/>
                <CustomVerticalBarChart data={data} showReferenceBar/>
                <CustomPieChart data={pieChartData} endAngle={180}/>
                <CustomGaugeChart data={gaugeChartData} />
            </div>
        );
    }
}
