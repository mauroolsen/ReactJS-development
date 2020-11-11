import React from "react";

import Task from './Task';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Task title="titulo" text="body"/>
      </div>
    );
  }
}



export default App;
