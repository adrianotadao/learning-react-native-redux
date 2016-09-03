import React, { Component } from 'react'
import { TabBarIOS, Text, View } from 'react-native'
import styles from '../styles/TabBar'
import { tabItemClicked } from '../actions/TabItemActions'
import { connect } from 'react-redux'

const TabBarItem = ({ children, selected, dispatch, title, icon, type }) => {
  return(
    <TabBarIOS.Item
      title = { title }
      icon = {{ uri: icon, scale: 5 }}
      selected = { selected == type }
      onPress = { () => {
        dispatch(tabItemClicked(type))
      }}>
      <View style={[ styles.tabContent, { backgroundColor: '#FFF' } ]}>
        { children }
      </View>
    </TabBarIOS.Item>
  )
}

TabBarItem = connect(state => state.TabItem)(TabBarItem)

export default TabBarItem