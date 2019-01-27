import React, { Component } from 'react';
import PropTypes from 'prop-types';
// need to go from TodoItem to Todos then to App.js do this by setting 
// markCompleted function in parent Todos and just pass that as a prop 
// to TodoItem but need to go to App.js so set function there and pass
// as props to both Todos and TodoItem
export class TodoItem extends Component {
    getStyle = () => {
        return  {
            background: 'lightgrey',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    // if use arrow function do not need to (this.markComplete.bind(this))
    // markComplete = (e) => {
    //     console.log(this.props)
    // }

  render() {
      const { id, title } = this.props.todo;
      // with the bind this, id we pass the id up to App.js
    return (
      <div style={this.getStyle()}>
        <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
             { title } 
        </p>
      </div>
    )
  }
}
// first portion is whatever the name of the class is
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
  


export default TodoItem
