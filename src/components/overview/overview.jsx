import React, { Component } from 'react';
import ArticleIntro from './articleIntro/ArticleIntro.jsx'
import BarChart from './statistic/barChart/BarChart';
import DonutChart from './statistic/donutChart/DonutChart'
import GaugeChart from './statistic/gaugeChart/GaugeChart'
import ChartAccordion from './statistic/chartAccordion/ChartAccordion';
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

        const barColumns = [
            ['Aktuelle Woche', 900, 30, 200, 100, 400, 150, 200],
            ['Vorwoche', 798, 500, 200, 100, 240, 115, 325],
            ['x', '2018-01-21', '2018-01-22', '2018-01-23', '2018-01-24', '2018-01-25', '2018-01-26', '2018-01-27']
        ];
        return (
            <div>
                <ArticleIntro haedlin="Umsatz"/>
                <Accordion  head={'Statistiken'}>
                <ChartAccordion headline="Absatz">
                    <BarChart columns={barColumns} />
                </ChartAccordion>
                <ChartAccordion headline="Bestellabschlüsse">
                    <DonutChart columns={donutColumns} title="Bestellungen" headline="Bestellungen" />
                </ChartAccordion>
                <ChartAccordion headline="Vergleich">
                    <div> Hier wird dein Tagesumsatz mit den des Vortags verglichen, bisher hast du <span style={{ fontWeight: 'bold' }}>91,4%</span> de Vortagsumsatzes gemacht.</div>
                    <GaugeChart columns={gaugeColumns} headline="Umsatz"></GaugeChart>
                </ChartAccordion>
                </Accordion>
            </div>
        );
    }
}
