import React from 'react'
import {StyleSheet, Text, View, ImageBackground, StatusBar} from 'react-native'
import {transparent, wp, PMed, hp} from '../Config'

const Welcome = () => {
  return (
    <ImageBackground source={require('../assets/imgs/bg.jpg')} style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.overlay}>
        <Text style={styles.logoText}>P</Text>
        <Text style={styles.logoText}>Xchange</Text>
      </View>
    </ImageBackground>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: transparent(5),
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(100),
    height: hp(20),
  },
  logoText: {
    fontSize: wp(20),
    color: '#fff',
    fontFamily: PMed,
    padding: 0,
  }
})
