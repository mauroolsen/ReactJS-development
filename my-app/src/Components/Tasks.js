import React from 'react';

import Task from './Task';

class Tasks extends React.Component{

  render(){

    return(
      <div>
        {this.props.tasks.map((e)=>{
          return(
            <Task task = {e} key={e.id}/>
          );
        })}
      </div>
    );
  }
}

export default Tasks;