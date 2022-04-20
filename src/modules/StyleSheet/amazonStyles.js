import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    search: {
        borderRadius: 5,
        marginTop: '10%',
        padding: 10,
        margin: 6,
        marginLeft: '3%',
        backgroundColor: 'white',
        flexDirection: 'row',
        width: "85%",
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
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        fontSize: 18,
    },
    headerText: {
        fontSize: 30,
        fontWeight: '800',
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
        right: 10,
        marginTop: "12%",
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
        marginLeft: '3%'
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
    },
    loading: {
        height: 20,
        width: 70,
        // alignSelf: 'center',
        // justifyContent:'center'
    },
    SearchHeader: {
        height: 125,
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
        color: 'grey'
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
        marginHorizontal: 20
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
    },
    youMightLike:{
        marginTop:20
    },
    fourStackImg:{
        height:200,
        width:190,
        borderRadius:20,
        margin:5,
        // marginVertical:5
    },
    fourStackInner:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        margin:5,
        // marginHorizontal:10
    },
    fourStackText:{
        fontSize:18,
        fontWeight:'400',
        textAlign:'center',
    },
    fourStack:{
        height:220,
        width:190,
        borderRadius:20,
        margin:5,
        justifyContent:'center'
        // marginVertical:5
    }
})

export default styles