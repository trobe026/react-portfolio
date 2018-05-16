import './feed.css'
import React, { Component } from 'react'
import store from '../../redux/store.js'
import { itemLoaded } from '../../redux/actions'
import FeedItem from '../FeedItem/FeedItem.jsx'
import LoadingItem from '../LoadingItem/LoadingItem.jsx'

export default class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState().loadedItems
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState().loadedItems)
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  onLoad(feedItem) {
    store.dispatch(itemLoaded(feedItem))
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        {this.state.loadedItems.map((item, i) =>
          <FeedItem
            path={item.path}
            name={item.name}
            href={item.href}
            alt={item.alt}
            renderModal={this.props.renderModal}
            id={i}
            key={i} />
        )}
        {this.props.items.length > this.state.loadedItems.length &&
          <LoadingItem />
        }
        <div className="hidden">
          {this.props.items.map((item, i) =>
            <img src={item.path} alt={item.alt} onLoad={this.onLoad.bind(this, item)} key={i} />
          )}
        </div>
      </div>
    )
  }
}
