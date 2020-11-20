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
    task={
      id: this.state.tasks.length, 
      ...task,
       done: false
    }
    this.setState({
      tasks: [...this.state.tasks, task]
    }, this.save);
  }

  checkDone = (id) => {
    const newTasks = this.state.tasks.map(task =>{
      if(task.id === id){
        task.done = !task.done;
      }
      return task;
    });
    this.setState({
      tasks: newTasks
    });
  }

  deleteTask = (id)=>{
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    });
  }

  save = () =>{
    //tasksRep = this.state.tasks;
  }

  render() {
    return (
      <div className="App">
        <FormTask onSubmit={this.onSubmit}/>
        <Tasks 
          tasks = {this.state.tasks} 
          deleteTask = {this.deleteTask}
          checkDone = {this.checkDone}
        />
      </div>
    );
  }
}



export default App;
