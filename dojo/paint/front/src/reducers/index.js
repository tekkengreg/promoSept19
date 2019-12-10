import {combineReducers} from 'redux';
import colorsReducer from './colorsReducer';
import shapesReducer from './shapesReducer';
import cshapesReducer from './cshapesReducer';

export default combineReducers({ 
    colorsReducer:colorsReducer, 
    shapesReducer: shapesReducer, 
    cshapesReducer: cshapesReducer 
})

