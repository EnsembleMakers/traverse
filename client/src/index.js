import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './helpers';

import App from './components/App';

// import { configureFakeBackend } from './helpers';
// configureFakeBackend();

const Root = () => (
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
    {/* <Link to="/adf">dddd</Link> */}
  </BrowserRouter>
);

ReactDOM.render(<Root/>, document.querySelector("#root"));

