import { createSlice, nanoid, } from '@reduxjs/toolkit'

const initialState = {
    buckets: [
        {
            id: nanoid(),
            name: "Environment",
            cards: [
                {
                    title: "card2",
                    link: "linkkejb2"
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
        {
            id: nanoid(),
            name: "Education",
            cards: [
                {
                    title: "card1",
                    link: "link1"
                },
                {
                    title: "card1",
                    link: "link2"
                },
                {
                    title: "card1",
                    link: "link3"
                },
                {
                    title: "card1",
                    link: "link4"
                },
                {
                    title: "card1",
                    link: "link5"
                },
                {
                    title: "card1",
                    link: "link6"
                },
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