import React from 'react';

const ListItem = (props) => {
  const handleClick = () => {
    props.editTask(props.task, props.index);
  };

  const handleDelete = () => {
    props.deleteTask(props.task, props.index);
  };

  return (
    <section className="item-container">
      <h3>{props.task}</h3>
      <div className="item-buttons">
        <button className="edit" onClick={handleClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </section>
  );
};

export default ListItem;
