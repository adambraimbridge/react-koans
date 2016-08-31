import TodoList,{ListItem} from '../../koans-1/tasks/2-React-TodoList-one-way-data-binding.js';
import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import { expect } from "chai";

describe("Virtual DOM test. React Component, React Instance and React Element:", () => {

	it("creates React Elements.", () => {
		let reactElement = <TodoList/>;
		expect(reactElement['$$typeof'].toString()).to.equal('Symbol(react.element)');
	});

	it("does not create new React Elements when they are assigned.", () => {
		let reactElement_1 = <TodoList/>;
		let reactElement_2 = <TodoList/>;
		expect(reactElement_1).to.deep.equal(reactElement_2);
	});

	it("does not include functionality in React Elements.", () => {
		let reactElement = <TodoList/>;
		expect(reactElement.addTask).to.equal(undefined);
	});

	it("should return a React Instance when rendering into the document.", () => {
		let reactInstance = TestUtils.renderIntoDocument(<TodoList/>);
		expect(typeof reactInstance.addTask).to.equal('function');
	});

	it("should return a detached React Instance when rendering into the document.", () => {
		let reactInstance_1 = TestUtils.renderIntoDocument(<TodoList/>);
		let reactInstance_2 = TestUtils.renderIntoDocument(<TodoList/>);
		expect(reactInstance_1).to.not.deep.equal(reactInstance_2);
	});

	it("does not create new React Elements when they are rendered.", () => {
		let reactElement_1 = ReactDOM.render(<TodoList/>, document.getElementById('app'));
		let reactElement_2 = ReactDOM.render(<TodoList/>, document.getElementById('app'));
		expect(reactElement_1).to.deep.equal(reactElement_2);
	});
});
