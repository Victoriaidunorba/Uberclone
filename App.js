
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { colors, parameters } from './src/global/styles'
import HomeScreen from './src/screens/HomeScreen'
import RootNavigator from './src/Navigations/RootNavigator'

const SCREEN_WIDTH = Dimensions.get('window').width

const App = () => {
  return (
    <RootNavigator />
  )
}

export default App

const styles = StyleSheet.create({

  container:{
    flex:1,
  }
})