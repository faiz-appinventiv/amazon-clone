import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import User from '../Components/User/User'
import Cart from '../Components/Cart/Cart'
import Menu from '../Components/Menu/Menu'
import { Image } from 'react-native'
import HomeStack from './Homestack'


const BottomTabNavigator = createBottomTabNavigator()

export default function BottomTab() {
  return (
    <BottomTabNavigator.Navigator initialRouteName='Home'
      labeled={false}
      screenOptions={{ tabBarShowLabel: false, headerShown: false }}

      // labeled={false}
      barStyle={{ backgroundColor: '#2DBFF8' }}
      // screenOptions={{style={backgroundColor:'lightgreen'}}}
      backBehavior={"history"}
      activeColor={'lightgreen'}
    >
      <BottomTabNavigator.Screen name='Home' component={HomeStack}
        options={{
          tabBarLabel: 'Home', tabBarIcon: ({ focused }) => {
            return (focused ?
              <Image source={require('../../assets/images/icons/homefocused.png')}
                style={{ height: 24, width: 25 }} />
              : <Image source={require('../../assets/images/icons/home.png')} style={{ height: 24, width: 25 }} />
            )
          }
        }} />

      <BottomTabNavigator.Screen name='User' component={User} options={{
        tabBarIcon: ({ focused }) => {
          return (focused ?
            <Image source={require('../../assets/images/icons/userfocused.png')}
              style={{ height: 24, width: 25 }} />
            : <Image source={require('../../assets/images/icons/user.png')} style={{ height: 24, width: 25 }} />
          )
        }
      }} />
      <BottomTabNavigator.Screen name='Cart' component={Cart} options={{
        tabBarIcon: ({ focused }) => {
          return (focused ?
            <Image source={require('../../assets/images/icons/cartfocused.png')}
              style={{ height: 24, width: 25 }} />
            : <Image source={require('../../assets/images/icons/cart.png')} style={{ height: 24, width: 25 }} />
          )
        }
      }} />
      <BottomTabNavigator.Screen name='Menu' component={Menu} options={{
        tabBarIcon: ({ focused }) => {
          return (focused ?
            <Image source={require('../../assets/images/icons/optionfocused.png')}
              style={{ height: 24, width: 25 }} />
            : <Image source={require('../../assets/images/icons/options.png')} style={{ height: 24, width: 25 }} />
          )
        }
      }} />
    </BottomTabNavigator.Navigator>
  )
}