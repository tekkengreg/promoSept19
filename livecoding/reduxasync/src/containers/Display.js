import React, { Component } from 'react';
import {connect} from 'react-redux';

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { selectedHouse } = this.props;
        return (<h1>{selectedHouse}</h1>);
    }
}

const mstp = (state) => {
    return {
        selectedHouse: state.houseReducer.selectedHouse
    }
}

export default connect(mstp)(Display);