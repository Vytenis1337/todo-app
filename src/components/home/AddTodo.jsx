import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import './AddTodo.css';

export const AddTodo = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== '') {
      await addDoc(collection(db, 'todos'), {
        title,
        completed: false,
        timestamp: serverTimestamp(),
      });
      setTitle('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='input_container'>
        <input
          type='text'
          placeholder='What I am gonna do...'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='btn_container'>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};
