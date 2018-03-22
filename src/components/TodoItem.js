import React from 'react';

const TodoItem = props => {
    return (
        <li className={props.todoinList.isCompleted ? "done" : ""}
            onClick={props.handleClick}>
            {props.todoinList.description}
        </li>
    )
}



export default TodoItem;
