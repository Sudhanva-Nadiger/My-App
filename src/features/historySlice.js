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
                const { title, link} = action.payload
                const now = new Date().toDateString()
                const newObj = {
                    title, link, now
                }
                state.history.unshift(newObj)
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

export const selectAllHistory = (state)=> state.history.history

export const { addToHitory, deleteFroHistory, clearHistory} = historySlice.actions

export default historySlice.reducer