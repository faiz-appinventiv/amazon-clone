initial_State={
    login:true
}

const AuthReducer=(state=initial_State,action)=>{
    const {type,payload}=action
    switch(type){
        case 'Auth':
            return {...state,...payload}
        default:
            return{...state}
    }
}
export default AuthReducer