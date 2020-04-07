import React, {Component} from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends Component{
  state = {
    todos: [
      {
        id: 1,
        title: 'Dinner with bae',
        isCompleted: false
      },
      {
        id: 2,
        title: 'Meeting with colleagues',
        isCompleted: false
      },
      {
        id: 3,
        title: 'Work on projects',
        isCompleted: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.isCompleted = !todo.isCompleted
      }
      return todo
      })
    })
  }

  // Delete item
  deleteItem = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  // Add todo tem
  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title,
      isCompleted: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render(){

    return(
      <>
      <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <Todos 
          todos={this.state.todos} 
          markComplete={this.markComplete}
          deleteItem={this.deleteItem}
        />
      </div>
      </>
    )
  }
}

export default App