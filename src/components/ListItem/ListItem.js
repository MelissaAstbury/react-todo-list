import React from 'react';

const ListItem = (props) => {
  const handleClick = () => {
    props.editTask(props.task);
  };

  return (
    <section>
      <h3>{props.task}</h3>
      <button onClick={handleClick}>Edit</button>
      <button>Delete</button>
    </section>
  );
};

export default ListItem;
