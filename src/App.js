import React, { Component } from 'react';
import { BrowserRouter, Routes, Route }  from 'react-router-dom'
import './App.css';
import Todos from './components/Todos';
import Header from './components/layouts/Header';
import AddTodo from './components/AddTodo';
import About from './pages/About';
// import {v4 as uuid} from 'uuid'
import axios from 'axios';

export class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({ todos: res.data }))
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
    axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
    .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] })); 
  }

  // Add Todo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false}).then(res => this.setState({todos: [...this.state.todos, res.data]}));
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
                element= {<React.Fragment> <AddTodo addTodo={this.addTodo}/>
                 <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                 </React.Fragment>
                 }
              />
              <Route path='/about' element={<About/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
