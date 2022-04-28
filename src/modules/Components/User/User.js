import { View, Text, SafeAreaView, ImageBackground, Dimensions, Image, TextComponent, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import styles from '../../StyleSheet/amazonStyles'
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function User() {
  const { height, width } = Dimensions.get('screen')
  const {LoginData} = useSelector(store => store.AuthReducer)
  console.log('LoginData',LoginData)


  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../../assets/images/amazonGradient.png')}
        resizeMode={'cover'}
        resizeMethod={'resize'}
        style={styles.imageBackgroundContainer}
      >
        <ScrollView bounces={false}>
          <View style={styles.userHeader}>
            <Image
              source={require('../../../assets/images/amazonIn.png')}
              style={{ height: 40, width: 95 }}
            />
            <Image source={require('../../../assets/images/icons/bell.png')}
              resizeMode={'contain'}
              style={styles.bellIcon} />
            <Image
              source={require('../../../assets/images/icons/search.png')}
              style={styles.userSearchIcon}
            />
          </View>
          <View style={{ ...styles.userHeader, justifyContent: 'space-between' }}>
            <View style={styles.userHeader}>
              <Text style={styles.helloText}>{`Hello, `}</Text>
              <Text style={styles.usernameText}>{LoginData.Name}</Text>
            </View>
            <View style={styles.profileIconCont}>
              <Image source={require('../../../assets/images/userIcon.png')}
                style={styles.profileIcon} />
            </View>
          </View>
          <View style={styles.userScreenButtonsContainer}>
            <View style={styles.userinnerButtonsContainer}>
              <TouchableOpacity style={styles.userScreenButtons}>
                <Text style={styles.buttonText}>{'Your Orders'}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.userScreenButtons}>
                <Text style={styles.buttonText}>{'Buy Again'}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.userinnerButtonsContainer}>
              <TouchableOpacity style={styles.userScreenButtons}>
                <Text style={styles.buttonText}>{'Your Account'}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.userScreenButtons}>
                <Text style={styles.buttonText}>{'Your Wish List'}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.orderContainer}>
            <Text style={styles.orderText}>{'Your Orders'}</Text>
            <View style={styles.orderHistoryContainer}>
              <TouchableOpacity style={styles.orderImgContainer}>
                <Image
                  source={require('../../../assets/images/product1.png')}
                  style={styles.orderImg}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.orderImgContainer}>
                <Image
                  source={require('../../../assets/images/product1.png')}
                  style={styles.orderImg}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.orderText}>{'Keep shopping for'}</Text>
            <View style={styles.orderHistoryContainer}>
              <TouchableOpacity>
                <View style={styles.keepShoppingImgContainer}>
                  <Image
                    source={require('../../../assets/images/product1.png')}
                    style={styles.keepShoppingImg}
                    resizeMode={'contain'}
                  />
                </View>
                <Text style={styles.keepShoppingText}>{"Smartphones"}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.keepShoppingImgContainer}>
                  <Image
                    source={require('../../../assets/images/product1.png')}
                    style={styles.keepShoppingImg}
                    resizeMode={'contain'}
                  />
                </View>
                <Text style={styles.keepShoppingText}>{"Beauty"}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.keepShoppingImgContainer}>
                  <Image
                    source={require('../../../assets/images/product1.png')}
                    style={styles.keepShoppingImg}
                    resizeMode={'contain'}
                  />
                </View>
                <Text style={styles.keepShoppingText}>{"Home Appliance"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.orderHistoryContainer}>
              <TouchableOpacity>
                <View style={styles.keepShoppingImgContainer}>
                  <Image
                    source={require('../../../assets/images/product1.png')}
                    style={styles.keepShoppingImg}
                    resizeMode={'contain'}
                  />
                </View>
                <Text style={styles.keepShoppingText}>{"Men's Clothing"}</Text>             
                </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.keepShoppingImgContainer}>
                  <Image
                    source={require('../../../assets/images/product1.png')}
                    style={styles.keepShoppingImg}
                    resizeMode={'contain'}
                  />
                </View>
                <Text style={styles.keepShoppingText}>{"Women's Clothing"}</Text>              
                </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.keepShoppingImgContainer}>
                  <Image
                    source={require('../../../assets/images/product1.png')}
                    style={styles.keepShoppingImg}
                    resizeMode={'contain'}
                  />
                </View>
                <Text style={styles.keepShoppingText}>{"Travel"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}