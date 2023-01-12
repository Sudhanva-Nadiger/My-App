import { createSlice, nanoid } from '@reduxjs/toolkit'
import { current, enableMapSet } from 'immer'

enableMapSet()

const initialState = {
    history: [],
}



const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        addToHitory: {
            reducer(state, action){
                const { title, link, cardId} = action.payload
                const now = new Date()
                const newObj = {
                    title, link, now, id: cardId
                }
                state.history.unshift(newObj)
            },
           
        },
        deleteFromHistory: {
            reducer(state, action){
				state.history.splice(action.payload,1)
            },
            
        },
        clearHistory: {
            reducer(state, action){
                state.history = []
            },
            
        },
        
    }
})

export const selectAllHistory = (state)=> state.history.history


export const { addToHitory, deleteFromHistory, clearHistory} = historySlice.actions

export default historySlice.reducer