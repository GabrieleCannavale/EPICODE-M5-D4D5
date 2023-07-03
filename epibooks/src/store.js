import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookState/bookReducer";
import commentReducer from "./commentState/commentReducer";

const store = configureStore({
    reducer: {
        books: bookReducer,
        comments: commentReducer,
    }
});

export default store;