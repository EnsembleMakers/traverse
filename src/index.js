import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(<Root />, document.querySelector("#root"));

// import React,{Fragment} from 'react';
// import ReactDOM from 'react-dom';
// import FirstPage from './components/FirstPage';
// import BuyerSurvey from './components/BuyerSurveyOne';

// class App extends React.Component{

//     state = {

//     };

//     render(){
//         return (
//             <Fragment>
//                 <FirstPage/>
//             </Fragment>
//         );
//     }
// }

// ReactDOM.render(<BuyerSurvey/>, document.querySelector("#root"));
