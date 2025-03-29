import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import DarkModeToggle from './components/DarkModeToggle';
import { useSelector } from 'react-redux';

function App() {
  const darkmode = useSelector(state => state.todos.darkmode)
  return (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-all duration-300 ${darkmode ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}>
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-4">Redux Toolkit Todo App</h1>
        <DarkModeToggle />
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
