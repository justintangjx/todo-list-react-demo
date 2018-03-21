import React, { Component } from "react";
import { todos } from "../../utils/seedData";
import "./TodoList.css";
import TodoItem from "../TodoItem";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      newToDo: {description:" ", isCompleted: false}
    };
  }

  handleClick(event) {
    const todosCopy = [...this.state.todos];
    console.log(todosCopy);
  };

  handleSave(event) {
    this.setState({newToDo:{description: event.target.value}});
    console.log(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    let updatedTodos = this.state.todos.concat(this.state.newToDo);
    this.setState({todos: updatedTodos,
      newToDo: {description:" ", isCompleted: false}
    }
    );
  }

  render() {
    return (
      <div id="todo-list">
        <h1 id="todo-title">{this.props.title}</h1>

        {this.state.todos.map((todoinList, index) => (
          <TodoItem
            key={index}
            todoinList={todoinList}
            handleclick={this.handleClick.bind(this, index)}
          />
        ))}
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            ITEM:
            <input
              type="text"
              value={this.state.newToDo.description}
              onChange={this.handleSave.bind(this)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default TodoList;
