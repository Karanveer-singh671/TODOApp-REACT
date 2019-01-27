import React, { Component } from 'react';
// component level state
export class AddTodo extends Component {
	state = {
		title: ''
	};

	onChange = (e) => {
		// e.target.name same as title and if had another key like email or address then
		// as long as name is equal to whatever in title etc. then can use for as many keys
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		// use this.props to pass this up a level
		this.props.addTodo(this.state.title);
		this.setState({ title: '' });
	};

	render() {
		return (
			<form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
				<input
					type="text"
					name="title"
					style={{ flex: '10', padding: '5px' }}
					placeholder="Add Todo..."
					value={this.state.title}
					onChange={this.onChange}
				/>
				<input type="submit" value="Submit" className="btn" style={{ flex: '1' }} />
			</form>
		);
	}
}

export default AddTodo;
