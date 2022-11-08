import { createSlice } from "@reduxjs/toolkit";
import { fetchCards } from "../thunks/cardThunk";

const initialState = {
    cards: [],
    isLoading: true,
    error:""
};

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCards.pending, (state) => {
                state.isLoading = false;
            })
            .addCase(fetchCards.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cards = action.payload
            })
            .addCase(fetchCards.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error;  
            })
    }
});

export const {setError} = cardSlice.actions;
export const cardsSliceSelector = (state) => state.card;
export default cardSlice.reducer;