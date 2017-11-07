import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './react/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import reducer from './react/_reducers';
import { createStore } from 'redux';

const store = createStore(
  reducer,
  {
    selectedCoffee: [],
    isBrewing: false,
  },
);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
