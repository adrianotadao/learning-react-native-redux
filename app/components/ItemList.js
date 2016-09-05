import React, { Component, PropTypes } from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../styles/ItemList'

class ItemList extends Component {
  render() {
    const { item } = this.props

    return (
      <View style={ styles.wrapper }>
        <Image style={ styles.thumb } source={{ uri: this.getThumb(item) }} />
        <Text> { this.getLabel(item) } </Text>
      </View>
    )
  }

  getThumb(item) {
    if (item.image && item.image !== '') return item.image.replace('http://', 'https://')
    return 'https://pbs.twimg.com/profile_images/2659400087/4bdb424d1ca063ad5f875327aaabca92.jpeg'
  }

  getLabel(item) {
    if (item.name) return item.name
    if (item.title) return item.title
    return undefined
  }
}

// ItemList.propTypes = {
//   item: PropTypes.shape({
//     name: PropTypes.string.isRequired
//   }).isRequired
// }

export default ItemList