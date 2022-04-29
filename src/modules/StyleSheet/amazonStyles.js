import { StyleSheet, Dimensions } from "react-native"

const { height, width } = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    search: {
        borderRadius: 5,
        paddingLeft: 10,
        margin: 6,
        height: 43,
        marginLeft: '3%',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        width: width * 0.85,
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
        // backgroundColor: '#70feff',
        flexDirection: 'row',
        alignItems: 'center',
        height: 55,
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
    },
    scanImage: {
        height: 20,
        width: 20,
    },
    scanImageCon: {
        position: 'absolute',
        right: 10,
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
        height: 55,
    },
    backButton: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
        opacity: 0.8
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
        // paddingTop: 3,
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
        marginLeft: 30,
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
        height: 420,
    },
    offerTab: {
        padding: 5,
        marginTop: 5,
        backgroundColor: 'white',
        height: 150
    },
    titleText: {
        fontSize: 17,
        marginHorizontal: 13,
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
    fourStack: {
        height: 160,
        width: '48%'
    },
    fourStackImg: {
        height: "100%",
        width: '100%',
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
        fontStyle: 'italic',
        color: 'black'
    },
    usernameText: {
        fontSize: 23,
        fontWeight: '600',
        color: 'black'
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
        fontWeight: '400',
        color: 'black'
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
        fontWeight: '600',
        color: 'black'
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
        height: 90,
        width: 150,
        padding: 7,
        marginHorizontal: 8
    },
    offerBlockNameText: {
        fontSize: 13.5,
        fontWeight: '700',
        color: 'black'
    },
    offerBlockDescText: {
        marginTop: 5,
        color: 'black'
    },
    totalPriceView: {
        flexDirection: 'row',
        // padding:7,
        alignItems: 'flex-end'
    },
    totalText: {
        fontSize: 17,
        fontWeight: '500',
        color: 'black'
    },
    totalPriceText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black'
    },
    priceTab: {
        padding: 12,
        marginTop: 5,
        backgroundColor: 'white',
        height: 510
    },
    freeDeliveryBlock: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    freeDeliveryText: {
        fontSize: 15,
        fontWeight: '400',
        color: 'black'
    },
    deliveryTimeText: {
        fontSize: 15,
        fontWeight: '600',
        color: 'black'
    },
    quantityBox: {
        marginTop: 10,
        backgroundColor: '#F3F3F2',
        height: 38,
        width: 85,
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
        borderRadius: 10,
    },
    inStockText: {
        marginTop: 45,
        color: 'green'
    },
    downImg: {
        height: 20,
        width: 20,
    },
    downImgContainer: {
        left: 10,
        justifyContent: 'center'
    },
    modalView: {
        height: height / 1.8,
        backgroundColor: '#white',
        borderRadius: 10,
        overflow: 'hidden'
    },
    modal: {
        width: width / 2,
        alignSelf: 'center'
    },
    qtyBlock: {
        // margin:5,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        height: 40,
        backgroundColor: 'white',
        paddingLeft: 15,
        justifyContent: 'center',
    },
    qtyModalHeader: {
        flexDirection: 'row',
        backgroundColor: '#F3F3F2',
        height: 40,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    qtyHeaderText: {
        fontSize: 17,
        fontWeight: '700',
        color: 'black'
    },
    selectedQtyBlock: {
        borderWidth: 1,
        borderColor: '#0A839F',
        borderLeftWidth: 4,
        height: 40,
        backgroundColor: '#C6F8FB',
        paddingLeft: 11,
        justifyContent: 'center'
    },
    secureTransactionView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    secureTransactionText: {
        fontSize: 14,
        color: '#3DA8C3',
        marginLeft: 5,
    },
    addToWishListText: {
        color: '#3DA8C3',
        fontSize: 16,
    },
    addToWishListView: {
        marginTop: 10
    },
    keepShoppingText: {
        color: 'black',
        fontSize: 14
    },
    orderWithinText: {
        color: 'black',
        fontSize: 14
    },
    qtyText: {
        color: 'black',
        fontSize: 14
    },
    cartImage: {
        height: 100,
        width: 90,
    },
    cartItemContainer: {
        height: 170,
        width: width,
        padding: 10,
        backgroundColor: 'white',
    },
    cartContentContainer: {

        height: 110,
        flexDirection: 'row',
        padding: 3
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    deleteQtyImg: {
        height: 18,
        width: 18,
    },
    deleteQtyImgContainer: {
        backgroundColor: '#ccc',
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start'
    },
    qtyChangeView: {
        width: '37%',
        height: 40,
        // justifyContent:'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        overflow: 'hidden'
    },
    quantityContainer: {
        backgroundColor: 'white',
        width: '40%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    productPriceCartItemText: {
        fontSize: 20,
        color: 'black',
        fontWeight: '800'
    },
    titleCartText: {
        height: 40,
        color: 'black'
    },
    itemManipulation: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around"
    },
    deleteCartItem: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        borderRadius: 10,
        width: '20%'
    },
    safeForLater: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        borderRadius: 10,
        width: '30%'
    },
    subtotalText: {
        fontSize: 22,
        color: 'black'
    },
    dollarSignText: {
        fontSize: 13,
        color: 'black',
        marginTop: 3
    },
    amountText: {
        fontSize: 24,
        color: 'black',
        fontWeight: '600'
    },
    subTotalContainer: {
        flexDirection: 'row',
        paddingVertical: 6,
        alignItems: 'flex-start',
        backgroundColor: 'white',

    },
    checkOutContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: 'white'
    },
    cartIconImg: {
        backgroundColor: '#F0F0F0',
        height: 60,
        width: 60,
        borderRadius: 20,
    },
    bottomImgContainer: {
        backgroundColor: 'white',
        height: 110,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 5
    },
    bottonInnerContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomCartText: {
        fontSize: 14,
        color: '#3DA8C3'
    },
    emptyCartgif: {
        height: 100,
        width: 100,
    },
    listEmptyCartComponent: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    menuBackground: {
        height: height,
        width: width
    },
    menuImg: {
        height: 80,
        width: '100%',
    },
    menuListContainer: {
        height: 155,
        backgroundColor: 'white',
        marginVertical: 8,
        width: '29%',
        justifyContent: "space-between",
        borderRadius: 10,
        // overflow: 'hidden',
        borderColor: '#ccc',
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        // alignItems:'center'
    },
    menuContainer: {
        borderTopEndRadius: 45,
        borderTopStartRadius: 45,
        overflow: 'hidden'
    },
    menuListText: {
        color: 'black',
        margin: 7,
        fontSize:15
    },
    amazonPayImage: {
        height: 60,
        width: '100%',
    },
    menuHeaderComponentContainer: {
        margin: 10,
        marginHorizontal:10,
        width:'94%',
        alignSelf:'center',
        backgroundColor: 'white',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    menuHeaderButtons: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '43%',
        marginVertical: 10,
    },
    amazonPayImgContainer: {
        height: 60,
        backgroundColor: '#F7D55B',
        width: '100%',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginVertical: 5,
        justifyContent: 'center'
    },
    miniTVImgContainer: {
        height: 60,
        backgroundColor: '#F6ECCA',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginVertical: 5
    },
    miniTvImg: {
        height: 30,
        width: '100%'
    },
    menuListFooterContainer:{
        backgroundColor:'white',
        width:'93%',
        alignSelf:'center',
        borderRadius:10,
        padding:10,
        marginVertical:5
    },
    menuFooterSettings:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:30,
        alignItems:'center'
    },
    menuShowSettingImg:{
        resizeMode:'contain',
        height:15,
        width:15,
        alignSelf:'center'
    },
    menuSettingButton:{
        flexDirection:'row',
        marginVertical:10,
        justifyContent:'flex-start'
    },
    indiaFlagImg:{
        resizeMode:'contain',
        height:15,
        width:15,
        alignSelf:'center',
        // marginLeft:5
    },
    settingsText:{
        fontSize:16,
        marginHorizontal:10,
        color:'black'
    },
    menuListFooterContainerAlt:{
        backgroundColor:'white',
        width:'93%',
        alignSelf:'center',
        borderRadius:10,
        padding:10,
        height:400
    }
})

export default styles