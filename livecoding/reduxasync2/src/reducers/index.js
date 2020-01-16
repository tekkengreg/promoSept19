import { combineReducers } from 'redux';
import houseReducer from './houseReducer';

export default combineReducers({
    houseReducer: houseReducer,
})