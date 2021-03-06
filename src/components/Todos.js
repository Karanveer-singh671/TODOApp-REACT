import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
class Todos extends Component {
	// markComplete = () => {
	//   console.log('Hello')
	// }

	render() {
		// pass todos as a prop here and map each todo in the array to display title
		// todo(left) is a prop to be used which stores the todo in the map parameter
		// when map generates list should have a unique key so add key and we know todo id is unique so set
		// to that
		return this.props.todos.map((todo) => (
			// need to set propTypes for TodoItem in that component
			<TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
		));
	}
}

// props that are being passed have to have these types!
Todos.propTypes = {
	todos: PropTypes.array.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired
};

export default Todos;
