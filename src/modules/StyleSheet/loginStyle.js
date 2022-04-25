import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
    container: {

    },
    innerContainer:{
        marginHorizontal:15,
        // borderRadius:100
    },
    headerImage: {
        height: 40,
        width: 80,
    },
    header: {
        alignItems: 'center',
        height: 40,
        backgroundColor: '#E9E6E6',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 5,
    },
    welcomeText: {
        fontSize: 24,
        marginVertical: 10,
        color:'black'
    },
    statusImg: {
        height: 15,
        width: 15
    },
    form: {
        // marginHorizontal:15,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    innerFormHeader: {
        // flexDirection: 'row',
        padding: 10,
        paddingHorizontal: 15
    },
    headerTextView: {
        flexDirection: 'row',
        // marginLeft: 13,
        alignItems: 'flex-end'
    },
    innerInactiveFormHeader: {
        flexDirection: 'row',
        backgroundColor: '#ccc',
        // paddingHorizontal:10,
        // paddingVertical:10,
        padding: 10,
        paddingHorizontal: 15
    },
    signInInput: {
        marginTop: 10,
        padding: 9,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius:3,
        color:'black'
    },
    signInButton: {
        backgroundColor: '#EEB559',
        marginTop: 10,
        height: 38,
        // marginHorizontal: 16,
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
    privacyTextView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 10
    },
    privacyText: {
        fontSize: 11,
        color:'black'
    },
    bottomLine: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        marginTop: 30,
        marginHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    bottomText:{
        fontSize: 15,
        color:'#3DA8C3',
        marginHorizontal:15,

    },
    bottom:{
        flexDirection:'row',
        marginTop:10,
        alignItems:'center',
        justifyContent:'center'
    },
    bottomView:{
        paddingHorizontal:15,
        alignItems:'center'
    },
    warning:{
        marginVertical:10,
        fontWeight:'300',
        fontSize:13.5,
        color:'black'
    },
    warningText:{
        color:'red'
    },
    emptyWarning:{
        flexDirection:'row',
        marginTop:5,
        // justifyContent:'center'
        alignItems:'center'
    },
    emailView:{
        flexDirection:'row',
    },
    changeText:{
        color:'#3DA8C3',
    },
    passwordInput:{
        marginTop: 10,
        padding: 9,
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius:3,
        color:'black'
    },
    showPassword:{
        flexDirection:'row',
        marginTop:10,
        justifyContent:"space-between"
        // alignItems:'center',
        // justifyContent:'flex-start',
        // backgroundColor:'red'
    },
    showPasswordTouchable:{
        flexDirection:'row',
        alignItems:'center',
    },
    orText:{
        // textDecorationLine:''
    },
    noAccountHeader:{
        fontWeight:'600',
        fontSize:15,
        color:'brown',
        color:'black'
    },
    noAccountBody:{
        fontSize:14,
        marginTop:5,
        color:'black'
    },
    noAccount:{
        marginTop:10,
        borderWidth:1,
        borderColor:'brown',
        borderRadius:5,
    },
    noAccountInner:{
        borderWidth:3,
        borderColor:'#FCE1B9',
        borderRadius:5,
        padding:8
    },
    loginEmailButton:{
        color:'black'
    }
})
export default loginStyles