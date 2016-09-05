import React, { Component, PropTypes } from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from '../styles/Link'
import { connect } from 'react-redux'

class Link extends Component {
  render() {
    const { dispatch, item } = this.props

    return (
      <TouchableHighlight onPress={ () => { this.onPress(item) }}>
        <View style={ styles.wrapper }>
          <Image style={ styles.thumb } source={{ uri: this.getThumb(item) }} />
          <Text> { this.getLabel(item) } </Text>
        </View>
      </TouchableHighlight>
    )
  }

  onPress(item) {
    Actions.showItem({ item: item })
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

// Link.propTypes = {
//   item: PropTypes.shape({
//     name: PropTypes.string.isRequired
//   }).isRequired
// }

Link = connect()(Link)

export default Link