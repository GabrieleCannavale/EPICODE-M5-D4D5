import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/books');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
);

//https://striveschool-api.herokuapp.com/books
//https://epibooks.onrender.com/