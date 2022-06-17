import { combineReducers } from 'redux';
import unitByIdReducer from './units/reducers/unitByIdReducer';
import unitsReducer from './units/reducers/unitsReducer';

const rootReducer = combineReducers({
  units: unitsReducer,
  unitById: unitByIdReducer,
});

export default rootReducer;
