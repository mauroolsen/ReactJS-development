import React from 'react';

class Task extends React.Component{
  constructor(props){
    super(props);
    
  }
  render(){
    return(
      <div className="card">
          <div className="header">
            <h1>{this.props.title}</h1>
          </div>
          <div className="body">
            <p>{this.props.text}</p>
          </div>
      </div>
    )
  }
}

export default Task;