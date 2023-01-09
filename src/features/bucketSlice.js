import { createSlice, nanoid, } from '@reduxjs/toolkit'

const initialState = {
    buckets: [
        {
            id: nanoid(),
            name: "Education",
            cards: [
                {
                    title: "card1",
                    link: "link"
                }
            ]
        },
        {
            id: nanoid(),
            name: "Environment",
            cards: [
                {
                    title: "card2",
                    link: "linkkejb"
                }
            ]
        },

    ],
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