import React from "react";

import Task from './Task';
import Form from './Form';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Form />
        <Task title="titulo" text="body"/>
      </div>
    );
  }
}



export default App;
