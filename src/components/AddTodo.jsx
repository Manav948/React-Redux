import React from "react";
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/TodoSlice'
function AddTodo() {

    const [input, setInput] = React.useState('')
    const dispatch = useDispatch()
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    return (
        <form onSubmit={addTodoHandler} className="flex items-center gap-2">
            <input
                type="text"
                placeholder="Enter a task..."
                className="flex-grow border border-gray-300 rounded-lg px-3 py-2 outline-none shadow-sm focus:ring-2 focus:ring-blue-500 text-black"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-md"
            >
                Add
            </button>
        </form>
    );
}

export default AddTodo;