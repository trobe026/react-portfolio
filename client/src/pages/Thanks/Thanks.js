import React, { Component } from "react";
import './Thanks.css';
import { Redirect } from 'react-router-dom'

export default class Thanks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  afterLoad() {
    setTimeout(
      function() {
        console.log('test')
        this.setState({
          redirect: true
        });
      }.bind(this), 2300
    );
  }

  componentDidMount() {
    this.afterLoad();
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to='/'/>
      )
    }
    return(
      <div className='row well well-lg thanks'>
        <h2>Thanks for the message!</h2>
      </div>
    )
  }
}
