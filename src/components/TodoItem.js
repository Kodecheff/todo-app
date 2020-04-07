import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  getStyle = () => {
    return{
      backgroundColor: '#f4f4f4',
      marginBottom: '5px',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none'
    }
  }

  // markComplete = (e) => {
  //   console.log(this.props)
  // }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
          {title}
          <button onClick={this.props.deleteItem.bind(this, id)} style={btnStyles}>x</button>
          </p>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyles = {
  backgroundColor: 'red',
  color: 'white',
  border: 'none',
  padding: '5px 8px',
  borderRadius: '50%',
  float: 'right',
  cursor: 'pointer'
}

export default TodoItem
