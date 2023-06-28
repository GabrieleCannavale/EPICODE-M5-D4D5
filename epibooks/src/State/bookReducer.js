import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "./bookActions";

const bookSlice = createSlice({
  name: "books",
  initialState: [],
  pending: false,
  error: false,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchBooks.pending, (state) => {
            state.pending = true;
        })
        .addCase(fetchBooks.fulfilled, (state, action) => {
            return action.payload;
        })
        .addCase(fetchBooks.rejected, (state) => {
            state.error = true;
        });
  }
});


export default bookSlice.reducer;
