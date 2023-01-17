import { useState } from "react";

const TodoHeader = ({ setTodos }) => {
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
    
    return (
        <div>
            <form className="newTodo" onSubmit={(e) => onSubmitHandle(e)}>
            <h2>Добавить задачу:</h2>
            <input 
                type="text" 
                placeholder="Купить молоко..." 
                onChange={(e) => onChangeHandle(e)}
                value={value}
            />
            </form>
      </div>
    )
}

export default TodoHeader;