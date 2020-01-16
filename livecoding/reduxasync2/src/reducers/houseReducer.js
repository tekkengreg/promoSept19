import actionsList from '../actions/actions';

const initState = {
    houses: [
        "Slytherin",
        "Gryffindor",
        "Ravenclaw",
        "Hufflepuff"
    ],
    selectedHouse: 'wait for house'
}

export default (state = initState, action) => {
    switch (action.type) {
       case actionsList.SELECT_HOUSE:
           return {
               ...state,
               selectedHouse: action.prout
           }

        default:
            return state;
    }
}