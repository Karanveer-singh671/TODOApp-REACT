import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Header from './components/layout/Header';
import uuid from 'uuid';
import axios from 'axios';
class App extends Component {
	// renders component in browser
	// state is in App and can be passed as props to children
	// initial request use componentDidMount lifecycle method right after component mounts
	state = {
		todos: []
	};
	// axios is used to make http requests
	componentDidMount() {
		// adding ?_limit=Number will limit result from query
		axios
			.get('https://jsonplaceholder.typicode.com/todos?_limit=15')
			.then((res) => this.setState({ todos: res.data }));
	}

	//delete todo
	delTodo = (id) => {
		// pass in our state object
		// back ticks to allow string interpolation since need id to delete
		axios
			.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			// 1 param in arrow function don't need brace only if more than 1 param
			.then((res) => this.setState({ todos: [ ...this.state.todos.filter((todo) => todo.id !== id) ] }));
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
	// addTodo  anonymous function expression taking in title for UI
	addTodo = (title) => {
		// const newTodo = {
		// id: uuid.v4(),
		// title,
		// completed: false
		// };
		// second param is data want to send
		// make req to json placeholder which sends response back witht the todo info and then it's added to the UI
		// won't set state if promise unfulfilled
		axios
			.post('https://jsonplaceholder.typicode.com/todos', {
				title,
				completed: false
			})
			.then((res) => this.setState({ todos: [ ...this.state.todos, res.data ] }));
		// this.setState({ todos: [ ...this.state.todos, newTodo ] });
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
