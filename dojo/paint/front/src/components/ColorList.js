import React from 'react';
import { connect } from 'react-redux';
import { SvgContainer, Square, Circle, Triangle } from './SvgComponents';
import axios from 'axios';

const ColorList = (props) => {
    return (<div className="colors">
        {
            props.colorsProps.colors.map((c, i) => <div
                className="color"
                key={`colors-${i}`}
                style={{ background: c.code }}
            />)
        }
    </div>);


}


const mstp = reduxState => {
    return {
        colorsProps: reduxState.colorsReducer,
    }
}

export default connect(mstp)(ColorList);