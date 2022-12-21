import React from 'react';
import './Todo.css';
import { GrCheckmark, GrFormEdit, GrFormTrash } from 'react-icons/gr';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
export const Todo = ({ todo, toggleComplete, handleDelete, handleEdit }) => {
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = '';
      setNewTitle(e.target.value);
    }
  };
  return (
    <div className='todo'>
      <input
        style={{ textDecoration: todo.completed && 'line-through' }}
        type='text'
        value={todo.title === '' ? newTitle : todo.title}
        className='list'
        onChange={handleChange}
      />
      <div>
        <button
          className='button-complete'
          onClick={() => toggleComplete(todo)}
        >
          <GrCheckmark size={20} />
        </button>
        <button
          className='button-edit'
          onClick={() => handleEdit(todo, newTitle)}
        >
          <GrFormEdit size={20} />
        </button>
        <button className='button-delete' onClick={() => handleDelete(todo.id)}>
          <GrFormTrash size={20} />
        </button>
      </div>
    </div>
  );
};
