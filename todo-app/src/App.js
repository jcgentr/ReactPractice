import React from 'react';
import './App.css';
import TodoItem from './TodoItem';
import todosData from './todosData'

// class-based component
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  makeTodoItemArray() {
    return this.state.todos.map(todo =>
      <TodoItem key={todo.id} item={todo} handleChange={this.handleChange}/>
    )
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })

      return {
        todos: updatedTodos
      }
    });
  }

  render() {
    const todoItems = this.makeTodoItemArray()
    return (
      <div className="todoList">
        {todoItems}
      </div>
    )
  }
}

export default App;


// functional component
// function App() {
//   const todoItems = todosData.map(todo =>
//     <TodoItem key={todo.id} item={todo} />
//   )

//   return (
//     <div className="todoList">
//       {todoItems}
//     </div>
//   )
// }