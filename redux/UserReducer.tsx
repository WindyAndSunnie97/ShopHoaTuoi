const userReducer = (state = {}, action: { type: any; payload: any; }) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return action.payload; // Lưu thông tin người dùng vào store khi đăng nhập thành công
      default:
        return state;
    }
  };