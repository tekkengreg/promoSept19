const initState = {
    cshapes: [],
    selectedShape: null,
    selectedColor: null,
    selectedCShape: null
}

export default (state = initState, action) => {
    switch (action.type) {
        case "INIT_CSHAPES":
            return { ...state, cshapes: action.cshapes }

        default:
            return state;
    }
}