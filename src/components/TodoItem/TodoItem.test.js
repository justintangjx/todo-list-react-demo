import React from 'react';
import { shallow } from "enzyme";
import TodoItem from "./TodoItem";


describe("TodoItem", () => {
    // it("should render TodoItem properly", () => {
    //     const mockHandler = jest.fn();
    //     const wrapper = shallow(<TodoItem handleClick={mockHandler}/>);
        
    //     expect(wrapper.find(TodoItem)).toHaveLength(wrapper.state().todos.length);

    // });

    it('should render TodoItem list', () => {
        const testItem = {description: 'eat lunch', isCompleted: false};
        const wrapper = shallow(<TodoItem todoinList={testItem}/>);
        console.log(wrapper.props())
        expect(wrapper.props().children).toEqual('eat lunch');

     
    });

}
)
