import React from "react";

import HelloWorld from "./HelloWorld";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        This is my component:
        <HelloWorld subtitle="Español" />
        <HelloWorld subtitle="English" />
      </div>
    );
  }
}



export default App;
