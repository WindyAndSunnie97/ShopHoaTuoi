const initialState = {
    isAuth: false,
    user: {
        email: "",
        name: "",
        id: ""
    }
}
const loginReducer = (state = initialState, action: any) => {
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


// interface User {
//     email: string;
//     name: string;
//     id: string;
//     phone?: string; // Điện thoại có thể là tùy chọn
// }

// interface AuthState {
//     isAuth: boolean;
//     user: User;
// }

// interface LoginAction {
//     type: 'LOGIN';
//     payload: User; // Payload là một đối tượng User
// }

// interface LogoutAction {
//     type: 'LOGOUT';
// }

// type ActionType = LoginAction | LogoutAction;

// const initialState: AuthState = {
//     isAuth: false,
//     user: {
//         email: "",
//         name: "",
//         id: ""
//     }
// }

// const loginReducer = (state: AuthState = initialState, action: ActionType): AuthState => {
//     switch (action.type) {
//         case 'LOGIN':
//             const getUser = action.payload;
//             return {
//                 ...state,
//                 isAuth: true,
//                 user: {
//                     email: getUser.email,
//                     name: getUser.name,
//                     id: getUser.id,
//                     phone: getUser.phone || "", // Sử dụng phone nếu có hoặc chuỗi rỗng nếu không
//                 }
//             }
//         case 'LOGOUT':
//             return {
//                 ...state,
//                 isAuth: false,
//                 user: {
//                     email: "",
//                     name: "",
//                     id: "",
//                     phone: "",
//                 }
//             }
//         default:
//             return state;
//     }
// }

// export default loginReducer;
