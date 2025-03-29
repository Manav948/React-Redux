import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from '../features/todo/TodoSlice'
function DarkModeToggle() {

    const darkmode = useSelector(state => state.todos.darkmode)
    const dispatch = useDispatch()
    return (
        <button
            onClick={() => dispatch(toggleTheme())}
            className={`px-4 py-2 rounded-md font-semibold transition-all ${
                darkmode ? 'bg-gray-800 text-white' : 'bg-yellow-400 text-black'
            }`}
        >
            {darkmode ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
    );
}

export default DarkModeToggle;