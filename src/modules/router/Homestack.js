import React from "react"
import HomePage from '../Components/home/index'
import Product from "../Components/products/product"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

export default function HomeStack(){
    const Stack = createNativeStackNavigator()
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={HomePage}>
            <Stack.Screen name='HomePage' component={HomePage}/>
            <Stack.Screen name="Product" component={Product}/>
        </Stack.Navigator>
    )
  }