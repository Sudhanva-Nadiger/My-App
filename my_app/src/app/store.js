import { configureStore } from '@reduxjs/toolkit'
import bucketSlice from '../features/bucketSlice';

const store = configureStore({
    reducer: {
        buckets : bucketSlice
    }
});

export default store