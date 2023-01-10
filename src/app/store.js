import { configureStore } from '@reduxjs/toolkit'
import bucketSlice from '../features/bucketSlice';
import toggleSlice from "../features/toggleSlice.js";

const store = configureStore({
    reducer: {
        buckets : bucketSlice,
        toggle: toggleSlice,
    }
});

export default store