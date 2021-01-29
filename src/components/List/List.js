import React from 'react';
import Form from '../Form/Form';
import ListItem from "../ListItem/ListItem"

class List extends React.Component {
    state = {
        tasks : ["Wash Hair", "Hoover the living-room"]
    }

    addTask = (newTask) => {
        this.setState((currentState) => {
          return {
            tasks: [...currentState.tasks, newTask],
          };
        });
      };

    render() {
        return <main>
        <h1>Task List</h1>
        <Form addTask={this.addTask} />
        <ListItem newTask={this.state.newTask}/>
        {/* <ul>
          {this.state.tasks.map((task) => {
            return <li key={task}>{task}</li>;
          })}
        </ul> */}
      </main>
    }
}

export default List;