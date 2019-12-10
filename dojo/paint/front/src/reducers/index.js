import {combineReducers} from 'redux';
import colorsReducer from './colorsReducer';
import shapesReducer from './shapesReducer';
import cshapesReducer from './cshapesReducer';
export default combineReducers({ colors: colorsReducer, shapes: shapesReducer, cshapes: cshapesReducer })

