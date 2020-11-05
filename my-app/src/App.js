import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        This is my component:
        <HelloWorld text="Hola mundo" subtitle="Español" />
        <HelloWorld text="Hello world" subtitle="English" />
      </div>
    );
  }
}

class HelloWorld extends React.Component{
  render(){
    return(
      <div className="hello">
        <h1>{this.props.text}</h1>
        <h4>{this.props.subtitle}</h4>
      </div>
    );
  }
}

export default App;
