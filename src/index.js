import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

<<<<<<< HEAD

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
=======
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

const Root = () => (
  <BrowserRouter>
    <Provider store={createStore(reducers)}>
      <App/>
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(<Root/>, document.querySelector("#root"));
>>>>>>> ad40e2dc3f67462e4921d9842dd20ac92ec6185f

