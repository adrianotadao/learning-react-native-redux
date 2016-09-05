import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import ShowLink from '../components/ShowLink'

class ShowLinkContainer extends Component {
  render() {
    const { link } = this.props

    return (
      <ShowLink link={ link } />
    )
  }
}

export default ShowLinkContainer
