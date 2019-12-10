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

        case 'SELECT_SHAPE':
            return { ...state, selectedShape: action.shape }

        case 'SELECT_COLOR':
            return { ...state, selectedColor: action.color }

        case 'SELECT_CSHAPE':
            console.log(action)
            return { ...state, selectedCShape: action.shapeIdx }

        case 'ADD_SELECTED_SHAPE':
            let { cshapes, selectedShape } = state;
            cshapes = [
                ...cshapes,
                { ...action.cshape }
            ]
            return { ...state, cshapes, selectedShape: null }

        case 'UPDATE_CSHAPE_COLOR':
            if (!state.selectedCShape) return state;
            const newCShapes = state.cshapes.map(cs => {
                console.log('upd', cs.id, state.selectedCShape)
                if (cs.id === state.selectedCShape)
                    cs.primitive_color_id = action.color
                return cs;
            })
            console.log('update', newCShapes)
            return { ...state, newCShapes }


        default:
            return state;
    }
}