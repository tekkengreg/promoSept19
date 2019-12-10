const initState = {
    colors: [],
}

export default (state = initState, action) => {
    switch (action.type) {
        case "INIT_COLORS":
            return {
                ...state,
                colors: action.colors
            }

        default:
            return state;
    }
}

