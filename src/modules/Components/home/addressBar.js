import { View, Text ,TouchableOpacity, Image} from 'react-native'
import React from 'react'
import styles from '../../StyleSheet/amazonStyles'

export default function AddressBar() {
    return (
        <View style={styles.addressBar}>
            <TouchableOpacity style={{ marginLeft: '1.5%' }}>
                <Image
                    source={require('../../../assets/images/icons/location.png')}
                    style={{ height: 15, width: 15 }} />
            </TouchableOpacity>
            <Text style={styles.addressText}>{"Deliver to Faiz - New Delhi 110025"}</Text>
        </View>
    )
}