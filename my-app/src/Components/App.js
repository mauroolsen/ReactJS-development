import React from "react";

import tasks from './sample/tasks.json';

import Tasks from './Tasks';
import FormTask from './FormTask';
class App extends React.Component {

  state = {
    tasks: tasks
  };

  addTask(task){
    this.state.tasks.push(task);
  }

  render() {
    return (
      <div className="App">
        <FormTask />
        <Tasks tasks = {this.state.tasks} />
        {this.addTask({
          "id": 4,
          "title": "tarea tres",
          "description": "description"
        })}
      </div>
    );
  }
}



export default App;
