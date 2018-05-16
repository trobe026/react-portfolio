import './feed-item.css'
import React, { Component } from 'react'
import store from '../../redux/store'
import { renderModal } from '../../redux/actions'

export default class FeedItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    console.log(props.id)
  }

  handleClick() {
    console.log(this.props)
    store.dispatch(renderModal({
      name: this.props.name,
      path: this.props.path,
      href: this.props.href,
      alt: this.props.alt
    }))
  }

  render() {
    return (
      <a
        className={'img img-' + this.props.id}
        onClick={this.handleClick}
        href={this.props.href}
        target='_blank'
        rel='github'>
        <img
          className='img-thumbnail'
          src={this.props.path} alt={this.props.alt}/>
          <h4>{this.props.name}</h4>
        </a>
    )
  }
}
