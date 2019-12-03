import React from 'react';
import { connect } from 'react-redux';

const Filter = ({ filter, dispatch }) => {
    console.log()
    return (<div>
        <button onClick={()=>dispatch({ type: 'UPDATE_FILTER', filter: 'SHOW_DONE' })} style={{ color: filter === 'SHOW_DONE' ? 'black' : 'red' }}>SHOW DONE</button>
        <button onClick={()=>dispatch({ type: 'UPDATE_FILTER', filter: 'SHOW_TODO' })} style={{ color: filter === 'SHOW_TODO' ? 'black' : 'red' }}>SHOW TODO</button>
        <button onClick={()=>dispatch({ type: 'UPDATE_FILTER', filter: 'SHOW_ALL' })} style={{ color: filter === 'SHOW_ALL' ? 'black' : 'red' }}>SHOW ALL</button>
    </div>);
}

const mstp = ({ filter }) => ({ filter });

export default connect(mstp)(Filter);