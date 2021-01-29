import React from 'react';

const ListItem = (props) => {
  console.log(props.task)
  return (
    <section>
    <h3>
      {props.task}
    </h3>
    <button>Edit</button>
    <button>Delete</button>
    </section>
  )
}

export default ListItem;
