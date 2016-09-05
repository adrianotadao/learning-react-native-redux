'use strict';

import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from '../config/store'
import { Scene, Router } from 'react-native-router-flux'
import styles from '../styles/App'
import TabBar from '../components/TabBar'

const store = configureStore()

const App = () => {
  return(
    <Provider store={ store }>
      <View style={ styles.container }>
        <Router>
          <Scene key='root'>
            <Scene key='drawer' component={ TabBar } title={ 'Skore' } />
          </Scene>
        </Router>
      </View>
    </Provider>
  )
}

export default App