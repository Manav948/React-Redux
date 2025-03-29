import { createSlice, nanoid } from "@reduxjs/toolkit";

// add local storage for todo storage
const loadTodo = () => {
    const storeTodo = localStorage.getItem('todos')
    return storeTodo ? JSON.parse(storeTodo) : [];
}

const initialState = {
    todos: loadTodo(),
    filter: 'all',
    darkmode: localStorage.getItem('theme') === 'dark'
}

const todoslice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: nanoid(),
                text: action.payload.text,
                completed: false
            })
            localStorage.setItem('todos', JSON.stringify('state.todos'))
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            localStorage.setItem('todos', JSON.stringify('state.todos'))
        },

        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload)
            if (todo) todo.completed = !todo.completed;
            localStorage.setItem('todos', JSON.stringify('state.todos'))
        },

        editTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id)
            if (todo) todo.text !== todo.action.payload.text
            localStorage.setItem('todos', JSON.stringify('state.todos'))
        },
        setfilter: (state, action) => {
            state.filter = action.payload
        },
        toggleTheme: (state, action) => {
            state.darkmode = !state.darkmode;
            localStorage.setItem('theme' , state.darkmode ? 'dark' : 'light')
        }
    },
})

export const { addTodo, removeTodo , toggleTodo , editTodo , setfilter , toggleTheme } = todoslice.actions
export default todoslice.reducer
