import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTab from './BottomTab'
import SplashScreen from '../Components/SplashScreen/SplashScreen'

export default function RootRouter() {

  const RootRouter = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <RootRouter.Navigator screenOptions={{ headerShown: false }}>
        <RootRouter.Screen name='SplashScreen' component={SplashScreen} />
        <RootRouter.Screen name='BottomTab' component={BottomTab} />
      </RootRouter.Navigator>
    </NavigationContainer>
  )
}