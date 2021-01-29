import React from 'react';

const ListItem = (props) => {
  const handleClick = () => {
    props.editTask(props.task, props.index);
  };

  const handleDelete = () => {
    props.deleteTask(props.task, props.index);
  }

  return (
    <section>
      <h3>{props.task}</h3>
      <button onClick={handleClick}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </section>
  );
};

export default ListItem;
