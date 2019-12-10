const initState = {
    colors: [],
}

export default (state = initState, action) => {
    switch (action.type) {
        case "INIT_COLORS":
            console.log(action)
            return { ...state, colors: action.colors }

        default:
            return state;
    }
}