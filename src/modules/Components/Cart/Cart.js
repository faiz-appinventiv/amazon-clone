import { View, Text ,SafeAreaView,FlatList } from 'react-native'
import React ,{useState} from 'react'
import SearchHeader from '../home/searchHeader'


export default function Cart() {
  const [emptyCart,setEmptyCart]=useState(true)
  return (
    <SafeAreaView>
      <SearchHeader/>
      <View>
        <FlatList
        
        />
      </View>
    </SafeAreaView>
  )
}