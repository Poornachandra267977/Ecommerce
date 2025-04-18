import { combineReducers } from "@reduxjs/toolkit";
import {userReducer} from "../reducers/userReducer";
import{wishlistReducer} from "../reducers/wishlistReducer";
import {cartReducer} from "../reducers/cartReducer";
import {currentProductReducer} from "../reducers/currentProductReducer";


const rootReducer = combineReducers({
    user:userReducer,
    wishlist:wishlistReducer,
    cart:cartReducer,
    currentProduct:currentProductReducer
})
export default rootReducer;