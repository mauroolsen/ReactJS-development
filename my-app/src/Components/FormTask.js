import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormTask extends Component{

  onSubmit = (e)=>{
    console.log(e.target.title.value, e.target.description.value);
    e.preventDefault();
  }

  render(){
    const {onSubmit} = this.props;

    return(
      <form onSubmit={onSubmit}>
        <input type='text' name='title' placeholder='Write a title...'/>
        <br/>
        <input type='text' name='description' placeholder='Write a description...'/>
        <input type='submit'/>
      </form>
    );
  }
}

FormTask.propTypes = {
  onSubmit: PropTypes.func.isRequired
}