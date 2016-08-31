import React from "react";

class TodoList extends React.Component {
	constructor() {
		super();
		this.state = {
			tasks: [{ name: "Learn more advance React, it's awesome!" }]
		};
		this.addTask = this.addTask.bind(this);
	}

	addTask() {
		this.setState({
			tasks: [...this.state.tasks, {name:this.refs.txt.value}]
		});
	}

	render() {
		let tasksComponents = this.state.tasks.map(task => <ListItem task={task}/>);
		return (
			<div>
				<ul>{tasksComponents}</ul>
				<input ref="txt" type="text"/>
				<button onClick={this.addTask}>Add new Product</button>
			</div>
		);
	}
}

export const ListItem = props => <li>{props.task.name}</li>;

export default TodoList;
