import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectHouse, getRandomHouse } from '../actions'

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { houses, selectHouse, getRandomHouse } = this.props
        return (<div>
            {
                houses.map((h,i) => <div>
                    <button key={`h-${i}`} onClick={() => selectHouse(h)}>{h}</button>
                </div>)
            }
            <h3><button onClick={()=>getRandomHouse()}>get random</button></h3>
        </div>);
    }
}

const mstp = (state) => {
    return {
        houses: state.houseReducer.houses
    }
}

const mdtp = (dispatch) => {
    return {
        selectHouse: (house) => dispatch(selectHouse(house)),
        getRandomHouse: () => dispatch(getRandomHouse())
    }
}
export default connect(mstp, mdtp)(Panel);