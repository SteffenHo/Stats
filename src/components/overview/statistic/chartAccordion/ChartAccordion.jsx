import React, { Component } from 'react';
import { Accordion } from 'chayns-components';
import PropTypes from 'prop-types';

export default class ChartAccordion extends Component {

    constructor() {
        super();
    }
    static propTypes = {
        headline: PropTypes.string.isRequired
    }
    
    render() {
       const {headline} = this.props
        

        return (
            <Accordion head={headline} className="accordion--open">
                <div className='accordion__content'>
                    {this.props.children}
                </div>
            </Accordion>
        );
    }
}
