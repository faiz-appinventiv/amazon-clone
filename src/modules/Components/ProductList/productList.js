import { View, Text,TouchableOpacity,Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '../../StyleSheet/amazonStyles'
import { AddData } from './action'
import { useDispatch, useSelector } from 'react-redux'

export default function ProductList(props) {
    const dispatch=useDispatch()
    const {data}=useSelector(store=>store.ProductReducer)
    // console.log('DATA',data)

    useEffect(() => {
        dispatch(AddData())
    }, [])

    const navigProduct = (item) => {
        props.navigation.navigate("Product", item)
    }

    const renderItem = ({ item }) => {
        // console.log(item)
        if (item.image != null)
            return (
                <View>
                    <TouchableOpacity
                        onPress={() => navigProduct(item)}
                        activeOpacity={0.8}
                        style={styles.product}>
                        <Image source={{ uri: item.image }}
                            style={styles.productImage}
                        />
                        <Text numberOfLines={1} style={{ padding: 10, color: 'black' }}>{item.title}</Text>
                        <Text style={{ paddingHorizontal: 10, color: 'black' }}>$ {item.price}</Text>
                    </TouchableOpacity>
                </View>
            )
    }
    
    const listEmpty = () => {
        return (
            <View style={styles.loadingView}>
                <Image source={require('../../../assets/images/icons/loading.gif')}
                    style={styles.loading}
                />
            </View>
        )
    }

  return (
    <View style={styles.youMightLike}>
                    <Text style={styles.productLikeHeader}>{"You Might Like"}</Text>
                    <FlatList
                        data={data}
                        renderItem={(item) => (renderItem(item))}
                        horizontal={true}
                        keyExtractor={(item) => item.id}
                        ListEmptyComponent={listEmpty}
                        ItemSeparatorComponent={() => (<View style={{ marginRight: 10 }}></View>)}
                        style={styles.productSlide}
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                    />
                </View>
  )
}
