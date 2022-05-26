import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import styles from '../../StyleSheet/amazonStyles';
import SearchHeader from './searchHeader';
import AddressBar from './addressBar';
import ProductList from '../ProductList/productList';

export default function HomePage({navigation, Scroll}) {
  // console.log('hhfhfhg',Scroll)
  const [imgArray, setImageArray] = useState([
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
    'https://source.unsplash.com/1024x768/?tree',
  ]);

  const ScrollRef = useRef();

  // const dispatch = useDispatch();
  const tabArray = [
    {
      title: 'Mobiles',
      image: 'https://m.media-amazon.com/images/I/61fy+u9uqPL._SX569_.jpg',
    },
    {
      title: 'Prime',
      image:
        'https://www.howtogeek.com/wp-content/uploads/2019/07/Amazon-Prime.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1',
    },
    {
      title: 'Fashion',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/E1266601_%285398889640%29.jpg/440px-E1266601_%285398889640%29.jpg',
    },
    {
      title: 'Electronics',
      image:
        'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Old_Electronics_hero_1.max-1000x1000.jpg',
    },
    {
      title: 'Appliances',
      image: 'https://4bbdwp2p.media.zestyio.com/kitchen-appliances-image.jpg',
    },
    {
      title: 'Fresh',
      image:
        'https://scontent-del1-1.xx.fbcdn.net/v/t1.18169-9/1910075_469336753251307_6692990412868082197_n.jpg?_nc_cat=101&ccb=1-6&_nc_sid=e3f864&_nc_ohc=oetUWoF2N04AX8IIHRn&_nc_ht=scontent-del1-1.xx&oh=00_AT-w8CQuHdASs4JU2pernPnv_I4LzOXSO828tVpg6odaYQ&oe=62AC1FAD',
    },
    {
      title: 'Toys',
      image:
        'https://media.istockphoto.com/photos/box-of-toys-on-the-floor-teddy-bear-in-boxvintage-tone-charitable-picture-id1017309510?k=20&m=1017309510&s=612x612&w=0&h=hlrEqEYcyrYjEqlkmJhugTepGVtzjkGohyPdnD5uK3o=',
    },
  ]

  useEffect(() => {
    const ScrollToIndex = navigation.addListener('tabPress', e => {
      ScrollRef.current?.scrollTo({
        y: 0,
        animated: true,
      });
    });
    return ScrollToIndex;
  }, [navigation]);

  const tabView = ({item}) => {
    // console.log("Inside TabView", item)
    // console.log('img:',item.img)
    return (
      <TouchableOpacity style={styles.tabViewImgCont}>
        <Image
          source={{uri: item.image}}
          style={styles.tabViewImg}
          resizeMode={'cover'}
        />
        <Text style={{color: 'black'}}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader />

      <ScrollView
        bounces={false}
        ref={ScrollRef}
        showsVerticalScrollIndicator={false}>
        <AddressBar />
        <FlatList
          data={tabArray}
          renderItem={item => tabView(item)}
          horizontal
          bounces={false}
          style={{height: 55}}
          showsHorizontalScrollIndicator={false}
        />
        <SliderBox
          images={imgArray}
          imageLoadingColor={'#70feff'}
          autoplay={true}
          circleLoop
          ImageComponentStyle={styles.imgSliderView}
          activeOpacity={0.98}
          onCurrentImagePressed={index => {}}
        />
        <ProductList navigation={navigation} />
        <View
          style={{
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
            <TouchableOpacity style={styles.fourStack} activeOpacity={0.9}>
              <Image
                source={require('../../../assets/images/clothing.jpeg')}
                style={styles.fourStackImg}
              />
              <Text style={styles.fourStackText}>Clothing</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fourStack} activeOpacity={0.9}>
              <Image
                source={require('../../../assets/images/beauty.webp')}
                style={styles.fourStackImg}
              />
              <Text style={styles.fourStackText}>Beauty</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.fourStackInner}>
            <TouchableOpacity style={styles.fourStack} activeOpacity={0.9}>
              <Image
                source={require('../../../assets/images/footwear.jpeg')}
                style={styles.fourStackImg}
              />
              <Text style={styles.fourStackText}>Footwear</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.fourStack}
              onPress={() => {
                // props.scrollTop(ScrollRef)
                Scroll(ScrollRef);
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
  );
}
