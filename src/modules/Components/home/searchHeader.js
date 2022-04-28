import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import styles from "../../StyleSheet/amazonStyles";
import React from "react";

export default function SearchHeader({ navigation }) {
    return (
        <View style={styles.SearchHeader}>
            <View style={styles.header}>
                <View style={styles.search}>
                    <Image source={require('../../../assets/images/icons/search.png')}
                        style={styles.searchImage} />
                    <TextInput placeholder='Search' 
                        placeholderTextColor={'grey'}
                    style={styles.searchBar} />
                    <TouchableOpacity style={styles.scanImageCon}
                        onPress={() => { }}>
                        <Image source={require('../../../assets/images/icons/scanner.png')} style={styles.scanImage} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.micTouchable}>
                    <Image source={require('../../../assets/images/icons/mic.png')}
                        style={styles.micIcon}
                        resizeMode={'contain'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
