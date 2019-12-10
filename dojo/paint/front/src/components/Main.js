import React from 'react';
import { connect } from 'react-redux';
import { SvgContainer, getShape } from './SvgComponents';

const Main = (props) => {
    return (<div className="main">
        <SvgContainer>
            {
                props.cshapes.map((cs, i) => getShape(props.shapes.find(s => s.id === cs.primitive_shape_id).name, 
                {
                    key: `shape-${i}`,
                    x: cs.x,
                    y: cs.y,
                    s: cs.size,
                    color: props.colors.find(c => c.id === cs.primitive_color_id),
                }))
            }
        </SvgContainer>
    </div>);
}

const mstp = reduxState => {
    return {
        colors: reduxState.colorsReducer.colors,
        shapes: reduxState.shapesReducer.shapes,
        cshapes: reduxState.cshapesReducer.cshapes,
    }
}
export default connect(mstp)(Main);