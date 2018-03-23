import React from 'react';
import { shallow } from "enzyme";
import TodoList from "./TodoList";
import TodoItem from "../TodoItem/TodoItem";


describe("TodoList", () => {
    it("should render TodoList properly", () => {
        const wrapper = shallow(<TodoList />);
        expect(wrapper.find("#todo-list")).toHaveLength(1);
        expect(wrapper.find("#todo-title")).toHaveLength(1);
        // console.log(wrapper.debug());
        expect(wrapper.find(TodoItem)).toHaveLength(wrapper.state().todos.length);
    });

    it('should render a an item to be cancelled out upon clicked', () => {
        const mockCallback = jest.fn();
        const wrapper = shallow(<TodoList handleClick={mockCallback}/>);
        console.log(wrapper.find(TodoItem));
        // expect(wrapper.state().testItem2.isCompleted).to.equal(true)
    });
}
)