import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =
  process.env.NODE_ENV === 'development'
    ? createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middleware)))
    : createStore(rootReducer, applyMiddleware(...middleware));

export default store;
