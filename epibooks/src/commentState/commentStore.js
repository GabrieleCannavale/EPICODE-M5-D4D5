import { configureStore } from '@reduxjs/toolkit';
import commentReducer from './commentReducer';

const commentStore = configureStore({
  reducer: {
    comments: commentReducer,
  },
});

export default commentStore;