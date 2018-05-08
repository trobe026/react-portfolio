import React, { Component } from "react";
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namevalue: 'i.e. John Smith',
      emailvalue: 'example@gmail.com',
      messagevalue: 'Type your message here...',
      blankvalue: ''
    };
  }

  onBlurn(e) {
    if (e.target.placeholder === '') {
      this.setState({
        namevalue: 'i.e. John Smith'
      });
    }
  }

  onFocusn(e) {
    if (e.target.placeholder === this.state.namevalue) {
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
    if (e.target.placeholder === this.state.emailvalue) {
      this.setState({
        emailvalue: ''
      });
    }
  }

  onBlurm(e) {
    if (e.target.placeholder === '') {
      this.setState({
        messagevalue: 'Type your message here...'
      });
    }
  }

  onFocusm(e) {
    if (e.target.placeholder === this.state.messagevalue) {
      this.setState({
        messagevalue: ''
      });
    }
  }

  render() {
    return (
      <section>
            <div className="row well well-lg">
                <h2>Contact</h2>
                <form>
                  Name:
                  <br/>
                  <input
                    type="text"
                    onFocus={this.onFocusn.bind(this)}
                    onBlur={this.onBlurn.bind(this)}
                    placeholder={this.state.namevalue}/>
                  <br/>
                  Email:
                  <br/>
                  <input
                    type="text"
                    onFocus={this.onFocuse.bind(this)}
                    onBlur={this.onBlure.bind(this)}
                    placeholder={this.state.emailvalue}/>
                  <br/>
                  Message:
                  <br/>
                  <textarea
                    name="message"
                    onFocus={this.onFocusm.bind(this)}
                    onBlur={this.onBlurm.bind(this)}
                    rows="4"
                    placeholder={this.state.messagevalue}>
                  </textarea>
                </form>
                <a href="/nowhere"><input className="btn btn-primary" type="submit"/></a>
              </div>
          </section>
    );
  }

}

export default Contact;
