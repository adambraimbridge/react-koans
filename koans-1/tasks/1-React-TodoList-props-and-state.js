import React from "react";

class TodoList extends React.Component {
	constructor() {
		super();
		this.state = {
			tasks: [
				{ name: "Learn more JavaScript" },
				{ name: "Learn more testing too!" }
			]
		};
	}

	render() {
		let tasksComponents = this.state.tasks.map( task => <ListItem task={task} />);
		return <ul>{tasksComponents}</ul>;
	}
}

export const ListItem = props => <li>{props.task.name}</li>;

export default TodoList;
