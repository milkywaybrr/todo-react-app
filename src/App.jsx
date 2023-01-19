import { useState, useEffect } from "react";
import './App.css';
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoItem from "./components/TodoItem/TodoItem";

const initialTodos = [];

const App = () => {

  // Состояние (данные задач)
  const [todos, setTodos] = useState(initialTodos);
  

  // Получение данных из localStorage
  useEffect(() => {
    if (localStorage.getItem('todos') !== null) {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }, [])

  return (
    <div className="main">
      <TodoHeader setTodos={setTodos}/>

      {/* Все задачи */}
      <div className="allTodos">
        {/* Одна задача */}
        {
          todos.map((todo) => <TodoItem setTodos={setTodos} todo={todo}/>)
        }
      </div>
    </div>
  );
}

export default App
