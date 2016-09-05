import React, { Component, PropTypes } from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from '../styles/Link'

class Link extends Component {
  render() {
    const { dispatch, link } = this.props

    return (
      <TouchableHighlight onPress={ () => { this.onPress(link) }}>
        <View style={ styles.wrapper }>
          <Image style={ styles.thumb } source={{ uri: this.getThumb(link) }} />
          <Text> { link.title } </Text>
        </View>
      </TouchableHighlight>
    )
  }

  onPress(link) {
    Actions.showLink({ link: link })
  }

  getThumb(link) {
    if (link.image && link.image !== '') return link.image.replace('http://', 'https://')
    return 'https://pbs.twimg.com/profile_images/2659400087/4bdb424d1ca063ad5f875327aaabca92.jpeg'
  }
}

Link.propTypes = {
  link: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })
}

export default Link