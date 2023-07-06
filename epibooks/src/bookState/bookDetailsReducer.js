import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  bookDetailArray: {},
  isLoading: false,
  error: null,
};

export const fetchDetails = createAsyncThunk(
  "fetchDetails/bookDetails",
  async (bookAsin) => {
    const response = await fetch(`https://epibooks.onrender.com/${bookAsin}`);
    return await response.json();
  }
);

const sliceDetails = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(fetchDetails.pending, (state) => {
        state.isLoading = true
    })
    .addCase(fetchDetails.fulfilled, (state, action) => {
        state.bookDetailArray = action.payload[0]
        state.isLoading = false
    })
    .addCase(fetchDetails.rejected, (state) => {
        state.error = 'errore...'
        state.isLoading = false
    })
  }
});


export default sliceDetails.reducer;
export const bookDetail = state => state.details.bookDetailArray;
