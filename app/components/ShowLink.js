import React, { Component } from 'react'
import { WebView } from 'react-native'

const ShowLink = ({ link }) => {
  return (
    <WebView
      automaticallyAdjustContentInsets={ true }
      startInLoadingState={ true }
      source={{ uri: link.url }}
      />
  )
}

export default ShowLink
