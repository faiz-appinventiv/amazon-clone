import React from "react"
import Product from "../Components/Products/product"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Cart from "../Components/Cart/Cart"

export default function CartStack(props){
    

    const scrollTop=(ref)=>{
        console.log('ref,ref',ref)
        ref.current?.scrollTo({
            y: 0,
            animated: true,
          });
        }
        
    const Stack = createNativeStackNavigator()
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={Cart}>
            <Stack.Screen name='Cart'>
            {()=><Cart Scroll={scrollTop} {...props}/>}
            </Stack.Screen>
            <Stack.Screen name="Product" component={Product}/>
        </Stack.Navigator>
    )
  }