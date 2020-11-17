import React from 'react';
import PropTypes from 'prop-types';

class Task extends React.Component{

  render(){
    const {task} = this.props;
    return(
      <div>
        <h1>Tarea: {task.id}</h1>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
    );
  }
  
}

Task.propTypes = {
  task: PropTypes.object.isRequired
}

export default Task;