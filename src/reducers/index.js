import { combineReducers } from 'redux-immutable';
import joke from '../reducers/joke';

const rootReducer = combineReducers({
  joke
});

export default rootReducer;
