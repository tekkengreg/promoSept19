import React from 'react';

const refScale = 100;

export const SvgContainer = props => <svg style={{ height: '100%', width: '100%' }} >
    {props.children}
</svg>

export const Square = ({ x, y, s, color, onClick }) => <rect
    x={-refScale / 2}
    y={-refScale / 2}
    width={refScale}
    height={refScale}
    transform={`translate(${x} ${y}) scale(${s})`}
    fill={color ? color.code : "#aaa"}
    onClick={onClick}
/>

export const Circle = ({ x, y, s, color, onClick }) => <circle
    cx={0}
    cy={0}
    r={refScale / 2}
    transform={`translate(${x} ${y}) scale(${s})`}
    fill={color ? color.code : "#aaa"}
    onClick={onClick}
/>

export const Triangle = ({ x, y, s, color, onClick }) => <polygon
    transform={`translate(${x} ${y}) scale(${s})`}
    points="0 -35, 50 50, -50 50"
    fill={color ? color.code : "#aaa"}
    onClick={onClick}
/>

export const getShape = (shape, props) => {
    console.log(shape, props)
    switch (shape) {
        case 'square':
            return <Square {...props} />
        case 'circle':
            return <Circle {...props} />
        case 'triangle':
            return <Triangle {...props} />
        default:
            return ''
    }
}
