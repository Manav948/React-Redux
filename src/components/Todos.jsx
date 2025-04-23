import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo, editTodo, setfilter } from "../features/todo/TodoSlice";

function Todos() {
    const todos = useSelector(state => state.todos.todos);
    const filter = useSelector(state => state.todos.filter);
    const dispatch = useDispatch();

    const filteredTodos = todos.filter(todo =>
        filter === 'all' ? true : filter === 'completed' ? todo.completed : !todo.completed    
    );

    return (
        <div className="mt-4 bg-gray-50 p-4 rounded-lg shadow border">
            <h2 className="text-xl font-semibold text-gray-800 text-center mb-3">Your Tasks</h2>
            
            <div className="flex justify-center gap-2 mb-3">
                <button onClick={() => dispatch(setfilter('all'))} className="px-3 py-1 bg-blue-500 text-white rounded-md">All</button>
                <button onClick={() => dispatch(setfilter('completed'))} className="px-3 py-1 bg-green-500 text-white rounded-md">Completed</button>
                <button onClick={() => dispatch(setfilter('pending'))} className="px-3 py-1 bg-yellow-500 text-white rounded-md">Pending</button>
            </div>
            
            <ul className="space-y-2">
                {filteredTodos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm border"
                    >
                        <span className={`text-gray-800 ${todo.completed ? 'line-through' : ''}`}>
                            {todo.text}
                        </span>
                        <div>
                            <button
                                onClick={() => dispatch(toggleTodo(todo.id))}
                                className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 transition-all mr-2"
                            >
                                ✓
                            </button>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition-all"
                            >
                                ✖
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;