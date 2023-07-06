import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCommentsByBookId = createAsyncThunk(
    "bookComments/fetchCommentsByBookId",
    async (asin) => {
        const response = await fetch(
            `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
            {
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdlNWFhZmI5YzBmNzAwMTQ0ODRmMDYiLCJpYXQiOjE2ODgzNzU5MDEsImV4cCI6MTY4OTU4NTUwMX0.BZh63r44JaIh0_k79qA_keBtDnyH7pNMW-YM3V9Q-fU",
                },
            }
        );

        const data = await response.json();
        return data;
    }
);


export const createComment = createAsyncThunk(
    "bookComments/createComment",
    async (payload) => {
        const response = await fetch(
            "https://striveschool-api.herokuapp.com/api/comments/",
            {
                method: "POST",
                body: JSON.stringify(payload),

                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdlNWFhZmI5YzBmNzAwMTQ0ODRmMDYiLCJpYXQiOjE2ODgzNzU5MDEsImV4cCI6MTY4OTU4NTUwMX0.BZh63r44JaIh0_k79qA_keBtDnyH7pNMW-YM3V9Q-fU",
                    "Content-Type": "application/json",
                },
            }
        );
    }
);


export const deleteCommentById = createAsyncThunk(
    "comments/deleteCommentById",
    async (commentId) => {
        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
                {
                    method: "DELETE",
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdlNWFhZmI5YzBmNzAwMTQ0ODRmMDYiLCJpYXQiOjE2ODgzNzU5MDEsImV4cCI6MTY4OTU4NTUwMX0.BZh63r44JaIh0_k79qA_keBtDnyH7pNMW-YM3V9Q-fU",
                        "Content-Type": "application/json",
                    },
                }
            );
            if (!response.ok) {
                throw new Error("Failed to delete comment.");
            }
            // Restituisci eventuali dati aggiornati dopo la cancellazione del commento
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
);
