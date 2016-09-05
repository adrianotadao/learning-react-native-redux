import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from '../styles/Space'

const Space = ({ dispatch, space }) => {
  return (
    <TouchableHighlight onPress={ () => { this.onPress(space) }}>
      <View style={ styles.wrapper }>
        <Text>{ space.name }</Text>
      </View>
    </TouchableHighlight>
  )
}

Space.propTypes = {
  space: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })
}

export default Space