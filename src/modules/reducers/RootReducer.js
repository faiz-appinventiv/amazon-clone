import { combineReducers } from "redux";
import AuthReducer from '../Components/Auth/authReducer'
import CartReducer from "../Components/Cart/reducer";
import ProductReducer from '../Components/ProductList/reducer'

const RootReducer=combineReducers({
    AuthReducer,
    CartReducer,
    ProductReducer,
})

export default RootReducer