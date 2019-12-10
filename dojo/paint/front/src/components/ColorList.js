import React from 'react';
import { connect } from 'react-redux';
import { SvgContainer, Square, Circle, Triangle } from './SvgComponents';
import axios from 'axios';

const ColorList = ({ colors, cshapes, dispatch }) => {
    console.log(colors)
    return (<div className="colors">
        {
            colors.colors.map((c, i) => <div
                className="color"
                key={`colors-${i}`}
                onClick={async () => {
                    console.log(cshapes)
                    if (!cshapes.selectedCShape) return;
                    const { data } = await axios.put(`http://localhost:5000/paints/1/cshapes/${cshapes.selectedCShape}`,
                        { primitive_color_id: c.id })
                    dispatch({
                        type: 'UPDATE_CSHAPE_COLOR',
                        color: c.id
                    })
                }}
                style={{ background: c.code }}
            />)
        }
    </div>);
}

export default connect(({ colors, cshapes }) => ({ colors, cshapes }))(ColorList);