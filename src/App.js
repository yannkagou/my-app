import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layouts/Header';
import AddTodo from './components/AddTodo';

export class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Take Out the Trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with Wife",
        completed: false
      },
      {
        id: 3,
        title: "Meeting with Boss",
        completed: false
      },
    ]
  }

  // Toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <AddTodo/>
          < Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
