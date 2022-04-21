import { View, Text, Image, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import loginStyles from '../../StyleSheet/loginStyle'
import styles from '../../StyleSheet/amazonStyles'

export default function Login({ navigation, route }) {
  const { toggleAccount } = route.params
  const [showPassword, setShowPassword] = useState(true)
  const [email,setEmail]= useState('')
  const [emailWarning,setEmailWarning] = useState(false)
  const [noAccountFound,setNoAccountFound]=useState(false)

  const checkEmail=()=>{
    if(email.length()==0){
      setEmailWarning(true)
      setNoAccountFound(false)
    }
    else if(email!=loginEmail){
      setEmailWarning(false)
      setNoAccountFound(true)
      // console.log('email',email)
    }
  }

  return (
    <SafeAreaView style={loginStyles.container}>
      <KeyboardAwareScrollView>
        {noAccountFound &&
        <View>
          <Text>{''}</Text>
        </View>}
        <View style={loginStyles.header}>
          <Image
            source={require('../../../assets/images/amazonIn.png')}
            resizeMode={'contain'}
            style={loginStyles.headerImage}
          />
        </View>
        <Text style={loginStyles.welcomeText}>{'Welcome'}</Text>
        <View style={loginStyles.form}>
          <View style={(!toggleAccount) ? loginStyles.innerInactiveFormHeader : loginStyles.innerFormHeader}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => {
                navigation.setParams({ toggleAccount: true })
              }}>
                <Image
                  source={(toggleAccount) ? require('../../../assets/images/active.png') : require('../../../assets/images/inactive.png')}
                  style={loginStyles.statusImg}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
              <View style={loginStyles.headerTextView}>
                <Text style={{ fontSize: 13, fontWeight: '600' }}>{"Create Account."}</Text>
                <Text style={{ fontSize: 10, fontWeight: '300' }}>{" New to Amazon?"}</Text>
              </View>
            </View>
            {toggleAccount &&
              <View style={styles.formInput}>
                <TextInput
                  placeholder='Name'
                  style={loginStyles.signInInput}
                />
                <TextInput
                  placeholder='Mobile Number'
                  style={loginStyles.signInInput}
                />
                <TextInput
                  placeholder='Email (optional)'
                  style={loginStyles.signInInput}
                />
                <TextInput
                  placeholder='Set password'
                  style={loginStyles.signInInput}
                  secureTextEntry={!showPassword}
                />
                <View style={{ ...loginStyles.bottom, justifyContent: 'flex-start' }}>
                  <Image
                    source={require('../../../assets/images/info.png')}
                    style={{
                      height: 10,
                      width: 10,
                    }}
                    resizeMode='contain'
                  />
                  <Text style={loginStyles.privacyText}>{"Passwords must be at least 6 characters"}</Text>
                </View>
                <View style={{ ...loginStyles.bottom, justifyContent: 'flex-start' }}>
                  <TouchableOpacity onPress={()=>{
                    setShowPassword(!showPassword)
                  }}>
                  <Image
                  source={(showPassword)?require('../../../assets/images/check.png'):require('../../../assets/images/uncheck.png')}
                  resizeMode={'contain'}
                  style={{ height: 15, width: 15 }}
                  />
                  </TouchableOpacity>
                  <Text style={{...loginStyles.privacyText,marginHorizontal:5}}>{"Show password"}</Text>
                </View>
                <Text style={loginStyles.warning }>{"By enrolling your mobile phone number, you consent to receiving automated seurity notifications via text message from Amazon. You can opt out by removing your mobile number on the Login and Security page located in Your Account settings. Message and data located rates nay apply"}</Text>
                <TouchableOpacity style={{ ...loginStyles.signInButton }}
                  onPress={() => {

                  }}>
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
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => {
                navigation.setParams({ toggleAccount: false })
              }}>
                <Image
                  source={(!toggleAccount) ? require('../../../assets/images/active.png') : require('../../../assets/images/inactive.png')}
                  style={loginStyles.statusImg}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
              <View style={loginStyles.headerTextView}>
                <Text style={{ fontSize: 14, fontWeight: '600' }}>{"Sign-In."}</Text>
                <Text style={{ fontSize: 12, fontWeight: '300' }}>{" Already a customer?"}</Text>
              </View>
            </View>
            {!toggleAccount &&
              <View style={styles.formInput}>
                <TextInput
                value={email}
                  placeholder='Email or phone number'
                  style={loginStyles.signInInput}
                />
                <TouchableOpacity style={{ ...loginStyles.signInButton }}
                  onPress={checkEmail}>
                  <Text style={styles.loginEmailButton}>{"Continue"}</Text>
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
            <Text style={{ fontSize: 10 }}>{" 1996-2022, Amazon.com, Inc. or its affiliates"}</Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}