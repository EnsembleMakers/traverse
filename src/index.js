import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';

// ReactDOM.render(<App />, document.querySelector("#root"));


import FirstPage from './components/survey/FirstPage';
import BuyerSurveyOne from './components/survey/BuyerSurveyOne';
import BuyerSurveyTwo from './components/survey/BuyerSurveyTwo';
import BuyerSurveyThree from './components/survey/BuyerSurveyThree';


class App extends React.Component{

    state = {

    };

    render(){
        return (
            <Fragment>
                {/* <FirstPage/> */}
                {/* <BuyerSurveyOne/> */}
                 <BuyerSurveyTwo/>
                {/* <BuyerSurveyThree/> */}
            </Fragment>
        );
    }
}

ReactDOM.render(<BuyerSurveyTwo/>, document.querySelector("#root"));

