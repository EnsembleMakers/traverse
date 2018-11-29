import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';


import FirstPage from './components/survey/FirstPage';
import BuyerSurveyOne from './components/survey/BuyerSurveyOne';
import BuyerSurveyTwo from './components/survey/BuyerSurveyTwo';
import BuyerSurveyThree from './components/survey/BuyerSurveyThree';
import OnTransaction from './components/transaction/OnTransaction';
import AboutProducer from './components/transaction/AboutProducer';

class App extends React.Component{

    state = {

    };

    render(){
        return (
            <Fragment>
                {/* <FirstPage/> */}
                {/* <BuyerSurveyOne/> */}
                 {/* <BuyerSurveyTwo/> */}
                {/* <BuyerSurveyThree/> */}
                {/* <OnTransaction/> */}
                {/* <AboutProducer/> */}
            </Fragment>
        );
    }
}

ReactDOM.render(<BuyerSurveyOne/>, document.querySelector("#root"));

