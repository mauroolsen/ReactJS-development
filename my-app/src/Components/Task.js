import React from "react";
import PropTypes from "prop-types";

class Task extends React.Component {
  styleCompleted = () => {
    const { task } = this.props;
    return {
      color: task.done ? "gray" : "black",
      textDecoration: task.done ? "line-through" : "none",
    };
  };

  render() {
    const { task } = this.props;
    return (
      <div>
        <p style={this.styleCompleted()}>
          Tarea: {task.id} - {task.title} - {task.description}
          <input type="checkbox" />
          <button >X</button>
        </p>
      </div>
    );
  }
}

// Definiendo tipado de propiedad
Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task;
