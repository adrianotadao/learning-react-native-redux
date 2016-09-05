import React, { Component, PropTypes } from 'react'
import { ListView, View } from 'react-native'
import ItemList from './ItemList'

class ItemsList extends Component {
  render() {
    const { dataSource } = this.props

    return (
      <ListView
        dataSource={ dataSource }
        renderRow={ this.renderItemList }
        removeClippedSubviews={ true }
        enableEmptySections={ true }
        pageSize={ 10 }
        />
    )
  }

  renderItemList(item) {
    return(
      <ItemList key={ item.id } item={ item } />
    )
  }
}

ItemsList.propTypes = {
  dataSource: PropTypes.object.isRequired
}

export default ItemsList