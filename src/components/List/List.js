import React from 'react';
import Form from '../Form/Form';
import ListItem from '../ListItem/ListItem';

class List extends React.Component {
  state = {
    tasks: ['Wash Hair', 'Hoover the living-room'],
    openEdit: false,
    taskEdited: '',
    taskToDelete: 0,
    taskToEdit: 0,
  };

  addTask = (newTask) => {
    this.setState((currentState) => {
      return {
        tasks: [...currentState.tasks, newTask],
      };
    });
  };

  editTask = (task, index) => {
    this.setState({
      openEdit: !this.state.openEdit,
      taskEdited: task,
      taskToEdit: index,
    });
  };

  handleEdit = (event) => {
    this.setState({ taskEdited: event.target.value });
  };


  saveChanges = (event) => {
    this.setState((currentState) => {
      const newTasks = [...currentState.tasks];
      newTasks[currentState.taskToEdit] = this.state.taskEdited;
      return {
        tasks: newTasks,
      };
    });
  };


  deleteTask = (task, index) => {
    this.setState((currentState) => {
        this.setState({taskToDelete : index})
        const chosenTasks = [...currentState.tasks];
        chosenTasks[currentState.taskToDelete] = this.state.taskToDelete;
        chosenTasks.splice(index, 1);
    });
  }

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
            <button onClick={this.saveChanges}>Save Changes</button>
          </>
        ) : (
          <Form addTask={this.addTask} />
        )}
        <ul>
          {this.state.tasks.map((task, index) => {
            return (
              <ListItem
                task={task}
                key={task}
                editTask={this.editTask}
                deleteTask={this.deleteTask}
                index={index}
              />
            );
          })}
        </ul>
      </main>
    );
  }
}

export default List;
