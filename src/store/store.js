import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        reddit: {},
        subreddits: {}
    }
});

export default store;