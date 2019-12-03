import React from 'react';
import { connect } from 'react-redux';

const Tasks = ({ tasks,filter, dispatch }) => {
    console.log("kj",tasks)
    return (<ul>
        {
            tasks.filter(t=>{
                switch (filter) {
                    case 'SHOW_ALL':
                        return true;
                    case 'SHOW_DONE':
                        return t.done;
                    case 'SHOW_TODO':
                        return !t.done;
                    default:
                        break;
                }
            }).map((t, i) => <li key={i} onClick={() => dispatch({ type: 'TOGGLE_TASK', taskIndex: i })}>{t.done ? <del>{t.title}</del> : t.title}</li>)
        }
    </ul >);
}

const mstp = ({ tasks, filter }) => ({
    tasks,
    filter
})

export default connect(mstp)(Tasks);