import React from 'react';
import { shallow } from "enzyme";
import TodoList from "./TodoList";
import TodoItem from "../TodoItem";


describe("TodoList", () => {
    it("should render TodoList properly", () => {
        const wrapper = shallow(<TodoList />);
        expect(wrapper.find("#todo-list")).toHaveLength(1);
        expect(wrapper.find("#todo-title")).toHaveLength(1);
        // console.log(wrapper.debug());
        expect(wrapper.find(TodoItem)).toHaveLength(wrapper.state().todos.length);
    });

}
)