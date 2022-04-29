initial_State={
    data:[]
}

const ProductReducer=(state=initial_State,action)=>{
    const {type,payload}=action
    switch(type){
        case 'Add_Data':
            return {...state,data:payload}
        default:
            return state
    }
}
export default ProductReducer