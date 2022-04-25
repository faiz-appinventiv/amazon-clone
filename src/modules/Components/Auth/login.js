import { View, Text, Image, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import loginStyles from '../../StyleSheet/loginStyle'
import styles from '../../StyleSheet/amazonStyles'
import { useDispatch, useSelector } from 'react-redux'
import { Register } from './action'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login({ navigation, route }) {
  const { toggleAccount } = route.params
  const [showPassword, setShowPassword] = useState(true)
  const [email, setEmail] = useState('')
  const [emailWarning, setEmailWarning] = useState(false)
  const [noAccountFound, setNoAccountFound] = useState(false)
  const [createName, setCreateName] = useState('')
  const [createMobile, setCreateMobile] = useState('')
  const [createEmail, setCreateEmail] = useState('')
  const [createPassword, setCreatePassword] = useState('')
  const [nameWarning, setNameWarning] = useState(false)
  const [passwordWarning, setPasswordWarning] = useState(false)
  const [mobileWarning, setMobileWarning] = useState(false)
  const dispatch = useDispatch()
  const [log,setLog]=useState({})

  // AsyncStorage.getItem("Email").then((value) => {
  //   setLog({ "Email": value });
  //   console.log(value)
  // })


  const { LoginData } = useSelector(store => store.AuthReducer)
  console.log("LoginData", LoginData)

  const checkEmail = () => {
    if (email.length == 0) {
      setEmailWarning(true)
      setNoAccountFound(false)
    }
    else if (!LoginData.some((element) => element.Email === email)) {
      setEmailWarning(false)
      setNoAccountFound(true)
      navigation.setParams({ toggleAccount: true })
    }
    else if (LoginData.some((element) => element.Email === email)) {
      // navigation.navigate()
      setNoAccountFound(false)
      setEmailWarning(false)
      navigation.navigate('Password', {
        loginEmail: email
      })
    }
  }

  const checkEntry = () => {
    if (createName.length == 0) {
      setNameWarning(true)
    } else {
      setNameWarning(false)
    }
    if (createMobile.length == 0) {
      setMobileWarning(true)
    } else {
      setMobileWarning(false)
    }
    if (createPassword.length < 6) {
      setPasswordWarning(true)
      console.log('password', createPassword)
    } else {
      setPasswordWarning(false)
    }
    if (createPassword.length != 0 && createName.length != 0 && createMobile.length != 0) {
      let payload = {
        Name: createName,
        Email: createEmail,
        Mobile: createMobile,
        Password: createPassword,
      }
      setNoAccountFound(false)
      setEmailWarning(false)
      navigation.setParams({ toggleAccount: false })
      dispatch(Register(payload))
    }
  }

  return (
    <SafeAreaView style={loginStyles.container}>
      <KeyboardAwareScrollView bounces={false}>
        <View style={loginStyles.header}>
          <Image
            source={require('../../../assets/images/amazonIn.png')}
            resizeMode={'contain'}
            style={loginStyles.headerImage}
          />
        </View>
        <View style={loginStyles.innerContainer}>
          {noAccountFound &&
            <View style={loginStyles.noAccount}>
              <View style={loginStyles.noAccountInner}>
                <Text style={loginStyles.noAccountHeader}>{'No account found with that Email address'}</Text>
                <Text style={loginStyles.noAccountBody}>{"You can create a new Amazon account with your phone number or Email address"}</Text>
              </View>
            </View>}
          <Text style={loginStyles.welcomeText}>{'Welcome'}</Text>
          <View style={loginStyles.form}>
            <View style={(!toggleAccount) ? loginStyles.innerInactiveFormHeader : loginStyles.innerFormHeader}>
              {/* <View style={{ flexDirection: 'row' }}> */}
              <TouchableOpacity onPress={() => {
                navigation.setParams({ toggleAccount: true })
              }}
                activeOpacity={1}
                style={loginStyles.headerTextView}>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={(toggleAccount) ? require('../../../assets/images/active.png') : require('../../../assets/images/inactive.png')}
                    style={loginStyles.statusImg}
                    resizeMode={'contain'}
                  />
                  <View style={loginStyles.headerTextView}>
                    <Text style={{ fontSize: 13, fontWeight: '600', color: 'black' }}>{"  Create Account."}</Text>
                    <Text style={{ fontSize: 10, fontWeight: '300', color: 'black' }}>{" New to Amazon?"}</Text>
                  </View>
                </View>
              </TouchableOpacity>
              {/* </View> */}
              {toggleAccount &&
                <View style={styles.formInput}>
                  <TextInput
                    placeholder='Name'
                    placeholderTextColor={'grey'}
                    style={loginStyles.signInInput}
                    onChangeText={(text) => {
                      setCreateName(text)
                    }}
                  />
                  {nameWarning &&
                    <View style={loginStyles.emptyWarning}>
                      <Image
                        source={require('../../../assets/images/warningMark.png')}
                        style={loginStyles.statusImg}
                      />
                      <Text style={loginStyles.warningText}>{"Enter your email or mobile phone number"}</Text>
                    </View>}
                  <TextInput
                    // value={createMobile4}
                    maxLength={10}
                    placeholder='Mobile Number'
                    keyboardType='number-pad'
                    placeholderTextColor={'grey'}
                    style={loginStyles.signInInput}
                    onChangeText={(text) => {
                      setCreateMobile(text)
                    }}
                  />
                  {mobileWarning &&
                    <View style={loginStyles.emptyWarning}>
                      <Image
                        source={require('../../../assets/images/warningMark.png')}
                        style={loginStyles.statusImg}
                      />
                      <Text style={loginStyles.warningText}>{"Enter your email or mobile phone number"}</Text>
                    </View>}
                  <TextInput
                    placeholder='Email (optional)'
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholderTextColor={'grey'}
                    style={loginStyles.signInInput}
                    onChangeText={(text) => {
                      setCreateEmail(text)
                    }}
                  />
                  <TextInput
                    placeholder='Set password'
                    placeholderTextColor={'grey'}
                    autoCapitalize='none'
                    style={loginStyles.signInInput}
                    secureTextEntry={!showPassword}
                    onChangeText={(text) => {
                      setCreatePassword(text)
                    }}
                  />
                  {!passwordWarning ? <View style={{ ...loginStyles.bottom, justifyContent: 'flex-start' }}>
                    <Image
                      source={require('../../../assets/images/info.png')}
                      style={{
                        height: 10,
                        width: 10,
                      }}
                      resizeMode='contain'
                    />
                    <Text style={loginStyles.privacyText}>{"Passwords must be at least 6 characters"}</Text>
                  </View> :
                    <View style={loginStyles.emptyWarning}>
                      <Image
                        source={require('../../../assets/images/warningMark.png')}
                        style={loginStyles.statusImg}
                      />
                      <Text style={loginStyles.warningText}>{"Enter your email or mobile phone number"}</Text>
                    </View>}
                  <View style={{ ...loginStyles.bottom, justifyContent: 'flex-start' }}>
                    <TouchableOpacity onPress={() => {
                      setShowPassword(!showPassword)
                    }}>
                      <Image
                        source={(showPassword) ? require('../../../assets/images/check.png') : require('../../../assets/images/uncheck.png')}
                        resizeMode={'contain'}
                        style={{ height: 15, width: 15 }}
                      />
                    </TouchableOpacity>
                    <Text style={{ ...loginStyles.privacyText, marginHorizontal: 5 }}>{"Show password"}</Text>
                  </View>
                  <Text style={loginStyles.warning}>{"By enrolling your mobile phone number, you consent to receiving automated seurity notifications via text message from Amazon. You can opt out by removing your mobile number on the Login and Security page located in Your Account settings. Message and data located rates nay apply"}</Text>
                  <TouchableOpacity style={{ ...loginStyles.signInButton }}
                    onPress={checkEntry}>
                    <Text style={styles.loginEmailButton}>{"Register"}</Text>
                  </TouchableOpacity>
                  <View style={loginStyles.privacyTextView}>
                    <Text style={loginStyles.privacyText}>{"By creating an account or logging in, you agree to Amazon's "}</Text>
                    <Text style={{ ...loginStyles.privacyText, color: '#3DA8C3' }}>{'Conditions of Use '}</Text>
                    <Text style={loginStyles.privacyText}>{'and '}</Text>
                    <Text style={{ ...loginStyles.privacyText, color: '#3DA8C3' }}>{'Privacy Notice'}</Text>
                  </View>
                </View>
              }
            </View>
            <View style={(toggleAccount) ? loginStyles.innerInactiveFormHeader : loginStyles.innerFormHeader}>

              <TouchableOpacity onPress={() => {
                navigation.setParams({ toggleAccount: false })
              }}
                activeOpacity={1}
                style={loginStyles.headerTextView}>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={(!toggleAccount) ? require('../../../assets/images/active.png') : require('../../../assets/images/inactive.png')}
                    style={loginStyles.statusImg}
                    resizeMode={'contain'}
                  />
                  <View style={loginStyles.headerTextView}>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: 'black' }}>{"  Sign-In."}</Text>
                    <Text style={{ fontSize: 12, fontWeight: '300', color: 'black' }}>{" Already a customer?"}</Text>
                  </View>
                </View>
              </TouchableOpacity>
              {/* </View> */}
              {!toggleAccount &&
                <View style={styles.formInput}>
                  <TextInput
                    // value={email}
                    placeholderTextColor={'grey'}
                    onChangeText={(text) => {
                      setEmail(text)
                    }}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    placeholder='Email or phone number'
                    style={loginStyles.signInInput}
                  />
                  {emailWarning &&
                    <View style={loginStyles.emptyWarning}>
                      <Image
                        source={require('../../../assets/images/warningMark.png')}
                        style={loginStyles.statusImg}
                      />
                      <Text style={loginStyles.warningText}>{"Enter your email or mobile phone number"}</Text>
                    </View>}
                  <TouchableOpacity style={{ ...loginStyles.signInButton }}
                    onPress={checkEmail}>
                    <Text style={loginStyles.loginEmailButton}>{"Continue"}</Text>
                  </TouchableOpacity>
                  <View style={loginStyles.privacyTextView}>
                    <Text style={loginStyles.privacyText}>{'By continuing, you agree to Amazon '}</Text>
                    <Text style={{ ...loginStyles.privacyText, color: '#3DA8C3' }}>{'Conditions of Use '}</Text>
                    <Text style={loginStyles.privacyText}>{'and '}</Text>
                    <Text style={{ ...loginStyles.privacyText, color: '#3DA8C3' }}>{'Privacy Notice'}</Text>
                  </View>
                </View>
              }
            </View>
          </View>
          <View style={loginStyles.bottomView}>
            <View style={loginStyles.bottomLine} />
            <View style={loginStyles.bottom}>
              <Text style={loginStyles.bottomText}>{'Conditions of Use'}</Text>
              <Text style={loginStyles.bottomText}>{'Privacy Notice'}</Text>
              <Text style={loginStyles.bottomText}>{'Help'}</Text>
            </View>
            <View style={loginStyles.bottom}>
              <Image
                source={require('../../../assets/images/copyright.png')}
                resizeMode='contain'
                style={{ height: 10, width: 10 }}
              />
              <Text style={{ fontSize: 10, color: 'black' }}>{" 1996-2022, Amazon.com, Inc. or its affiliates"}</Text>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}