import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
// import './App.css';

const todos = [
  {text: 'Quedar en Genosha', completed: false},
  {text: 'Hacer ejercicio', completed: false},
  {text: 'Terminar de leer La Inmortalidad', completed: false}
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      
      <TodoList > 
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
       </TodoList >

      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
