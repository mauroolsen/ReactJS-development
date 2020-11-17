import React, { Component } from 'react';

export default class FormTask extends Component{

  onSubmit = (e)=>{
    console.log(e.target);
    e.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.onSubmit}>
        <input type='text' name='title' placeholder='Write a title...'/>
        <br/>
        <input type='text' name='Description' placeholder='Write a description...'/>
        <input type='submit'/>
        
      </form>
    );
  }
}