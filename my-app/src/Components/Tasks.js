import React from 'react';
import PropTypes from 'prop-types';


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

// Definiendo tipado de propiedad
Tasks.propTypes = {
  tasks: PropTypes.array.isRequired
}

export default Tasks;