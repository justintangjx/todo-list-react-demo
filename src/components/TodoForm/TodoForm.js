import React from "react";
import PropTypes from 'prop-types';


const TodoForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        ITEM:
        <input
          type="text"
          value={props.newToDo.description}
          onChange={props.handleSave}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

TodoForm.propTypes = {
  handleSubmit: PropTypes.func,
  newToDo: PropTypes.object,
  handleSave: PropTypes.func,
}

export default TodoForm;
