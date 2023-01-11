import { configureStore } from '@reduxjs/toolkit'
import bucketSlice from '../features/bucketSlice';
import toggleSlice from "../features/toggleSlice.js";
import historySlice from '../features/historySlice';

const store = configureStore({
    reducer: {
        buckets : bucketSlice,
        toggle: toggleSlice,
        history: historySlice,
    }
});

export default store