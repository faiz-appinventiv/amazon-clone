import { View, Text, SafeAreaView, ImageBackground, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SearchHeader from '../home/searchHeader'
import styles from '../../StyleSheet/amazonStyles'
import { useDispatch } from 'react-redux'
import { ToggleLogin } from '../Auth/action'

export default function Menu({navigation}) {
  const [showSettings,setShowSettings]=useState(false)
  const dispatch=useDispatch()

  const [menuData, setMenuData] = useState([
    {
      title: 'Prime',
      img: 'https://sm.mashable.com/t/mashable_in/image/t/the-best-d/the-best-deals-from-amazon-prime-day_rjs9.2496.jpg'
    }, {
      title: 'Deals and Savings',
      img: 'https://sm.mashable.com/t/mashable_in/image/t/the-best-d/the-best-deals-from-amazon-prime-day_rjs9.2496.jpg'
    }, {
      title: 'Mobile & Electronic Devices',
      img: 'https://sm.mashable.com/t/mashable_in/image/t/the-best-d/the-best-deals-from-amazon-prime-day_rjs9.2496.jpg'
    }, {
      title: 'Fashion & Beauty',
      img: 'https://sm.mashable.com/t/mashable_in/image/t/the-best-d/the-best-deals-from-amazon-prime-day_rjs9.2496.jpg'
    }, {
      title: 'Groceries & Pet Supplies',
      img: 'https://sm.mashable.com/t/mashable_in/image/t/the-best-d/the-best-deals-from-amazon-prime-day_rjs9.2496.jpg'
    }, {
      title: 'Health & Personal Care',
      img: 'https://sm.mashable.com/t/mashable_in/image/t/the-best-d/the-best-deals-from-amazon-prime-day_rjs9.2496.jpg'
    }
  ])

  const renderMenuItem = ({ item, index }) => {
    return (
      <View style={styles.menuListContainer}>
        <Text style={styles.menuListText}>{item.title}</Text>
        <View style={styles.menuContainer}>
          <Image source={{ uri: item.img }}
            style={styles.menuImg} />
        </View>
      </View>
    )
  }

  const changeShowSetting=()=>{
    setShowSettings(!showSettings)
  }

  const listFooter = () => {
    return (
      <View style={(showSettings)?{height:600}:{height:100}}>
        <View style={(!showSettings)?styles.menuListFooterContainer:styles.menuListFooterContainerAlt}>
        <TouchableOpacity style={styles.menuFooterSettings}
        onPress={changeShowSetting}>
          <Text style={styles.settingsText}>{"Settings"}</Text>
          <Image 
          source={(!showSettings)?require('../../../assets/images/icons/down2.png'):require('../../../assets/images/icons/upload.png')}
          style={styles.menuShowSettingImg}/>
          </TouchableOpacity>
          {
            showSettings &&
            <View>
              <TouchableOpacity style={styles.menuSettingButton}
        onPress={changeShowSetting}>
          <Text style={styles.settingsText}>{"Country & Language"}</Text>
          <Image 
          source={require('../../../assets/images/icons/india.png')}
          style={styles.indiaFlagImg}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuSettingButton}>
          <Text style={styles.settingsText}>{"Notifications"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuSettingButton}>
          <Text style={styles.settingsText}>{"Language"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuSettingButton}>
          <Text style={styles.settingsText}>{"Alexa"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuSettingButton}>
          <Text style={styles.settingsText}>{"Permissions"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuSettingButton}>
          <Text style={styles.settingsText}>{"Default Purchase Settings"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuSettingButton}>
          <Text style={styles.settingsText}>{"Legal & About"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuSettingButton}>
          <Text style={styles.settingsText}>{"Switch Accounts"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuSettingButton} 
          onPress={() => {
            let payload = {
                login: true
            }
            dispatch(ToggleLogin(payload))
            navigation.reset({
                index:0,
                routes:[{name:'AuthRouter'}]
            })
        }}>
          <Text style={styles.settingsText}>{"Sign Out"}</Text>
          </TouchableOpacity>
            </View>
          }
        </View>
        <View style={styles.menuListFooterContainer}>
        <TouchableOpacity style={styles.menuFooterSettings}>
          <Text style={styles.settingsText}>{"Customer Service"}</Text>
          <Image 
          source={require('../../../assets/images/icons/right-arrow.png')}
          style={styles.menuShowSettingImg}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const listHeader = () => {
    return (
      <View style={styles.menuHeaderComponentContainer}>
        <TouchableOpacity style={styles.menuHeaderButtons}>
          <View style={styles.amazonPayImgContainer}>
          <Image
            source={require('../../../assets/images/amazon-pay.png')}
            style={styles.amazonPayImage}
            resizeMode={'contain'} />
          </View>
          <Text>{'Amazon Pay'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuHeaderButtons}>
        <View style={styles.miniTVImgContainer}>
          <Image
            source={require('../../../assets/images/miniTV.png')}
            style={styles.miniTvImg}
            resizeMode={'contain'} />
          </View>
          <Text>{"Amazon miniTv"}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../../assets/images/MenuGradient.png')}
        resizeMode={'cover'}
        style={styles.menuBackground}>
        <SearchHeader />
        {/* <View> */}
        <FlatList
          data={menuData}
          renderItem={renderMenuItem}
          ListFooterComponent={listFooter}
          ListHeaderComponent={listHeader}
          numColumns={3}
          bounces={false}
          columnWrapperStyle={{ justifyContent: 'space-evenly', alignItems: 'center' }}
        />
        {/* </View> */}
      </ImageBackground>
    </SafeAreaView>
  )
}