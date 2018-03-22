import React from 'react';
import { shallow } from "enzyme";
import TodoItem from "../TodoItem";


describe("TodoItem", () => {
    it("should render TodoItem properly", () => {
        const wrapper = shallow(<TodoList />);
        
        expect(wrapper.find(TodoItem)).toHaveLength(wrapper.state().todos.length);
    });

}
)