const initialState = {
    isAuth: false,
    user: {
        email: "",
        name: "",
        id: ""
    }
}
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            const getUser = action.payload
            return {
                ...state, isAuth: true, user: {
                    email: getUser.email,
                    name: getUser.name,
                    id: getUser._id,
                    phone: getUser.phone,

                }
            }
        case 'LOGOUT':
            return {
                ...state,
                isAuth: false,
                user: {
                    email: "",
                    name: "",
                    id: "",
                    phone: "",
                }
            }
        default: return state
    }

}
export default loginReducer