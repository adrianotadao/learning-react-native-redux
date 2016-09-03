import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import styles from '../styles/Space'

class Space extends Component {
  render() {
    const { space } = this.props
    return (
      <View style={ styles.wrapper }>
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