import React from 'react';
import Form from '../Form/Form';
import ListItem from '../ListItem/ListItem';

class List extends React.Component {
  state = {
    tasks: ['Wash Hair', 'Hoover the living-room'],
    openEdit: false,
    taskEdited: '',
  };

  addTask = (newTask) => {
    this.setState((currentState) => {
      return {
        tasks: [...currentState.tasks, newTask],
      };
    });
  };

  editTask = (task) => {
    this.setState({ openEdit: !this.state.openEdit, taskEdited: task });
  };

  handleEdit = (e) => {
    this.setState({ taskEdited: e.target.value });
  };

  saveChanges = (e) => {
    e.preventDefault();
    this.setState({ tasks: [...this.state.tasks, this.state.taskEdited] });
  };

  render() {
    return (
      <main>
        <h1>Task List</h1>
        {this.state.openEdit ? (
          <>
            <input
              type="text"
              value={this.state.taskEdited}
              onChange={this.handleEdit}
            />
            <button onClick={this.saveChanges}> Save Changes </button>
          </>
        ) : (
          <Form addTask={this.addTask} />
        )}
        <ul>
          {this.state.tasks.map((task) => {
            return <ListItem key={task} task={task} editTask={this.editTask} />;
          })}
        </ul>
      </main>
    );
  }
}

export default List;
