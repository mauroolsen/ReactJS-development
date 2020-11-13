import React from 'react';

class Form extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      value: ''
    };

  }

  handleChange = (event)=>{
    console.log(event);
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit = (event)=>{
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  cargarTarea = (event)=>{
    event.preventDefault();
  }

  render(){
    return(
      <div>
        <form onSubmit={this.cargarTarea}>
          <input type="text" placeholder="titulo" id="title" name="title" value={this.state.value} onChange={this.handleChange}></input>
          <input type="text" placeholder="descripcion" id="body" name="body"></input>
          <button type="submit">Agregar</button>
        </form>
      </div>
    );
  }
}

export default Form;