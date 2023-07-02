import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCommentsByBookId = createAsyncThunk(
    'bookComments/fetchCommentsByBookId',
    async (asin) => {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`,{
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdlNWFhZmI5YzBmNzAwMTQ0ODRmMDYiLCJpYXQiOjE2ODgxNjY0MDIsImV4cCI6MTY4OTM3NjAwMn0.tHIjCAvlz2fPJYYcbVVV0MbcodJXCDcdyeqPeghmJnk"
            }});

        const data = await response.json();
        return data;
    })