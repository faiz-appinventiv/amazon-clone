initial_State={
    login:true,
    LoginData:{}
}

const AuthReducer=(state=initial_State,action)=>{
    const {type,payload}=action
    switch(type){
        case 'Register':
            // state.LoginData.push(payload)
            return {...state,LoginData:payload}
        case 'Toggle_Login':
            return{...state,...payload}
        default:
            return state
    }
}
export default AuthReducer