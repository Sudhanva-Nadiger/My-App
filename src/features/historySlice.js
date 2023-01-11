import { createSlice, nanoid, } from '@reduxjs/toolkit'

const initialState = {
    history: []
}

const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        addToHitory: {
            reducer(state, action){

            }
        },
        deleteFroHistory: {
            reducer(state, action){

            }
        },
        clearHistory: {
            reducer(state, action){
                state.history.history = []
            }
        }
    }
})

export const { addToHitory, deleteFroHistory, clearHistory} = historySlice.actions

export default historySlice.reducer