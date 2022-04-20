import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from '../../StyleSheet/amazonStyles'
import { useEffect } from 'react'

export default function SplashScreen({navigation}) {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('BottomTab')
        },6000)
    })

  return (
    <View style={styles.splashScreen}>
        <Image source={require('../../../assets/images/amazonSplash.gif')}
        resizeMode={'contain'}
        style={styles.splashLogo}
        />
    </View>
  )
}