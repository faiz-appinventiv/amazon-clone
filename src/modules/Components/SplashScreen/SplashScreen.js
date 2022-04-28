import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from '../../StyleSheet/amazonStyles'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import FastImage from 'react-native-fast-image'

export default function SplashScreen({navigation}) {
    
  const {login} =useSelector(store=>store.AuthReducer)

    useEffect(()=>{
        setTimeout(()=>{
          (login)?
            navigation.replace('AuthRouter'):
            navigation.replace('BottomTab')
        },200)
    })

  return (
    <View style={styles.splashScreen}>
        <Image source={require('../../../assets/images/amazonSplash.gif')}
        resizeMode={'contain'}
        style={styles.splashLogo}
        />
        {/* <FastImage
        style={{ width: 200, height: 200 }}
        source={require('../../../assets/images/amazonSplash.gif'),{
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
        }}
        style={styles.splashLogo}
        resizeMode={FastImage.resizeMode.contain}
    /> */}
    {/* <FastImage
        style={{ width: 200, height: 200 }}
        source={{
            uri: 'https://unsplash.it/400/400?image=1',
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
    /> */}


    </View>
  )
}