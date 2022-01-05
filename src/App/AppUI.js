import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from '../TodoContext';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import './App.css';

function AppUI(){

  const {error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo} = React.useContext(TodoContext);
    return(
        <React.Fragment>
          <TodoCounter/>
          <TodoSearch/>
          
          {()=>(
            <TodoList > 
              {error && <p>3RR0R</p>}
              {loading && <p>C4RG4ND0</p>}
              {(!loading && !searchedTodos.length) && <p>create ese</p>}

              {searchedTodos.map(todo => (
                <TodoItem 
                  key={todo.text} 
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={()=> deleteTodo(todo.text)}
                  
                  />
              ))}
            </TodoList >
            )}
          <CreateTodoButton/>
    </React.Fragment>
    );
}

export {AppUI};