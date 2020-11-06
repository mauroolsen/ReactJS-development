import React from "react";


class HelloWorld extends React.Component{

  constructor(props){
    super(props);
    this.idiomas={
      español: "Hola mundo",
      english: "Hello world"
    };
    this.state = {
      idioma: 1
    };
  }

  cambiarIdioma = () => {
    this.setState((this.state.idioma == 1) ? {idioma:0} : {idioma:1}); 
  }

  render(){
    let response = null;
    if(this.state.idioma == 1){
      response = (
        <div className="hello">
          <h1>{this.idiomas.español}</h1>
          <h4>{this.props.subtitle}</h4>
          <button onClick={this.cambiarIdioma}>Cambiar idioma</button>
        </div>
      );
    }else{
      response = (
        <div className="hello">
          <h1>{this.idiomas.english}</h1>
          <h4>{this.props.subtitle}</h4>
          <button onClick={this.cambiarIdioma}>Cambiar idioma</button>
        </div>
      );
    }
    return(response);
  }
}

export default HelloWorld;