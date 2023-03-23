import React from 'react';

class Overview extends React.Component {
  render() {
    const listItemsJSX = this.props.tasks.map((task) => (
      <li key={task.name}>{task.name}</li>
    ));
    return <ul>{listItemsJSX}</ul>;
  }
}

export default Overview;
