import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    }
    
    const onCancel = () => {
        setOpenModal(false);
    }

    
    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    return (
        <form onSubmit={onSubmit} >
      <label>Dame un nuevo TODO</label>
      <textarea
        value = {newTodoValue}
        onChange = {onChange}
        placeholder = "Escribe una nueva tarea"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick = {onCancel}
        >
          Cancel
        </button>

        <button
          className="TodoForm-button TodoForm-button-add"
          type= "submit"
        >
          Add
          </button>
      </div>
    </form>
    );
}

export { TodoForm };

