import React, { Component } from 'react';
import {TextWithIcon} from '../../../utils/textWithIcon/TextWithIcon';
import { Accordion } from 'chayns-components';

import './article-information.scss';


export default class ArticleInformation extends Component {

    constructor() {
        super();
    }
    
    render() {
        return (
                <Accordion head='Aktuelle Informationen' >
                    <div className='accordion__content article-information'>
                        <div>
                            <TextWithIcon text="Netto: 10€" />
                            <TextWithIcon text="Brotto: 11,90€"/>
                        </div>
                        <div>
                            <TextWithIcon text="Absatz: 100/500" icon="caret-up green" />
                            <TextWithIcon text="Umsatz: 100/200" icon="caret-down red" />
                            <TextWithIcon text="Letzter Käufer: Peter Maier (21.01.2018 19:31)" />
                        </div>
                    </div>
                </Accordion>
        );
    }
}