import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, FlatList, SafeAreaView, ScrollView } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SliderBox } from "react-native-image-slider-box";
import axios from 'axios'
import styles from '../../StyleSheet/amazonStyles'
import SearchHeader from './searchHeader'
import { useDispatch } from 'react-redux';
import { ToggleLogin } from '../Auth/action';

export default function HomePage({ navigation ,Scroll}) {
    // console.log('hhfhfhg',Scroll)
    const [imgArray, setImageArray] = useState([
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
    ])

    const ScrollRef=useRef()

    const dispatch=useDispatch()
    const [tabArray, setTabArray] = useState([{
        title: 'Mobiles',
        image: 'https://m.media-amazon.com/images/I/61fy+u9uqPL._SX569_.jpg'
    }, {
        title: 'Mobiles',
        image: 'https://m.media-amazon.com/images/I/61fy+u9uqPL._SX569_.jpg'
    }, {
        title: 'Mobiles',
        image: 'https://m.media-amazon.com/images/I/61fy+u9uqPL._SX569_.jpg'
    }, {
        title: 'Mobiles',
        image: 'https://m.media-amazon.com/images/I/61fy+u9uqPL._SX569_.jpg'
    }, {
        title: 'Mobiles',
        image: 'https://m.media-amazon.com/images/I/61fy+u9uqPL._SX569_.jpg'
    }, {
        title: 'Mobiles',
        image: 'https://m.media-amazon.com/images/I/61fy+u9uqPL._SX569_.jpg'
    }, {
        title: 'Mobiles',
        image: 'https://m.media-amazon.com/images/I/61fy+u9uqPL._SX569_.jpg'
    }, {
        title: 'Mobiles',
        image: 'https://m.media-amazon.com/images/I/61fy+u9uqPL._SX569_.jpg'
    }])
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/").then(res => {
            setData(res.data)
            // console.log(data)
        }).catch(err => console.log(err))
    }, [])

    const navigProduct = (item) => {
        navigation.navigate("Product", item)
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

    const tabView = ({ item }) => {
        // console.log("Inside TabView", item)
        // console.log('img:',item.img)
        return (
            <TouchableOpacity style={{ marginHorizontal: 10 }}
           
            >
                <Image source={{ uri: item.image }}
                    style={{ height: 40, width: 40, borderRadius: 30, overflow: 'hidden', alignSelf: 'center' }}
                    resizeMode={'contain'}
                />
                <Text style={{ color: 'black' }}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <SearchHeader />
            <ScrollView bounces={false}
            ref={ScrollRef}>
                <FlatList
                    data={tabArray}
                    renderItem={(item) => (tabView(item))}
                    horizontal
                    bounces={false}
                    style={{ height: 55 }}
                    showsHorizontalScrollIndicator={false}
                />
                <SliderBox
                    images={imgArray}
                    imageLoadingColor={"#70feff"}
                    autoplay={true}
                    circleLoop
                    ImageComponentStyle={styles.imgSliderView}
                    activeOpacity={0.98}
                    onCurrentImagePressed={(index) => {

                    }}
                />
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
                <View style={{
                    // backgroundColor:'red',
                    height: 230,
                    width: '100%',
                    marginBottom: 10,
                    marginTop: 10,
                }}>
                    <Image
                        source={require('../../../assets/images/oneplusBanner.jpeg')}
                        resizeMode={'contain'}
                        // resizeMethod={'scale'}
                        style={{
                            height: '100%',
                            width: '100%',
                            // marginTop:-100

                        }}
                    />
                </View>
                <View>
                    <View style={styles.fourStackInner}>
                        <TouchableOpacity style={styles.fourStack}
                            activeOpacity={0.9}>
                            <Image
                                source={require('../../../assets/images/clothing.jpeg')}
                                style={styles.fourStackImg}
                            />
                            <Text style={styles.fourStackText}>Clothing</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.fourStack}
                            activeOpacity={0.9}>
                            <Image
                                source={require('../../../assets/images/beauty.webp')}
                                style={styles.fourStackImg}
                            />
                            <Text style={styles.fourStackText}>Beauty</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.fourStackInner}>
                        <TouchableOpacity style={styles.fourStack}
                            onPress={() => {
                                let payload = {
                                    login: true
                                }
                                dispatch(ToggleLogin(payload))
                                navigation.reset({
                                    index:0,
                                    routes:[{name:'AuthRouter'}]
                                })
                            }}
                            activeOpacity={0.9}>
                            <Image
                                source={require('../../../assets/images/footwear.jpeg')}
                                style={styles.fourStackImg}
                            />
                            <Text style={styles.fourStackText}>Footwear</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={styles.fourStack}
                            onPress={()=>{
                                // props.scrollTop(ScrollRef)
                                Scroll(ScrollRef)
                            }}>
                            <Image
                                source={require('../../../assets/images/watches.jpeg')}
                                style={styles.fourStackImg}
                            />
                            <Text style={styles.fourStackText}>Watches</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            {/* </View> */}
        </SafeAreaView>
    )
}