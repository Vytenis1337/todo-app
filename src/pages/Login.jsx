import React from 'react';
import './Login.css';
import { useState } from 'react';
import { LoginTo } from '../components/login/LoginTo';
import { Register } from '../components/login/Register';

export const Login = ({ setUser }) => {
  const [error, setError] = useState(false);

  const [login, setLogin] = useState(true);

  return (
    <div className='main'>
      {login ? (
        <LoginTo
          setUser={setUser}
          error={error}
          setError={setError}
          login={login}
          setLogin={setLogin}
        />
      ) : (
        <Register
          setUser={setUser}
          error={error}
          setError={setError}
          login={login}
          setLogin={setLogin}
        />
      )}
    </div>
  );
};
