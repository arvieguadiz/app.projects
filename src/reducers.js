import { combineReducers } from 'redux';

import appReducer from './containers/App/reducer';

const createReducer = combineReducers({
  appReducer,
});

export default createReducer;