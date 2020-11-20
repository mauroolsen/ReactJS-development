import React from 'react';
import PropTypes from 'prop-types';


import Task from './Task';

class Tasks extends React.Component{

  render(){

    return(
      <div>
        {this.props.tasks.map((e)=>{
          return(
            <Task 
              task = {e} 
              key={e.id}
              deleteTask = {this.props.deleteTask}
              checkDone = {this.props.checkDone}
            />
          );
        })}
      </div>
    );
  }
}

// Definiendo tipado de propiedad
Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
  checkDone: PropTypes.func.isRequired
}

export default Tasks;