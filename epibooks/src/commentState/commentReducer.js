import { createSlice } from "@reduxjs/toolkit";
import { fetchCommentsByBookId } from "./commentActions";

const initialState = {
  commentArrayRedux: [],
  pending: false,
  error: null,
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByBookId.pending, (state) => {
        state.pending = true;
      })
      .addCase(fetchCommentsByBookId.fulfilled, (state, action) => {
        state.commentArrayRedux = action.payload;
      })
      .addCase(fetchCommentsByBookId.rejected, (state) => {
        state.error = true;
      });
  },
});

export default commentSlice.reducer;
