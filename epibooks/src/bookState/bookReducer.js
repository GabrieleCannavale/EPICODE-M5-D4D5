import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "./bookActions";




//Oggetto initialState che contiene gli stati iniziali
const initialState = {
    bookArrayRedux: [],
    pending: false,
    error: false,
    randromImage: null,
}


const bookSlice = createSlice({
  name: "books",
  initialState,//Oggetto initialState che contiene gli stati iniziali
   reducers: {
    filterBooksByTerm: (state, action) => {
      state.bookArrayRedux = state.bookArrayRedux.filter((book) => {
        return book.title.toLowerCase().includes(action.payload.toLowerCase())
      })      
    },

    randomCarouselImage: (state) => {
      const { bookArrayRedux } = state;
      if (bookArrayRedux.length > 0) {
        const randomIndex = Math.floor(Math.random() * bookArrayRedux.length);
        const randomBook = bookArrayRedux[randomIndex];
        state.randomImage = randomBook.img; // Utilizza la proprietà "img" per l'URL dell'immagine del libro
      }
    },

   },
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

export const  { filterBooksByTerm, randomCarouselImage } = bookSlice.actions;
export default bookSlice.reducer;
