import React from 'react';
import { shallow } from "enzyme";
import TodoItem from "./TodoItem";


describe("TodoItem", () => {
    it('should render TodoItem list', () => {
        const testItem = {description: 'eat lunch', isCompleted: false};
        const wrapper = shallow(<TodoItem todoinList={testItem}/>);
        // console.log(wrapper.props())
        expect(wrapper.props().children).toEqual('eat lunch');
    });

    it('should invoke function succesfully with props called', () => {
        const mockTodo = {description: 'try try', isCompleted: false};
        const testHandler = jest.fn();
        const wrapper = shallow(<TodoItem todoinList={mockTodo} handleClick = {testHandler} />);

        wrapper.find("li").simulate("click", {preventDefault() {}} );
        expect(testHandler).toBeCalled();
    } );

}
)
