import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCommentsByBookId,
  deleteCommentById,
  putCommentById,
} from "./commentActions";

const initialState = {
  commentArrayRedux: [],
  pending: false,
  error: null,
  selectedAsin: "",
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setAsin(state, action) {
      state.selectedAsin = action.payload;
      //console.log(state.selectedAsin)
    },
  },
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
      })

      .addCase(deleteCommentById.fulfilled, (state, action) => {
        state.commentArrayRedux = state.commentArrayRedux.filter(
          (comment) => comment._id !== action.payload
        );
      })

      /* .addCase(putCommentById.fulfilled, (state, action) => {
        const index = state.commentArrayRedux
      }); */
  },
});

export const { setAsin } = commentSlice.actions;
export default commentSlice.reducer;
