import axios from "axios"

export const AddData=(payload)=> {
    return (dispatch,getState) => {
        axios.get("https://fakestoreapi.com/products/").then(res => {
            dispatch({
                type: 'Add_Data',
                payload: res.data
            })
        }).catch(err => console.log(err))
    }
}