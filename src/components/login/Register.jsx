import './Register.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

export const Register = ({ setUser, error, setError, login, setLogin }) => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const navitage = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user);
        navitage('/');
      })
      .catch((error) => {
        setError(true);
      });
  };
  const goToLogin = (e) => {
    e.preventDefault();
    setLogin(!login);
  };
  return (
    <div>
      <form className='register-form'>
        <p className='register-form-title'>
          <span>Register</span> Form
        </p>
        <p className='register-form-req'>Register or Login to see Todo List!</p>
        <input
          className='main-input'
          type='email'
          placeholder='register email'
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <input
          className='main-input'
          type='password'
          placeholder='register password'
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button
          type='submit'
          onClick={handleRegister}
          className='register-button'
        >
          Register
        </button>
        <button type='button' onClick={goToLogin} className='goToLogin-button'>
          Back to Login
        </button>
        {error && <span className='main-span'>Wrong email or password!</span>}
      </form>
    </div>
  );
};
