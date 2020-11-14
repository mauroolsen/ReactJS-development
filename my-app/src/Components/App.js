import React from "react";

import Tasks from './Tasks';
import tasks from './sample/tasks.json';
class App extends React.Component {

  state = {
    tasks: tasks
  };

  render() {
    return (
      <div className="App">
        <Tasks tasks = {this.state.tasks} />
      </div>
    );
  }
}



export default App;
