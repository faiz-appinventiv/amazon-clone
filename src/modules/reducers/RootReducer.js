import { combineReducers } from "redux";
import AuthReducer from '../Components/Auth/authReducer'
import CartReducer from "../Components/products/reducer";

const RootReducer=combineReducers({
    AuthReducer,
    CartReducer
})

export default RootReducer