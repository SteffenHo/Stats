import React, { Component } from 'react';
import {TextWithIcon} from '../../../utils/textWithIcon/TextWithIcon';
import {TextRow} from '../../../utils/TextRow/TextRow'
import { Accordion } from 'chayns-components';

import './article-information.scss';


export default class ArticleInformation extends Component {

    constructor() {
        super();
    }
    
    render() {
        return (
                <Accordion 
                    head='Aktuelle Informationen' 
                    right={<div><i className='fa fa-refresh refresh__icon chayns__color--70'></i></div>}
                    >
                    <div className='accordion__content'>
                       
                        <TextRow text="Netto Preis" value="10,00"/>
                        <TextRow text="Steuersatz" value="7%"/>
                        <TextRow text="Brutto Preis" value="11,90"/>
                        <TextRow text="Verkaufte Menge" value="500stk" />
                        <TextRow text="Nettoumsätze in Euro"  value="50.000"/>
                        <TextRow text="Neuster Verkauf" value="Peter Jürgens (09.03.2018 18:53)"/>
                        <p className='lastRefresh'><i className="fa fa-clock-o"></i>20:53 aktualisiert</p>
                    </div>
                </Accordion>
        );
    }
}