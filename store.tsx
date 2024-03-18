import {configureStore} from "@reduxjs/toolkit"
import CartReducer from "./redux/CartReducer"

export default configureStore({
    reducer:{
        cart:CartReducer,

    }
})

//export type RootState = ReturnType <typeof store.getState>

//export type AppDispatch = ReturnType <typeof store.dispatch>



