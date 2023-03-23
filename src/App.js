import React from 'react';
import Overview from './components/Overview';

class App extends React.Component {
  constructor(props) {
    super(props);

    // create a state object containing the {tasks} array
    this.state = {
      tasks: [],
    };

    // binds the lexical context to addTask()
    this.addTask = this.addTask.bind(this);
  }

  addTask() {
    // get the name of the task from the <input> field #taskField
    const name = document.querySelector('#taskField').value;

    // append the task to the state object's {tasks} array
    this.setState((state, props) => ({
      tasks: state.tasks.concat({ name }),
    }));

    // remove field value for next input
    document.querySelector('#taskField').value = '';
  }

  render() {
    return (
      <div className="App">
        <h3>Add a Task:</h3>
        <form action="#">
          <label htmlFor="taskField">Task Name: </label>
          <input type="text" placeholder="Task Name" id="taskField"></input>
          <button type="submit" onClick={this.addTask}>
            Add
          </button>
        </form>
        {/* Pass the state.tasks as props to Overview component */}
        <Overview tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
