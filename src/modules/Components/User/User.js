import { View, Text,SafeAreaView, ImageBackground ,Dimensions,Image} from 'react-native'
import React from 'react'


export default function User() {
  const {height,width} =Dimensions.get('screen')

  return (
    <SafeAreaView>
      <ImageBackground
      source={require('../../../assets/images/amazonGradient.png')}
      resizeMode={'cover'}
      resizeMethod={'resize'}
      style={{flex:1,height:height,width:width}}
      >
        <Image
        source={require('../../../assets/images/amazonIn.png')}
        style={{height:35,width:90}}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}