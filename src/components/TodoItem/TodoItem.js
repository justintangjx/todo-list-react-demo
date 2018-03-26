import React from 'react';
import './TodoItem.css';
import PropTypes from 'prop-types';


const TodoItem = props => {
    return (
        <li className={props.todoinList.isCompleted ? "done" : ""}
            onClick={props.handleClick}>
            {props.todoinList.description}
        </li>
    )
};

TodoItem.propTypes = {
    todoinList: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
}


export default TodoItem;

