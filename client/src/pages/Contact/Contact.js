import React, { Component } from "react";
import './Contact.css';

class Contact extends Component {

  render() {
    return (
      <section>
        <div className="container-fluid">
            <div className="col-sm-10 col-sm-offset-1 col-xs-12">
                <h2>Contact<i className="fa fa-address-book" aria-hidden="true"></i></h2>
                <form>
                  Name:
                  <br/>
                  <input type="text" onfocus="if(this.value == 'i.e. John Smith') {this.value = '';}" onblur="if(this.value == '') {this.value = 'i.e. John Smith';}" value="i.e. John Smith"/>
                  <br/>
                  Email:
                  <br/>
                  <input type="text" onfocus="if(this.value == 'example@gmail.com') {this.value = '';}" onblur="if(this.value == '') {this.value = 'example@gmail.com';}" value="example@gmail.com"/>
                  <br/>
                  Message:
                  <br/>
                  <textarea name="message" onfocus="if(this.value == this.defaultValue) {this.value = '';}" onblur="if(this.value == '') {this.value = this.defaultValue;}" rows="4">Type your message here...
                  </textarea>
                </form>
                <a href="#"><input className="btn btn-primary" type="submit"/></a>
              </div>
            </div>
          </section>
    );
  }

}

export default Contact;
