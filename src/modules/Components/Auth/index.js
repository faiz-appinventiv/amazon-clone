import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../StyleSheet/amazonStyles'

export default function StartScreen({navigation}) {
  // console.log('navig',navigation)
  return (
    <SafeAreaView>
      <Image
        source={require('../../../assets/images/amazonLogo.png')}
        resizeMode={'contain'}
        style={styles.authLogoImage}
      />
      <View style={styles.loginStartTextView}>
        <Text style={styles.signInScreenHeaderText}>{'Sign in to your account'}</Text>
        <Text style={styles.sigInPerkText}>{'View your wish list'}</Text>
        <Text style={styles.sigInPerkText}>{"Find & reorder past purchases"}</Text>
        <Text style={styles.sigInPerkText}>{'Track your purchases'}</Text>
      </View>
      <View style={styles.loginButton}>
        <TouchableOpacity style={styles.signInButton}
        onPress={()=>{
          navigation.navigate('Login',{
            toggleAccount:false
          })
        }}>
          <Text style={styles.authButtonText}>{"Already a customer? Sign in"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.signInButton,backgroundColor:'#E2E0DD'}}
        onPress={()=>{
          navigation.navigate('Login',{
            toggleAccount:true
          })
        }}>
          <Text style={styles.authButtonText}>{"New to Amazon.in? Create an account"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.signInButton,backgroundColor:'#E2E0DD'}}
        onPress={()=>{
          navigation.reset({
            index:0,
            routes:[{name:'BottomTab'}]
        })
        }}>
          <Text style={styles.authButtonText}>{"Skip sign in"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}