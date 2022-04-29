import { Text, View,TouchableOpacity,Image } from 'react-native'
import React, { Component } from 'react'
import styles from '../../StyleSheet/amazonStyles'
import ProductList from '../ProductList/productList'

export default class ListFooter extends Component {
    constructor(props){
        super(props)
    }

    shouldComponentUpdate(nextProps,nextState){
        // return false
    }
    
  render() {
      console.log("Re Render")
    return (
        <View style={{height:450}}>
    {(totalAmount != 0) &&
    <View style={styles.bottomImgContainer}>
      <View style={styles.bottonInnerContainer}>
        <Image
          source={require('../../../assets/images/icons/securePayment.png')}
          resizeMode={'contain'}
          style={styles.cartIconImg}
        />
        <Text style={styles.bottomCartText}>{'Secure Payment'}</Text>
      </View>
      <View style={styles.bottonInnerContainer}>
        <Image
          source={require('../../../assets/images/icons/shipped.png')}
          resizeMode={'contain'}
          style={styles.cartIconImg}
        />
        <Text style={styles.bottomCartText}>{'Secure Payment'}</Text>
      </View>
      <View style={styles.bottonInnerContainer}>
        <Image
          source={require('../../../assets/images/icons/arrival.png')}
          resizeMode={'contain'}
          style={styles.cartIconImg}
        />
        <Text style={styles.bottomCartText}>{'Secure Payment'}</Text>
      </View>
    </View>
  }
  <ProductList navigation={this.props.navigation} />
  </View>
    )
  }
}