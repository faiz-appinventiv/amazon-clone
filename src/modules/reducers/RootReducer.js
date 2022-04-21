import { combineReducers } from "redux";
import AuthReducer from '../Components/Auth/authReducer'

const RootReducer=combineReducers({
    AuthReducer,
})

export default RootReducer