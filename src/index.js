import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './helpers';

import App from './components/App';

import { configureFakeBackend } from './helpers';
configureFakeBackend();

const Root = () => (
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(<Root/>, document.querySelector("#root"));

