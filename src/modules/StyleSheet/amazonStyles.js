import { StyleSheet, Dimensions } from "react-native"

const { height, width } = Dimensions.get('screen')

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
        width: width * 0.85,
        height: height / 20,
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
        marginHorizontal: 10,
        borderRadius: 10,
        fontSize: 18,
        color: 'black'
    },
    headerText: {
        fontSize: 30,
        fontWeight: '800',
        color: 'black'
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
        right: 8,
        top: 16
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
        color: 'black'
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
        color: 'black'
    },
    loading: {
        height: 20,
        width: 70,
        // alignSelf: 'center',
        // justifyContent:'center'
    },
    SearchHeader: {
        height: 100,
    },
    backButton: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
        opacity:0.8
    },
    backButtonTouchable: {
        position: 'absolute',
        top: 15,
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
        color: 'black'
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
        height: height / 1.95
    },
    offerTab: {
        padding: 5,
        marginTop: 5,
        backgroundColor: 'white',
        height: height / 6
    },
    titleText: {
        fontSize: 17,
        marginHorizontal: 20,
        color: 'black'
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
        color: 'black'
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
        color: 'black'
    },
    sigInPerkText: {
        fontSize: 16,
        marginBottom: 15,
        color: 'black'
    },
    loginStartTextView: {
        paddingHorizontal: 30,
        marginTop: 20,
        color: 'black'
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
        color: 'black'
    },
    loginButton: {
        marginVertical: 15
    },
    fourStackImg: {
        height: 175,
        width: 175,
        borderRadius: 20,
    },
    fourStackInner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 12,
        height: 200
    },
    fourStackText: {
        fontSize: 18,
        fontWeight: '400',
        alignSelf: 'center',
        color: 'black'
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
    bellIcon: {
        height: 22,
        width: 22,
        position: 'absolute',
        right: 50,
        top: 5
        // justifyContent:'flex-end'
    },
    userSearchIcon: {
        height: 21,
        width: 21,
        position: 'absolute',
        right: 10,
        top: 5
    },
    userHeader: {
        flexDirection: 'row',
    },
    helloText: {
        fontSize: 23,
        fontStyle: 'italic'
    },
    usernameText: {
        fontSize: 23,
        fontWeight: '600'
    },
    profileIcon: {
        height: 35,
        width: 35,
    },
    profileIconCont: {
        right: width / 35
    },
    imageBackgroundContainer: {
        height: height,
        width: width,
        paddingHorizontal: width / 30,
    },
    userScreenButtonsContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: height / 50
    },
    userScreenButtons: {
        height: height / 17,
        width: width * 0.46,
        alignItems: 'center',
        backgroundColor: '#F3F3F2',
        borderColor: '#ccc',
        borderWidth: 1,
        justifyContent: 'center',
        borderRadius: 30,
        marginBottom: height / 100
    },
    userinnerButtonsContainer: {
        flexDirection: 'row',
        // justifyContent:'space-between'

    },
    buttonText: {
        fontSize: 15,
        fontWeight: '400'
    },
    orderImg: {
        height: 100,
        width: 60,
    },
    orderImgContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: height / 6,
        backgroundColor: 'white',
        width: width / 2.2,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    orderHistoryContainer: {
        flexDirection: 'row',
        // marginHorizontal:width/40,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: height / 60,
    },
    orderText: {
        fontSize: 20,
        fontWeight: '600'
    },
    orderContainer: {
        marginVertical: 10
    },
    keepShoppingImgContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: height / 8,
        backgroundColor: 'white',
        width: width / 3.3,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    keepShoppingImg: {
        height: height / 10,
        width: width / 8,
    },
    offerBlock: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        height: height / 9,
        width: width / 3,
        padding: 7,
        marginHorizontal: 8
    },
    offerBlockNameText: {
        fontSize: 13.5,
        fontWeight: '700',
    },
    offerBlockDescText: {
        marginTop: 5
    },
    totalPriceView: {
        flexDirection: 'row',
        // padding:7,
        alignItems: 'flex-end'
    },
    totalText: {
        fontSize: 17,
        fontWeight: '500'
    },
    totalPriceText: {
        fontSize: 20,
        fontWeight: '600',
    },
    priceTab: {
        padding: 12,
        marginTop: 5,
        backgroundColor: 'white',
        height: height / 1.6
    },
    freeDeliveryBlock: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    freeDeliveryText: {
        fontSize: 15,
        fontWeight: '400'
    },
    deliveryTimeText: {
        fontSize: 15,
        fontWeight: '600'
    },
    quantityBox: {
        marginTop:10,
        backgroundColor: '#F3F3F2',
        height: height / 22,
        width: width * 0.23,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        borderRadius:10,
    },
    inStockText:{
        marginTop: height / 20,
        color:'green'
    },
    downImg:{
        height:20,
        width:20,
    },
    downImgContainer:{
        left:10,
        justifyContent:'center'
    },
    modalView:{
        height:height/1.8,
        backgroundColor:'#white',
        borderRadius:10,
        overflow:'hidden'
    },
    modal:{
        width:width/2,
        alignSelf:'center'
    },
    qtyBlock:{
        // margin:5,
        borderBottomWidth:1,
        borderColor:'#ccc',
        height:height*0.05,
        backgroundColor:'white',
        paddingLeft:15,
        justifyContent:'center',
    },
    qtyModalHeader:{
        flexDirection:'row',
        backgroundColor:'#F3F3F2',
        height:height*0.05,
        justifyContent:'space-around',
        alignItems:'center'
    },
    qtyHeaderText:{
        fontSize:17,
        fontWeight:'700'
    },
    selectedQtyBlock:{
        borderWidth:1,
        borderColor:'#0A839F',
        borderLeftWidth:4,
        height:height*0.05,
        backgroundColor:'#C6F8FB',
        paddingLeft:11,
        justifyContent:'center'
    },
    secureTransactionView:{
        flexDirection:'row',
        alignItems:'center'
    },
    secureTransactionText:{
        fontSize:14,
        color:'#3DA8C3',
        marginLeft:5
    },
    addToWishListText:{
        color:'#3DA8C3',
        fontSize:16,
    },
    addToWishListView:{
        marginTop:10
    }
})

export default styles