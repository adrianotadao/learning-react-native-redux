import React, { Component } from 'react'
import { WebView } from 'react-native'

class ShowLink extends Component {
  render() {
    const { link } = this.props

    console.log(link)

    return (
      <WebView
        automaticallyAdjustContentInsets={ true }
        startInLoadingState={ true }
        source={{ uri: link.url }}
        />
    )
  }
}

export default ShowLink
