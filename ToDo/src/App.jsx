import React, { useReducer, useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import { todoReducer, initialState } from './components/todoReducer';

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: newTodo });
      setNewTodo('');
    }
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="todo-form">
        <input className='todo-input'
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="Add new todo"
        />
        <button className='todo-input-button' onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  );
}

export default App;