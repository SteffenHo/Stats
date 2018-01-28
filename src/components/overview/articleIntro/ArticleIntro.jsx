import React, { Component } from 'react';
import {TextWithIcon} from '../../utils/textWithIcon/TextWithIcon'
import ArticleInformation from './articleInformation/ArticleInformation'
import CurrentArticleStats from './currentArticleStats/CurrentArticleStats'
import './article-intro.scss';


export default class ArticleIntro extends Component {

    constructor() {
        super();
    }
    
    render() {
        return (
            <div className='content__card'>
                <div className='intro-wrapper'>
                    <div className='description'>
                        <h1 className ='name'> Big BBQ Burger</h1>
                        <p className = 'text'>Rinderhacksteak vom Grill im Sesambrötchen mit Blattsalat, Tomate, Gurke, Zwiebeln, Käse und BBQ-Sauc'e. Dazu gibt es Cajuns. </p>
                    </div>
                    <div className='image'>
                        <img src='https://tsimg.space/v1/images/c978fada-65db-e711-8381-00155d099e09.jpg'></img>
                    </div>
                </div>    
                <ArticleInformation/>
                <CurrentArticleStats/>
            </div>
        );
    }
}
/*
                        <div style={{backgroundImage: "url('https://tsimg.space/v1/images/c978fada-65db-e711-8381-00155d099e09.jpg')"}}></div>                        

            `*/