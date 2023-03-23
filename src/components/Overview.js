import React from 'react';
import './Overview.css';

class Overview extends React.Component {
  render() {
    const listItemsJSX = this.props.tasks.map((task) => (
      <li key={task.name}>{task.name}</li>
    ));
    return (
      <div>
        <h3>Current Tasks:</h3>
        <ul>{listItemsJSX}</ul>
      </div>
    );
  }
}

export default Overview;
