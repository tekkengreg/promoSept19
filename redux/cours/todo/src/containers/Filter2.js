import React from 'react';
import { connect } from 'react-redux';

const Filter2 = ({ poutrage, dispatch }) => {
    return (<div>
        <button
            onClick={() => dispatch({ type: 'UPDATE_FILTER', filter: 'SHOW_ALL' })}
            style={{ color: poutrage === 'SHOW_ALL' ? 'red' : 'black' }}>
            SHOW ALL</button>
        <button
            onClick={() => dispatch({ type: 'UPDATE_FILTER', filter: 'SHOW_DONE' })}
            style={{ color: poutrage === 'SHOW_DONE' ? 'red' : 'black' }}>
            SHOW DONE</button>
        <button
            onClick={() => dispatch({ type: 'UPDATE_FILTER', filter: 'SHOW_TODO' })}
            style={{ color: poutrage === 'SHOW_TODO' ? 'red' : 'black' }}>
            SHOW TODO</button>
    </div>);
}

// const mstp = ({ filter }) => ({ filter })
const mstp = state => ({ poutrage: state.filter })

export default connect(mstp)(Filter2);