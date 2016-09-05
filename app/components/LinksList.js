import React, { Component, PropTypes } from 'react'
import { ListView, View } from 'react-native'
import Link from './Link'

class LinksList extends Component {
  render() {
    const { dataSource } = this.props

    return (
      <ListView
        dataSource={ dataSource }
        renderRow={ this.renderLink }
        removeClippedSubviews={ true }
        enableEmptySections={ true }
        pageSize={ 10 }
        />
    )
  }

  renderLink(item) {
    return(
      <Link key={ item.id } item={ item } />
    )
  }
}

LinksList.propTypes = {
  dataSource: PropTypes.object.isRequired
}

export default LinksList