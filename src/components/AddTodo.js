import React, { Component } from 'react'

export class AddTodo extends Component {
  
  state = {
    title: ''
  }

  render() {
    return (
      <form>
        <input 
            type="text" 
            name="title" 
            style={{width: '92%', flex: '10', padding: '5px'}} 
            placeholder='Add Todo...' value={this.state.title} 
            onChange={this.onChange} 
        />
        <input 
            type="submit" 
            value="Submit" 
            className='btn' 
            style={{width: '8%', flex: '1'}}
        />
      </form>
    )
  }
}

export default AddTodo