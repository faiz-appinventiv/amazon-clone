import { View, Text, Image, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import loginStyles from '../../StyleSheet/loginStyle'
import { useDispatch, useSelector } from 'react-redux'
import { ToggleLogin } from './action'


export default function Password({ navigation ,route}) {
    const { LoginData } = useSelector(store => store.AuthReducer)
    const [showPassword, setShowPassword] = useState(true)
    const [password, setPassword] = useState('')
    const [passwordWarning, setPasswordWarning] = useState(false)
    const [wrongPassword, setWrongPassword] = useState(false)
    const {loginEmail}=route.params

    const dispatch=useDispatch()

    const onChangePress = () => {
        navigation.navigate('Login', { toggleAccount: false })
    }

    const checkPassword = () => {
        if (password.length == 0) {
            setPasswordWarning(true)
            setWrongPassword(false)
        }
        else if (LoginData.Password!=password) {
            setPasswordWarning(false)
            setWrongPassword(true)
        }
        else if (LoginData.Password===password) {
            // navigation.navigate()
            setWrongPassword(false)
            setPasswordWarning(false)
            let payload={
                login:false
            }
            dispatch(ToggleLogin(payload))
          navigation.reset({
              index:0,
              routes:[{name:'BottomTab'}]
          })
        }
    }
    return (
        <SafeAreaView>
            <KeyboardAwareScrollView>
                <View style={loginStyles.header}>
                    <Image
                        source={require('../../../assets/images/amazonIn.png')}
                        resizeMode={'contain'}
                        style={loginStyles.headerImage}
                    />
                </View>
                <View style={loginStyles.innerContainer}>
                {wrongPassword &&
                    <View style={loginStyles.noAccount}>
                        <View style={loginStyles.noAccountInner}>
                            <Text style={loginStyles.noAccountHeader}>{'There was a problem'}</Text>
                            <Text style={loginStyles.noAccountBody}>{"Your password is incorrect"}</Text>
                        </View>
                    </View>}
                    <Text style={loginStyles.welcomeText}>{'Sign-In'}</Text>
                    <View style={loginStyles.emailView}>
                        <Text style={{color:'black'}}>{loginEmail}</Text>
                        <TouchableOpacity
                            onPress={onChangePress}>
                            <Text style={loginStyles.changeText}>{" Change"}</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        onChangeText={(text) => {
                            setPassword(text)
                        }}
                        placeholderTextColor={'grey'}
                        placeholder='Amazon password'
                        style={loginStyles.passwordInput}
                        autoCapitalize={'none'}
                    />
                    {passwordWarning &&
                        <View style={loginStyles.emptyWarning}>
                            <Image
                                source={require('../../../assets/images/warningMark.png')}
                                style={loginStyles.statusImg}
                            />
                            <Text style={loginStyles.warningText}>{"Enter your password"}</Text>
                        </View>}
                    <View style={loginStyles.showPassword}>
                        <TouchableOpacity onPress={() => {
                            setShowPassword(!showPassword)
                        }}
                            style={{ ...loginStyles.showPasswordTouchable }}
                        >
                            <Image
                                source={(showPassword) ? require('../../../assets/images/check.png') : require('../../../assets/images/uncheck.png')}
                                resizeMode={'contain'}
                                style={{ height: 15, width: 15 }}
                            />
                            <Text style={{ ...loginStyles.privacyText, marginHorizontal: 5 }}>{"Show password"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {

                            }}>
                            <Text style={loginStyles.changeText}>{"Forgot password?"}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ ...loginStyles.signInButton }}
                        onPress={checkPassword}>
                        <Text style={loginStyles.loginEmailButton}>{"Sign-In"}</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}