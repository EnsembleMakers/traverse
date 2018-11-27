import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';


import FirstPage from './components/survey/FirstPage';
import BuyerSurveyOne from './components/survey/BuyerSurveyOne';
import BuyerSurveyTwo from './components/survey/BuyerSurveyTwo';
import BuyerSurveyThree from './components/survey/BuyerSurveyThree';
import OnTransaction from './components/transaction/OnTransaction';


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
                <OnTransaction/>
            </Fragment>
        );
    }
}

ReactDOM.render(<OnTransaction/>, document.querySelector("#root"));

