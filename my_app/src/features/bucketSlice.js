import { createSlice, nanoid, } from '@reduxjs/toolkit'

const initialState = {
    buckets: [],
}

export const bucketSlice = createSlice({
    name: "buckets",
    initialState,
    reducers: {

    }
})

export const allBuckets = (state) => state.buckets.buckets
export const {} = bucketSlice.actions

export default bucketSlice.reducer