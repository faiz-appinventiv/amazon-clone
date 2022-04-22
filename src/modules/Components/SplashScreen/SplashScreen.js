import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from '../../StyleSheet/amazonStyles'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function SplashScreen({navigation}) {
    
  const {login} =useSelector(store=>store.AuthReducer)

    useEffect(()=>{
        setTimeout(()=>{
          (login)?
            navigation.replace('AuthRouter'):
            navigation.replace('BottomTab')
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