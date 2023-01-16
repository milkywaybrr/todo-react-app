import { useState, useEffect } from "react";
import styles from './App.module.css';

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();

  return `${day}.${month}.${year}`;
}

const App = () => {

  // Состояние (данные задач)
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Купить продукты",
      date: new Date(),
      checked: false
    },
    {
      id: 2,
      name: "Заправить авто",
      date: new Date(),
      checked: false
    }
  ]);

  // Значение поля
  const [value, setValue] = useState('');

  // Функция обновления значения из поля
  const onChangeHandle = (evt) => {
    setValue(evt.target.value);
  }

  // Добавление задачи
  const onSubmitHandle = (evt) => {
    evt.preventDefault();

    setTodos((prevState) => {
      prevState =[...prevState];

      prevState.push({
        id: Date.now(),
        name: value,
        date: new Date(),
        checked: false
      });

      return prevState;
    });

    setValue('');
  }

  // Функция переключения статуса задач
  const onCheckedToggle = (id) => {
    setTodos((prevState) => {
      prevState = [...prevState];

      prevState = prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            checked: !todo.checked
          }
        }

        return todo;
      });

      return prevState;
    });
  }
  // Функция удаления todo из массива ID
  const onDeleteTodoById = (id) => {
    setTodos((prevState) => {
      prevState = [...prevState];

      // .filter()

      prevState = prevState.filter((todo) => todo.id !== id)

      return prevState;
    });
  }

  return (
    <div className={styles.main}>
      <div>
        <form className={styles.newTodo} onSubmit={(e) => onSubmitHandle(e)}>
          <h2>Добавить задачу:</h2>
          <input 
            type="text" 
            placeholder="Купить молоко..." 
            onChange={(e) => onChangeHandle(e)}
            value={value}
          />

        </form>
      </div>

      {/* Все задачи */}
      <div className={styles.allTodos}>
        {/* Одна задача */}
        {
          todos.map((todo) => {
            return(
              <div className={styles.Todo}>
                <h3>{todo.name} ({formatDate(todo.date)})</h3>
                <div className={styles.buttons}>
                  <button onClick={() => onCheckedToggle(todo.id)}>
                    {todo.checked ? "Не выполнено" : "Выполнено"}
                  </button>
                  <button className={styles.del} onClick={() => onDeleteTodoById(todo.id)}>Удалить</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App
