import React, { Component } from "react";
import { todos } from "../../utils/seedData";
import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";
import TodoForm from "../TodoForm/TodoForm";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      newToDo: { description: " ", isCompleted: false }
    };
  }

  handleClick(index) {
    const todosCopy = [...this.state.todos];
    // console.log(todosCopy[index]);
    const onSelected = todosCopy[index];
    const clickedValue = onSelected["isCompleted"];

    if(clickedValue === false) {
      onSelected["isCompleted"] = true
    } else if(clickedValue === true) {
      onSelected["isCompleted"] = false
    }
    
    this.setState({
      todos: todosCopy
    });
  }

  handleSave(event) {
    this.setState({ newToDo: { description: event.target.value } });
    console.log(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    let updatedTodos = this.state.todos.concat(this.state.newToDo);
    this.setState({
      todos: updatedTodos,
      newToDo: { description: " ", isCompleted: false }
    });
  }

  render() {
    return (
      <div id="todo-list">
        <h1 id="todo-title">{this.props.title}</h1>

        {this.state.todos.map((todoinList, index) => (
          <TodoItem
            key={index}
            todoinList={todoinList}
            handleClick={this.handleClick.bind(this, index)}
          />
        ))}

        <TodoForm
          handleSubmit={this.handleSubmit.bind(this)}
          handleSave={this.handleSave.bind(this)}
          newToDo={this.state.newToDo}
        />
      </div>
    );
  }
}

export default TodoList;
