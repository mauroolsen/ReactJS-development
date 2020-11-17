import React from "react";

import tasks from './sample/tasks.json';

import Tasks from './Tasks';
import FormTask from './FormTask';
class App extends React.Component {

  state = {
    tasks: tasks
  };

  render() {
    return (
      <div className="App">
        <FormTask />
        <Tasks tasks = {this.state.tasks} />
      </div>
    );
  }
}



export default App;
