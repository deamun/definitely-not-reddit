import { configureStore, combineReducers } from '@reduxjs/toolkit';

import redditReducer from './redditSlice';

const store = configureStore({
    reducer: combineReducers({
        reddit: redditReducer,
    }),
});

export default store;