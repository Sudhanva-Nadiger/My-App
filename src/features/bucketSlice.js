import { createSlice, nanoid, prepareAutoBatched, } from '@reduxjs/toolkit'

const initialState = {
    buckets: [
        {
            id: nanoid(),
            name: "Environment",
            cards: [
                {
                    id: nanoid(),
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
                    id: nanoid(),
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
                    id: nanoid(),
                    title: "card1",
                    link: "link1"
                },
                {
                    id: nanoid(),
                    title: "card1",
                    link: "link2"
                },
                {
                    id: nanoid(),
                    title: "card1",
                    link: "link3"
                },
                {
                    id: nanoid(),
                    title: "card1",
                    link: "link4"
                },
                {
                    id: nanoid(),
                    title: "card1",
                    link: "link5"
                },
                {
                    id: nanoid(),
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
        editBucketName: {
            reducer(state, action){
                const { editedName, id} = action.payload
                const foundBucket = state.buckets.find(bucket => bucket.id === id)
                if(foundBucket){
                    foundBucket.name = editedName
                }
            }
        },
        deleteBucket: {
            reducer(state, action){
                const { index } = action.payload
                state.buckets.splice(index, 1);
            }
        }
    }
})

export const allBuckets = (state) => state.buckets.buckets
export const { editBucketName, deleteBucket } = bucketSlice.actions

export default bucketSlice.reducer