import { configureStore, combineReducers } from '@reduxjs/toolkit';

import redditReducer from './redditSlice';
import subredditsReducer from './subredditSlice';

const store = configureStore({
    reducer: combineReducers({
        reddit: redditReducer,
        subreddits: subredditsReducer
    }),
});

export default store;