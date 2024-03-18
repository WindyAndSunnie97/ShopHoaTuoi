import { combineReducers } from 'redux';
import loginReducer from './login/asscess';
//Import reducer của bạn

const rootReducer = combineReducers({
  login: loginReducer, // Thay thế loginReducer bằng reducer của bạn
  // Thêm các reducer khác nếu cần
});

export type RootState = ReturnType<typeof rootReducer>;