import React from "react";

import tasks from './sample/tasks.json';

import Tasks from './Tasks';
import FormTask from './FormTask';
class App extends React.Component {

  state = {
    tasks: tasks
  };

  onSubmit = (task) =>{
    this.addTask(task);
  }

  addTask(task){
    task={
      ...task,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, task]
    });
  }

  render() {
    return (
      <div className="App">
        <FormTask onSubmit={this.onSubmit}/>
        <Tasks tasks = {this.state.tasks} />
      </div>
    );
  }
}



export default App;
