import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    subreddits: [],
    isLoading: false,
    hasError: false,
};

const subredditSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {
        // Reducers will be added later when there is a better idea of what is required.
    }
});

// Export reducer
export default subredditSlice.reducer;

// Export action creators
// export const {} = subredditSlice.actions;

// Selectors
export const selectSubreddits = state => state.subreddits.subreddits;