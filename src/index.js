import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

const Root = () => (
  <BrowserRouter>
    <App/>
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
