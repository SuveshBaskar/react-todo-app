import React, { Component } from 'react';
class AddTodo extends Component {
  state = {
    content: ''
  };

  changeHandler = e => {
    this.setState({
      content: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.addHandler(this.state.content);
    this.setState({ content: '' });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="content">Add new Todo</label>
          <input
            type="text"
            id="content"
            value={this.state.content}
            onChange={this.changeHandler}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
