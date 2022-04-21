import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTab from './BottomTab'
import SplashScreen from '../Components/SplashScreen/SplashScreen'
import AuthRouter from '../Components/Auth/authRouter'
import { useSelector } from 'react-redux'

export default function RootRouter() {

  const RootRouter = createNativeStackNavigator()

  const { login } = useSelector(store => store.AuthReducer)

  return (
    <NavigationContainer>
      <RootRouter.Navigator screenOptions={{ headerShown: false }}>
        <RootRouter.Screen name='SplashScreen' component={SplashScreen} />
        <RootRouter.Screen name='AuthRouter' component={AuthRouter} />
        <RootRouter.Screen name='BottomTab' component={BottomTab} />
      </RootRouter.Navigator>
    </NavigationContainer>
  )
}