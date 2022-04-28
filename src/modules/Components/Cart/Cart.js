import { View, Text, SafeAreaView, FlatList, ScrollView, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchHeader from '../home/searchHeader'
import { useDispatch, useSelector } from 'react-redux'
import AddressBar from '../home/addressBar'
import styles from '../../StyleSheet/amazonStyles'
import { ModifyQuantity } from './action'
import loginStyles from '../../StyleSheet/loginStyle'
import ProductList from '../productList'


export default function Cart({ navigation }) {

  const { cart } = useSelector(store => store.CartReducer)
  const dispatch = useDispatch()
  const [totalAmount, setTotalAmount] = useState(null)
  const [totalQuantity, setTotalQuantity] = useState(0)

  useEffect(() => {
    calculateTotalPrice()
    quantity()
  })

  const [data, setData] = useState([])

  const listHeader = () => {
  
    return (
      <View>
    <AddressBar />
    {(totalAmount != 0) &&
      <View style={styles.checkOutContainer}>
        <View style={styles.subTotalContainer}>
          <Text style={styles.subtotalText}>{"Subtotal "}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.dollarSignText}>{"$"}</Text>
            <Text style={styles.amountText}>{Math.floor(totalAmount)}</Text>
            <Text style={[styles.amountText, styles.dollarSignText]}>{(totalAmount % Math.floor(totalAmount)).toFixed(2) * 100}</Text>
          </View>
        </View>
        <TouchableOpacity style={{ ...loginStyles.addToCartButton, backgroundColor: '#FFB432', marginHorizontal: 10 }}
          activeOpacity={0.8}
        >
          <Text style={loginStyles.loginEmailButton}>{`Proceed to Buy (${totalQuantity})`}</Text>
        </TouchableOpacity>
      </View>}
      </View>
    )
}

const ListFooter=()=>{

  return (
    <View>
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
  <ProductList navigation={navigation} />
  </View>
  )
}

const addQuantity = (item, index) => {
  // console.log('item inside addquantity',item)
  // console.log('index',index)
  let payload = {
    ...item,
    quantity: item.quantity + 1
  }
  cart[index] = payload
  // console.log("updated cart",cart)
  dispatch(ModifyQuantity(cart))
}
const removeQuantity = (item, index) => {
  // console.log('item inside addquantity', item)
  // console.log('index', index)
  if (item.quantity > 1) {
    let payload = {
      ...item,
      quantity: item.quantity - 1
    }
    cart[index] = payload
    // console.log("updated cart", cart)
    dispatch(ModifyQuantity(cart))
  } else {
    cart.splice(index, 1)
    dispatch(ModifyQuantity(cart))
  }
}
const deleteItem = (item, index) => {
  cart.splice(index, 1)
  dispatch(ModifyQuantity(cart))
}

const quantity = () => {


  if (cart.length > 1) {
    let qty = cart.reduce((prev, curr) => {
      return (prev.quantity + curr.quantity)
    })
    setTotalQuantity(`${qty} items`)
  } else if (cart.length == 1) {
    let qty = cart[0].quantity
    if (qty == 1) {
      setTotalQuantity(`${qty} item`)
    }
    else {
      setTotalQuantity(`${qty} items`)
    }
  }
}

const calculateTotalPrice = () => {
  if (cart.length > 1) {
    setTotalAmount(cart.reduce((prev, curr) => {
      return ((prev.price * prev.quantity) + (curr.price * curr.quantity))
    }))
  } else if (cart.length == 1) {
    setTotalAmount(cart[0].price * cart[0].quantity)
  } else if (cart.length == 0) {
    setTotalAmount(0)
  }
}

// console.log('inside Cart Component',cart)

const renderCart = ({ item, index }) => {
  // console.log("Item inside Cart",item.title)
  // console.log('index inside renderCart',index)
  return (
    <View style={styles.cartItemContainer}>
      <TouchableOpacity style={styles.cartContentContainer}
        onPress={() => {
          navigation.navigate("Product", item)
        }}>
        <Image
          source={{ uri: item.image }}
          style={styles.cartImage}
          resizeMode={'contain'}
        />
        <View style={{ width: '70%' }}>
          <Text numberOfLines={2} style={styles.titleCartText}>{item.title}</Text>
          <Text style={styles.productPriceCartItemText}>{`$ ${item.price}`}</Text>
          <Text style={[styles.inStockText, { marginTop: 7 }]}>{"In stock"}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.itemManipulation}>
        <View style={styles.qtyChangeView}>
          <TouchableOpacity style={styles.deleteQtyImgContainer}
            onPress={() => { removeQuantity(item, index) }} activeOpacity={0.8}>
            <Image
              source={require('../../../assets/images/icons/delete.png')}
              resizeMode={'contain'}
              style={styles.deleteQtyImg}
            />
          </TouchableOpacity>
          <View style={styles.quantityContainer}>
            <Text>{item.quantity}</Text>
          </View>
          <TouchableOpacity style={styles.deleteQtyImgContainer}
            onPress={() => { addQuantity(item, index) }}
            activeOpacity={0.8}>
            <Image
              source={require('../../../assets/images/icons/plus.png')}
              resizeMode={'contain'}
              style={styles.deleteQtyImg}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.deleteCartItem}
          onPress={() => { deleteItem(item, index) }}>
          <Text>{"Delete"}</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.safeForLater}>
          <Text>{"Save for later"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

return (
  <SafeAreaView>
    <SearchHeader />
      <FlatList
        data={cart}
        renderItem={renderCart}
        ListHeaderComponent={listHeader}
        ListFooterComponent={ListFooter}
        scrollEnabled={false}
        style={{ borderBottomColor: '#ccc', borderBottomWidth: 1 }}
        ListEmptyComponent={() => {
          return (
            <View style={styles.listEmptyCartComponent}>
              <Image
                source={require('../../../assets/images/emptyCart.gif')}
                style={styles.emptyCartgif}
              />
              <View>
                <Text style={{ marginVertical: 10, color: 'black', fontSize: 15 }}>{"Your Amazon  Basket is empty"}</Text>
                <Text style={styles.bottomCartText}>{"Pick up where you left off"}</Text>
              </View>
            </View>
          )
        }
        }
      />
  </SafeAreaView>
)
}
