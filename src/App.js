import React from 'react';
import Overview from './components/Overview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };

    this.addTask = this.addTask.bind(this);
  }

  async addTask() {
    const name = document.querySelector('#taskField').value;
    await this.setState((state, props) => ({
      tasks: state.tasks.concat({ name }),
    }));
    document.querySelector('#taskField').value = '';
  }

  render() {
    return (
      <div>
        <h3>Add a Task:</h3>
        <form action="#">
          <label htmlFor="taskField">Task Name: </label>
          <input type="text" placeholder="Task Name" id="taskField"></input>
          <button type="submit" onClick={this.addTask}>
            Add
          </button>
        </form>
        <br />
        <br />
        <h3>Current Tasks:</h3>
        <Overview tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
