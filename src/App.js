import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'Learn React' },
      { id: 2, content: 'Docker' },
      { id: 3, content: 'Kubernetes' }
    ]
  };

  deleteHandler = value => {
    this.setState({
      todos: this.state.todos.filter(({ id }) => id !== value)
    });
  };

  addHandler = content => {
    this.setState({
      todos: [...this.state.todos, { id: new Date().getTime(), content }]
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteHandler={this.deleteHandler} />
        <AddTodo addHandler={this.addHandler} />
      </div>
    );
  }
}

export default App;
