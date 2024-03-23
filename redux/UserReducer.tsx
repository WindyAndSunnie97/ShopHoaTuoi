const userReducer = (state = {}, action: { type: any; payload: any; }) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return action.payload; // Lưu thông tin người dùng vào store khi đăng nhập thành công
      default:
        return state;
    }
  };
  export default userReducer;

// userReducer.ts

// // Define the structure of the user state
// interface UserState {
//   isLoggedIn: boolean;
//   userData: UserData | null;
//   error: string | null;
// }

// // Define the structure of user data
// interface UserData {
//   id: string;
//   email: string;
//   name: string;
// }

// // Define the initial state
// const initialState: UserState = {
//   isLoggedIn: false,
//   userData: null,
//   error: null,
// };

// // Define the user reducer
// const userReducer = (state = initialState, action: any): UserState => {
//   switch (action.type) {
//     case 'LOGIN_SUCCESS':
//       return {
//         ...state,
//         isLoggedIn: true,
//         userData: action.payload,
//         error: null,
//       };
//     case 'LOGIN_FAILURE':
//       return {
//         ...state,
//         isLoggedIn: false,
//         userData: null,
//         error: action.payload,
//       };
//     case 'LOGOUT':
//       return {
//         ...state,
//         isLoggedIn: false,
//         userData: null,
//         error: null,
//       };
//     default:
//       return state;
//   }
// };

// export default userReducer;
