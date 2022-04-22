import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./login";
import StartScreen from './index';
import React from "react";
import Password from "./password";

const AuthStack = createNativeStackNavigator()

const AuthRouter = () => {
    return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name='Start' component={StartScreen} />
        <AuthStack.Screen name='Login' component={Login} />
        <AuthStack.Screen name='Password' component={Password}/>
    </AuthStack.Navigator>)
}

export default AuthRouter