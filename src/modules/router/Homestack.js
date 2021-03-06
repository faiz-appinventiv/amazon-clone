import React from "react"
import HomePage from '../Components/home/index'
import Product from "../Components/Products/product"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

export default function HomeStack(props){
    

    const scrollTop=(ref)=>{
        console.log('ref,ref',ref)
        ref.current?.scrollTo({
            y: 0,
            animated: true,
          });
        }
        
    const Stack = createNativeStackNavigator()
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='HomePage'>
            {()=><HomePage Scroll={scrollTop} {...props}/>}
            </Stack.Screen>
            <Stack.Screen name="Product" component={Product}/>
        </Stack.Navigator>
    )
  }