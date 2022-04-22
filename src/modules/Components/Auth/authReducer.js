initial_State={
    login:true,
    LoginData:[]
}

const AuthReducer=(state=initial_State,action)=>{
    const {type,payload}=action
    switch(type){
        case 'Register':
            return {...state,LoginData:[...state.LoginData,payload]}
        case 'Toggle Login':
            return{...state,...payload}
        default:
            return{...state}
    }
}
export default AuthReducer