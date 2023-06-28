import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    try {
      const response = await fetch('https://epibooks.onrender.com/');
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }
);
