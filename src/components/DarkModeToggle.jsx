import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from '../features/todo/TodoSlice'
function DarkModeToggle() {

    const darkmode = useSelector(state => state.todos.darkmode)
    const dispatch = useDispatch()
    return (
        <>
            <button onClick={() => dispatch(toggleTheme())} className={darkmode ? 'dark-mode' : ''}>
                {darkmode ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>
        </>
    )
}

export default DarkModeToggle