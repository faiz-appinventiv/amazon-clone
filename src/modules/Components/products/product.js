import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, FlatList, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import styles from '../../StyleSheet/amazonStyles'
import ModalCard from './quantityModal'
import loginStyles from '../../StyleSheet/loginStyle'
import moment from 'moment'
import { AddItem } from './action'
import { useDispatch, useSelector } from 'react-redux'
import AddressBar from '../home/addressBar'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ModifyQuantity } from '../Cart/action'


export default function Product({ navigation, route }) {
  // console.log("route.params", route.params)
  // console.log('moment', moment().add(2, 'days').calendar());
  const [quantity, setQuantity] = useState(1)
  const [quantityModalVisiblity, setQuantityModalVisiblity] = useState(false)
  const dispatch=useDispatch()
  const {cart}=useSelector(state=>state.CartReducer)
  console.log("cart inside Product",cart)

  const [offerData, setOfferData] = useState([
    {
      offerName: 'No Cost EMI',
      offerDesc: 'Upto $10.47 EMI interest savings on select Credit Cards'
    },
    {
      offerName: 'No Cost EMI',
      offerDesc: 'Upto $10.47 EMI interest savings on select Credit Cards'
    },
    {
      offerName: 'No Cost EMI',
      offerDesc: 'Upto $10.47 EMI interest savings on select Credit Cards'
    }
  ])

  const renderOffers = ({ item }) => {
    return (
      <View style={styles.offerBlock}>
        <Text style={styles.offerBlockNameText}>{item.offerName}</Text>
        <Text style={styles.offerBlockDescText}
          numberOfLines={3}
        >{item.offerDesc}</Text>
      </View>
    )
  }

  const back = () => {
    navigation.goBack()
  }

  const quantitySet = () => {
    setQuantityModalVisiblity(true)
  }
  // console.log('route',route.params)

  const addCartList=(item)=>{
    let i=cart.findIndex((element)=>element.title===route.params.title)
    if(i==-1){
    let payload ={...route.params,quantity:quantity}
    // console.log('product payload',payload)
    dispatch(AddItem(payload))
    }
    else{
      cart[i].quantity=cart[i].quantity+quantity
      dispatch(ModifyQuantity(cart))
    }
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
          <TextInput placeholder='Search'
          placeholderTextColor={'grey'}
          style={styles.searchBar}/>
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
      <ScrollView style={styles.mainProduct} bounces={false}>
        <AddressBar/>
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
          <FlatList
            data={offerData}
            renderItem={renderOffers}
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.priceTab}>
          <View style={styles.totalPriceView}>
            <Text style={styles.totalText}>{'Total: '}</Text>
            <Text style={styles.totalPriceText}>{`$${route.params.price}`}</Text>
          </View>
          <View style={styles.freeDeliveryBlock}>
            <Text style={styles.freeDeliveryText}>{'FREE Delivery: '}</Text>
            <Text style={styles.deliveryTimeText}>{moment().local().add(2, 'days').format('dddd, MMMM DD')}</Text>
          </View>
          <Text style={styles.orderWithinText}>{`Order With${moment().endOf('day').fromNow()}`}</Text>
          <Text style={styles.inStockText}>{'In stock.'}</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.quantityBox}
            onPress={quantitySet}>
            <Text style={styles.qtyText}>{"Qty: "}</Text>
            <Text style={styles.qtyText}>{quantity}</Text>
            <View style={styles.downImgContainer}>
              <Image source={require('../../../assets/images/icons/down.png')}
                style={styles.downImg} />
            </View>
          </TouchableOpacity>
          <View>
          <TouchableOpacity style={{ ...loginStyles.buyNowButton }}
          activeOpacity={0.8}>
            <Text style={loginStyles.loginEmailButton}>{"Buy Now"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ ...loginStyles.addToCartButton }}
          activeOpacity={0.8}
          onPress={addCartList}>
            <Text style={loginStyles.loginEmailButton}>{"Add to Cart"}</Text>
          </TouchableOpacity>
          <View style={styles.secureTransactionView}>
            <Image source={require('../../../assets/images/icons/lock.png')}
            style={{height:13,width:13, opacity:0.6}}/>
            <TouchableOpacity>
            <Text style={styles.secureTransactionText}> {"Secure transaction"}</Text>
            </TouchableOpacity>
          </View>
          <Text style={{marginTop:10,color:'black'}}>{"Sold by Appario retail Private Ltd and Fulfilled by Amazon"}</Text>
          <Text style={{marginTop:10,color:'black'}}>{"Gift-wrap available"}</Text>
          <TouchableOpacity style={styles.addToWishListView}> 
            <Text style={styles.addToWishListText}>{"ADD TO WISH LIST"}</Text>
          </TouchableOpacity>
        </View>
        </View>  
      </ScrollView>
      <ModalCard visibility={quantityModalVisiblity} setVisibility={setQuantityModalVisiblity} setQuantity={setQuantity} quantity={quantity} />
    </SafeAreaView>
  )
}