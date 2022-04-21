import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./login";
import StartScreen from './index';
import React from "react";

const AuthStack = createNativeStackNavigator()

const AuthRouter = () => {
    return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name='Start' component={StartScreen} />
        <AuthStack.Screen name='Login' component={Login} />
    </AuthStack.Navigator>)
}

export default AuthRouter