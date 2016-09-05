import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Space extends Component {
  render() {
    const { dispatch, space } = this.props

    return (
      <TouchableHighlight onPress={ () => { this.onPress(space) }}>
        <View>
          <Text>{ space.name }</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

export default Space