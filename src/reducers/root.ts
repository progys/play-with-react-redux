import { combineReducers } from 'redux-immutable';
import jokes from './jokes';

const rootReducer = combineReducers({
  jokes
});

export default rootReducer;
