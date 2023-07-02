import { configureStore } from '@reduxjs/toolkit';
import commentReducer from './commentReducer';

const store = configureStore({
  reducer: {
    comments: commentReducer,
  },
});

export default store;