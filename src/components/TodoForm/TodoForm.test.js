import React from "react";
import { shallow } from "enzyme";
import TodoList from '../todo-list/TodoList';
import TodoForm from '../TodoForm/TodoForm';


describe("TodoForm", () => {
  it("should respond with new item with submit it", () => {
    const mockToDo = { description: " test", isCompleted: false};
    const mockHandler = jest.fn();
    const wrapper = shallow(<TodoForm newToDo = {mockToDo} handleSubmit={mockHandler} />);
    wrapper.simulate("submit", { preventDefault() {} });
    expect(mockHandler).toBeCalled();
  });
})
