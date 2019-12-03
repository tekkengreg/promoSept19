import React from 'react';
import { connect } from 'react-redux';


const Tasks2 = ({ filter, tasks, dispatch }) => {
    return (<ul>
        {
            tasks.filter(t => {
                switch (filter) {
                    case 'SHOW_ALL':
                        return true;
                    case 'SHOW_DONE':
                        return t.done;
                    case 'SHOW_TODO':
                        return !t.done;

                    default:
                        return true;
                }
            }).map((t, i) => <li
                key={i}
                onClick={() => dispatch({ type: 'TOGGLE_TASK', taskIndex: i })}
            >
                {
                    t.done ? <del>{t.title}</del> : t.title
                }
            </li>)
        }
    </ul>);
}



export default connect(state => ({
    filter: state.filter,
    tasks: state.tasks
}))(Tasks2);

