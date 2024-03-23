import {configureStore} from "@reduxjs/toolkit"
import CartReducer from "./redux/CartReducer"
import loginReducer from "./redux/login/asscess"

export default configureStore({
    reducer:{
        cart:CartReducer,
        login: loginReducer
    }
})

//export type RootState = ReturnType <typeof store.getState>

//export type AppDispatch = ReturnType <typeof store.dispatch>



