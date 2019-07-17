// core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// utils
import store from './store/store';
// components
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
