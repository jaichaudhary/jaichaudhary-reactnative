import {authReducer} from './auth';
import {loader} from './loader';
import {homeReducer} from './home';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  authReducer,
  loader,
  homeReducer,
});

export default rootReducer;
