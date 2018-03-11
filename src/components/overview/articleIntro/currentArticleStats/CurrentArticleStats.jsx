import React, { Component } from 'react';
import BarChart from '../../statistic/barChart/BarChart';
import DonutChart from '../../statistic/donutChart/DonutChart'
import GaugeChart from '../../statistic/gaugeChart/GaugeChart'
import ChartAccordion from '../../statistic/chartAccordion/ChartAccordion';
import VerticleBarChart from '../../statistic/verticleBarChart/VerticleBarChart'
import { Accordion } from 'chayns-components';

import './current-article-stats.scss'


export default class CurrentArticleStats extends Component {

    constructor() {
        super();

    }

    render() {
        const gaugeColumns = [
            ['Umsatz', 91.4]
        ];

        const turnOverColumns = [
            ['x', 'Heute', 'Gestern'],
            ['Absatz', 500, 632]
        ]
        const salesColumns = [
            ['x', 'Heute', 'Gestern'],
            ['Umsatz', 50000, 63200]
        ]

        const salesGaugeColumns = [
            ['Absatz', 73.2]
        ];

        const donutColumns = [
            ['App', 50],
            ['Bar', 30],
            ['Terminal', 10],
            ['sonstiges', 10]
        ];
        return (
            <div>
                <Accordion head="Täglicher erfolg">
                <div className='accordion__content'>

                    <div className="stats-wrapper">
                        <div className="stats-description">
                            <div> Hier wird dein Tagesumsatz mit den des Vortags verglichen, bisher hast du <span className="bold">91,4%</span> des Vortagsumsatzes gemacht.</div>
                            <VerticleBarChart columns={salesColumns} width={200} height={150} tooltipValueFormat={(value, ratio, id) => { return `${value}€`;}}/>
                        </div>
                        <div className="stats-description">
                            <div> Heute hast du schon <span className="bold">500 Big BBQ Burger</span> verkauft, dir fehlen noch <span className='bold'>6,8%</span>, um das Ziel von gestern zu erreichen</div>
                            <VerticleBarChart columns={turnOverColumns} width={200} height={150} tooltipValueFormat={(value, ratio, id) => {return `${value} Stück`;}}/>
                        </div>

                    </div>
                    <div className="stats-wrapper">
                        <div className="stats-description">
                            <div> Heute bestellen deine Kunden <span className="bold">den Big BBQ Burger</span> besonders gerne mit <span className="bold">der App</span>. Gestern war <spam className="bold">der Barverkauf</spam> beliebter.</div>
                            <DonutChart columns={donutColumns} title="Bestellungen"  />
                        </div>
                    </div>
                    </div>
                </Accordion>
            </div>
        );
    }
}

// <GaugeChart columns={gaugeColumns} width={200} />
// <GaugeChart columns={salesGaugeColumns} width={200} />