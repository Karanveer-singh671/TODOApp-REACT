import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Header from './components/layout/Header';
import uuid from 'uuid';
class App extends Component {
	// renders component in browser
	// state is in App and can be passed as props to children

	state = {
		todos: [
			{
				id: uuid.v4(),
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
	// addTodo  anonymous function expression taking in title
	addTodo = (title) => {
		const newTodo = {
			id: uuid.v4(),
			title,
			completed: false
		};
		console.log(title);
		this.setState({ todos: [ ...this.state.todos, newTodo ] });
	};

	render() {
		return (
			// need to use className (for class in html)
			// this.state.todos is state from App and it is stored in todos
			// todos can now be passed as a prop for any other component
			// adding 'exact' to route will only show component there else if go to about without using exact
			// will display whatever at '/' path and  '/about'
			<Router>
				<div className="App">
					<div className="container">
						<Header />
						<Route
							exact
							path="/"
							render={(props) => (
								<React.Fragment>
									<AddTodo addTodo={this.addTodo} />
									<Todos
										todos={this.state.todos}
										markComplete={this.markComplete}
										delTodo={this.delTodo}
									/>
								</React.Fragment>
							)}
						/>
						<Route path="/about" component={About} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
