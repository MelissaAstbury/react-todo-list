import React from 'react';

class Form extends React.Component {
  state = {
    newTask: '',
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.dir(this.state.newTask);
    this.props.addTask(this.state.newTask);
  };

  handleChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  render() {
    const { handleSubmit, handleChange, state } = this;
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Add new task
          <input onChange={handleChange} type="text" value={state.newTask} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
