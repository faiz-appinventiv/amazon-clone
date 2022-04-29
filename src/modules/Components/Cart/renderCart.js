import { Text, View,TouchableOpacity,Image } from 'react-native'
import React, { Component } from 'react'
import styles from '../../StyleSheet/amazonStyles'

export default class RenderCart extends Component {
    constructor(props){
        super(props)
        console.log('Propsthis.props',this.props)
    }

    shouldComponentUpdate(nextProps,nextState){
        if(this.props.cart.length!=nextProps.cart || this.props.item.quantity!=nextProps.item.quantity)
        return true
        return false
    }
  render() {
    return (
        <View style={styles.cartItemContainer}>
          <TouchableOpacity style={styles.cartContentContainer}
            onPress={() => {
              this.props.navigation.navigate("Product", this.props.item)
            }}>
            <Image
              source={{ uri: this.props.item.image }}
              style={styles.cartImage}
              resizeMode={'contain'}
            />
            <View style={{ width: '70%' }}>
              <Text numberOfLines={2} style={styles.titleCartText}>{this.props.item.title}</Text>
              <Text style={styles.productPriceCartItemText}>{`$ ${this.props.item.price}`}</Text>
              <Text style={[styles.inStockText, { marginTop: 7 }]}>{"In stock"}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.itemManipulation}>
            <View style={styles.qtyChangeView}>
              <TouchableOpacity style={styles.deleteQtyImgContainer}
                onPress={() => { this.props.removeQuantity(this.props.item, this.props.index) }} activeOpacity={0.8}>
                <Image
                  source={require('../../../assets/images/icons/delete.png')}
                  resizeMode={'contain'}
                  style={styles.deleteQtyImg}
                />
              </TouchableOpacity>
              <View style={styles.quantityContainer}>
                <Text style={{color:'black'}}>{this.props.item.quantity}</Text>
              </View>
              <TouchableOpacity style={styles.deleteQtyImgContainer}
                onPress={() => { this.props.addQuantity(this.props.item, this.props.index) }}
                activeOpacity={0.8}>
                <Image
                  source={require('../../../assets/images/icons/plus.png')}
                  resizeMode={'contain'}
                  style={styles.deleteQtyImg}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.deleteCartItem}
              onPress={() => { this.props.deleteItem(this.props.item, this.props.index) }}>
              <Text>{"Delete"}</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.safeForLater}>
              <Text style={{color:'black'}}>{"Save for later"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
  }
}