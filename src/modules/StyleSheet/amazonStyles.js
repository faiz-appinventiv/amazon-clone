import { StyleSheet, Dimensions } from "react-native"

const {height,width} =Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    search: {
        borderRadius: 5,
        padding: 10,
        margin: 6,
        marginLeft: '3%',
        backgroundColor: 'white',
        flexDirection: 'row',
        width: width *0.85,
        height: height/20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    searchBar: {
        marginHorizontal:10,
        borderRadius: 10,
        fontSize: 18,
        color:'black'
    },
    headerText: {
        fontSize: 30,
        fontWeight: '800',
        color:'black'
    },
    header: {
        backgroundColor: '#70feff',
        flexDirection: 'row'
    },
    searchImage: {
        height: 20,
        width: 20,
    },
    micIcon: {
        opacity: 0.9,
        height: 23,
        width: 23,
    },
    micTouchable: {
        position: 'absolute',
        right: 15,
        top:15
        // marginTop: "12%",
    },
    scanImage: {
        height: 20,
        width: 20,
    },
    scanImageCon: {
        position: 'absolute',
        right: 10,
        top: 10,
        opacity: 0.5
    },
    addressBar: {
        backgroundColor: '#d2fefe',
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
    },
    addressText: {
        marginLeft: '3%',
        color:'black'
    },
    imgSliderView: {
        marginTop: "1%",
    },
    productImage: {
        height: 150,
        width: 150,
        resizeMode: 'contain'
    },
    productSlide: {
        height: 220,
        marginTop: 15,
        // marginLeft: 10,
    },
    product: {
        width: 160,
        // paddingVertical: 10,
        // height:'100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    productLikeHeader: {
        fontSize: 25,
        fontWeight: '600',
        marginLeft: 10,
        color:'black'
    },
    loading: {
        height: 20,
        width: 70,
        // alignSelf: 'center',
        // justifyContent:'center'
    },
    SearchHeader: {
        height:100,
    },
    productPage: {

    },
    backButton: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
    },
    backButtonTouchable: {
        position: 'absolute',
        top: 48,
        left: 5
    },
    loadingView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 150
    },
    splashScreen: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    splashLogo: {
        height: 350,
        width: 350,
        alignSelf: 'center',
    },
    mainProduct: {
        paddingTop: 3,
    },
    productPageImage: {
        height: 300,
        width: 300,
        alignSelf: 'center',
        marginTop: 20,

    },
    productMRPText: {
        fontSize: 20,
        fontWeight: '700',
        color: 'grey',
        color:'black'
    },
    productPrice: {
        marginLeft: 40,
        marginTop: 20,
        flexDirection: 'row',
        marginBottom: 10
    },
    pricing: {
        marginLeft: 5,
        fontSize: 20,
        fontWeight: '500',
        color: '#CC2828'
    },
    topProduct: {
        backgroundColor: 'white',
        paddingTop: 10,
    },
    offerTab: {
        padding: 5,
        marginTop: 5,
        backgroundColor: 'white'
    },
    titleText: {
        fontSize: 17,
        marginHorizontal: 20,
        color:'black'
    },
    offersPortion: {
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    discountImg: {
        height: 30,
        width: 20,
        marginRight: 7,
    },
    offerText: {
        fontSize: 15,
        fontWeight: '600',
        color:'black'
    },
    youMightLike: {
        marginTop: 20
    },
    authLogoImage: {
        height: 100,
        width: 300,
        alignSelf: 'center',
        marginTop: 20,
    },
    signInScreenHeaderText: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 10,
        color:'black'
    },
    sigInPerkText: {
        fontSize: 16,
        marginBottom: 15,
        color:'black'
    },
    loginStartTextView: {
        paddingHorizontal:30,
        marginTop:20,
        color:'black'
    },
    signInButton: {
        backgroundColor: '#EEB559',
        height: 38,
        marginHorizontal: 16,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    authButtonText: {
        fontSize: 15,
        color:'black'
    },
    loginButton:{
        marginVertical:15
    },
    fourStackImg: {
        height: 175,
        width: 175,
        borderRadius: 20,
    },
    fourStackInner: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:12,
        height:200
    },
    fourStackText: {
        fontSize: 18,
        fontWeight: '400',
        alignSelf:'center',
        color:'black'
    },
    // fourStack: {
    //     height: 210,
    //     width: 190,
    //     borderRadius: 20,
    //     margin: 5,
    //     justifyContent: 'center',
    //     alignItems:'center'
    //     // marginVertical:5
    // },
})

export default styles