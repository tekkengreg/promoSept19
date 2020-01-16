const initialState = {
    houses: [
        "Slytherin",
        "Gryffindor",
        "Ravenclaw",
        "Hufflepuff"
    ],
    selectedHouse: ''
}

export default (state=initialState, action) => {
    switch (action.type) {
        case "SELECT_HOUSE":
            console.log(action)
            return {
                ...state,
                selectedHouse: action.payload
            };

        default:
            return state;
    }
}