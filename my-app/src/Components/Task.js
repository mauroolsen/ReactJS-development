import React from 'react';

class Task extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h1>Tarea: {this.props.task.id}</h1>
        <h3>{this.props.task.title}</h3>
        <p>{this.props.task.description}</p>
      </div>
    );
  }
}

export default Task;