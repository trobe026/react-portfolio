import React, { Component } from "react";
import './Contact.css';
import { Redirect } from 'react-router'
import AWS from 'aws-sdk';


// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-west-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-west-2:1b04bd4b-cdb1-4055-a773-70ff0d6a604d',
});

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namevalue: 'i.e. John Smith',
      emailvalue: 'example@gmail.com',
      messagevalue: 'Type your message here...',
      counter: 0,
      LPAWS: {},
      redirect: false
    };
  }

  sendToTopic = function() {
      var sns = new AWS.SNS();
      var params = {
          //Message: 'Hello topic', /* required */
          Message: 'Sender: ' + this.state.namevalue + '\n' + 'Email: ' +  this.state.emailvalue + '\n' + 'Message: ' + this.state.messagevalue,
          Subject: 'New Message from Portfolio!',
          TopicArn: 'arn:aws:sns:us-west-2:101283745392:Portfolio_Contact_Form'
      };
      sns.publish(params, function(err, data) {
          if (err) console.log(err, err.stack); // an error occurred
          else     console.log(data);
                    // successful this.setresponse
                    this.setState({
                      redirect: true
                    })
      }.bind(this));
  };

  onBlurn(e) {
    if (e.target.placeholder === '') {
      this.setState({
        namevalue: 'i.e. John Smith'
      });
    }
  }

  onFocusn(e) {
    if (e.target.placeholder === this.state.namevalue && this.state.counter < 1) {
      this.setState({
        namevalue: ''
      });
    }
  }


  onBlure(e) {
    if (e.target.placeholder === '') {
      this.setState({
        emailvalue: 'example@gmail.com'
      });
    }
  }

  onFocuse(e) {
    if (e.target.placeholder === this.state.emailvalue && this.state.counter < 1) {
      this.setState({
        emailvalue: ''
      });
    }
  }

  onBlurm(e) {
      console.log(this.state)
    if (e.target.placeholder === '') {
      console.log('test')
      this.setState({
        messagevalue: 'Type your message here...'
      });
    }
  }

  onFocusm(e) {
    if (e.target.placeholder === this.state.messagevalue && this.state.counter < 1) {
      this.setState({
        messagevalue: ''
      });
    }
  }

  handleInputChangeName(e) {

    const msg = e.target.value;
    this.setState({
      namevalue: msg,
      counter: 1
    });
  };

  handleInputChangeEmail(e) {
    const msg = e.target.value;
    this.setState({
      emailvalue: msg,
      counter: 1
    });
  };

  handleInputChangeMessage(e) {
    const msg = e.target.value;
    this.setState({
      messagevalue: msg,
      counter: 1
    });
  };

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to='/thanks'/>
      )
    }
    return (
      <section>
            <div className="row well well-lg contact">
                <h2>Contact</h2>
                <form>
                  Name:
                  <br/>
                  <input
                    type="text"
                    onFocus={this.onFocusn.bind(this)}
                    onBlur={this.onBlurn.bind(this)}
                    placeholder={this.state.namevalue}
                    onChange={this.handleInputChangeName.bind(this)}/>
                  <br/>
                  Email:
                  <br/>
                  <input
                    type="text"
                    onFocus={this.onFocuse.bind(this)}
                    onBlur={this.onBlure.bind(this)}
                    placeholder={this.state.emailvalue}
                    onChange={this.handleInputChangeEmail.bind(this)}/>
                  <br/>
                  Message:
                  <br/>
                  <textarea
                    name="message"
                    onFocus={this.onFocusm.bind(this)}
                    onBlur={this.onBlurm.bind(this)}
                    rows="4"
                    placeholder={this.state.messagevalue}
                    onChange={this.handleInputChangeMessage.bind(this)}>
                  </textarea>
                </form>

                  <button className="btn btn-primary"  type="submit" onClick={() => this.sendToTopic()}>Send <i className="fa fa-envelope" aria-hidden="true"></i></button>

              </div>
          </section>
        );
      }
    }
