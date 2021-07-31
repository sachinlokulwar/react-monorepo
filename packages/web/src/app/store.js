import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'common/src/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
