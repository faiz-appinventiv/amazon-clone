import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, FlatList } from 'react-native'
import React from 'react'
import styles from '../../StyleSheet/amazonStyles'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function Product({ navigation, route }) {
  // console.log("route.params", route.params)

  const back = () => {
    navigation.goBack()
  }
  return (
    <SafeAreaView style={styles.productPage}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButtonTouchable}
          onPress={back}>
          <Image source={require('../../../assets/images/icons/left.png')}
            style={styles.backButton} />
        </TouchableOpacity>
        <View style={[styles.search, { marginLeft: '10%', width: '80%' }]}>
          <Image source={require('../../../assets/images/icons/search.png')}
            style={styles.searchImage} />
          <TextInput placeholder='Search' style={styles.searchBar} />
          <Image source={require('../../../assets/images/icons/scanner.png')} style={{
            ...styles.scanImage, ...{
              position: 'absolute',
              right: 10,
              top: 10,
              opacity: 0.5
            }
          }} />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.micTouchable}>
          <Image source={require('../../../assets/images/icons/mic.png')}
            style={styles.micIcon}
            resizeMode={'contain'} />
        </TouchableOpacity>
      </View>
      <View style={styles.addressBar}>
        <TouchableOpacity style={{ marginLeft: '1.5%' }}>
          <Image
            source={require('../../../assets/images/icons/location.png')}
            style={{ height: 15, width: 15 }} />
        </TouchableOpacity>
        <Text style={styles.addressText}>{"Deliver to Faiz - New Delhi 110025"}</Text>
      </View>
      <ScrollView style={styles.mainProduct}>
        <View style={styles.topProduct}>
          <Text style={styles.titleText}>{route.params.title}</Text>
          <Image
            source={{ uri: route.params.image }}
            style={styles.productPageImage}
            resizeMode={'contain'}
          />
          <View style={styles.productPrice}>
            <Text style={styles.productMRPText}>{`M.R.P:`}</Text>
            <Text style={styles.pricing}>{`$${route.params.price}`}</Text>
          </View>
        </View>
        <View style={styles.offerTab}>
          <View style={styles.offersPortion}>
            <Image
              source={require('../../../assets/images/discount.png')}
              resizeMode={'contain'}
              style={styles.discountImg} />
            <Text style={styles.offerText}>Offers</Text>
          </View>
          {/* <FlatList
          data={}
          /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}