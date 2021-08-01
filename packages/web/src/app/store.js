import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'common/src/counter/counterSlice';
import usersSlice from 'common/src/users/usersSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersSlice
  },
});
