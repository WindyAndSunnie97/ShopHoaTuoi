import { combineReducers } from 'redux';
import loginReducer from './login/asscess';

const rootReducer = combineReducers({
  login: loginReducer, // Thay thế loginReducer bằng reducer của bạn
  // Thêm các reducer khác nếu cần
});

export type RootState = ReturnType<typeof rootReducer>;