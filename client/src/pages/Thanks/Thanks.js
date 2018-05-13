import React, { Component } from "react";
import './Thanks.css';
import { Redirect } from 'react-router'

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
      }.bind(this), 3000
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
      <div className='row well well-lg'>
        <h1>Thanks for the message!</h1>
      </div>
    )
  }
}
