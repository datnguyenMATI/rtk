import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/counter/counterSlice';
import userSlice from './user/userSlice';
import modalSlice from './modal/modalSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userSlice,
    modal:modalSlice
  },
});
