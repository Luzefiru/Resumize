import React from 'react';

class Overview extends React.Component {
  render() {
    // create an array of JSX markup to be inserted into the <ul> JSX
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
