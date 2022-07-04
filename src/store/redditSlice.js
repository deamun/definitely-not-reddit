import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    searchTerm: '',
    selectedSubreddit: '/r/todayilearned',
    isLoading: false,
    hasError: false
};

const redditSlice = createSlice({
    name: 'redditPosts',
    initialState,
    reducers: {
        // Reducers will be added later when there is a better idea of what is required.
    }
})

// Export action creators
// Export reducer
export default redditSlice.reducer

// Selectors
