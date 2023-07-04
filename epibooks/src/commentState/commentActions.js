import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCommentsByBookId = createAsyncThunk(
    'bookComments/fetchCommentsByBookId',
    async (asin) => {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`,{
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdlNWFhZmI5YzBmNzAwMTQ0ODRmMDYiLCJpYXQiOjE2ODgzNzU5MDEsImV4cCI6MTY4OTU4NTUwMX0.BZh63r44JaIh0_k79qA_keBtDnyH7pNMW-YM3V9Q-fU"
            }});

        const data = await response.json();
        return data;
    });