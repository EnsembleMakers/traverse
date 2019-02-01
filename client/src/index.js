import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';

import { Provider } from 'react-redux';
import App from '@components/App';
import { store } from '@store';

// import { configureFakeBackend } from './helpers';
// configureFakeBackend();

const Root = () => (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    {/* <Link to="/adf">dddd</Link> */}
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.querySelector('#root'));
