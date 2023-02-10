import React, { Component } from 'react';
import { BrowserRouter, Routes, Route }  from 'react-router-dom'
import './App.css';
import Todos from './components/Todos';
import Header from './components/layouts/Header';
import AddTodo from './components/AddTodo';
import About from './pages/About';
import {v4 as uuid} from 'uuid'

export class App extends Component {

  state = {
    todos: [
      {
        id: uuid(),
        title: "Take Out the Trash",
        completed: false
      },
      {
        id: uuid(),
        title: "Dinner with Wife",
        completed: false
      },
      {
        id: uuid(),
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

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render() {
    console.log(this.state.todos)
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Header/>
            <Routes>
              <Route 
                path='/' 
                exact 
                render={() => (
                <>
                  {<AddTodo addTodo={this.addTodo}/>}
                  {< Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />}
                </>
              )} />
              <Route path='/about' element={<About/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
