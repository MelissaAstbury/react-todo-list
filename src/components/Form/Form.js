import React from 'react';
import Button from "../Buttons/buttons";
// import App from "../../App"

class Form extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {...this.state.tasks};
    this.props.addTask(newTask);
  }

  handleClick = (event) => {
    event.preventDefault();
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Add new task
          <input type="text" />
        </label>
      <button onClick={this.handleClick}>Submit</button>
      </form>
    );
  }
}

export default Form;
