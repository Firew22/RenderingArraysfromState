import React, { useState } from 'react';
import '../App.css';

function TodoItem({ todo, dispatch }) {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.title);

  const handleToggleTodo = () => {
    dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
  };

  const handleDeleteTodo = () => {
    dispatch({ type: 'DELETE_TODO', payload: todo.id });
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSaveEdit = () => {
    dispatch({ type: 'EDIT_TODO', payload: { id: todo.id, text: editedText } });
    setEditing(false);
  };

  return (
    <li className={todo.completed ? 'complete' : ''}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleTodo}
      />
      {editing ? (
        <input
          type="text"
          value={editedText}
          onChange={e => setEditedText(e.target.value)}
        />
      ) : (
        <span>{todo.title}</span>
      )}
      {editing ? (
        <button onClick={handleSaveEdit}>Save</button>
      ) : (
        <>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDeleteTodo} disabled={!todo.completed}>
            Delete
          </button>
        </>
      )}
    </li>
  );
}

export default TodoItem;