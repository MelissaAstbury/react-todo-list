import React from 'react';

const ListItem = (props) => {
  console.log(props)
  return (
    <section>
    <h3>
      {props.name}
    </h3>
    <button>Edit</button>
    <button>Delete</button>
    </section>
  );
};

export default ListItem;
