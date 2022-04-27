import Modal from "react-native-modal";
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from "../../StyleSheet/amazonStyles";

export default function ModalCard(props) {
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  renderQty = ({ item }) => {
    return (
      <TouchableOpacity style={(props.quantity!=item)?styles.qtyBlock:styles.selectedQtyBlock}
      onPress={()=>{
        props.setQuantity(item)
        props.setVisibility(false)
      }}
      activeOpacity={0.9}
      >
        <Text>{item}</Text>
      </TouchableOpacity>
    )
  }
  return (
    // <View>
    <Modal isVisible={props.visibility} onBackdropPress={() => {
      props.setVisibility(false)
    }}
      useNativeDriver
      backdropColor={'grey'} style={styles.modal}>
      <View style={styles.modalView}>
        <View style={styles.qtyModalHeader}>
          <Text style={styles.qtyHeaderText}>{"Qty: "}</Text>
          <TouchableOpacity activeOpacity={0.8} 
          onPress={()=>{
            props.setVisibility(false)
          }}>
          <Image
            source={require('../../../assets/images/icons/close.png')}
            style={{ height: 11, width: 11 }}
          />
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          renderItem={renderQty}
          bounces={false}
          // contentContainerStyle={{borderRadius:5}}
        />
      </View>
    </Modal>
    // </View>
  )
}