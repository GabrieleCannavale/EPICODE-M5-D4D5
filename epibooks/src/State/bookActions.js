import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    try {
      const response = await fetch('https://epibooks.onrender.com/');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);
