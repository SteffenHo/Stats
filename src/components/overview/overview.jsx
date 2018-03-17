import React, { Component } from 'react';
import ArticleIntro from './articleIntro/ArticleIntro.jsx'
import BarChart from './statistic/barChart/BarChart';
import DonutChart from './statistic/donutChart/DonutChart'
import GaugeChart from './statistic/gaugeChart/GaugeChart'
import ChartAccordion from './statistic/chartAccordion/ChartAccordion';
import CustomBarChart from './statistic/customBarChart/customBarChart';
import CustomVerticalBarChart from './statistic/customVerticalBarChart/CustomVerticalBarChart'
import CustomPieChart from './statistic/customPieChart/CustomPieChart'
import CustomGaugeChart from './statistic/customGaugeChart/CustomGaugeChart'
import { Accordion } from 'chayns-components';
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
            ['App', 50],
            ['Bar', 30],
            ['Terminal', 10],
            ['sonstiges', 10]
        ];
        const donutColumnsData = [
            {name:'App', value: 50, fill:"#1B5E20"},
            {name:'Bar', value: 30, fill:"#2E7D32"},
            {name:'Terminal', value: 10, fill:"#388E3C"},
            {name:'sonstiges', value: 10, fill:"#43A047"}
        ];
        const gaugeChartData = [
            {name:'Misserfolg', value: 3, fill:"#9E9E9E"},
            {name:'Erfolg', value: 97, fill:"#1B5E20"}
        ];

        const barColumns = [
            ['Aktuelle Woche', 900, 30, 200, 100, 400, 150, 200],
            ['Vorwoche', 798, 500, 200, 100, 240, 115, 325],
            ['x', '2018-01-21', '2018-01-22', '2018-01-23', '2018-01-24', '2018-01-25', '2018-01-26', '2018-01-27']
        ];
        const data = [
            {name: 'Jan', uv: 4000, pv: 2400, amt: 2400},
            {name: 'Feb', uv: 3000, pv: 1398, amt: 2210},
            {name: 'Mrz', uv: 2000, pv: 9800, amt: 2290},
            {name: 'Apr', uv: 2780, pv: 3908, amt: 2000},
            {name: 'Mai', uv: 1890, pv: 4800, amt: 2181},
            {name: 'Jun', uv: 2390, pv: 3800, amt: 2500},
            {name: 'Jul', uv: 3490, pv: 4300, amt: 2100},
      ];
        return (
            <div>
                <ArticleIntro haedlin="Umsatz"/>
                <Accordion  head={'Statistiken'}>
                <ChartAccordion headline="Absatz">
                   <CustomBarChart data={data} />
                </ChartAccordion>
                <ChartAccordion headline="Bestellabschlüsse">
                   <CustomPieChart data={donutColumnsData} />
                </ChartAccordion>
                <ChartAccordion headline="Vergleich">
                    <div> Hier wird dein Tagesumsatz mit den des Vortags verglichen, bisher hast du <span style={{ fontWeight: 'bold' }}>91,4%</span> de Vortagsumsatzes gemacht.</div>
                    <CustomGaugeChart data={gaugeChartData} />
                </ChartAccordion>
                </Accordion>
            </div>
        );
    }
}
//<GaugeChart columns={gaugeColumns} headline="Umsatz"></GaugeChart>