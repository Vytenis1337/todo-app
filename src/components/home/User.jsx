import React from 'react';
import './User.css';

export const User = ({ email, setUser }) => {
  const handleLogOut = () => {
    setUser(null);
  };
  return (
    <div className='user'>
      <p>Loged in as:</p>
      <div className='email'>{email}</div>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};
