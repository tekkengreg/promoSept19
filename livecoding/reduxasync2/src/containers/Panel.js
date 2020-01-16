import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectHouse, getRandomHouse } from '../actions';

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { houses, selectProut, getRandomProut } = this.props;
        return (<div>
            {
                houses.map((h, i) => (
                    <div key={`h-${i}`}>
                        <button onClick={() => selectProut(h)}>{h}</button>
                    </div>
                ))
            }

            <button onClick={() => getRandomProut()}><h2>get random</h2></button>
        </div>);
    }
}

const mstp = (reduxState) => ({
    houses: reduxState.houseReducer.houses
})

const mdtp = (dispatch) => {
    return ({
        selectProut: (house) => dispatch(selectHouse(house)),
        getRandomProut: () => dispatch(getRandomHouse())
    })
}
export default connect(mstp, mdtp)(Panel);