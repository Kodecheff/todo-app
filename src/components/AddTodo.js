import React, { Component } from 'react'

export class AddTodo extends Component {
  state={
    title: ""
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title)
    this.setState({title: ""})
  }

  onChange = (e) => {
    this.setState({title: e.target.value})
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
        <input 
          type="text" name="title" 
          style={{flex: '10', padding: '5px'}} 
          placeholder="Add todo..." 
          value={this.state.title}
          onChange={this.onChange}
        />

        <input 
          style={{flex: '1'}} 
          type='submit' 
          className='btn' 
          value='Submit' 
        />
      </form>
    )
  }
}

export default AddTodo;
