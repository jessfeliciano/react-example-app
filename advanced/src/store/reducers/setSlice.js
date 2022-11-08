import { createSlice } from "@reduxjs/toolkit";
import { fetchSets } from "../thunks/setThunk";

const initialState = {
    sets: [],
    isLoading: true,
    error:""
};

export const setSlice = createSlice({
    name: 'set',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        },  
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSets.pending, (state) => {
                state.isLoading = false;
            })
            .addCase(fetchSets.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cards = action.payload
            })
            .addCase(fetchSets.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error;  
            })
    }
});
export const {setError} = setSlice.actions;
export const setsSliceSelector = (state) => state.set;
export default setSlice.reducer;