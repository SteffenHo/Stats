import React, { Component } from 'react';
import BarChart from '../../statistic/barChart/BarChart';
import DonutChart from '../../statistic/donutChart/DonutChart'
import GaugeChart from '../../statistic/gaugeChart/GaugeChart'
import ChartAccordion from '../../statistic/chartAccordion/ChartAccordion';
import './current-article-stats.scss'


export default class CurrentArticleStats extends Component {

    constructor() {
        super();

    }

    render() {
        const gaugeColumns = [
            ['Umsatz', 91.4]
        ];

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
                <ChartAccordion headline="Täglicher erfolg">
                    <div className="stats-wrapper">
                        <div className="stats-description">
                            <div> Hier wird dein Tagesumsatz mit den des Vortags verglichen, bisher hast du <span className="bold">91,4%</span> des Vortagsumsatzes gemacht.</div>
                            <GaugeChart columns={gaugeColumns} width={200} />
                        </div>
                        <div className="stats-description">
                            <div> Heute hast du schon <span className="bold">302 Big BBQ Burger</span> verkauft, dir fehlen noch <span className='bold'>26,8%</span>, um das Ziel von gestern zu erreichen</div>
                            <GaugeChart columns={salesGaugeColumns} width={200} />
                        </div>

                    </div>
                    <div className="stats-wrapper">
                        <div className="stats-description">
                            <div> Heute bestellen deine Kunden <span className="bold">den Big BBQ Burger</span> besonders gerne mit <span className="bold">der App</span>. Gestern war <spam className="bold">der Barverkauf</spam> beliebter.</div>
                            <DonutChart columns={donutColumns} title="Bestellungen"  />
                        </div>
                    </div>
                </ChartAccordion>
            </div>
        );
    }
}
