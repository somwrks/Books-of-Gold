import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { productListReducer } from './Reducers/ProductReducers'

const initialState = {}

const middleware = [thunk]

const store = configureStore({
    reducer: productListReducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
}, initialState)

export default store;
