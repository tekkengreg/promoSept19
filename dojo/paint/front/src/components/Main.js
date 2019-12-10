import React from 'react';
import { connect } from 'react-redux';
import { SvgContainer, Square, Circle, Triangle, getShape } from './SvgComponents';
import colorsReducer from '../reducers/colorsReducer';
import axios from 'axios';

const Main = ({ cshapes, shapes, colors, selectedShape, dispatch }) => {
    console.log(cshapes)
    return (<div className="main" onClick={async (e) => {
        console.log('yoouyu')
        if(!selectedShape) return false;
        const cshape = {
            primitive_shape_id: selectedShape,
            primitive_color_id: 1,
            size: 1,
            x: e.clientX - e.target.getBoundingClientRect().left,
            y: e.clientY - e.target.getBoundingClientRect().top,
            orientation: 0,
        }
        const { data } = await axios.post('http://localhost:5000/paints/1/cshapes', cshape)
        dispatch({
            type: "ADD_SELECTED_SHAPE",
            cshape: { id: data, ...cshape }
        })
    }}>
        <SvgContainer>
            {
                cshapes.map((cs, i) => getShape(shapes.find(s => { console.log(s.id, cs.primitive_shape_id); return s.id === cs.primitive_shape_id }).name, {
                    key: `shape-${i}`,
                    x: cs.x,
                    y: cs.y,
                    s: cs.size,
                    color: colors.find(c => c.id === cs.primitive_color_id),
                    onClick: (event) => {console.log('you');event.stopPropagation();dispatch({ type: "SELECT_CSHAPE", shapeIdx: cs.id })}
                }))
            }
        </SvgContainer>
    </div>);
}

export default connect(({ cshapes, shapes, colors }) => ({ ...cshapes, ...shapes, ...colors }))(Main);