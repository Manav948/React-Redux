import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id  : 1,text: 'Hello World'}],
}

const todoslice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state ,action) =>{
            state.todos.push({
                id: nanoid(),
                text: action.payload,
            })
        },
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

    },         
})

export const {addTodo, removeTodo} = todoslice.actions
export default todoslice.reducer
