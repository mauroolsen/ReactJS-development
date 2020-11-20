import React from "react";
import PropTypes from "prop-types";

class Task extends React.Component {

  styleCompleted = () => {
    const { task } = this.props;
    return {
      color: task.done ? "gray" : "black",
      textDecoration: task.done ? "line-through" : "none",
    };
  }
  styleButton = () => {
    return {
      color: "white",
      backgroundColor: "red",
      border: "none",
      borderRadius: "50px",
      padding: "10px",
      marginLeft: "10px"
    }
  }

  render() {
    const { task } = this.props;
    return (
      <div>
        <p style={this.styleCompleted()}>
          Tarea: {task.id} - {task.title} - {task.description}
          <input 
            type="checkbox" 
            onChange={this.props.checkDone.bind(this, task.id)} 
            defaultChecked={task.done}
          />
          <button style={this.styleButton()} onClick = {this.props.deleteTask.bind(this, task.id)}>X</button>
        </p>
      </div>
    );
  }
}

// Definiendo tipado de propiedad
Task.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired
};

export default Task;
