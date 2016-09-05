import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import ShowItem from '../components/ShowItem'

class ShowItemContainer extends Component {
  render() {
    const { item } = this.props

    return (
      <ShowItem item={ item } />
    )
  }
}

export default connect(state => state.ItemList)(ShowItemContainer)
