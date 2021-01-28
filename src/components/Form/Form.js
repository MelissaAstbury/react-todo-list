import { render } from '@testing-library/react';
import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label>
          Add new task
          <input type="text" />
        </label>
      </form>
    );
  }
}

export default Form;
