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
                    title, link, now, id: nanoid()
                }
                state.history.unshift(newObj)
            }
        },
        deleteFromHistory: {
            reducer(state, action){
				state.history.splice(action.payload,1)
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

export const { addToHitory, deleteFromHistory, clearHistory} = historySlice.actions

export default historySlice.reducer