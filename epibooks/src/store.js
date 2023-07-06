import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookState/bookReducer";
import commentReducer from "./commentState/commentReducer";
import bookDetailsReducer from "./bookState/bookDetailsReducer";

const store = configureStore({
    reducer: {
        books: bookReducer,
        comments: commentReducer,
        details: bookDetailsReducer,

    }
});

export default store;