import React, { Component } from 'react'
import { ListView } from 'react-native'
import { connect } from 'react-redux'
import SpaceList from '../components/SpaceList'
import { getSpaces } from '../actions/SpaceActions'

class SpaceListContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getSpaces())
  }

  render() {
    const { spaces } = this.props
    return(
      <SpaceList
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