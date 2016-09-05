import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from '../styles/Space'

class Space extends Component {
  render() {
    const { dispatch, space } = this.props

    return (
      <TouchableHighlight onPress={ () => { this.onPress(space) }}>
        <View style={ styles.wrapper }>
          <Text>{ space.name }</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

export default Space