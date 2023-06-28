import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "./bookActions";




//Oggetto initialState che contiene gli stati iniziali
const initialState = {
    bookArrayRedux: [],
    pending: false,
    error: false,
}


const bookSlice = createSlice({
  name: "books",
  initialState,//Oggetto initialState che contiene gli stati iniziali
    /* reducers: {}, */  //Non serve perchè non abbiamo bisogno di modificare lo stato, qui vanno inserite tutte le funzione per modificare lo stato dello Slice
  extraReducers: (builder) => {
    builder
        .addCase(fetchBooks.pending, (state) => {
            state.pending = true;
        })
        .addCase(fetchBooks.fulfilled, (state, action) => {
            state.bookArrayRedux = action.payload;
            
        })
        .addCase(fetchBooks.rejected, (state) => {
            state.error = true;
        });
  }
  //ExtraReducers: sono le funzioni che vengono eseguite quando viene chiamata una funzione asincrona
});


export default bookSlice.reducer;
