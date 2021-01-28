import React from 'react';
import './App.css';

import Form from './components/Form/Form';

class App extends React.Component {
  state = {
    tasks: ['Wash hair', 'Clean the Bathroom'],
  };

  addTask = (newTask) => {
    console.log(newTask);
    this.setState((currentState) => {
      return {
        tasks: [...currentState.tasks, newTask],
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Task List</h1>
        <Form addTask={this.addTask} />
        <ul>
          {this.state.tasks.map((task) => {
            return <li key={task}>{task}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
