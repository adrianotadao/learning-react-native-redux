import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import styles from '../styles/ItemList'

class ItemList extends Component {
  render() {
    const { item } = this.props
    return (
      <View style={ styles.wrapper }>
        <Text> { this.getLabel(item) } </Text>
      </View>
    )
  }

  getLabel(item) {
    // if (item.name) return item.name
    // if (item.title) return item.title
    return undefined
  }
}

// ItemList.propTypes = {
//   item: PropTypes.shape({
//     name: PropTypes.string.isRequired
//   }).isRequired
// }

export default ItemList