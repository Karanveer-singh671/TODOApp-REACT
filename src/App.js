import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
class App extends Component {
	// renders component in browser
	// state is in App and can be passed as props to children

	state = {
		todos: [
			{
				id: 1,
				title: 'Finish Todo app',
				completed: false
			},
			{
				id: 2,
				title: 'Finish Laundry',
				completed: true
			},
			{
				id: 3,
				title: 'Finish Packing boxes',
				completed: false
			},
			{
				id: 4,
				title: 'Finish signing sublet',
				completed: false
			}
		]
	};

	//delete todo
	delTodo = (id) => {
		// pass in our state object
		this.setState({ todos: [ ...this.state.todos.filter((todo) => todo.id !== id) ] });
	};

	// Toggle Complete
	markComplete = (id) => {
		console.log(id);
		// now set the state to change
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					// don't set to true set to the opposite of completed
					// if dont do this then it will only stay true
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};

	render() {
		return (
			// need to use className (for class in html)
			// this.state.todos is state from App and it is stored in todos
			// todos can now be passed as a prop for any other component
			<div className="App">
				<div className="container">
					<Header />
					<AddTodo />
					<Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
				</div>
			</div>
		);
	}
}

export default App;
