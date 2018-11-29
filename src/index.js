import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const Root = () => (
  <BrowserRouter>
    <Provider store={store}>
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
