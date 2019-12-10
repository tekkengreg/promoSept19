const initState = {
    shapes: [],
}

export default (state = initState, action) => {
    switch (action.type) {
        case "INIT_SHAPES":
            return { ...state, shapes: action.shapes }

        default:
            return state;
    }
}