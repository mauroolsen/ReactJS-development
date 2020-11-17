import React from "react";

import tasks from './sample/tasks.json';

import Tasks from './Tasks';
import FormTask from './FormTask';
class App extends React.Component {

  state = {
    tasks: tasks
  };

  onSubmit = (e) =>{
    console.log(e.target.title.value, e.target.description.value);
    e.preventDefault();
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
