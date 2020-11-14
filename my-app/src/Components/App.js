import React from "react";

import Tasks from './Tasks';
import tasks from './sample/tasks.json';

import Form from './Form';
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
        <Form/>
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
