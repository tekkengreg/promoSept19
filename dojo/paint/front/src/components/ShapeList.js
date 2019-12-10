import React from 'react';
import { connect } from 'react-redux';

import { SvgContainer, Square, Circle, Triangle, getShape } from './SvgComponents';


const ShapeList = ({ selectedShape, shapes, dispatch }) => {
    return (<div className="shapes">

        {
            shapes.map((s, i) => <div className="shape"
                style={{ border: selectedShape === s.id ? '1px solid black' : 'none' }}
                onClick={() => dispatch({ type: "SELECT_SHAPE", shape: s.id })}>
                <SvgContainer>
                    {getShape(s.name, { x: 50, y: 50, s: 1 })}
                </SvgContainer>
            </div>)
        }

        {/* <div className="shape"
            style={{ border: selectedShape && selectedShape.includes('square') ? '1px solid black' : 'none' }}
            onClick={() => dispatch({ type: "SELECT_SHAPE", shape: 'square' })}>
            <SvgContainer>
                <Square x={50} y={50} s={1} />
            </SvgContainer>
        </div>
        <div className="shape"
            style={{ border: selectedShape && selectedShape.includes('circle') ? '1px solid black' : 'none' }}
            onClick={() => dispatch({ type: "SELECT_SHAPE", shape: 'circle' })}>
            <SvgContainer>
                <Circle x={50} y={50} />
            </SvgContainer>
        </div>
        <div className="shape"
            style={{ border: selectedShape && selectedShape.includes('triangle') ? '1px solid black' : 'none' }}
            onClick={() => dispatch({ type: "SELECT_SHAPE", shape: 'triangle' })}>
            <SvgContainer>
                <Triangle />
            </SvgContainer>
        </div> */}
    </div>);
}

export default connect(({ cshapes, shapes }) => ({ selectedShape: cshapes.selectedShape, ...shapes }))(ShapeList);