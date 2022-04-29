import { View, Text, SafeAreaView, FlatList, ScrollView, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchHeader from '../home/searchHeader'
import { useDispatch, useSelector } from 'react-redux'
import AddressBar from '../home/addressBar'
import styles from '../../StyleSheet/amazonStyles'
import { ModifyQuantity } from './action'
import loginStyles from '../../StyleSheet/loginStyle'
import ProductList from '../ProductList/productList'
import RenderCart from './renderCart'
import ListFooter from '../Cart/listFooter'


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
            <Text style={[styles.amountText, styles.dollarSignText]}>{(totalAmount % (Math.floor(totalAmount)).toFixed(2) * 100).toFixed(0)}</Text>
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
    <View style={{height:450}}>
    {/* <> */}
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
  {/* </> */}
  </View>
  )
}

const listEmptyComponent=() => {
  return (
    <View style={styles.listEmptyCartComponent}>
      <Image
        source={require('../../../assets/images/emptyCart.gif')}
        style={styles.emptyCartgif}
      />
      <View>
        <Text style={{ marginVertical: 10, color: 'black', fontSize: 15 }}>{"Your Amazon  Basket is empty"}</Text>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Home')
        }}
        activeOpacity={0.8}>
        <Text style={styles.bottomCartText}>{"Pick up where you left off"}</Text>
        </TouchableOpacity>
      </View>
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
    <RenderCart item={item} index={index} navigation={navigation} removeQuantity={removeQuantity} addQuantity={addQuantity} deleteItem={deleteItem} cart={cart}/>
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
        // scrollEnabled={false}
        bounces={false}
        style={{ borderBottomColor: '#ccc', borderBottomWidth: 1 }}
        ListEmptyComponent={listEmptyComponent}
      />
  </SafeAreaView>
)
}
