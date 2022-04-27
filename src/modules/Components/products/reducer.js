initial_State={
    cart:[]
}

const CartReducer=(state=initial_State,action)=>{
    const {type,payload}=action
    switch(type){
        case 'Add_Item':
            state.cart.push(payload)
            console.log('state',state.cart)
            console('payload',payload)
            return {...state,cart:payload}
        case 'Delete_Item':
            return{...state,cart:payload}
        default:
            return state
    }
}
export default CartReducer