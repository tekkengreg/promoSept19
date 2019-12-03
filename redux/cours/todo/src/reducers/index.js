const initialState = {
    filter: 'SHOW_ALL',
    tasks: [
        {
            title: "toto", done: false
        },
        {
            title: "tata", done: true
        }
    ]
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_FILTER':
            return { ...state, filter: action.filter }

        case 'TOGGLE_TASK':
            const { tasks } = state;
            let task = tasks[action.taskIndex]
            tasks[action.taskIndex] = { ...task, done: !task.done }

            // tasks[action.taskIndex].done = !tasks[action.taskIndex].done
            return { ...state, tasks: [...tasks] }

        default:
            return state;
    }
}