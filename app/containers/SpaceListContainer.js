import React, { Component } from 'react'
import { ListView, View } from 'react-native'
import { connect } from 'react-redux'
import LinksList from '../components/LinksList'
import { getSpaces } from '../actions/SpaceActions'

class SpaceListContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getSpaces())
  }

  render() {
    const { spaces } = this.props
    return(
      <LinksList
        dataSource={ this.dataSource(spaces) }
        />
    )
  }

  dataSource(spaces) {
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    return ds.cloneWithRows(spaces)
  }
}

export default connect((state) => state.Spaces)(SpaceListContainer)