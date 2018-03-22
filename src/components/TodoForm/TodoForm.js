import React from "react";

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

export default TodoForm;
