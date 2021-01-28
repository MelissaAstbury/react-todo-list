import React from 'react';
import './App.css';

import Form from './components/Form/Form';

class App extends React.Component {
  state = {
    tasks: ['Wash hair', 'Clean the Bathroom'],
  };
  render() {
    return (
      <div>
        <h1>Task List</h1>
        <Form />
      </div>
    );
  }
}

export default App;
