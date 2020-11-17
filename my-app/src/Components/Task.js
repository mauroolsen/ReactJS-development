import React from 'react';
import PropTypes from 'prop-types';

class Task extends React.Component{

  render(){
    const {task} = this.props;
    return(
      <div>
        <p>
          Tarea: {task.id} - {task.title} -{task.description}
        </p>
      </div>
    );
  }
  
}

// Definiendo tipado de propiedad
Task.propTypes = {
  task: PropTypes.object.isRequired
}

export default Task;