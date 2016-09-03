import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'

class Space extends Component {
  render() {
    const { space } = this.props
    return (
      <View>
        <Text> { space.name } </Text>
      </View>
    )
  }
}

Space.propTypes = {
  space: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
}

export default Space