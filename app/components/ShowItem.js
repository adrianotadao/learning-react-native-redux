import React, { Component } from 'react'
import { WebView } from 'react-native'

class ShowItem extends Component {
  render() {
    const { item } = this.props

    console.log(item)

    return (
      <WebView
        automaticallyAdjustContentInsets={ true }
        startInLoadingState={ true }
        source={{ uri: item.url }}
        />
    )
  }
}

export default ShowItem
