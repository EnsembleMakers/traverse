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

ReactDOM.render(<Root/>, document.querySelector("#root"));

