import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo, editTodo, setfilter } from "../features/todo/TodoSlice";

function Todos() {
    const todos = useSelector(state => state.todos.todos);
    const filter = useSelector(state => state.todos.filter);
    const dispatch = useDispatch();

    const filtertodos = todos.filter(todo =>
        filter === 'all' ? true : filter === 'completed' ? todo.completed : !todo.completed    
    )

    return (
        <div className="mt-4 bg-gray-50 p-4 rounded-lg shadow border">
            <h2 className="text-xl font-semibold text-gray-800 text-center mb-3 ">Your Tasks</h2>
            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm border"
                    >
                        <span className="text-gray-800">{todo.text}</span>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition-all"
                        >
                            ✖
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
