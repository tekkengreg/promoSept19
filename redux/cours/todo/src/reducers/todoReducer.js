const initState = {
    filter: 'SHOW_ALL',
    tasks: [
        { title: 'faire les courses', done: false },
        { title: 'faire le livecoding', done: true },
    ]
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_FILTER':
            return { ...state, filter: action.filter }

        case 'TOGGLE_TASK':
            const {tasks} =state;
            tasks[action.taskIndex].done = !tasks[action.taskIndex].done;
            return {...state, tasks:[...tasks]}
            // return {...state, tasks:tasks}
            //https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns

        default:
            return state;
    }
}