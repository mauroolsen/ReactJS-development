import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormTask extends Component{

  onSubmit = (e)=>{
    const {onSubmit} = this.props;
    let task = {
      title: e.target.title.value,
      description: e.target.description.value
    }
    onSubmit(task);
    e.preventDefault();
  }

  render(){

    return(
      <form onSubmit={this.onSubmit}>
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