import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {

    const onClickButton = () => {
        alert('Se abre modal');
    }

    return (
        <button 
            className='CreateTodoButton'
            onClick={() => onClickButton()}
        >
            +
        </button>
    )
}

export { CreateTodoButton };