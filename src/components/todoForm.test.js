import React from "react";
import { shallow } from "enzyme";
import TodoForm from './TodoForm';
import TodoList from './todo-list/TodoList.css';
import TodoForm from './todoForm';


describe("TodoForm", () => {
  it("should render updated form successfully", () => {
    const mockHandler = jest.fn();

    const wrapper = shallow(<TodoForm handleSubmit={mockHandler} />);

    wrapper.simulate("submit", { preventDefault() {} });

    expect(mockHandler).toBeCalled();
  });
});
