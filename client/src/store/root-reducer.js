import { combineReducers } from 'redux';
import uiReducer from './ui-reducer';
import homeReducer from '../containers/HomePage/reducer';

const rootReducer = combineReducers({
  ui: uiReducer,
  home: homeReducer,
});

export default rootReducer;
