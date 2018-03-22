import React from 'react';
import { shallow } from "enzyme";
import TodoItem from "./TodoItem";


describe("TodoItem", () => {
    it("should render TodoItem properly", () => {
        const mockHandler = jest.fn();
        const wrapper = shallow(<TodoItem handleClick={mockHandler}/>);
        
        expect(wrapper.find(TodoItem)).toHaveLength(wrapper.state().todos.length);
        
    });

}
)
