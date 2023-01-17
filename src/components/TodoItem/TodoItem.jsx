import formatDate from "../../utils/formatDate/formatDate";

const TodoItem = ({ setTodos, todo}) => {

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
        <div className="Todo">
            <h3>{todo.name} ({formatDate(todo.date)})</h3>
            <div className="buttons">
                <button onClick={() => onCheckedToggle(todo.id)}>
                {todo.checked ? "Не выполнено" : "Выполнено"}
                </button>
                <button className="del" onClick={() => onDeleteTodoById(todo.id)}>Удалить</button>
            </div>
        </div>
    )
}

export default TodoItem;