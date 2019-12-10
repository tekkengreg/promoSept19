import React from 'react';
import { connect } from 'react-redux';

import { SvgContainer, Square, Circle, Triangle, getShape } from './SvgComponents';


const ShapeList = (props) => {
    return (<div className="shapes">

        {
            props.shapesReducer.shapes.map((s, i) => <div className="shape">
                <SvgContainer>
                    {getShape(s.name, { x: 50, y: 50, s: 1 })}
                </SvgContainer>
            </div>)
        }
    </div>);
}

const mstp = reduxState => {
    return {
        shapesReducer: reduxState.shapesReducer
    }
}
export default connect(mstp)(ShapeList);