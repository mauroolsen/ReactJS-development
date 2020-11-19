import React from "react";

import tasksRep from './sample/tasks.json';

import Tasks from './Tasks';
import FormTask from './FormTask';
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      tasks: tasksRep
    };
  }

  // Resultado de FormTask
  onSubmit = (task) =>{
    this.addTask(task);
  }

  // Agregando task a state
  addTask = (task) => {
    task={id: this.state.tasks.length, ...task}
    this.setState({
      tasks: [...this.state.tasks, task]
    }, this.save);
  }

  save = () =>{
    //tasksRep = this.state.tasks;
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
