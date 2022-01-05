import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import './App.css';

function AppUI({
                loading,
                error,
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodo,
                deleteTodo}){
    return(
        <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      
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

      <CreateTodoButton/>

    </React.Fragment>
    );
}

export {AppUI};