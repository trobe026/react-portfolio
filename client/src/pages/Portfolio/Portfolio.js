import React, { Component } from "react";
import PROJECTS from '../../data/items.js';
import Feed from '../../components/Feed/Feed.jsx'
import store from '../../redux/store'
import { renderModal } from '../../redux/actions'
import './Portfolio.css';

export default class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState().modalContent
  }

  componentDidMount() {
  this.unsubscribe = store.subscribe(() => {
    this.setState(store.getState().modalContent)
  })
}

componentWillUnmount() {
  this.unsubscribe()
}

render() {
  return (
    <div className='col-md-12'>
      <div className="row well well-lg">
              <section>
                <Feed items={PROJECTS} name="Portfolio" renderModal={renderModal}
                 />
                </section>
              </div>
      </div>
    );
  }
}
